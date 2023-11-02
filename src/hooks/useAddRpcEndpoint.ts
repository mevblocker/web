import { useCallback, useEffect, useState } from "react";
import { CONFIG } from "@src/const/meta";
import { useConnect } from "./useConnect";
import { useWalletClient } from "wagmi";


export const NotConnectedError = new Error('No connected to any provider')

export interface UseAddRpcEndpointResult { 
  isConnected: boolean 
  addRpcEndpoint: () => Promise<boolean>, 
}

export function useAddRpcEndpoint(): UseAddRpcEndpointResult {
  const { isConnected } = useConnect();

  const { data: walletClient } = useWalletClient()

  const addRpcEndpoint = useCallback(async () => {
    if (!walletClient || !isConnected) {
      return false
    }
    
    const {
      chainName,
      nativeSymbol,
      nativeDecimals,
      url: rpcUrl,
      chainId,
      blockExplorerUrl: blockExplorerUrls,
    } = CONFIG.rpc;
    
    return walletClient.request({
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
      }
    ]
    }).then(() => true)
  }, [isConnected, walletClient]);
  
  return {
    addRpcEndpoint,
    isConnected,
  };
}
