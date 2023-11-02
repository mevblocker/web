import { BigButton } from "../Button";
import { Confetti } from "../Confetti";
import styled from 'styled-components'
import { Color } from "@src/const/styles/variables";
import { darken, transparentize } from "polished";
import { useConnectAndAddToWallet } from "./hooks/useConnectAndAddToWallet";

export type AddToWalletStateValues = 'unknown' | 'adding' | 'added' | 'error' | 'takingTooLong' | 'connecting'

export interface AddToWalletState {
  state: AddToWalletStateValues,
  errorMessage?: string,
  autoconnect: boolean
}

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

export function AddRpcButton() {  
  const { addWalletState, connectAndAddToWallet } = useConnectAndAddToWallet()  
  const { errorMessage, state } = addWalletState

  const isAdding = state === 'adding'
  const isConnecting = state === 'connecting'
  const isLoading = isAdding || isConnecting

  return (
    <>
      {state === 'added' ? (
        <>
          <Confetti start={true} />
          <Message state={state}>Added to your wallet! You are now safe!</Message>
        </>
      ) : (
        <>
          <BigButton 
            onClick={connectAndAddToWallet} 
            label={isConnecting ? 'Connecting Wallet...' : isAdding ? "Adding to Wallet..." : "Add to Wallet"} 
            disabled={isLoading} 
          />
          {errorMessage && (
            <Message state={state}>{errorMessage}</Message>
          )}
        </>
      )}
    </>
  );
}
