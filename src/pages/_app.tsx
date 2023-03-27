import { AppProps } from 'next/app'
import { useAnalyticsReporter } from "../lib/analytics";
import GlobalStyles from '@src/const/styles/global'
import { Font} from '@src/const/styles/variables'
import Head from 'next/head'

import { CONFIG } from '@src/const/meta'

export default function App({ Component, pageProps, router }: AppProps) {
  useAnalyticsReporter({ pathname: router.asPath });
  const { title, description, descriptionShort, url, social } = CONFIG

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#CAE9FF" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#CAE9FF" />

        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />
        <meta property="og:image" content={url.root + "/og-meta-mevblocker.png"} />
        <meta property="og:url" content={url.root} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={social.twitter.account} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={url.root + "/og-meta-mevblocker.png"} />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"></meta>

        <link rel="preload" href={Font.defaultHeadingFile} as="font" type="font/woff2" crossOrigin="anonymous" />

        <title>{title} - {descriptionShort}</title>
      </Head>
      
      <GlobalStyles />
      <Component {...pageProps} />
    </>

  )
}
