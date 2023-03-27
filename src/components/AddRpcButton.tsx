import { BigButton } from "./Button";
// import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAddRpcEndpoint } from "@src/hooks/useAddRpcEndpoint";
import { Confetti } from "./Confetti";
import { useCallback } from "react";




export function AddRpcButton() {
  const { addRpcEndpoint, addedRpc } = useAddRpcEndpoint()

  const addToWallet = useCallback(() => {
    addRpcEndpoint()
      .then(() => console.log('Success!'))
      .catch(error => console.error('[AddRpcButton] Error adding RPC to Wallet', error)) // TODO: Handle by open Raimbow Wallet :) 
  }, [addRpcEndpoint])

  // const { openConnectModal } = useConnectModal()

  // TODO: Disabled, for now to just go for injected wallet. Will probably improve and use it to support Wallet Connect and other wallets
  // if (!isConnected) {
  //   <ConnectButton
  //     label="Connect Wallet"
  //     accountStatus={"avatar"}
  //     chainStatus={"none"}
  //     showBalance={false}
  //   />
  // }

  return (
    <>
      {addedRpc ? (
        <>
        <Confetti start={true} />
        <span style={{color: 'green'}}>Added to your wallet! You are now safe</span>
        {/* <a onClick={() => disconnect()}>Disconnect</a> */}
        </>
      ) : (
        <BigButton onClick={addToWallet} label="Add to Wallet" />
      )}
    </>
  );
}
