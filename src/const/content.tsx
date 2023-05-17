import { CONFIG } from "@src/const/meta";

export const USP_CONTENT: {
  title: string;
  image: string;
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
];

export const FAQ_CONTENT: {
  question: string;
  answer: string | React.ReactElement;
}[] = [
  {
    question: "What is MEV?",
    answer: (
      <>
        MEV or “maximal extractable value” is a method used by savvy actors
        (known as “searchers”) to exploit your transactions at your expense.{" "}
        <br />
        <br />
        Any time you make a transaction that carries value, searchers can
        “frontrun” it by submitting the exact same transaction before you and
        keeping the profits for themselves. After getting frontrun, you can also
        get “backrun”, which is where the searcher cleans up any price slippage
        your trade caused, again keeping the profits for themselves. Both a
        frontrun and a backrun together are known as a “sandwich attack” — the
        worst type of MEV.
        <br />
        <br />
        MEV gives you a worse price for your transactions and can cause you to
        lose out on hundreds or even thousands of dollars. MEV Blocker is an
        easy solution - an RPC endpoint that protects all types of transactions
        from MEV.
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
    question: "Which block builders does MEV Blocker submit to?",
    answer: (
      <>
        MEV Blocker submits to all major block builders, including Builder0x69,
        bloXroute, Blocknative, Flashbots, rsync builder, Titan Builder, F1b, Payload and Beaver Build.
      </>
    ),
  },
  {
    question: "Does this RPC offer revert protection?",
    answer: (
      <>
        No, this RPC focuses on fast execution, however, we are offering another
        endpoint which offers revert protection.
        <br />
        <br />
        This separate endpoint focuses on providing revert protection first, at
        the expense of possibly slower inclusion time. You can use this second
        endpoint by using <b>https://rpc.mevblocker.io/noreverts</b> as the url
        instead.
      </>
    ),
  },
  {
    question: "Does this RPC offer a secure & private RPC endpoint?",
    answer: (
      <>
        Yes! if you want your transactions to be completely private, and you don´t care
        about the refund, you need to connect to the following endpoint: <b>https://rpc.mevblocker.io/norefunds</b> as the url
        instead.
        <br />
        <br />
        This endpoint focuses on privacy for users that want to perform transactions and it will not share TX data 
        over WS. It prevents transactions failures (same as /noreverts).
        <br />
        <br />
        Note: This endpoint is intended for sophisticated users who can unstuck transaction themselves.
      </>
    ),
  },
  {
    question: "While using MEV Blocker RPC, is it safe to ignore slippage control??",
    answer: (
      <>
        NO, you should ALWAYS set slippage control to have multiple protections in place.
        <br />
        <br />
        Goal of RPC is to prevent 99% of sandwiches but no existing solution can provide 
        full 100% protection. Due to reorgs/forked blocks 0.1% of transactions might become 
        publicly available before on-chain confirmation.
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
];

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
];

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
];

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
  ];

export const LAUNCH_PARTNERS: { title: string; logo: string; link: string }[] =
  [
    {
      title: "GnosisDAO",
      logo: "gnosisdao.svg",
      link: "https://www.gnosis.io/",
    },
    {
      title: "CoW Swap",
      logo: "cowswap.svg",
      link: "https://swap.cow.fi/",
    },
    {
      title: "Safe",
      logo: "safe.svg",
      link: "https://safe.global/",
    },
    {
      title: "Balancer",
      logo: "balancer.svg",
      link: "https://balancer.fi/",
    },
    {
      title: "Karpatkey",
      logo: "karpatkey.svg",
      link: "https://www.karpatkey.com/",
    },
    {
      title: "ParaSwap",
      logo: "paraswap.svg",
      link: "https://www.paraswap.io/",
    },
    {
      title: "EigenPhi",
      logo: "eigenphi.svg",
      link: "https://eigenphi.io/",
    },
    {
      title: "Bloxroute",
      logo: "bloxroute.svg",
      link: "https://bloxroute.com/",
    },
    {
      title: "ZeroMev",
      logo: "zeromev.svg",
      link: "https://www.zeromev.org/",
    },
    {
      title: "Shapeshift",
      logo: "shapeshift.svg",
      link: "https://shapeshift.com/",
    },
    {
      title: "Gearbox",
      logo: "gearbox.svg",
      link: "https://gearbox.fi/",
    },
    {
      title: "Swarm",
      logo: "swarm.svg",
      link: "https://www.ethswarm.org/",
    },
    {
      title: "1Inch",
      logo: "1inch.svg",
      link: "https://1inch.io/",
    },
    {
      title: "Oasis",
      logo: "oasis.svg",
      link: "https://oasis.app/#earn",
    },
    {
      title: "Gelato",
      logo: "gelato.svg",
      link: "https://www.gelato.network/",
    },
    {
      title: "Keystone",
      logo: "keystone.svg",
      link: "https://keyst.one/",
    },
    {
      title: "Ambire",
      logo: "ambire.svg",
      link: "https://www.ambire.com/",
    },
    {
      title: "Castle",
      logo: "castle.svg",
      link: "https://castle.link/",
    },
    {
      title: "VirtuSwap",
      logo: "virtuswap.svg",
      link: "https://virtuswap.io/",
    },
    {
      title: "Liminal",
      logo: "liminal.svg",
      link: "https://www.lmnl.app/",
    },
    {
      title: "Onramper",
      logo: "onramper.svg",
      link: "https://www.onramper.com/",
    },
    {
      title: "Bitkeep",
      logo: "bitkeep.svg",
      link: "https://bitkeep.com/",
    },
    {
      title: "Aura Finance",
      logo: "aura.svg",
      link: "https://aura.finance/",
    },
    {
      title: "StakeDAO",
      logo: "stakedao.svg",
      link: "https://stakedao.org/",
    },
    {
      title: "Arrakis",
      logo: "arrakis.svg",
      link: "https://www.arrakis.finance/",
    },
    {
      title: "Swapr",
      logo: "swapr.svg",
      link: "https://swapr.eth.limo/",
    },
    {
      title: "DODO",
      logo: "dodo.svg",
      link: "https://dodoex.io/",
    },
    {
      title: "Cypherock",
      logo: "cypherock.svg",
      link: "https://www.cypherock.com/",
    },
    {
      title: "Giveth",
      logo: "giveth.svg",
      link: "https://www.giveth.io/",
    },
    {
      title: "Notifi",
      logo: "notifi.svg",
      link: "https://notifi.network/",
    },
    {
      title: "Titan Builder",
      logo: "Titan.svg",
      link: "https://www.titanbuilder.xyz/",
    },
    {
      title: "Builder0x69",
      logo: "builder0x69.png",
      link: "https://twitter.com/builder0x69",
    },
  ];
