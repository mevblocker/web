/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import Layout from '@src/components/Layout'
import { CopyIcon } from '@src/const/styles/global'
import { Section, SectionContent, SectionWrapper, CardWrapper, CardItem, USPWrapper, USPItem } from '@src/const/styles/pages/index'
import { Button, BigButton } from '@src/components/Button'
import TextLink from '@src/components/TextLink'
import { Color } from '@src/const/styles/variables'
import { FAQ_CONTENT, USP_CONTENT, RPC_DETAILS } from '@src/const/content'
import { CONFIG } from '@src/const/meta'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function Home() {
  const router = useRouter()
  const [copied, setCopied] = useState(false);

const HandleOnCopy = useCallback(() => {
    try {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      //handle errors
    }
  }, [setCopied]);

  return (
    // get page route from next.js router and pass it to Layout component as props
    <Layout route={router.pathname}>

      <SectionWrapper backgroundColor={Color.yellow} borderDown>
        <Section>
          <SectionContent>
            <h1>The best MEV protection under the sun</h1>
            <p className={'large-text'}>Introducing MEV Blocker — your personal protection against front-running, sandwich attacks, and all other types of MEV.</p>
            <p>
              <ol>
                <li>Add the RPC endpoint directly to your wallet</li>
                <li>Buy, sell, trade, and swap on any dApp</li>
                <li>MEV Blocker auto-protects all transactions</li>
              </ol>
            </p>
            <BigButton fontSize={2.2} label='Get Protected' href="#rpc" />
          </SectionContent>

          <SectionContent>
            <img src="hero.svg" alt="MEVBlocker.io" />
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Features section */}
      <SectionWrapper backgroundColor={Color.mint} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={'center'}>
            <h3>Broad Spectrum 
              MEV Defense</h3>
            <h5>Always-on protection from billions in value extraction</h5>

            <USPWrapper>
              {USP_CONTENT.map(({image, imageAlt, title, description}, index) => (
                <USPItem key={index}> 
                  <img src={image} alt={imageAlt} />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </USPItem>
              ))}
            </USPWrapper>
          </SectionContent>

        </Section>
      </SectionWrapper>

      {/* RPC Details section */}
      <SectionWrapper backgroundColor={Color.white} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={'center'}>
            <a id="rpc" className={'anchor'}/>
            <h3>RPC Details</h3>
            <h5>Get setup in seconds. Be protected forever.</h5>

            <CardWrapper count={2}>
              <CardItem>
                <h4>Click to add to your client</h4>
                <BigButton label='Add to MetaMask' href="https://metamask.io/" />
              </CardItem>
              <CardItem>
                <h4>Or, manually add:</h4>
                <table>
                  <tbody>
                    {RPC_DETAILS.map(({title, value}, index) => (
                      <tr key={index}>
                        <td>{title}</td>
                        <td>
                          <CopyToClipboard text={value} onCopy={() => HandleOnCopy()}>
                            <span><b>{value}</b> <CopyIcon /></span>
                          </CopyToClipboard>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {copied && <p className={'copied'}>Copied to clipboard!</p>}
              </CardItem>
            </CardWrapper>
          </SectionContent>

        </Section>
      </SectionWrapper>

      {/* FAQ section */}
      <SectionWrapper backgroundColor={Color.yellow}>
        <Section>
          <SectionContent>
            <a id="faq" className={'anchor'} />
            <h3>FAQ</h3>
            <div className={'section_FAQ'}>
            {FAQ_CONTENT.map(({question, answer}, index) => (
              <details key={index}>
                <summary>{question}</summary>
                <div>{answer}</div>
              </details>
            ))}
            </div>
          </SectionContent>

        </Section>
      </SectionWrapper>


      {/* Built with love */}
      <SectionWrapper backgroundColor={Color.mint}>
        <Section>
          <SectionContent>
            
            <h3>Built with love by</h3>
            <p>(Logos for: CoW Protocol, Beaver, Agnostic)</p>
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
