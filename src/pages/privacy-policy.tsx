import Layout from "@src/components/Layout/index";
import {
  Section,
  SectionContent,
  SectionWrapper,
} from "@src/const/styles/pages/index";
import { Color } from "@src/const/styles/variables";
import PrivacyPolicy from "@src/markdown/privacy-policy.md";

export default function PrivacyPolicyPage() {
  return (
    <Layout pageTitle="Privacy Policy">
      <SectionWrapper backgroundColor={Color.pink}>
        <Section>
          <SectionContent maxWidth={90}>{PrivacyPolicy({})}</SectionContent>
        </Section>
      </SectionWrapper>
    </Layout>
  );
}
