import { useAccount, useConnect as useConnectWagmi } from "wagmi";
import { useCallback, useMemo } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export function useConnect() {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal()
  const { connectAsync, connectors } = useConnectWagmi()

  const [injectedConnector, hasInjectedProviderPromise] = useMemo(() => {
    const connector = connectors.find(c => c.id === 'injected')

    return [connector, connector.getProvider().then(p => !!p)]
  }, [connectors])



  const connect = useCallback(async () => {
    const hasInjectedProvider = await hasInjectedProviderPromise
    
    // Tries to connect first with the injected wallet
    if (hasInjectedProvider) {
      return connectAsync({
        connector: injectedConnector
      })
    }

    return openConnectModal()   
  }, [connectAsync, injectedConnector, hasInjectedProviderPromise, openConnectModal]);

  return {
    isConnected,
    connect
  }
}
