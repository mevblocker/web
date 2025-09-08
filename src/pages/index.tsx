/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useState, useCallback, MouseEventHandler, MouseEvent } from "react"
import Layout from "@src/components/Layout"
import { CopyIcon } from "@src/const/styles/global"
import {
  Section,
  SectionContent,
  SectionWrapper,
  CardWrapper,
  CardItem,
  USPWrapper,
  USPItem,
  HeroImage,
  LogoWrapper,
  LogoItem,
  MetricsCard,
  MetricsItem,
  MetricsLink,
  EndpointsTable,
} from "@src/const/styles/pages/index"
import { Button, BigButton } from "@src/components/Button"
import { Color } from "@src/const/styles/variables"
import {
  FAQ_CONTENT,
  USP_CONTENT,
  RPC_DETAILS,
  LAUNCH_PARTNERS,
  BUILT_WITH_LOVE,
  TESTIMONIALS,
  ENDPOINTS_TABLE,
} from "@src/const/content"
import { ShareButton } from "@src/components/ShareButton"

import { CopyToClipboard } from "react-copy-to-clipboard"
import {
  copyToClipboardAction,
  expandFaqQuestion,
  scrollToAction,
} from "@src/lib/analytics/events"
import { AddRpcButton } from "@src/components/AddRpcButton"
import { CONFIG } from "@src/const/meta"

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

function expandFaq(event: MouseEvent<HTMLElement>) {
  const question = event.currentTarget.innerHTML
  console.log("[expandFaq]", question)
  expandFaqQuestion(question)
}

export default function Home() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const handleOnCopy = useCallback(
    (title: string) => {
      try {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        copyToClipboardAction(title)
      } catch (error) {
        //handle errors
      }
    },
    [setCopied]
  )

  const onRPCScroll = useCallback(() => {
    scrollToAction("Get RPC Details")
  }, [])

  return (
    // get page route from next.js router and pass it to Layout component as props
    <Layout route={router.pathname}>
      <SectionWrapper backgroundColor={Color.blue} borderDown>
        <Section columns={2}>
          <SectionContent>
            <h1>The best MEV protection under the sun</h1>
            <p className={"large-text"}>
              MEV Blocker is your personal protection from frontrunning and
              sandwich attacks for a broad spectrum of Ethereum transactions
            </p>

            <ol>
              <li>Add the RPC endpoint directly to your wallet</li>
              <li>Enjoy full, automatic protection from all types of MEV</li>
              <li>Get paid by searchers for your transactions</li>
            </ol>

            <BigButton
              onClick={onRPCScroll}
              fontSize={2.2}
              label="Get Protected"
              href="#rpc"
            />
          </SectionContent>

          <SectionContent>
            <HeroImage>
              <img
                className="leaf-1"
                src="hero/leaf-1.svg"
                alt="MEVBlocker.io"
              />
              <img
                className="leaf-2"
                src="hero/leaf-2.svg"
                alt="MEVBlocker.io"
              />
              <img
                className="tomato-1"
                src="hero/tomato-1.svg"
                alt="MEVBlocker.io"
              />
              <img
                className="tomato-2"
                src="hero/tomato-2.svg"
                alt="MEVBlocker.io"
              />
              <img
                className="sandwhich-2"
                src="hero/sandwhich-2.svg"
                alt="MEVBlocker.io"
              />
              <img
                className="sandwhich-1"
                src="hero/sandwhich-1.svg"
                alt="MEVBlocker.io"
              />
              <img
                className="person"
                src="hero/person.svg"
                alt="MEVBlocker.io"
              />
            </HeroImage>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Metrics section */}
      <MetricsCard>
        <MetricsItem>
          <h2>$219B+</h2>
          <p>volume protected from MEV, across 62M+ transactions</p>
        </MetricsItem>
        <MetricsItem>
          <h2>5.5K+</h2>
          <p>ETH rebated to users</p>
        </MetricsItem>
        <MetricsItem>
          <h2>$26</h2>
          <p>USD value of median rebate</p>
        </MetricsItem>
        <MetricsLink
          href="https://dune.com/cowprotocol/mev-blocker?utm_source=cow.fi&utm_medium=web&utm_content=mev-blocker-metrics-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all metrics on DUNE ↗
        </MetricsLink>
      </MetricsCard>

      {/* Features section */}
      <SectionWrapper backgroundColor={Color.yellow} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={"center"}>
            <h3>
              Broad spectrum <br /> MEV defense
            </h3>
            <h5>
              MEV bots have extracted more than $1.43 billion from well-meaning
              Ethereum users across a variety of use cases (trading, providing
              liquidity, minting NFTs, etc). MEV Blocker is an RPC endpoint that
              supports these users by offering:
            </h5>

            <USPWrapper>
              {USP_CONTENT.map(({ image, title }, index) => (
                <USPItem key={index}>
                  <img src={image} alt={title} loading="lazy" />
                  <h4>{title}</h4>
                </USPItem>
              ))}
            </USPWrapper>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* RPC Details section */}
      <SectionWrapper backgroundColor={Color.pink} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={"center"}>
            <a id="rpc" className={"anchor"} />
            <h3>Get protected</h3>
            <h5>
              Add this RPC endpoint to your wallet to enjoy the full benefits of
              MEV Blocker
            </h5>

            <CardWrapper count={2}>
              <CardItem>
                <h4>Click to add to your client</h4>
                <p className={"title-text"}>
                  <b>{CONFIG.rpc.chainName}</b>
                </p>
                <AddRpcButton />
              </CardItem>
              <CardItem>
                <h4>Or manually add:</h4>
                <table>
                  <tbody>
                    {RPC_DETAILS.map(({ title, value }, index: number) => (
                      <tr key={index}>
                        <td>{title}</td>
                        <td>
                          <CopyToClipboard
                            text={value}
                            onCopy={() => handleOnCopy(title)}
                          >
                            <span>
                              <b>{value}</b> <CopyIcon />
                            </span>
                          </CopyToClipboard>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {copied && <p className={"copied"}>Copied to clipboard!</p>}
              </CardItem>
            </CardWrapper>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Endpoints section */}
      <SectionWrapper backgroundColor={Color.white} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={"center"}>
            <h4>Multiple endpoints for multiple protection types</h4>
            <h5>
              Advanced MEV Blocker users can select from a variety of endpoints
              to suit their specific needs
            </h5>
            <EndpointsTable>
              <thead>
                <tr>
                  <th>Endpoint</th>
                  <th>Frontrunning</th>
                  <th>Backrunning</th>
                  <th>Tx Revert</th>
                </tr>
              </thead>
              <tbody>
                {ENDPOINTS_TABLE.map(
                  (
                    { endpoint, frontrunning, backrunning, txRevert },
                    index
                  ) => (
                    <tr key={index}>
                      <td data-label="Endpoint">{endpoint}</td>
                      <td
                        data-label="Frontrunning"
                        className={frontrunning.className}
                      >
                        {frontrunning.text}
                      </td>
                      <td
                        data-label="Backrunning"
                        className={backrunning.className}
                      >
                        {backrunning.text}
                      </td>
                      <td data-label="Tx Revert" className={txRevert.className}>
                        {txRevert.text}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </EndpointsTable>

            <p className={"centered-text"}>
              To learn more about each of the endpoints MEV Blocker has to
              offer,{" "}
              <a
                href="https://docs.cow.fi/mevblocker?utm_source=cow.fi&utm_medium=web&utm_content=mev-blocker-docs-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read the MEV Blocker docs
              </a>
            </p>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Testemonials */}
      <SectionWrapper backgroundColor={Color.yellow} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={"center"}>
            <h3>What others are saying...</h3>
            <CardWrapper count={3} cardRotate>
              {TESTIMONIALS.map(({ content, author }, index) => (
                <CardItem key={index} fontSize={2.7}>
                  <p>
                    {content} - <b>{author}</b>
                  </p>
                </CardItem>
              ))}
            </CardWrapper>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Built with love */}
      <SectionWrapper backgroundColor={Color.white} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={"center"}>
            <h3>Jointly formulated by</h3>
            <USPWrapper>
              {BUILT_WITH_LOVE.map(({ title, logo, link }, index) => (
                <USPItem key={index} imageBorder={false} borderRadius={false}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt={title} loading="lazy" />
                    <br />
                    {title}
                  </a>
                </USPItem>
              ))}
            </USPWrapper>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Launch Partners */}
      <SectionWrapper backgroundColor={Color.pink} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={"center"}>
            <h3>Trusted by the best</h3>
            <LogoWrapper>
              {LAUNCH_PARTNERS.map(({ title, logo, link }) => (
                <LogoItem key={logo}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={`trustedby/${logo}`} alt={title} loading="lazy" />
                  </a>
                </LogoItem>
              ))}
            </LogoWrapper>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* FAQ section */}
      <SectionWrapper backgroundColor={Color.green} borderDown>
        <Section>
          <SectionContent align={"center"}>
            <a id="faq" className={"anchor"} />
            <h3>FAQ</h3>
            <p className={"centered-text"}>
              Curious if you&apos;ve been the victim of an MEV attack? Use{" "}
              <a
                href="https://mevscanner.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                MEV Scanner
              </a>{" "}
              to find out
            </p>
            <div className={"section_FAQ"}>
              {FAQ_CONTENT.map(({ question, answer }, index) => (
                <details key={index}>
                  <summary onClick={expandFaq}>{question}</summary>
                  <div>{answer}</div>
                </details>
              ))}
            </div>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Share */}
      <SectionWrapper backgroundColor={Color.blue} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={"center"}>
            <h3>Friends don&apos;t let friends suffer from MEV damage</h3>

            <ShareButton
              shareText={CONFIG.socialShareDescription}
              shareUrl={CONFIG.url.root}
              shareTitle={CONFIG.title}
              label={"Share MEV Blocker"}
            />
          </SectionContent>
        </Section>
      </SectionWrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
