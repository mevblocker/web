import { useAccount, useConnect as useConnectWagmi } from "wagmi"
import { useCallback, useMemo } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ConnectResult, PublicClient } from '@wagmi/core';


export function useConnect() {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal()
  const { connectAsync, connectors } = useConnectWagmi()

  const [injectedConnector, hasInjectedProviderPromise] = useMemo(() => {
    const connector = connectors.find(c => c.id === 'injected')

    return [connector, connector.getProvider().then(p => !!p)]
  }, [connectors])



  const connect = useCallback(async (): Promise<ConnectResult<PublicClient | undefined>> => {
    const hasInjectedProvider = await hasInjectedProviderPromise
    
    // Shows connect modal if there's no injected wallet
    if (!hasInjectedProvider) {
      console.log('[useConnect] No injected connector. Using connect modal')
      openConnectModal()
      return undefined      
    }


    // Connects with injected wallet (if available)
    console.log('[useConnect] Connect using injected wallet')
    return connectAsync({
      connector: injectedConnector
    })
    
  }, [connectAsync, injectedConnector, hasInjectedProviderPromise, openConnectModal]);

  return {
    isConnected,
    connect
  }
}
