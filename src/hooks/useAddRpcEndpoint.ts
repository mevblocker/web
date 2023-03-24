import { useCallback, useState } from "react";
import { CONFIG } from "@src/const/meta";
import { useConnect } from "./useConnect";
// import { useConnectModal } from "@rainbow-me/rainbowkit";

export function useAddRpcEndpoint() {
  const [addedRpc, setAddedRpc] = useState(false);
  const { isConnected, connect } = useConnect()

  // TODO: Can we use the provider instead of windown.ethereum?
  // const signer = useSigner();
  // const provider = signer.data?.provider;

  // console.log("provider", provider);
  // console.log("signer", signer);

  // if (typeof window !== "undefined") {
  //   window["provider"] = provider;
  //   window["signer"] = signer;
  // }

  const addRpcEndpoint = useCallback(async () => {
    if (!isConnected) {
      await connect()
    }

    const {
      chainName,
      nativeSymbol,
      nativeDecimals,
      url: rpcUrl,
      chainId,
      blockExplorerUrl: blockExplorerUrls,
    } = CONFIG.rpc;
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            rpcUrls: [rpcUrl],
            chainName,
            nativeCurrency: {
              name: "",
              symbol: nativeSymbol,
              decimals: nativeDecimals,
            },
            blockExplorerUrls: [blockExplorerUrls],
          },
        ],
      })
      .then(() => setAddedRpc(true))
      .catch((e) => {
        console.log(e)
        // TODO: Handle Error in follow up PR
        if (e?.code === 4001) {
          console.error("Rejected by user");
        } else {
          console.error("Handle Error");
        }
      });
  }, [isConnected, connect]);

  return {
    addRpcEndpoint,
    isConnected,
    addedRpc,
  };
}
