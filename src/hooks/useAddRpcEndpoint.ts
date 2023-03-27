import { useCallback, useState } from "react";
import { CONFIG } from "@src/const/meta";
import { useConnect } from "./useConnect";
import { useSigner } from "wagmi";
import { isJsonRpcProvider } from "@src/utils/ethers";

export function useAddRpcEndpoint() {
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
    
    return connectedProvider
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
  }, [isConnected, connect, provider]);

  return {
    addRpcEndpoint,
    isConnected,
  };
}
