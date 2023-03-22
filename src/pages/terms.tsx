import Link from 'next/link'
import Layout from '@src/components/Layout/index'
import { Section, SectionContent } from '@src/const/styles/pages/index'

export default function Terms() {
  return (
    <Layout pageTitle="Terms & Conditions">
      <Section>
        <SectionContent>

          <h1>Terms & Conditions</h1>
          <p>- Terms content -</p>
        </SectionContent>
      </Section>
    </Layout>
  )
}