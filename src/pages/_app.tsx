import { AppProps } from 'next/app'
import { useAnalyticsReporter } from "../lib/analytics";
import GlobalStyles from '@src/const/styles/global'

import ReactAppzi from 'react-appzi';


const APPZI_TOKEN = process.env.REACT_APP_APPZI_TOKEN || 'zpjcs'
ReactAppzi.initialize(APPZI_TOKEN);

export default function App({ Component, pageProps, router }: AppProps) {
  useAnalyticsReporter({ pathname: router.asPath });

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
