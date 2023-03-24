/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import Layout from '@src/components/Layout'
import { CopyIcon } from '@src/const/styles/global'
import { Section, SectionContent, SectionWrapper, CardWrapper, CardItem, USPWrapper, USPItem, HeroImage } from '@src/const/styles/pages/index'
import { Button, BigButton } from '@src/components/Button'
// import TextLink from '@src/components/TextLink'
import { Color } from '@src/const/styles/variables'
import { FAQ_CONTENT, USP_CONTENT, RPC_DETAILS, BUILT_WITH_LOVE} from '@src/const/content'
// import { CONFIG } from '@src/const/meta'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { AddRpcButton } from '@src/components/AddRpcButton'

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

            <ol>
              <li>Add the RPC endpoint directly to your wallet</li>
              <li>Buy, sell, trade, and swap on any dApp</li>
              <li>MEV Blocker auto-protects all transactions</li>
            </ol>

            <BigButton fontSize={2.2} label='Get RPC Details' href="#rpc" />
          </SectionContent>

          <SectionContent>
            <HeroImage>
              <img className="line-1" src="hero/line-1.svg" alt="MEVBlocker.io" />
              <img className="leaf-1" src="hero/leaf-1.svg" alt="MEVBlocker.io" />
              <img className="leaf-2" src="hero/leaf-2.svg" alt="MEVBlocker.io" />
              <img className="tomato-1" src="hero/tomato-1.svg" alt="MEVBlocker.io" />
              <img className="tomato-2" src="hero/tomato-2.svg" alt="MEVBlocker.io" />
              <img className="sandwhich-2" src="hero/sandwhich-2.svg" alt="MEVBlocker.io" />
              <img className="sandwhich-1" src="hero/sandwhich-1.svg" alt="MEVBlocker.io" />
              <img className="person" src="hero/person.svg" alt="MEVBlocker.io" />
            </HeroImage>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Features section */}
      <SectionWrapper backgroundColor={Color.pink} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={'center'}>
            <h3>Broad Spectrum <br/> MEV Defense</h3>
            <h5>Always-on protection from billions in value extraction</h5>

            <USPWrapper>
              {USP_CONTENT.map(({image, title}, index) => (
                <USPItem key={index}> 
                  <img src={image} alt={title} />
                  <h4>{title}</h4>
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
                <AddRpcButton />
              </CardItem>
              <CardItem>
                <h4>Or, manually add:</h4>
                <table>
                  <tbody>
                    {RPC_DETAILS.map(({title, value}, index: number) => (
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
      <SectionWrapper backgroundColor={Color.green} borderDown>
        <Section>
          <SectionContent align={'center'}>
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
      <SectionWrapper backgroundColor={Color.blue} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={'center'}>            
          <h3>Built with love by</h3>
            <USPWrapper>
              {BUILT_WITH_LOVE.map(({title, logo, link}, index) => (
                <USPItem key={index}>
                    <img src={logo} alt={title} loading="lazy" />
                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                </USPItem>
              ))}
            </USPWrapper>
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
