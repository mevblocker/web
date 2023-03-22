/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Layout from '@src/components/Layout/index'
import Button from '@src/components/Button'
import { Section, SectionContent, Anchor } from '@src/const/styles/pages/index'

export default function Overview() {
  return (
    <Layout pageTitle="Overview">
      <Section>
        <SectionContent>
          <h1>Program overview</h1>
          <p>
            The mission of the CoW Grants Program is to provide funding to help grow CoW Protocol’s ecosystem. For this, CoW Protocol is dedicating 600K <a href="https://gnosisscan.io/token/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d" target="_blank" rel="noopener noreferrer">wXDAI</a> and 600K <a href="https://gnosisscan.io/token/0x177127622c4a00f3d409b75571e12cb3c8973d3c" target="_blank" rel="noopener noreferrer">COW</a> tokens worth of funds for the first 6 months of the grants being live.
          </p><p>
            The primary areas of growth for CoW Protocol under this proposal are defined as:

          </p>
          <ul>
            <li>CoWmunity growth</li>
            <li>User interface and user experience (UI/UX)</li>
            <li>Decentralization</li>
            <li>Solver development</li>
            <li>Developer tools (SDK)</li>
            <li>Integrations and protocol order flow</li>
            <li>Other/misc</li>
          </ul>
          <p>The judgment criteria for the grant applications will be based on the following:</p>
          <ul>
            <li>Feasibility - Is the grant feasible to do at this moment or does the grant require upgrades in the protocol layer or overall ecosystem?</li>
            <li>Impact for the CoW ecosystem - How much of a positive impact will this grant have to the overall CoW Protocol ecosystem?</li>
            <li>Sanity - Is the amount of workload required for this grant accurate?&nbsp;</li>
            <li>Technical expertise of the grantee/s - Does the grantee have the technical expertise to deliver the grant milestones?</li>
          </ul>
          <p>As <a href="https://snapshot.org/#/cow.eth/proposal/0xdc641be107f139753cea051f1bacb8b74b915713a95306c3994f5e03e20d6bef" target="_blank" rel="noopener noreferrer">CIP-8 lays out</a>, the CoW Grants Program Safe is managed by two different multi-signature wallets. Safe #3 is shared with the CoW DAO (Safe #1) and the Grants Committee (Safe #2). Safe #3 holds all the grant funds. You can check the governing process in the image below:

          </p><p>          <a href="/images/grant-diagram.png" target="_blank" rel="noopener"><img src="/images/grant-diagram.png" alt="Grant Diagram" /></a></p>

          <hr />

          <h3>Application Process:</h3>
          <p>
            <ol>
              <li><strong>Initial public application</strong><br />

                Anyone can submit an application to the CoW Grants Program. They just need to use the <Link href="/apply">grant application form</Link> and follow the instructions in the <Link href="/faq">FAQ</Link>
                <br /><br /></li>
              <li><strong>Application review</strong><br />

              The CoW Grants Committee will review grant applications as soon as they possibly can. The committee is not obligated to move or rush a specific proposal to the review stage and will do so based on its sole discretion.
                <br /><br /></li>
              <li><strong>Committee feedback</strong><br />

                After the committee reviews applications, the following outcomes are possible:
                <ul>
                  <li>The committee finds the application a successful and approves the grant</li>
                  <li>The committee denies the grant, and that is the end of the process</li>
                  <li>The committee meets with the grant applicant and reworks the application together with the applicant to ensure it aligns well with CGP goals. Once updated, the application may be reconsidered</li>
                </ul><br />
              </li>

              <li><strong>Grant approval</strong><br />

                The CoW Grants Program Committee will show preference toward successful grants in a public forum poll where all committee members are required to vote before moving a grant to its final stage
                <br /><br /></li>
              <li><strong>Grant structuring &amp; management</strong><br />

                Once the grant is approved, the committee will outline a series of milestones to be achieved to obtain full funding. Grantees will be compensated for reaching each milestone, successively, and &ndash; if they are not achieved &ndash; the CoW Grants Committee reserves the right to close the grant or stop payment until specific milestones are achieved
              </li>
            </ol>
          </p>
          <p><img src="/images/grants-application-process.png" alt="Grants Application Process" /></p>
          <p>For questions relating to the CoW Grants Program application process, please visit our <Link href="/faq">FAQ</Link> page.</p>

          <hr />

          <Anchor id="rfp" />
          <h3>Request for Proposals</h3>
          <p>The following is a non-exhaustive list of potential projects that the CoW Grants Program might have an interest in funding.</p>
          <ol>
            <li>Trading-related applications</li>
            <ol>
              <li>Trading view UI for Degen CoWs &rarr; Think advanced trading type views from places like DEX.guru, Kraken, Coinbase Pro, etc.</li>
              <li>Limit order interface &rarr; Develop a custom limit order mechanism that works with CoW Protocol</li>
              <li>DCA order interface &rarr; Build an interface that allows a user to submit orders in batches to be executed in various time horizons</li>
              <li>Cross chain trading &rarr; Achieve cross chain order books &amp; CoWs</li>
              <li>Wait for CoW &rarr; Develop a feature that allows users to signal the fact that they would rather wait for a CoW, instead of executing at the first possible moment</li>
            </ol>
            <li>Analytics</li>
            <ol>
              <li>Dashboard about DEX activity on other networks (Polygon, Arbitrum, Optimism, BSC, etc.)</li>
              <li>Protocol level analytics</li>
              <ol>
                <li>Dashboard to display CoWs (Coincidences of Wants)</li>
                <li>Governance Analytics</li>
              </ol>
            </ol>
            <li>Tooling</li>
            <ol>
              <li>Language specific clients to ease the development of other tools such as interfaces</li>
            </ol>
            <li>Solvers</li>
            <ol>
              <li>Develop a Solver specialized in weighted pools</li>
              <li>Develop a Solver specialized in finding CoWs</li>
              <li>Develop a Solver specialized in tapping into private liquidity</li>
            </ol>
            <li>Integrations</li>
            <ol>
              <li>Build/achieve an integration from a major DeFi platform to route orders into CoW Protocol</li>
            </ol>
            <li>Education</li>
            <ol>
              <li>How-to guides (written or video). For example:</li>
              <ol>
                <li>How to swap tokens</li>
                <li>How CoW Protocol works</li>
                <li>How to build a solver</li>
                <li>How Solvers work</li>
                <li>Using vault relayers</li>
                <li>Understanding the CoW Protocol API</li>
              </ol>
              <li>International language documentation, e.g. French, Spanish, German, Chinese, etc.</li>
              <li>Content creation &rarr; Articles, papers, etc. that focus on the technicalities of CoW Protocol</li>
            </ol>
            <li>Design</li>
            <ol>
              <li>Create Graphics (Art) Material for the CoWmunity: &rarr; Memes, CoW worlds, POAPs, images, explainer GIFs, etc.</li>
              <li>CoW POAP/NFT creative use cases &rarr; We want to have the most awesome POAPs &amp; NFTs across town. We are looking for creators to improve our design, style, distribution methods, and ways to display POAPs</li>
            </ol>
          </ol>

          <hr />

          <h3>Grants Committee</h3>
          <p>The CoW Grants Program committee is comprised of 7 CoWmunity members. They are:</p>
          <ul>
            <li><a href="https://forum.cow.fi/u/netrunner.eth" target="_blank" rel="noopener noreferrer">@netrunner.eth</a> - 0xc95Fda8A94437c1B936169b62858F13aE0386307</li>
            <li><a href="https://forum.cow.fi/u/kubesqrt" target="_blank" rel="noopener noreferrer">@Kubesqrt</a> - 0x386b4ba873a4f423ca28a4df1b2347ca949ced0e</li>
            <li><a href="https://forum.cow.fi/u/chim9" target="_blank" rel="noopener noreferrer">@Chim9</a> - 0xF44217A8b6b3f258BFFEaD635c226528aa516aea</li>
            <li><a href="https://forum.cow.fi/u/mfw78" target="_blank" rel="noopener noreferrer">@mfw78</a> - 0x0F641723997145715d23c0129b96041011d26666</li>
            <li><a href="https://forum.cow.fi/u/middleway.eth" target="_blank" rel="noopener noreferrer">@middleway.eth</a> - 0xa11da8b2d9a7883eb636d7de426025e5fd9fda1a</li>
            <li><a href="https://forum.cow.fi/u/Master_CoW" target="_blank" rel="noopener noreferrer">@Master_CoW</a> - 0x76ba9825a5f707f133124e4608f1f2dd1ef4006a</li>
            <li><a href="https://forum.cow.fi/u/fairlight" target="_blank" rel="noopener noreferrer">@fairlight</a> - 0xCA55E77Ec514B5BD05B3b2B56f106Ba2Fe593A9f</li>
          </ul>
          <p>Safe #2 (see diagram above), <a href="https://gnosis-safe.io/app/gno:0xCA1F000D520c21C47E6c634DD31b92b91A6338bD/settings/owners" target="_blank" rel="noopener noreferrer">gno:0xCA1F000D520c21C47E6c634DD31b92b91A6338bD</a> functions as the CoW Grants Program committee Safe. The Safe has a signing threshold of 5 out of 7, and each of these committee members is a signer.</p>
          <p>All committee members have provided a brief description of their background on the <a href="https://forum.cow.fi/t/cip-draft-cowswap-grants-program-cgp/314" target="_blank" rel="noopener noreferrer">CIP forum discussion</a>. The committee can be reached via the CoW Protocol forum or Discord - or at <a href="mailto:grants@cow.fi" target="_blank" rel="noopener noreferrer">grants@cow.fi</a>.</p>

          <Button fontSize={1.8} marginTB={3.2} label='Apply for a grant' href="/apply" />
        </SectionContent>
      </Section>
    </Layout>
  )
}