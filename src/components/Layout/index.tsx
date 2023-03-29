import styled from "styled-components";
import { PropsWithChildren } from "react";
import { Font, Media, Color } from "@src/const/styles/variables";

import Head from "next/head";
import { CONFIG } from "@src/const/meta";
import { mainMenu, footerMenu } from "@src/const/menu";
import Header from "@src/components/Layout/Header";
import Footer from "@src/components/Layout/Footer";
import { WalletProvider } from "@src/components/WalletProvider";

export type LayoutProps = PropsWithChildren<{
  siteConfigData?: any; // needs fix
  metrics?: any; // needs fix
  mainMenuData?: any; // needs fix
  footerMenuData?: any; // needs fix
  route?: string;
  pageTitle?: string;
}>;

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
`;

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
`;

export default function Layout({ children, route, pageTitle }: LayoutProps) {
  // const isSplitted = route === '/' ? true : false
  // const headTitle = pageTitle ? `${pageTitle} - ${title}` : `${title}`; // Must use a single (text) node to prevent Next.js Title warnings
  const { title, description, descriptionShort, url } = CONFIG

  return (
    <WalletProvider>

      <Head>
        <title>{`${title} - ${descriptionShort}`}</title>
        
        <meta name="description" content={description} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content={Color.white} />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content={Color.white} />

        <link rel="shortcut icon" href="favicon.svg" />
        <link rel="mask-icon" href="favicon-mask.svg" color={Color.white} />
        <link rel="apple-touch-icon" sizes="192x192" href="favicon.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />
        <meta property="og:image" content={url.root + "/og-social.png"} />
        <meta property="og:url" content={url.root} />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content={social.twitter.account} /> */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={url.root + "/og-social.png"} />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"></meta>

        <link rel="preload" href={Font.defaultFile} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={Font.defaultBoldFile} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={Font.defaultHeadingFile} as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      <Wrapper>
        <Header menu={mainMenu} siteConfig={CONFIG} />
        <Content>{children ? children : "No content found"}</Content>
        <Footer menu={footerMenu} siteConfig={CONFIG} />
      </Wrapper>
    </WalletProvider>
  );
}
