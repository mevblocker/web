import { CONFIG } from '@src/const/meta'

export const USP_CONTENT: {
  title: string
  image: string
}[] = [
    {
      title: "Full protection from frontrunning and sandwich attacks on all types of transactions",
      image: "usp_1.svg",
    },
    {
      title: "90% share of profits generated from backrunning (compared with 0% today)",
      image: "usp_2.svg",
    },
    {
      title: "A fast, free, censorship-resistant solution open to all searchers and builders",
      image: "usp_3.svg",
    }
  ]

export const FAQ_CONTENT: { question: string; answer: string | React.ReactElement }[] = [
  {
    question: "What is MEV?",
    answer: "MEV or “maximal extractable value” is a method used by savvy traders (known as “searchers”) to exploit your trades at your expense. Any time you make a trade, searchers can “frontrun” it by submitting the exact same trade before you and keeping the profits from your slippage for themselves. After getting frontrun, you can also get “backrun”, which is where the searcher cleans up any price slippage your trade caused, again keeping the profits for themselves. Both a frontrun and a backrun together are known as a “sandwich attack” — the worst type of MEV. MEV gives you a worse price for your trade and can cause you to lose out on hundreds or even thousands of dollars. MEV Blocker is an easy solution – an RPC endpoint that protects all types of transactions from MEV."
  },
  {
    question: "What is an RPC endpoint?",
    answer: <>An RPC (remote procedure call) endpoint is used to connect applications like crypto wallets to the blockchain. MEV Blocker is a special RPC endpoint that ensures your trades are protected from MEV. It does this by sending your transaction to a network of searchers that scan for backrunning opportunities, but cannot frontrun or sandwich your trades. You can add RPC endpoints like MEV Blocker by changing the selected network in your crypto wallet. Some DeFi trading apps will also be able to integrate the MEV Blocker RPC endpoint directly — making it a default for all users. <a href={CONFIG.social.telegram.url} target="_blank" rel="noopener nofollow">Get in touch</a> if you&apos;re interested in doing this!</>
  },
  {
    question: "What kinds of MEV does MEV Blocker protect from?",
    answer: "MEV Blocker protects from the most harmful forms of MEV attacks — frontrunning and sandwich attacks — for all types of dApps and Ethereum transactions. MEV Blocker also lets you benefit from backrunning. It does this by allowing searchers to “bid” in an auction to win the right to backrun your trade. When this happens, users of MEV Blocker receive 90% of the profit their backrunning opportunity created (compared with 0% today). In return for benefitting from backrunning your trade, these searchers are not allowed to frontrun or sandwich you — thus protecting you from the worst types of MEV."
  },
  {
    question: "When and where should I use MEV Blocker?",
    answer: "You should use MEV Blocker as often as possible! While trading protocols like CoW Swap offer MEV protection for your DeFi trades, most other DeFi venues and NFT marketplaces do not provide any type of MEV protection. This is where MEV Blocker comes in: any user or dApp can implement it and it protects all types of transactions from MEV."
  },
  {
    question: "How do I install MEV Blocker?",
    answer: <>To use MEV Blocker, you will need to add the MEV Blocker RPC endpoint to your crypto wallet. You can do that easily by following the instructions <a href="#rpc">here</a>. If your wallet does not support adding RPC endpoints, you may have to contact your wallet developer to get MEV Blocker included as a supported RPC.</>
  },
  {
    question: "How does MEV Blocker work?",
    answer: "MEV Blocker facilitates an auction between a network of “searchers” who are given the opportunity to backrun your transactions. In return, they protect you from frontrunning and sandwich attacks – the nasty types of MEV that exploit Ethereum users every day. To participate in the orderflow auction, searchers agree to share 90% of their profits with the wallets they backrun (compared with 0% profit share when not using MEV Blocker). As long as you have MEV Blocker set as the network in your wallet, you're protected from frontrunning and sandwiching when using any Ethereum dApp. And the profit share from backrunning is deposited automatically into your wallet."
  },
  {
    question: "Who made MEV Blocker?",
    answer: "MEV Blocker is jointly formulated and maintained by CoW Protocol, Agnostic Relay, and Beaver Builder. It is open to all searchers and block builders. This collaboration represents our commitment to providing a trusted, neutral product available to all Ethereum users. We invite additional contributors."
  },
  {
    question: "How can I get in touch?",
    answer: <>If you are a searcher or a dApp developer, or if you&apos;re a user that has questions about MEV Blocker – please reach out via <a href={CONFIG.social.telegram.url} target="_blank" rel="noopener nofollow">Telegram</a>.</>
  }
]

export const RPC_DETAILS: { title: string; value: string | number }[] = [
  {
    title: "Network Name",
    value: CONFIG.rpc.chainName,
  },
  {
    title: "New RPC URL",
    value: CONFIG.rpc.url,
  },
  {
    title: "Chain ID",
    value: CONFIG.rpc.chainId
  },
  {
    title: "Currency Symbol",
    value: CONFIG.rpc.nativeSymbol,
  },
  {
    title: "Block Explorer URL",
    value: CONFIG.rpc.blockExplorerUrl
  },
]

export const TESTIMONIALS: { content: string, author: string; }[] = [
  {
    content: "MEV Blocker fixed my marriage.",
    author: "Anon",
  },
  {
    content: "I was tired of getting rekt, so I started using MEV Blocker.",
    author: "Anon",
  },
  {
    content: "If I’d known about MEV Blocker sooner, I could've had a lambo by now.",
    author: "Anon",
  },
  {
    content: "I don't trust robots",
    author: "Anon",
  },
  {
    content: "Nobody's stolen my lunch money since I started using MEV Blocker.",
    author: "Anon",
  },
  {
    content: "I used MEV Blocker and I instantly went up a tax bracket.",
    author: "Anon",
  },
]


export const BUILT_WITH_LOVE: { title: string, logo: string, link: string }[] = [
  {
    title: "CoW Protocol",
    logo: "cow-protocol.svg",
    link: "https://cow.fi/",
  },
  {
    title: "Beaver Build",
    logo: "beaver-build.svg",
    link: "https://beaverbuild.org/",
  },
  {
    title: "Agnostic Relay",
    logo: "agnostic.svg",
    link: "https://agnostic-relay.net/",
  },
]