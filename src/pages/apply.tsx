import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import Layout from '@src/components/Layout/index'
import { Section, SectionContent } from '@src/const/styles/pages/index'
import { siteConfig } from '@src/const/meta'
import Button from '@src/components/Button'

export default function Apply() {
  const [loading, setLoading] = useState(true);

  return (
    <Layout pageTitle="Apply for a grant">
      <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></Script>
      <Section>
        <SectionContent>
          <h1>Apply for a grant</h1>

          <p>
            After you have received email confirmation that your application was successfully submitted, we will be in touch shortly afterwards to discuss next steps! Please ensure that you have received email confirmation your application was submitted, otherwise we can&apos;t guarantee your application was successfully received.
            <br /><br />
            For more information, check out the <Link href="/overview">CoW Grants Program overview</Link> to read on judgment criteria for the applications.</p>

          <Button fontSize={2.2} label='Grant application form' rel="noopener" target="_blank" href={siteConfig.url.airtableApply} />

          {/* {loading && <p>
            <b>Loading grants application form...</b>
            <br />
            <span>Not loading? <a href={siteConfig.url.airtableApply} target="_blank" rel="noopener noreferrer">Visit the form directly</a></span>
          </p>}
          <iframe src={siteConfig.url.airtableApply} onLoad={() => setLoading(false)} frameBorder="0" width="100%" height="1719" className="airtable-embed airtable-dynamic-height"></iframe> */}
        
        </SectionContent>
      </Section>
    </Layout>
  )
}