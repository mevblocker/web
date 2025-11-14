import type { GetServerSideProps } from "next"
import Layout from "@src/components/Layout/index"
import {
  Section,
  SectionContent,
  SectionWrapper,
} from "@src/const/styles/pages/index"
import { Color } from "@src/const/styles/variables"
import Docs from "@src/markdown/docs.md"

export default function DocsPage() {
  return (
    <Layout pageTitle="Documentation">
      <SectionWrapper backgroundColor={Color.pink}>
        <Section>
          <SectionContent maxWidth={90}>{Docs({})}</SectionContent>
        </Section>
      </SectionWrapper>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination:
        "https://docs.cow.fi/mevblocker?utm_source=cow.fi&utm_medium=web&utm_content=mev-blocker-docs-link",
      permanent: false,
    },
  }
}
