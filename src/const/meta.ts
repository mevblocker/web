const API_BASE_URL = "https://www.mevblocker.io";

export const CONFIG = {
  title: 'MEVBlocker.io',
  titleShort: 'MEVBlocker.io',
  description: 'MEV Blocker is an RPC that shields all your transactions from MEV, and returns those protected funds directly to you -the user.',
  descriptionShort: 'MEV Blocker is an RPC that shields all your transactions from MEV.',
  rpc: {
    name: "MEV Blocker",
    url: "https://rpc.mevblocker.io",
    chainId: 1,
    chainName: "Mainnet - MEV Blocker",
    nativeSymbol: "ETH",
    nativeDecimals: 18,
    blockExplorerUrl: "https://etherscan.io",
  },
  url: {
    root: "https://mevblocker.io",
    home: "/",
    faq: "/faq"
  },
  social: {
    telegram: { label: "Telegram", url: "https://t.me/+yonLSGoFPRI0YTFk" },
  },
};
