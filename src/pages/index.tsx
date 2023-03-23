/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// import { ExternalLink } from '@/const/styles/global'

import Layout from '@src/components/Layout'
import { Section, SectionContent, SectionWrapper } from '@src/const/styles/pages/index'
import { Button, BigButton } from '@src/components/Button'
import TextLink from '@src/components/TextLink'
import { Color } from '@src/const/styles/variables'
import { FAQ_CONTENT } from '@src/const/faq'

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function Home() {
  const router = useRouter()

  return (
    // get page route from next.js router and pass it to Layout component as props
    <Layout route={router.pathname}>

      <SectionWrapper borderDown>
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
            <img src="hero3.svg" alt="MEVBlocker.io" />
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* Features section */}
      <SectionWrapper>
        <Section>
          <SectionContent>
            <h3>Broad Spectrum MEV Defense</h3>

            <p>- content TBD -</p>
          </SectionContent>

        </Section>
      </SectionWrapper>

      {/* RPC Details section */}
      <SectionWrapper>
        <Section>
          <SectionContent>
            <a id="rpc" className={'anchor'}/>
            <h3>RPC Details</h3>

            <p>- content TBD -</p>
          </SectionContent>

        </Section>
      </SectionWrapper>

      {/* FAQ section */}
      <SectionWrapper backgroundColor={Color.white}>
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

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
