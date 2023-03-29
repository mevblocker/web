import { useCallback, useState } from "react";
import { CONFIG } from "@src/const/meta";
import { useConnect } from "./useConnect";
import { useSigner } from "wagmi";
import { isJsonRpcProvider } from "@src/utils/ethers";


export const NotConnectedError = new Error('No connected to any provider')

export function useAddRpcEndpoint() {
  const { isConnected, connect } = useConnect();

  const signer = useSigner();
  const provider = signer.data?.provider;

  const addRpcEndpoint = useCallback(async () => {
    const connectedProvider = await (async () => {
      if (!isConnected) {
        const connectResult = await connect()
        return connectResult ? connectResult.provider : undefined
      } else {
        return provider
      }
    })()
    
    console.log('[useAddRpcEndpoint] connectedProvider', connectedProvider)
    if (connectedProvider === undefined) {
      throw NotConnectedError
    }
    
    if (!isJsonRpcProvider(connectedProvider)) {
      throw {
        code: 4200,
        message: 'The Provider is not an RPC Provider. It does not support the requested method'
      }
    }

    console.log('[useAddRpcEndpoint] It is a RPC provider. Sending wallet_addEthereumChain')

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
