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

const ERROR_USER_REJECTED = { errorMessage: `MEV Blocker was not added. User rejected.`, isUserRejection: true, isError: false }
const ERROR_ADD_MANUALLY_MESSAGE = { errorMessage: 'There was an error adding the RPC automatically to your wallet. Please add manually', isUserRejection: false, isError: true }
const ERROR_NETWORK_ADDING_UNSUPPORTED = { errorMessage: `Oh no! 😢 It looks like your wallet doesn't support automatic RPC changes to help protect you. You might be able to make the change manually, though. If you could let your wallet provider know about this, that would be awesome! Thanks for considering it!`, isUserRejection: false, isError: true }
const ERROR_NETWORK_ALREADY_ADDED = { errorMessage: `Your wallet has a pending request to add the network. Please review your wallet.`, isUserRejection: false, isError: true }

function getErrorMessage(error: any): { errorMessage: string | null, isUserRejection: boolean, isError: boolean } {
  let actualError = error

  // viem wraps the actual error, we need to get the actual error (not their wrapper)
  if (error.details && typeof error.details === 'string') {
    try {
      actualError = JSON.parse(error.details)  
    } catch (error) {
      console.error('Error parsing error.details', error) 
    }
  }
  
  const errorCode = actualError?.code
  if (errorCode === 4001) {
    return ERROR_USER_REJECTED
  }

  // -------- Uncomment to debug
  // if (error) {
  //   return { errorMessage: JSON.stringify(error, null, 2), isUserRejection: false, isError: true } 
  // }
  // -----------------

  const message = error?.details.message || error?.message
  if (errorCode === -32002 && message?.includes('already pending')) {
    return ERROR_NETWORK_ALREADY_ADDED
  }

  if (errorCode === -32000 && (
    message?.includes('May not specify default') || // i.e. IOS Metamask (over Wallet Connect)
    message?.includes('Chain ID already exists. Received')) // i.e. Im token
  ) {
    return ERROR_NETWORK_ADDING_UNSUPPORTED
  }

  if (errorCode === -32602 && message?.includes('May not specify default')){
    // Metakas IOS don't allow you to replace your RPC Endpoint
    // https://community.metamask.io/t/allow-to-add-switch-between-ethereum-networks-using-api/23595
    return ERROR_NETWORK_ADDING_UNSUPPORTED
  }

  return ERROR_ADD_MANUALLY_MESSAGE
}

export function AddRpcButton() {
  const { addRpcEndpoint } = useAddRpcEndpoint()
  const { isConnected, connect } = useConnect();
  const { data: walletClient } = useWalletClient()
  const [{ state, errorMessage, addOnceConnected }, setState] = useState<AddToWalletState>(DEFAULT_STATE)
  const isAdding = state === 'adding'
  const isConnecting = state === 'connecting'
  const isLoading = isAdding || isConnecting
  const [addRpcPromise, setAddRpcPromise] = useState<Promise<boolean> | null>(null)

  const handleError = useCallback((error) => {
    console.error('[AddRpcButton] Error adding RPC to Wallet', error)

    const { errorMessage: message, isError, isUserRejection } = getErrorMessage(error)
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
