import { useCallback, useState } from "react";
import { CONFIG } from "@src/const/meta";
import { useConnect } from "./useConnect";
import { useSigner } from "wagmi";
import { isJsonRpcProvider } from "@src/utils/ethers";

export function useAddRpcEndpoint() {
  const [addedRpc, setAddedRpc] = useState(false);
  const { isConnected, connect } = useConnect();

  const signer = useSigner();
  const provider = signer.data?.provider;

  const addRpcEndpoint = useCallback(async () => {    
    const connectedProvider = isConnected ? provider : (await connect()).provider

    if (!isJsonRpcProvider(connectedProvider)) {
      console.warn('[addRpcEndpoint] Not JSON Provider. Impossible to send wallet_addEthereumChain')
      return undefined;
    }

    const {
      chainName,
      nativeSymbol,
      nativeDecimals,
      url: rpcUrl,
      chainId,
      blockExplorerUrl: blockExplorerUrls,
    } = CONFIG.rpc;
    connectedProvider
      .send("wallet_addEthereumChain", [
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
      ])
      .then(() => setAddedRpc(true))
      .catch((e) => {
        console.log(e);
        // TODO: Handle Error in follow up PR
        if (e?.code === 4001) {
          console.error("Rejected by user");
        } else {
          console.error("Handle Error");
        }
      });
  }, [isConnected, connect, provider]);

  return {
    addRpcEndpoint,
    isConnected,
    addedRpc,
  };
}
