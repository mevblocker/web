import { CONFIG } from "@src/const/meta"

export const USP_CONTENT: {
  title: string
  image: string
}[] = [
  {
    title:
      "Full protection from frontrunning and sandwich attacks on all types of transactions",
    image: "usp_1.svg",
  },
  {
    title: "Profit from any backrunning opportunities your transactions create",
    image: "usp_2.svg",
  },
  {
    title:
      "A fast, free, censorship-resistant solution open to all searchers and builders",
    image: "usp_3.svg",
  },
]

export const FAQ_CONTENT: {
  question: string
  answer: string | React.ReactElement
}[] = [
  {
    question: "What is MEV?",
    answer: (
      <>
        MEV (Maximal Extractable Value) occurs when bots exploit your
        transactions for profit. Common types include frontrunning (copying your
        trade ahead of you) and sandwich attacks (trading before and after your
        transaction to extract value). MEV has extracted over $1.43 billion from
        Ethereum users across trading, DeFi, and NFT transactions.
        <br />
        <br />
        MEV Blocker protects you from these attacks while ensuring you get
        rebated when your transactions create backrunning opportunities.
      </>
    ),
  },
  {
    question: "What is an RPC endpoint?",
    answer: (
      <>
        An RPC (remote procedure call) endpoint is used to connect applications
        like wallets to the blockchain. <br />
        <br />
        MEV Blocker is a special RPC endpoint that ensures your trades are
        protected from MEV. It does this by sending your transaction to a
        network of searchers that scan for backrunning opportunities, but cannot
        frontrun or sandwich your trades. <br />
        <br />
        You can add RPC endpoints like MEV Blocker by changing the selected
        network in your crypto wallet. Some DeFi trading apps will also be able
        to integrate the MEV Blocker RPC endpoint directly — making it a default
        for all users.{" "}
        <a
          href={CONFIG.social.telegram.url}
          target="_blank"
          rel="noopener nofollow"
        >
          Get in touch
        </a>{" "}
        if you&apos;re interested in doing this!
      </>
    ),
  },
  {
    question: "What kinds of MEV does MEV Blocker protect from?",
    answer: (
      <>
        MEV blocker protects from most kinds of frontrunning, but especially
        from trade sandwiching, which is when a searcher trades just before and
        just after your transaction to make a profit.
      </>
    ),
  },
  {
    question: "How does MEV Blocker RPC give you a rebate and when?",
    answer: (
      <>
        MEV Blocker also lets you benefit from backrunning. It does this by
        allowing searchers to “bid” in an auction to win the right to backrun
        your trade. When this happens, users of MEV Blocker receive 90% of the
        profit their backrunning opportunity creates (compared with 0% when not
        using MEV Blocker).The rebate is paid to the user that sent the
        transaction (tx.origin), immediately in the same block.
        <br />
        <br />
        In return for benefitting from backrunning your trade, these searchers
        are not allowed to frontrun or sandwich you — thus protecting you from
        the worst types of MEV.
      </>
    ),
  },
  {
    question: "When and where should I use MEV Blocker?",
    answer: (
      <>
        You should use MEV Blocker as often as possible!
        <br />
        <br />
        While some DEXs like{" "}
        <a href={CONFIG.url.cowSwap} target="_blank" rel="noopener nofollow">
          CoW Swap
        </a>{" "}
        offer MEV protection for your DeFi trades, most DeFi venues and NFT
        marketplaces do not provide any type of MEV protection.
        <br />
        <br />
        This is where MEV Blocker comes in: any user or dApp can implement it
        and it protects all types of transactions from MEV.
        <br />
        <br />
        See a chance to mint the next Cryptopunks but don&apos;t want anyone to
        snatch the opportunity from you? Use MEV Blocker.
        <br />
        <br />
        Want to trade directly on an AMM that doesn&apos;t protect you from MEV?
        Use MEV Blocker.
        <br />
        <br />
        And more!
      </>
    ),
  },
  {
    question: "How do I install MEV Blocker?",
    answer: (
      <>
        To use MEV Blocker, you will need to add the MEV Blocker RPC endpoint to
        your wallet. You can do that easily by following the instructions{" "}
        <a href={CONFIG.url.rpc}>here</a>. (Note that once your MEV Blocker is
        added to your wallet, you might need to check that it is your selected
        network from time to time.)
        <br />
        <br />
        If your wallet does not support adding custom RPC endpoints, you may
        have to contact your wallet developer to get MEV Blocker included as a
        supported RPC.
      </>
    ),
  },
  {
    question: "How does MEV Blocker work?",
    answer: (
      <>
        MEV Blocker facilitates an auction between a network of “searchers” who
        are given the opportunity to backrun your transactions. In return, they
        protect you from frontrunning and sandwich attacks - the nasty types of
        MEV that exploit Ethereum users every day.
        <br />
        <br />
        When searchers submit winning bids through the orderflow auction, MEV
        Blocker sends the full amount of the bid to users and validators at a
        90/10 split. Validators keep the 10% as a reward, and users pocket the
        other 90% as profit they&apos;d miss out on if they weren&apos;t using
        MEV Blocker.
        <br />
        <br />
        As long as you have MEV Blocker set as the RPC in your wallet (as if it
        were another network), you are protected from frontrunning and
        sandwiching when using any Ethereum dApp. And the profit share from
        backrunning is deposited automatically into your wallet.
      </>
    ),
  },
  {
    question: "Which endpoints should I use?",
    answer: (
      <>
        We offer 5 different endpoints for different needs:
        <br />• <b>/fast</b> (default) - Best for most users, offers protection
        and rebates
        <br />• <b>/noreverts</b> - Adds transaction revert protection
        <br />• <b>/fullprivacy</b> - Maximum privacy, no rebates
        <br />• <b>/maxbackruns</b> - Optimized for maximum backrun
        opportunities
        <br />• <b>/nochecks</b> - No validation, maximum protection
        <br />
        <br />
        MEV Blocker submits to all major block builders including Flashbots,
        Titan Builder, Builder0x69, bloXroute, Beaver Build, and others.
      </>
    ),
  },
  {
    question: "Does this RPC offer revert protection?",
    answer: (
      <>
        Yes! The <b>/noreverts</b>, <b>/fullprivacy</b>, and <b>/maxbackruns</b>{" "}
        endpoints all offer transaction revert protection. The default{" "}
        <b>/fast</b> endpoint focuses on speed and does not protect against
        reverts.
        <br />
        <br />
        Use <b>https://rpc.mevblocker.io/noreverts</b> if you want both MEV
        protection and revert protection with rebates.
      </>
    ),
  },
  {
    question: "Does this RPC offer a secure & private RPC endpoint?",
    answer: (
      <>
        Yes! Use <b>https://rpc.mevblocker.io/fullprivacy</b> for maximum
        privacy protection. This endpoint provides the highest level of
        transaction privacy and MEV protection, but does not offer rebates.
        <br />
        <br />
        The <b>/fullprivacy</b> endpoint prevents transaction data sharing and
        offers revert protection, making it ideal for high-value or sensitive
        transactions.
        <br />
        <br />
        Note: This endpoint is intended for sophisticated users who prioritize
        privacy over rebates.
      </>
    ),
  },
  {
    question:
      "While using MEV Blocker RPC, is it safe to ignore slippage control??",
    answer: (
      <>
        NO, you should ALWAYS set slippage control to have multiple protections
        in place.
        <br />
        <br />
        Goal of RPC is to prevent 99% of sandwiches but no existing solution can
        provide full 100% protection. Due to reorgs/forked blocks 0.1% of
        transactions might become publicly available before on-chain
        confirmation.
      </>
    ),
  },
  {
    question: "Who made MEV Blocker?",
    answer: (
      <>
        MEV Blocker is jointly formulated and maintained by{" "}
        <a
          href={CONFIG.url.cowProtocol}
          target="_blank"
          rel="noopener nofollow"
        >
          CoW Protocol
        </a>
        ,{" "}
        <a href={CONFIG.url.agnostic} target="_blank" rel="noopener nofollow">
          Agnostic Relay
        </a>
        , and{" "}
        <a href={CONFIG.url.beaver} target="_blank" rel="noopener nofollow">
          Beaver Build
        </a>
        . It is open to all searchers and block builders.
        <br />
        <br />
        This collaboration represents our commitment to providing a trusted,
        neutral product available to all Ethereum users. We invite additional
        contributors - please get in touch if you&apos;re interested in
        supporting the project.
      </>
    ),
  },
  {
    question: "How do I participate as a searcher?",
    answer: (
      <>
        If you are a searcher that is interested in collaborating with MEV
        Blocker RPC, please check out the{" "}
        <a href={CONFIG.url.docs} target="_blank" rel="noopener nofollow">
          documentation
        </a>{" "}
        for searchers and
        <a
          href={CONFIG.social.telegram.url}
          target="_blank"
          rel="noopener nofollow"
        >
          {" "}
          join the community
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I get in touch?",
    answer: (
      <>
        If you are a searcher or a dApp developer, or if you&apos;re a user that
        has questions about MEV Blocker, please reach out via{" "}
        <a
          href={CONFIG.social.telegram.url}
          target="_blank"
          rel="noopener nofollow"
        >
          Telegram
        </a>
        .
      </>
    ),
  },
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
    value: CONFIG.rpc.chainId,
  },
  {
    title: "Currency Symbol",
    value: CONFIG.rpc.nativeSymbol,
  },
  {
    title: "Block Explorer URL",
    value: CONFIG.rpc.blockExplorerUrl,
  },
]

export const ENDPOINTS_TABLE: {
  endpoint: string
  frontrunning: { text: string; className: string }
  backrunning: { text: string; className: string }
  txRevert: { text: string; className: string }
  description: string
}[] = [
  {
    endpoint: "/fast (default)",
    frontrunning: { text: "Protected", className: "protected" },
    backrunning: { text: "Refund", className: "refund" },
    txRevert: { text: "Not protected", className: "not-protected" },
    description: "Fast execution with MEV protection and rebates",
  },
  {
    endpoint: "/noreverts",
    frontrunning: { text: "Protected", className: "protected" },
    backrunning: { text: "Refund", className: "refund" },
    txRevert: { text: "Protected", className: "protected" },
    description: "Protection plus revert protection",
  },
  {
    endpoint: "/fullprivacy",
    frontrunning: { text: "Max protection", className: "max-protection" },
    backrunning: { text: "No rebate", className: "no-rebate" },
    txRevert: { text: "Protected", className: "protected" },
    description: "Maximum privacy, no transaction sharing",
  },
  {
    endpoint: "/maxbackruns",
    frontrunning: { text: "Protected", className: "protected" },
    backrunning: { text: "Refund", className: "refund" },
    txRevert: { text: "Protected", className: "protected" },
    description: "Optimized for maximum backrun opportunities",
  },
  {
    endpoint: "/nochecks",
    frontrunning: { text: "Max protection", className: "max-protection" },
    backrunning: { text: "No rebate", className: "no-rebate" },
    txRevert: { text: "Not protected", className: "not-protected" },
    description: "No validation checks, maximum protection",
  },
]

export const TESTIMONIALS: { content: string; author: string }[] = [
  {
    content: "MEV Blocker fixed my marriage",
    author: "Anon",
  },
  {
    content: "I was tired of getting rekt, so I started using MEV Blocker",
    author: "Anon",
  },
  {
    content:
      "If I'd known about MEV Blocker sooner, I could've had a lambo by now",
    author: "Anon",
  },
  {
    content: "Robots should work for me, not against me",
    author: "Anon",
  },
  {
    content: "Nobody's stolen my lunch money since I started using MEV Blocker",
    author: "Anon",
  },
  {
    content: "I used MEV Blocker and I instantly went up a tax bracket",
    author: "Anon",
  },
]

export const BUILT_WITH_LOVE: { title: string; logo: string; link: string }[] =
  [
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

export const LAUNCH_PARTNERS: { title: string; logo: string; link: string }[] =
  [
    {
      title: "Uniswap",
      logo: "logo-uniswap.svg",
      link: "https://uniswap.org/",
    },
    {
      title: "Rabby",
      logo: "logo-rabby.svg",
      link: "https://rabby.io/",
    },
    {
      title: "Crypto.com",
      logo: "logo-crypto-com.svg",
      link: "https://crypto.com/",
    },
    {
      title: "CoW Swap",
      logo: "logo-cowswap.svg",
      link: "https://swap.cow.fi/",
    },
    {
      title: "Safe",
      logo: "logo-safe.svg",
      link: "https://safe.global/",
    },
    {
      title: "Karpatkey",
      logo: "logo-karpatkey.svg",
      link: "https://www.karpatkey.com/",
    },
    {
      title: "KeepKey",
      logo: "logo-keepkey.svg",
      link: "https://www.keepkey.com/",
    },
    {
      title: "Ambire",
      logo: "logo-ambire.svg",
      link: "https://www.ambire.com/",
    },
    {
      title: "Blocknative",
      logo: "logo-blocknative.svg",
      link: "https://www.blocknative.com/",
    },
  ]
