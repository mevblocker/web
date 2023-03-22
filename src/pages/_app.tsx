import "@/src/styles/globals.scss";
import type { AppProps } from "next/app";
import { useAnalyticsReporter } from "../lib/analytics";

export default function App({ Component, pageProps, router }: AppProps) {
  useAnalyticsReporter({ pathname: router.asPath });
  return <Component {...pageProps} />;
}
