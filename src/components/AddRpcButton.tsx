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

const ERROR_USER_REJECTED = { errorMessage: `MEV Blocker was not added. User rejected.`, isUserRejection: true, isError: false }
const ERROR_ADD_MANUALLY_MESSAGE = { errorMessage: 'There was an error adding the RPC automatically to your wallet. Please add manually', isUserRejection: false, isError: true }
const ERROR_NETWORK_ADDING_UNSUPPORTED = { errorMessage: `Oh no! 😢 It looks like your wallet doesn't support automatic RPC changes to help protect you. You might be able to make the change manually, though. If you could let your wallet provider know about this, that would be awesome! Thanks for considering it!`, isUserRejection: false, isError: true }
const ERROR_NETWORK_ALREADY_ADDED = { errorMessage: `Your wallet has a pending request to add the network. Please review your wallet.`, isUserRejection: false, isError: true }

function getErrorMessage(error: any): { errorMessage: string | null, isUserRejection: boolean, isError: boolean } {

  if (error?.code === 4001) {
    return ERROR_USER_REJECTED
  }

  // -------- Uncomment to debug
  // if (error) {
  //   return { errorMessage: JSON.stringify(error, null, 2), isUserRejection: false, isError: true } 
  // }
  // -----------------

  const message = error?.message
  if (error?.code === -32002 && message?.includes('already pending')) {
    return ERROR_NETWORK_ALREADY_ADDED
  }

  if (error?.code === -32000 && (
    message?.includes('May not specify default') || // i.e. IOS Metamask (over Wallet Connect)
    message?.includes('Chain ID already exists. Received')) // i.e. Im token
  ) {
    return ERROR_NETWORK_ADDING_UNSUPPORTED
  }

  if (error?.code === -32602 && message?.includes('May not specify default')){
    // Metakas IOS don't allow you to replace your RPC Endpoint
    // https://community.metamask.io/t/allow-to-add-switch-between-ethereum-networks-using-api/23595
    return ERROR_NETWORK_ADDING_UNSUPPORTED
  }

  return ERROR_ADD_MANUALLY_MESSAGE
}

export function AddRpcButton() {
  const { addRpcEndpoint } = useAddRpcEndpoint()
  const [{ state, errorMessage }, setState] = useState<AddToWalletState>(DEFAULT_STATE)
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
    const timeoutTimeout = delayMessage(ERROR_ADD_MANUALLY_MESSAGE.errorMessage, 'error', TIMEOUT_TIME, 'timeout_add_rpc')
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
          <Message state={state}>Added to your wallet! You are now safe!</Message>
        </>
      ) : (
        <>
          <BigButton onClick={addToWallet} label={isAdding ? "Adding to Wallet..." : "Add to Wallet"} disabled={isAdding} />
          {errorMessage && (
            <Message state={state}>{errorMessage}</Message>
          )}
        </>
      )}
    </>
  );
}
