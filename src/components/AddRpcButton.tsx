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


const Message = styled.p<{state: AddToWalletStateValues }>`
  color: ${({state}) => state === 'added' ? darken(0.3, Color.green) : Color.orange};
  font-weight: bold;
  width: 100%;
  margin: 2.4rem 0 0;
  background: ${({state}) => state === 'added' ? transparentize(0.8, Color.green) : transparentize(0.9, Color.orange)};
  padding: 1rem;
  border-radius: 1.2rem;
  text-align: center;
`

type AddToWalletStateValues = 'unknown' | 'adding' | 'added' | 'error' | 'takingTooLong'
interface AddToWalletState {
  state: AddToWalletStateValues,
  errorMessage?: string
}

const DEFAULT_STATE: AddToWalletState = { state: 'unknown' }
const ADDING_STATE: AddToWalletState = { state: 'adding' }
const ADDED_STATE: AddToWalletState = { state: 'added' }

const TAKING_TOO_LONG_TIME = 15000 // 10s
const TIMEOUT_TIME = 90000 // 1.5min

const ERROR_ADD_MANUALLY_MESSAGE = 'There was an error adding the RPC automatically to your wallet. Please add manually'

function getErrorMessage(error: any): { errorMessage: string | null, isUserRejection: boolean, isError: boolean } {
  if (error === NotConnectedError) {
    return { errorMessage: null, isUserRejection: false, isError: false }
  }

  if (error?.code === 4001) {
    return { errorMessage: `The new network couldn't be added. Rejected by user`, isUserRejection: true, isError: false }
  }

  if (error?.code === -32002 && error?.message?.includes('already pending')) {
    return { errorMessage: `Your wallet has a pending request to add the network. Please review your wallet.`, isUserRejection: false, isError: true }
  }
  
  return { errorMessage: ERROR_ADD_MANUALLY_MESSAGE, isUserRejection: false, isError: true }
}

export function AddRpcButton() {
  const { addRpcEndpoint } = useAddRpcEndpoint()
  const [{ state, errorMessage }, setState ] = useState<AddToWalletState>(DEFAULT_STATE)
  const isAdding = state === 'adding'

  const addToWallet = useCallback(() => {
    if (isAdding) {
      return undefined
    }

    console.log('[addToWallet] Add to wallet')
    sendToAnalytics('click_to_add_rpc')
    setState(ADDING_STATE)

    // Show a message if it takes long to connect/add-network
    const delayMessage = (errorMessage: string, newState: AddToWalletStateValues, delay: number, event: AddRpcUrlActionType) => setTimeout(() => {
      sendToAnalytics(event)
      setState({ 
        state: newState,
        errorMessage
      })
    }, delay)

    // Gives some feedback if it takes long, plus add some timeout
    const timeoutSlow = delayMessage('Adding the new network to your wallet is taking too long. Please verify your wallet', 'adding', TAKING_TOO_LONG_TIME, 'adding_is_taking_too_long')
    const timeoutTimeout = delayMessage(ERROR_ADD_MANUALLY_MESSAGE, 'error', TIMEOUT_TIME, 'timeout_add_rpc')
    const clearTimeouts = () => [timeoutSlow, timeoutTimeout].forEach(clearTimeout)

    addRpcEndpoint()
      .then(() => {
        sendToAnalytics('added_rpc_successfully')
        setState(ADDED_STATE)
      })
      .catch(error => {
        console.error('[AddRpcButton] Error adding RPC to Wallet', error)

        const { errorMessage: message, isError, isUserRejection } = getErrorMessage(error)
        isError && sendToAnalytics('error_add_rpc')
        isUserRejection && sendToAnalytics('rejected_by_user_adding_rpc')

        if (isError || isUserRejection) {
          // Display the error
          setState({ state: 'error', errorMessage: message })          
        } else {
          // Not an error: i.e The user is connecting
          setState(DEFAULT_STATE)
        }
      })
      .finally(clearTimeouts)

      return clearTimeouts
  }, [addRpcEndpoint, isAdding])


  return (
    <>
      {state === 'added' ? (
        <>
        <Confetti start={true} />
        <Message state={state}>Added to your wallet! You are now safe</Message>
        </>
      ) : (
        <>
          <BigButton onClick={addToWallet} label={isAdding? "Addding to Wallet..." : "Add to Wallet"} disabled={isAdding} />
          {errorMessage && (
            <Message state={state}>{errorMessage}</Message>
          )}
        </>
      )}
    </>
  );
}
