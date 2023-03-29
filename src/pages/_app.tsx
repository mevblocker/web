import { AppProps } from 'next/app'
import { useAnalyticsReporter } from "../lib/analytics";
import GlobalStyles from '@src/const/styles/global'



export default function App({ Component, pageProps, router }: AppProps) {
  useAnalyticsReporter({ pathname: router.asPath });

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
