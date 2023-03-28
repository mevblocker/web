/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import Layout from '@src/components/Layout'
import { CopyIcon } from '@src/const/styles/global'
import { Section, SectionContent, SectionWrapper, CardWrapper, CardItem, USPWrapper, USPItem, HeroImage } from '@src/const/styles/pages/index'
import { Button, BigButton } from '@src/components/Button'
import { Color } from '@src/const/styles/variables'
import { FAQ_CONTENT, USP_CONTENT, RPC_DETAILS, BUILT_WITH_LOVE, TESTIMONIALS} from '@src/const/content'
import { ShareButton } from '@src/components/ShareButton'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { AddRpcButton } from '@src/components/AddRpcButton'
import { CONFIG } from '@src/const/meta'

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

      <SectionWrapper backgroundColor={Color.blue} borderDown>
        <Section columns={2}>
          <SectionContent>
            <h1>The best MEV protection under the sun</h1>
            <p className={'large-text'}>MEV Blocker is your personal protection from frontrunning and sandwich attacks for a broad spectrum of Ethereum transactions</p>

            <ol>
              <li>Add the RPC endpoint directly to your wallet</li>
              <li>Trade with DeFi, mint NFTs, or use any dApp</li>
              <li>MEV Blocker auto-protects all transactions</li>
            </ol>

            <BigButton fontSize={2.2} label='Get Protected' href="#rpc" />
          </SectionContent>

          <SectionContent>
            <HeroImage>
              <img className="leaf-1" src="hero/leaf-1.svg" alt="MEVBlocker.io" loading="lazy" />
              <img className="leaf-2" src="hero/leaf-2.svg" alt="MEVBlocker.io" loading="lazy" />
              <img className="tomato-1" src="hero/tomato-1.svg" alt="MEVBlocker.io" loading="lazy" />
              <img className="tomato-2" src="hero/tomato-2.svg" alt="MEVBlocker.io" loading="lazy" />
              <img className="sandwhich-2" src="hero/sandwhich-2.svg" alt="MEVBlocker.io" loading="lazy" />
              <img className="sandwhich-1" src="hero/sandwhich-1.svg" alt="MEVBlocker.io" loading="lazy" />
              <img className="person" src="hero/person.svg" alt="MEVBlocker.io" loading="lazy" />
            </HeroImage>
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Features section */}
      <SectionWrapper backgroundColor={Color.yellow} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={'center'}>
            <h3>Broad spectrum <br/> MEV Defense</h3>
            <h5>MEV bots have extracted more than $1.38 billion from well-meaning Ethereum users across a variety of use cases (trading, provisioning, minting, etc). MEV Blocker is an RPC endpoint that supports these users by offering: </h5>

            <USPWrapper>
              {USP_CONTENT.map(({image, title}, index) => (
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
          <SectionContent maxWidth={100} align={'center'}>
            <a id="rpc" className={'anchor'}/>
            <h3>Use early, use often</h3>
            <h5>Add this RPC endpoint to your wallet to enjoy the full benefits of MEV Blocker</h5>

            <CardWrapper count={2}>
              <CardItem>
                <h4>Click to add to your client</h4>
                <p>MEV Blocker Ethereum Mainnet</p>
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

            <p className={'centered-text'}>Having trouble? Check your wallet&apos;s documentation <br/> for instructions on how to update your RPC endpoint.</p>
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

      {/* Testemonials */}
      <SectionWrapper backgroundColor={Color.yellow} borderDown>
        <Section>
          <SectionContent maxWidth={100} align={'center'}>
            <h3>What others are saying...</h3>
            <CardWrapper count={3} cardRotate>
            {TESTIMONIALS.map(({content, author}, index) => (
              <CardItem key={index} fontSize={2.7}>
                <p>{content} - <b>{author}</b></p>
              </CardItem>
            ))}
            </CardWrapper>
          </SectionContent>

        </Section>
      </SectionWrapper>

      {/* Share */}
      <SectionWrapper backgroundColor={Color.blue} borderDown>
      <Section>
        <SectionContent maxWidth={100} align={'center'}>            
        <h3>Don&apos;t let your friends get burned by MEV</h3>

        <ShareButton 
          shareText={CONFIG.socialShareDescription}
          shareUrl={CONFIG.url.root}
          shareTitle={CONFIG.title}
          label={'Share MEV Blocker ⛱️'}
         />
      
        </SectionContent>

      </Section>
    </SectionWrapper>

    {/* Built with love */}
    <SectionWrapper backgroundColor={Color.white} borderDown>
      <Section>
        <SectionContent maxWidth={100} align={'center'}>            
        <h3>Built with love by</h3>
          <USPWrapper>
            {BUILT_WITH_LOVE.map(({title, logo, link}, index) => (
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

    </Layout>
  )
            }

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
