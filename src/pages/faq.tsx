/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Layout from '@src/components/Layout/index'
import Button from '@src/components/Button'
import { Section, SectionContent, Anchor } from '@src/const/styles/pages/index'

export default function Overview() {
  return (
    <Layout pageTitle="FAQ">
      <Section>
        <SectionContent>
          <h1>Frequently Asked Questions (FAQ)</h1>
          <h3>What is the CoW Grants Program (CGP)?</h3>
          <p>The mission of the CGP is to provide funding to help grow the CoW Protocol ecosystem and drive utility and demand for the COW token. The primary areas of growth for CoW Protocol under this proposal are:</p>
          <ul>
            <li>CoWmunity growth</li>
            <li>User interface and user experience (UI/UX)</li>
            <li>Decentralization</li>
            <li>Develop new Solvers</li>
            <li>Developer tools (SDK)</li>
            <li>Integrations and protocol order flow</li>
            <li>Other/misc</li>
          </ul>
          <h3>How do I apply?</h3>
          <p>Fill out the  <Link href="/apply">application form</Link>. Your application will be visible by everyone and the Grants Committee will evaluate whether to decline, meet with you to adjust the application or send it to the official committee for final approval.&nbsp;</p>
          <p>If you have chosen your application to be private, it will initially only be visible by the Grants Committee.&nbsp;</p>
          <p>You are bound by the <a href="https://cloudflare-ipfs.com/ipfs/Qmf9MYhcG2pFrDoVy13p6FWeVF4nG9HbJvRfYYbhazTCFe" target="_blank" rel="noopener noreferrer">CoW DAO Participation Agreement</a> and the <Link href="/terms">CoW Grants Program Terms and Conditions</Link> when applying for a grant.</p>
          <h3>What is the minimum and maximum funding amount of a CoW Grant?</h3>
          <p>The CoW Grants Program provides different levels of funding according to the task to be completed. A more impactful task will require more work and more funding, while a less impactful trask will require less work and less funding.&nbsp;</p>
          <h3>How will I be compensated for my work?</h3>
          <p>The Grants Committee will work with you to establish milestones that can be used to split compensation incrementally before a project is completed.</p>
          <p>If no milestones are set, part of the grant will be paid upfront to cover costs and the remainder will be paid once the grant is completed successfully.</p>
          <h3>How will I receive the payment?</h3>
          <p>All payments will be made either in <a href="https://gnosisscan.io/token/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d" target="_blank" rel="noopener noreferrer">wXDAI</a> or <a href="https://gnosisscan.io/token/0x177127622c4a00f3d409b75571e12cb3c8973d3c" target="_blank" rel="noopener noreferrer">COW</a> (both on Gnosis Chain) by the CoW Grants Program Safe. The amount of each token is to be decided among the grantees and the Grants Committee on a case by case basis.&nbsp;</p>
          <h3>Can I apply for a grant if I am located in Country X?</h3>
          <p>Yes! CoW is a worldwide phenomenon. Regardless of where you are from, you are bound by the <a href="https://cloudflare-ipfs.com/ipfs/Qmf9MYhcG2pFrDoVy13p6FWeVF4nG9HbJvRfYYbhazTCFe" target="_blank" rel="noopener noreferrer">CoW DAO Participation Agreement</a> and the CoW Grants Program Terms and Conditions when applying for a grant.&nbsp;</p>
          <h3>What type of work/project qualifies for a grant?</h3>
          <p>Anything that benefits the overall CoW Protocol ecosystem will qualify. Prioritization will be based on the impact the grant application will have on the CoW ecosystem &amp; CoWmunity.</p>
          <p>There are numerous contributions that can be funded through grants, such as analytics, tooling, infrastructure, growth and many more. Furthermore, the CGP can also fund ecosystem projects that are complementary to the core product of CoW Protocol, such as CoW-themed gaming/NFT projects and solvers. Check out the &ldquo;Request for Proposals&rdquo; section in this document for some CoW-inspiration!</p>
          <p>The goal is to fund a wide range of grants, from simple projects to more elaborate, long term projects. The funding amount will vary to reflect the complexity.</p>
          <h3>How often are applications approved?&nbsp;</h3>
          <p>Frequently. The CoW Grants Program aims to issue grant funding on a rolling basis until the first CoW DAO installment has dried up.</p>
          <h3>What happens if a grantee doesn&apos;t follow through their duties?</h3>
          <p>In order to prevent a grantee from running off with significant funds, the grants committee may establish milestones for any grants above $1K.&nbsp;</p>
          <p>If a grantee has ignored committee messages for 4 weeks, it is considered that the grant has been abandoned and if there are pending milestones to be achieved, they will be marked as incomplete and the funds will not be sent to the grantee.</p>
          <h3>Apply for a grant</h3>
          <p>After you have received email confirmation that your application was successfully submitted, we will be in touch to discuss next steps within a week! Please ensure that you have received email confirmation your application was submitted, otherwise we can&apos;t guarantee your application was successfully received.</p>
          <p>For more information, check out the CoW Grants Program overview to read on judgment criteria for the applications.</p>
          <Button fontSize={1.8} marginTB={3.2} label='Apply for a grant' href="/apply" />
        </SectionContent>
      </Section>
    </Layout>
  )
}