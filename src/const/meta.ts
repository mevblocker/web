const API_BASE_URL = "https://www.mevblocker.io";

export const CONFIG = {
  title: 'MEVBlocker.io',
  titleShort: 'MEVBlocker.io',
  description: 'MEV Blocker is an RPC that shields all your transactions from MEV, and returns those protected funds directly to you -the user.',
  descriptionShort: 'MEV Blocker is an RPC that shields all your transactions from MEV.',
  rpc: {
    name: "MEV Blocker",
    url: "https://http.wonderfulrpc.com", // "https://rpc.mevblocker.io", // TODO: For now, we need to use the old URL
    chainId: 1,
    chainName: "Mainnet - MEV Blocker",
    nativeSymbol: "ETH",
    nativeDecimals: 18,
    blockExplorerUrl: "https://etherscan.io",
  },
  url: {
    root: "https://mevblocker.io",
    home: "/",
    faq: "/faq",
  },
  social: {
    twitter: {
      label: "Twitter",
      account: "mevblocker",
      url: "https://twitter.com/",
    },
    discord: { label: "Discord", url: "https://discord.gg/4wCETCfpQu" },
    forum: { label: "Forum", url: "https://mevblocker.discourse.group/" },
    github: { label: "GitHub", url: "https://github.com/mevblocker" },
  },
};
