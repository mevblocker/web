import { BigButton } from "./Button";
// import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAddRpcEndpoint } from "@src/hooks/useAddRpcEndpoint";
import { Confetti } from "./Confetti";
import { useCallback, useState } from "react";
import styled from 'styled-components'
import { Color } from "@src/const/styles/variables";
import { transparentize } from "polished";


enum AddRpcState {
  UNKNOWN,
  ADDED,
  ERROR_ADDING,
  REJECTED_BY_USER
}

const ErrorMessage = styled.p`
  color: ${Color.orange};
  font-weight: bold;
  width: 100%;
  margin: 2.4rem 0 0;
  background: ${transparentize(0.9, Color.orange)};
  padding: 1rem;
  border-radius: 1.2rem;
  text-align: center;
`

export function AddRpcButton() {
  const { addRpcEndpoint } = useAddRpcEndpoint()
  const [state, setState ] = useState<AddRpcState>(AddRpcState.UNKNOWN)
  
  // const { openConnectModal } = useConnectModal()

  const addToWallet = useCallback(() => {
    setState(AddRpcState.UNKNOWN)
    addRpcEndpoint()
      .then(() => setState(AddRpcState.ADDED))
      .catch(error => {
        console.error('[AddRpcButton] Error adding RPC to Wallet', error)

        if (error?.code === 4001) {
          setState(AddRpcState.REJECTED_BY_USER)
        } else {
          setState(AddRpcState.ERROR_ADDING)
        }
      }) // TODO: Handle by open Raimbow Wallet :) 
  }, [addRpcEndpoint])

  // TODO: Disabled, for now to just go for injected wallet. Will probably improve and use it to support Wallet Connect and other wallets
  // if (!isConnected) {
  //   <ConnectButton
  //     label="Connect Wallet"
  //     accountStatus={"avatar"}
  //     chainStatus={"none"}
  //     showBalance={false}
  //   />
  // }


  // const addedRpc = state === AddRpcState.ADDED

  return (
    <>
      {state === AddRpcState.ADDED ? (
        <>
        <Confetti start={true} />
        <span style={{color: 'green'}}>Added to your wallet! You are now safe</span>
        </>
      ) : (
        <>
          <BigButton onClick={addToWallet} label="Add to Wallet" />
          {state === AddRpcState.REJECTED_BY_USER && (
            <ErrorMessage>The new network couldn&apos;t be added. Rejected by user</ErrorMessage>
          )}
          {state === AddRpcState.ERROR_ADDING && (
            <ErrorMessage>There was an error adding the RPC automatically to your wallet. Please add manually</ErrorMessage>
          )}
        </>
      )}
    </>
  );
}
