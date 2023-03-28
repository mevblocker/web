import { useAccount, useConnect as useConnectWagmi } from "wagmi";
import { useCallback } from "react";

export function useConnect() {
  const { isConnected } = useAccount();
  const { connectAsync, connectors } = useConnectWagmi()

  const connect = useCallback(async () => {
    return connectAsync({
      connector: connectors[0]
    })
  }, [connectAsync, connectors]);

  return {
    isConnected,
    connect
  }
}
