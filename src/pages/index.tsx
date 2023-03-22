/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// import { ExternalLink } from '@/const/styles/global'

import Layout from '@src/components/Layout'
import { Section, SectionContent, SectionWrapper } from '@src/const/styles/pages/index'
import Button from '@src/components/Button'
import TextLink from '@src/components/TextLink'
import { Color } from '@src/const/styles/variables'

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function Home() {
  const router = useRouter()

  return (
    // get page route from next.js router and pass it to Layout component as props
    <Layout route={router.pathname}>

      <SectionWrapper>
        <Section split hasImage bgColor={Color.darkBlue}>
          <img src="/images/grants-carton.svg" alt="COW Grants Program" />
        </Section>

        <Section split>
          <SectionContent split>
            <h1>The mission of the <br></br><b>CoW Grants Program</b> is to fund growth of the CoW Protocol ecosystem.</h1>
            <p>CoW Protocol&apos;s vision is a future where digital assets can be traded in a fair, efficient and reliable manner among people and communities around the world. The CoW Grants Program will help achieve this vision by attracting the brightest minds in trading and decentralized systems, diligently working to innovate and improve the CoW Protocol.</p>
            <Button fontSize={2.2} label='Apply for a grant' href="/apply" />
            <TextLink label="Grants program overview" href="/overview"/>
          </SectionContent>
        </Section>

      </SectionWrapper>

    </Layout >
  )
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}