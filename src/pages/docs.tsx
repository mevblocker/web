import Layout from '@src/components/Layout/index'
import { Section, SectionContent, SectionWrapper } from '@src/const/styles/pages/index'
import { Color } from '@src/const/styles/variables'
import Docs from '@src/markdown/docs.md'

export default function DocsPage() {
  return (
    <Layout pageTitle="Documentation">
      <SectionWrapper backgroundColor={Color.pink}>
        <Section>
          <SectionContent maxWidth={90}>
            {Docs({})}
          </SectionContent>
        </Section>
      </SectionWrapper>
    </Layout>
  )
}