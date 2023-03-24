import { BigButton } from "./Button";
// import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAddRpcEndpoint } from "@src/hooks/useAddRpcEndpoint";


export function AddRpcButton() {
  const { addRpcEndpoint, addedRpc } = useAddRpcEndpoint()
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
        <span style={{color: 'green'}}>Added to your wallet! You are now safe</span>
      ) : (
        <BigButton onClick={addRpcEndpoint} label="Add to Wallet" />
      )}
    </>
  );
}
