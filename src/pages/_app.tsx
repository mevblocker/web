import { AppProps } from 'next/app'
import GlobalStyles from '@src/const/styles/global'
import Head from 'next/head'

import { siteConfig } from '@src/const/meta'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const { title, descriptionShort } = siteConfig

  return (
    <>
      <Head>
        <meta name="description" content={siteConfig.description} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#CAE9FF" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#CAE9FF" />

        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.title} />

        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.url.root + "/og-meta-cowgrantsprogram.png"} />
        <meta property="og:url" content={siteConfig.url.root} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.social.twitter.account} />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:image" content={siteConfig.url.root + "/og-meta-cowgrantsprogram.png"} />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"></meta>

        <title>{title} - {descriptionShort}</title>
      </Head>
      
      <GlobalStyles />
      <Component {...pageProps} />
    </>

  )
}