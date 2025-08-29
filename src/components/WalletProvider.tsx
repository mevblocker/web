import { PropsWithChildren } from "react";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, gnosis, goerli } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
// import { createPublicClient, http } from 'viem'
import { CONFIG } from "@src/const/meta";

export function WalletProvider({ children }: PropsWithChildren) {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, gnosis, goerli],
    [
      jsonRpcProvider({
        rpc: () => ({
          http: CONFIG.rpc.url,
        }),
      }),
      publicProvider(),
    ]
  )
  
  const { connectors } = getDefaultWallets({
    appName: CONFIG.title,
    projectId: CONFIG.walletConnectProjectId,
    chains,
  });
  

  const wagmiConfig = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} initialChain={mainnet}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
