const API_BASE_URL = "https://www.mevblocker.com"

export const CONFIG = {
  title: 'MEV Blcoker',
  description: 'CoW Protocol finds the lowest prices from all decentralized exchanges and DEX aggregators & saves you more with p2p trading and protection from MEV ',
  descriptionShort: 'The smartest way to trade',
  url: {
    root: "https://cow.fi",
    swap: "https://swap.cow.fi",
    docs: "https://docs.cow.fi",
    api: API_BASE_URL + "/mainnet",
    apiDocs: API_BASE_URL + "/docs",
    analytics: "https://dune.com/cowprotocol/cowswap",
    explorer: "https://explorer.cow.fi",
    securityPortal: "https://app.chainpatrol.io/cow",
    grants: "https://grants.cow.fi",
  },
  social: {
    twitter: { label: 'Twitter', account: '@CoWSwap', url: 'https://twitter.com/CoWSwap' },
    discord: { label: 'Discord', url: 'https://discord.com/invite/cowprotocol' },
    github: { label: 'GitHub', url: 'https://github.com/cowprotocol/' },
    forum: { label: 'Forum', url: 'https://forum.cow.fi/' },
  }
}