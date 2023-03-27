import { PropsWithChildren } from "react";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, gnosis, goerli } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { CONFIG } from "@src/const/meta";
import { InjectedConnector } from "@wagmi/core";

export function WalletProvider({ children }: PropsWithChildren) {
  const { chains, provider } = configureChains(
    [mainnet, gnosis, goerli],
    [
      jsonRpcProvider({
        rpc: () => ({
          http: CONFIG.rpc.url,
        }),
        priority: 0,
      }),
      publicProvider({
        priority: 1,
      }),
    ]
  );

  // const { connectors } = getDefaultWallets({
  //   appName: CONFIG.title,
  //   chains,
  // });

  const wagmiClient = createClient({
    autoConnect: true,
    // connectors,
    connectors: [
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      })
    ],
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} initialChain={mainnet}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
