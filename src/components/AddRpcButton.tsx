import { BigButton } from "./Button";
// import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { NotConnectedError, useAddRpcEndpoint } from "@src/hooks/useAddRpcEndpoint";
import { Confetti } from "./Confetti";
import { useCallback, useEffect, useState } from "react";
import styled from 'styled-components'
import { Color } from "@src/const/styles/variables";
import { darken, transparentize } from "polished";
import { useConnect } from "@src/hooks/useConnect";


const Message = styled.p<{state: string }>`
  color: ${({state}) => state === 'added' ? darken(0.3, Color.green) : Color.orange};
  font-weight: bold;
  width: 100%;
  margin: 2.4rem 0 0;
  background: ${({state}) => state === 'added' ? transparentize(0.8, Color.green) : transparentize(0.9, Color.orange)};
  padding: 1rem;
  border-radius: 1.2rem;
  text-align: center;
`

interface AddToWalletState {
  state: 'unknown' | 'adding' | 'added' | 'error' | 'takingTooLong',
  errorMessage?: string
}

const DEFAULT_STATE: AddToWalletState = { state: 'unknown' }
const ADDING_STATE: AddToWalletState = { state: 'adding' }
const ADDED_STATE: AddToWalletState = { state: 'added' }
const TAKING_TOO_LONG_TIME = 2000

function getErrorMessage(error: any) {
  if (error === NotConnectedError) {
    return 'Please connect your wallet'
  }

  if (error?.code === 4001) {
    return `The new network couldn't be added. Rejected by user`
  }

  if (error?.code === -32002 && error?.message?.includes('already pending')) {
    return `Your wallet has a pending request to add the network. Please review your wallet.`
  }
  
  return 'There was an error adding the RPC automatically to your wallet. Please add manually'
}

export function AddRpcButton() {
  const { isConnected } = useConnect();
  const { addRpcEndpoint } = useAddRpcEndpoint()
  const [{ state, errorMessage }, setState ] = useState<AddToWalletState>(DEFAULT_STATE)
  const isAdding = state === 'adding'

  const addToWallet = useCallback(() => {
    if (isAdding) {
      return undefined
    }

    console.log('[addToWallet] Add to wallet')
    setState(ADDING_STATE)

    // Show a message if it takes long to connect/add-network
    const timeoutId = setTimeout(() => {
      const errorMessage = (isConnected ? 'Connecting to your wallet' : 'Adding the new network to your wallet') + ' is taking too long. Please verify your wallet'
      setState({ state: 'adding', errorMessage })
    }, TAKING_TOO_LONG_TIME)

    addRpcEndpoint()
      .then(() => setState(ADDED_STATE))
      .catch(error => {
        console.error('[AddRpcButton] Error adding RPC to Wallet', error)

        const message = getErrorMessage(error)
        setState({ state: 'error', errorMessage: message })
      })
      .finally(() => clearTimeout(timeoutId))

      return () => clearTimeout(timeoutId)
  }, [addRpcEndpoint, isConnected, isAdding])

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
          <BigButton onClick={addToWallet} label={isAdding? "Addding to Wallet..." : "Add to Wallet"} disabled={isAdding} />
          {errorMessage && (
            <Message state={state}>{errorMessage}</Message>
          )}
        </>
      )}
    </>
  );
}
