import { BigButton } from "./Button";
// import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { NotConnectedError, useAddRpcEndpoint } from "@src/hooks/useAddRpcEndpoint";
import { Confetti } from "./Confetti";
import { useCallback, useEffect, useState } from "react";
import styled from 'styled-components'
import { Color } from "@src/const/styles/variables";
import { darken, transparentize } from "polished";
import { useConnect } from "@src/hooks/useConnect";


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

const ERROR_ADD_MANUALLY_MESSAGE = 'There was an error adding the RPC automatically to your wallet. Please add manually'

function getErrorMessage(error: any): string | null {
  if (error === NotConnectedError) {
    return null
  }

  if (error?.code === 4001) {
    return `MEV Blocker was not added. User rejected.`
  }

  const message = error?.message
  if (error?.code === -32002 && message?.includes('already pending')) {
    return `Your wallet has a pending request to add the network. Please review your wallet.`
  }

  if (error?.code === -32000 && (
    message?.includes('May not specify default') || // i.e. IOS Metamask
    message?.includes('Chain ID already exists. Received')) // i.e. Im token
  ) {
    // Metakas IOS don't allow you to replace your RPC Endpoint
    // https://community.metamask.io/t/allow-to-add-switch-between-ethereum-networks-using-api/23595
    return `Your wallet does't allow you to automatically change your RPC so you can be protected 😢. You might be able to do it manually. Please, consider letting them know about this!`
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
    setState(ADDING_STATE)

    // Show a message if it takes long to connect/add-network
    const delayMessage = (errorMessage: string, newState: AddToWalletStateValues, delay: number) => setTimeout(() => {
      setState({
        state: newState,
        errorMessage
      })
    }, delay)

    // Gives some feedback if it takes long, plus add some timeout
    const timeoutSlow = delayMessage('Adding the new network to your wallet is taking too long. Please verify your wallet', 'adding', TAKING_TOO_LONG_TIME)
    const timeoutTimeout = delayMessage(ERROR_ADD_MANUALLY_MESSAGE, 'error', TIMEOUT_TIME)
    const clearTimeouts = () => [timeoutSlow, timeoutTimeout].forEach(clearTimeout)

    addRpcEndpoint()
      .then(() => setState(ADDED_STATE))
      .catch(error => {
        console.error('[AddRpcButton] Error adding RPC to Wallet', error)

        const message = getErrorMessage(error)
        if (message === null) {
          // The user is connecting
          setState(DEFAULT_STATE)
        } else {
          // Display the error
          setState({ state: 'error', errorMessage: message })
        }
      })
      .finally(clearTimeouts)

    return clearTimeouts
  }, [addRpcEndpoint, isAdding])

  // useEffect(() => {
  //   if (isConnected && state === 'unknown') {
  //     addToWallet()
  //   }
  // }, [isConnected, addToWallet, state])

  return (
    <>
      {state === 'added' ? (
        <>
          <Confetti start={true} />
          <Message state={state}>Added to your wallet! You are now safe</Message>
        </>
      ) : (
        <>
          <BigButton onClick={addToWallet} label={isAdding ? "Addding to Wallet..." : "Add to Wallet"} disabled={isAdding} />
          {errorMessage && (
            <Message state={state}>{errorMessage}</Message>
          )}
        </>
      )}
    </>
  );
}
