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
        "https://docs.mevblocker.io?utm_source=mevblocker.io&utm_medium=web&utm_content=mev-blocker-docs-link",
      permanent: false,
    },
  }
}
