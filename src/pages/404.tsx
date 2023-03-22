import Link from 'next/link'
import Layout from '@src/components/Layout/index'
import { Section, SectionContent } from '@src/const/styles/pages/index'

export default function Custom404() {
  return (
    <Layout pageTitle="404 Page not found">
      <Section>
        <SectionContent>
        <h1>404 - Page Not Found</h1>
        <p>This page could not be found. Please go back to the <Link href="/">home page.</Link></p>
        </SectionContent>
      </Section>
    </Layout>
  )
}