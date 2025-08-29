# <a href="https://mevblocker.io" target="_blank">MEVblocker.io</a>: The best MEV protection under the sun

![mevblocker-logo](https://user-images.githubusercontent.com/31534717/228222199-30b9e41b-0896-4602-a6f1-e464876a76de.svg)

MEV Blocker is your personal protection from frontrunning and sandwich attacks for a broad spectrum of Ethereum transactions. 

1. Add the RPC endpoint directly to your wallet
2. Trade with DeFi, mint NFTs, or use any dApp
3. MEV Blocker auto-protects all transactions


## RPC details
| Network Name   | MEV Blocker       |
| -------------- | ----------------- |
| New RPC URL    | https://rpc.mevblocker.io   |
| Chain ID       | 1                 |
| Currency Symbol | ETH               |
| Block Explorer URL | https://etherscan.io |


## Quick Start

**Run the development server:**
Choose your preferred package manager and run the development server:

    npm run dev
    # or
    yarn dev
    # or
    pnpm dev

**Open the application:**
Visit http://localhost:3000 in your browser to see the result.

## Edit content:
- Edit general site Config/Meta data -> `src/const/meta.ts`
- Edit main and footer menu -> `src/const/menu.ts`
- Index / Landing page -> Start editing the landing page by modifying pages/index.tsx.
- **Add or Remove** a Launch partner (Launch partners section on landing page)  -> Add an object to `const LAUNCH_PARTNERS` in `src/const/content.tsx`. Make sure the logo is a SVG in color black (`#000000`) and add it to the root folder `public/partners`.
- Edit misc content like FAQ items, USPs that are shown on the index / landing page -> `src/const/content.tsx`
- /docs/ -> Comes from page `src/pages/docs.mdx` and the content is sourced directly from a Markdown file `src/const/docs.md`. Please edit `src/const/docs.md` if you want to edit the content on /docs/
- Add a new page (e.g. /cookie-policy/) -> Create a `.tsx` file under folder `src/pages/`. You could copy `src/pages/404.tsx` to have a general content page example. Or if the content is going to be Markdown sourced you could copy `src/pages/docs.mdx`.

---

<a href="https://twitter.com/intent/tweet?text=I%27m%20using%20MEV%20Blocker%20to%20protect%20myself%20from%20frontrunning%20and%20sandwich%20attacks.%20You%20should%20too.%20Set%20up%20the%20RPC%20endpoint%20here%3A%20https%3A%2F%2Fmevblocker.io%2F" target="_blank">

![share-mevblocker](https://user-images.githubusercontent.com/31534717/228472132-c8cb86c0-3a95-4d7a-8a12-0c89b1b8e2a5.png)

</a>





