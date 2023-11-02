import { useCallback, useEffect, useState } from "react";
import { CONFIG } from "@src/const/meta";
import { useConnect } from "./useConnect";
import { useWalletClient } from "wagmi";
import { WalletClient } from "viem";


export const NotConnectedError = new Error('No connected to any provider')

export interface UseAddRpcEndpointResult { 
  isConnected: boolean 
  addRpcEndpoint: () => Promise<boolean>, 
}

export function useAddRpcEndpoint(walletClient: WalletClient | undefined): UseAddRpcEndpointResult {
  const { isConnected } = useConnect();

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
