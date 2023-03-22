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

      <SectionWrapper>
        <Section>
          <SectionContent>
            <h1>The best MEV protection under the sun</h1>
            <p className={'large-text'}>Introducing MEV Blocker — your personal protection against front-running, sandwich attacks, and all other types of MEV.</p>
            <p>
              <ul>
                <li>Add the RPC endpoint directly to your wallet</li>
                <li>No more failed transactions</li>
                <li>Install once, use anywhere on Ethereum</li>
              </ul>
            </p>
            <BigButton fontSize={2.2} label='Get Protected' href="#rpc" />
          </SectionContent>

          <SectionContent>
            <img src="hero3.svg" alt="MEVBlocker.io" />
          </SectionContent>
        </Section>
      </SectionWrapper>

      {/* FAQ section */}
      <SectionWrapper>
        <Section>
          <SectionContent>
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

      <SectionWrapper>
        <Section>
          <SectionContent>
            <h1>The best MEV protection under the sun</h1>
            <p className={'large-text'}>Introducing MEV Blocker — your personal protection against front-running, sandwich attacks, and all other types of MEV.</p>
            <p>
              <ul>
                <li>Add the RPC endpoint directly to your wallet</li>
                <li>No more failed transactions</li>
                <li>Install once, use anywhere on Ethereum</li>
              </ul>
            </p>
            <BigButton fontSize={2.2} label='Get Protected' href="#rpc" />
          </SectionContent>

          <SectionContent>
            <img src="hero.jpg" alt="MEVBlocker.io" />
          </SectionContent>
        </Section>
      </SectionWrapper>

      <SectionWrapper>
        <Section>
          <SectionContent>
            <h1>The best MEV protection under the sun</h1>
            <p className={'large-text'}>Introducing MEV Blocker — your personal protection against front-running, sandwich attacks, and all other types of MEV.</p>
            <p>
              <ul>
                <li>Add the RPC endpoint directly to your wallet</li>
                <li>No more failed transactions</li>
                <li>Install once, use anywhere on Ethereum</li>
              </ul>
            </p>
            <BigButton fontSize={2.2} label='Get Protected' href="#rpc" />
          </SectionContent>

          <SectionContent>
            <img src="hero2.svg" alt="MEVBlocker.io" />
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