import Layout from "@src/components/Layout/index";
import {
  Section,
  SectionContent,
  SectionWrapper,
} from "@src/const/styles/pages/index";
import { Color } from "@src/const/styles/variables";
import TermsAndConditions from "@src/markdown/terms-and-conditions.md";

export default function TermsAndCoditionsPage() {
  return (
    <Layout pageTitle="Terms and conditions">
      <SectionWrapper backgroundColor={Color.pink}>
        <Section>
          <SectionContent maxWidth={90}>
            {TermsAndConditions({})}
          </SectionContent>
        </Section>
      </SectionWrapper>
    </Layout>
  );
}
