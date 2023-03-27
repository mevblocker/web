import styled from 'styled-components';
import { PropsWithChildren } from 'react'
import { Media, Color } from '@src/const/styles/variables'

import Head from 'next/head'
import { CONFIG } from '@src/const/meta'
import { mainMenu, footerMenu } from '@src/const/menu'
import Header from '@src/components/Layout/Header'
import Footer from '@src/components/Layout/Footer'

export type LayoutProps = PropsWithChildren<{
  siteConfigData?: any // needs fix
  metrics?: any // needs fix
  mainMenuData?: any // needs fix
  footerMenuData?: any // needs fix
  route?: string
  pageTitle?: string
}>

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 100%;

  ${Media.mobile} {
    margin: 0 auto;
  }

  ${Media.tabletPortrait} {
    margin: 0 auto;
  }
`

const Content = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  min-height: calc(100vh - 14.5rem);

  p > a,
  li > a {   
    text-decoration: underline;
    cursor: pointer;
    
      &:link, 
      &:visited {
        color: ${Color.text1};
      }
  }
`

export default function Layout({ children, route, pageTitle }: LayoutProps) {
  // const isSplitted = route === '/' ? true : false
  const { title } = CONFIG
  const headTitle = pageTitle ? `${pageTitle} - ${title}` : `${title}` // Must use a single (text) node to prevent Next.js Title warnings

  return (
    <>
      {headTitle && <Head>
        <title>{headTitle}</title>
      </Head>}

      <Wrapper>
        <Header menu={mainMenu} siteConfig={CONFIG} />
        <Content>{children ? children : 'No content found'}</Content>
        <Footer menu={footerMenu} siteConfig={CONFIG} />
      </Wrapper>
    </>
  )
}