import { BigButton } from "./Button";
// import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { NotConnectedError, useAddRpcEndpoint } from "@src/hooks/useAddRpcEndpoint";
import { Confetti } from "./Confetti";
import { useCallback, useEffect, useState } from "react";
import styled from 'styled-components'
import { Color } from "@src/const/styles/variables";
import { darken, transparentize } from "polished";
import { useConnect } from "@src/hooks/useConnect";
import { addRpcUrlAction as sendToAnalytics, AddRpcUrlActionType } from "@src/lib/analytics/events";
import { useWalletClient } from "wagmi";
import { ERROR_ADD_MANUALLY_MESSAGE, handleRpcError } from "@src/utils/handleRpcError";


const Message = styled.p<{ state: AddToWalletStateValues }>`
  color: ${({ state }) => state === 'added' ? darken(0.5, Color.green) : Color.orange};
  font-weight: bold;
  width: 100%;
  margin: 2.4rem 0 0;
  background: ${({ state }) => state === 'added' ? transparentize(0.8, Color.green) : transparentize(0.9, Color.orange)};
  padding: 1rem;
  border-radius: 1.2rem;
  text-align: center;
`

type AddToWalletStateValues = 'unknown' | 'adding' | 'added' | 'error' | 'takingTooLong' | 'connecting'
interface AddToWalletState {
  state: AddToWalletStateValues,
  errorMessage?: string,
  addOnceConnected: boolean
}

const DEFAULT_STATE: AddToWalletState = { state: 'unknown', addOnceConnected: false }
const ADDING_STATE: AddToWalletState = { state: 'adding', addOnceConnected: false }
const ADDED_STATE: AddToWalletState = { state: 'added', addOnceConnected: false }
const CONNECTING_STATE: AddToWalletState = { state: 'connecting', addOnceConnected: true }

const TAKING_TOO_LONG_TIME = 15000 // 15s
const TIMEOUT_TIME = 90000 // 1.5min

export function AddRpcButton() {
  const { addRpcEndpoint } = useAddRpcEndpoint()
  const { isConnected, connect } = useConnect()
  const { data: walletClient } = useWalletClient()
  const [{ state, errorMessage, addOnceConnected }, setState] = useState<AddToWalletState>(DEFAULT_STATE)
  const isAdding = state === 'adding'
  const isConnecting = state === 'connecting'
  const isLoading = isAdding || isConnecting
  const [addRpcPromise, setAddRpcPromise] = useState<Promise<boolean> | null>(null)

  const handleError = useCallback((error) => {
    const { errorMessage: message, isError, isUserRejection } = handleRpcError(error)
    isError && sendToAnalytics('error_add_rpc')
    isUserRejection && sendToAnalytics('rejected_by_user_adding_rpc')

    if (isError || isUserRejection) {
      // Display the error
      setState({ state: 'error', errorMessage: message, addOnceConnected: false })          
    } else {
      // Not an error: i.e The user is connecting
      setState(DEFAULT_STATE)
    }
    setAddRpcPromise(null)
  }, [setState])
  

  const addToWallet = useCallback(() => {
    if (isAdding || !walletClient) {
      // No action if we are already adding or we are not yet to connected
      return undefined
    }

    console.log('[AddRpcButton] Add to wallet')
    sendToAnalytics('click_to_add_rpc')
    setState(ADDING_STATE)

    // Show a message if it takes long to connect/add-network
    const delayMessage = (errorMessage: string, newState: AddToWalletStateValues, delay: number, event: AddRpcUrlActionType) => setTimeout(() => {
      sendToAnalytics(event)
      setState({ 
        state: newState,
        errorMessage,
        addOnceConnected
      })
    }, delay)

    // Gives some feedback if it takes long, plus add some timeout (some wallets don't have great support to add RPC endpoints)
    const timeoutSlow = delayMessage('Adding the new network to your wallet is taking too long. Please verify your wallet', 'adding', TAKING_TOO_LONG_TIME, 'adding_is_taking_too_long')
    const timeoutTimeout = delayMessage(ERROR_ADD_MANUALLY_MESSAGE.errorMessage, 'error', TIMEOUT_TIME, 'timeout_add_rpc')
    const clearTimeouts = () => [timeoutSlow, timeoutTimeout].forEach(clearTimeout)

    const newAddRpcPromise = addRpcPromise ? addRpcPromise : addRpcEndpoint()
    setAddRpcPromise(newAddRpcPromise)
    newAddRpcPromise.then((success) => {
        if (success) {
          sendToAnalytics('added_rpc_successfully')
          setState(ADDED_STATE)
          setAddRpcPromise(null)
        }
      })
      .catch(handleError)
      .finally(clearTimeouts)
      
    return clearTimeouts
  }, [addRpcEndpoint, isAdding, handleError, addOnceConnected, addRpcPromise, walletClient])


  const connectAndAddToWallet = useCallback(() => {
    if (!isConnected) {
      setState(CONNECTING_STATE)
      connect().catch(handleError) 
    } else {
      addToWallet()
    }
  }, [isConnected, handleError, connect, addToWallet])

  useEffect(() => {
    if (walletClient && addOnceConnected) {
      addToWallet()
    }
  }, [addOnceConnected, addToWallet, walletClient])


  return (
    <>
      {state === 'added' ? (
        <>
          <Confetti start={true} />
          <Message state={state}>Added to your wallet! You are now safe!</Message>
        </>
      ) : (
        <>
          <BigButton onClick={connectAndAddToWallet} label={isConnecting ? 'Connecting Wallet...' : isAdding ? "Adding to Wallet..." : "Add to Wallet"} disabled={isLoading} />
          {errorMessage && (
            <Message state={state}>{errorMessage}</Message>
          )}
        </>
      )}
    </>
  );
}
