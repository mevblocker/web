import { CONFIG } from '@src/const/meta'

export const USP_CONTENT: {
  title: string
  image: string
}[] = [
    {
      title: "Keeps millions of dollars safe from harmful MEV rays, so you can trade worry-free",
      image: "usp_1.svg",
    },
    {
      title: "Jointly developed by a network of protocols to guarantee neutrality ",
      image: "usp_2.svg",
    },
    {
      title: "Formulated to cover every type of transaction including DeFi, NFTs, dApps and more",
      image: "usp_3.svg",
    },
  ]

export const FAQ_CONTENT: { question: string; answer: string }[] = [
  {
    question: "What is MEV",
    answer: "MEV or “maximal extractable value” is a method used by savvy traders (known as “searchers”) to exploit your trades at your expense. Any time you make a trade, searchers can “frontrun” it by submitting the exact same trade before you and keeping the profits for themselves. After getting frontrun, you can also get “backrun”, which is where the searcher cleans up any price slippage your trade caused, again keeping the profits for themselves. Both a frontrun and a backrun together are known as a “sandwich attack” — the worst type of MEV. MEV gives you a worse price for your trade and it can cause you to lose out on hundreds or even thousands of dollars. MEV Blocker is an easy solution that protects all types of transactions from MEV."
  },
  {
    question: "What is an RPC Endpoint?",
    answer: "An RPC (remote procedure call) Endpoint is used to connect applications like crypto wallets to the blockchain. MEV Blocker is a special RPC Endpoint that ensures your trades are protected from MEV before executing them on the blockchain itself. You can add RPC Endpoints such as MEV Blocker by changing your selected network in your crypto wallet. Some DeFi trading apps will also be able to integrate the MEV Blocker RPC Endpoint directly — making it a default for all users."
  },
  {
    question: "What kinds of MEV does MEV Blocker protect from?",
    answer: "MEV Blocker protects from the most harmful forms of MEV attacks — frontrunning and sandwich attacks. MEV Blocker also uses a special mechanism that allows you to benefit from the third type of MEV attack: backrunning. It does this by allowing searchers to “bid” in an auction to win the right to backrun your trade. In return for benefitting from backrunning your trade, these searchers are not allowed to frontrun or sandwich attack you — thus protecting you from the worst types of MEV."
  },
  {
    question: "When and where should I use MEV Blocker?",
    answer: "You should use MEV Blocker as often as possible! While trading protocols like CoW Swap offer MEV protection for your DeFi trades, most DeFi trading venues and NFT marketplaces do not provide any type of MEV protection. This is where MEV Blocker comes in: any dApp can implement it and it protects all types of transactions."
  },
  {
    question: "How do I install MEV Blocker?",
    answer: "To use MEV Blocker, you will need to add our RPC endpoint to your crypto wallet. If you’re using MetaMask, you can do this easily by following the instructions here [link to the RPC Details part of the page]. If you’re using another wallet provider, you can follow the instructions here [link to Medium article] to add the MEV Blocker RPC endpoint. If your wallet does not support adding RPC endpoints, you may have to contact your wallet developer to get MEV Blocker included as a supported RPC."
  },
  {
    question: "Who made MEV Blocker?",
    answer: "MEV Blocker is a joint venture between CoW Protocol, Gnosis, and Beaver Builder. This collaboration represents our commitment to providing a trusted, credibly-neutral product as our RPC endpoint. MEV Blocker will operate independently of our individual projects to ensure neutrality and provide the best service to users."
  },
  {
    question: "What’s the benefit to searchers?",
    answer:
      "MEV Blocker provides value to searchers by allowing them to backrun large trades that get submitted through the RPC endpoint. Searchers have to bid on these trades, which ensures that only those who can backrun transactions the most efficiently will benefit.",
  },
  {
    question: "I am a searcher or dApp developer who wants to use MEV Blocker",
    answer:
      "If you want to get involved in bidding on transactions for MEV Blocker as a searcher, click here. If you’d like to implement MEV Blocker to your dApp, click here to get in contact with us.",
  },
  {
    question: "How does MEV Blocker work?",
    answer:
      "At its core, MEV Blocker is a network of “searchers” who are given the opportunity to backrun your transactions by placing orders directly after you. In return, they protect you from frontrunning and sandwich attacks, which are the nasty parts of MEV where you can really lose money. Searchers get the privilege of backrunning your transaction by bidding on each transaction. [This bid is then forwarded to you (check for clarity)]. As long as you have MEV Blocker added to your wallet, you’re protected from MEV when trading on any DEX or NFT marketplace.",
  },
  {
    question: "I have a question or need to contact support",
    answer: "If you need to contact us, please get in touch by emailing [email].",
  },
]

export const RPC_DETAILS: { title: string; value: string }[] = [
  {
    title: "Network Name",
    value: "MEV Blocker",
  },
  {
    title: "New RPC URL",
    value: CONFIG.RPC_URL,
  },
  {
    title: "Chain ID",
    value: "1",
  },
  {
    title: "Currency Symbol",
    value: "ETH",
  },
  {
    title: "Block Explorer URL",
    value: "https://etherscan.io",
  },
]

export const TESTIMONIALS: { content: string; image: string; author: string }[] = [
  {
    content: "MEV Blocker is a great way to protect your trades from MEV. I’ve been using it for a while now and it’s been a great experience.",
    image: "testimonial-1.png",
    author: "John Doe",
  },
  {
    content: "MEV Blocker is a great way to protect your trades from MEV. I’ve been using it for a while now and it’s been a great experience.",
    image: "testimonial-2.png",
    author: "John Doe",
  },
  {
    content: "MEV Blocker is a great way to protect your trades from MEV. I’ve been using it for a while now and it’s been a great experience.",
    image: "testimonial-1.png",
    author: "John Doe",
  },
  {
    content: "MEV Blocker is a great way to protect your trades from MEV. I’ve been using it for a while now and it’s been a great experience.",
    image: "testimonial-2.png",
    author: "John Doe",
  },
  {
    content: "MEV Blocker is a great way to protect your trades from MEV. I’ve been using it for a while now and it’s been a great experience.",
    image: "testimonial-1.png",
    author: "John Doe",
  },
  {
    content: "MEV Blocker is a great way to protect your trades from MEV. I’ve been using it for a while now and it’s been a great experience.",
    image: "testimonial-2.png",
    author: "John Doe",
  },
]


export const BUILT_WITH_LOVE: { title: string, logo: string, link: string }[] = [
  {
    title: "CoW Protocol",
    logo: "cow-logo.svg",
    link: "https://cow.fi/",
  },
  {
    title: "Beaver Build",
    logo: "beaver.jpg",
    link: "https://beaverbuild.org/",
  },
  {
    title: "Agnostic Relay",
    logo: "agnostic.png",
    link: "https://agnostic-relay.net/",
  },
]