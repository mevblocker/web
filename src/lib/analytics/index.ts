import { useEffect } from "react";
import { UaEventOptions } from "react-ga4/types/ga4";
import { isMobile } from "react-device-detect";

import { GoogleAnalyticsProvider } from "./provider";

const GOOGLE_ANALYTICS_ID: string | undefined =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY = "ga_client_id";
const IS_CLIENT = typeof window !== "undefined";

const googleAnalytics = new GoogleAnalyticsProvider();

export function sendEvent(event: string | UaEventOptions, params?: any): void {
  console.log('[analytics] sendEvent', event, params)
  googleAnalytics.sendEvent(event, params);
}

export function outboundLink(
  {
    label,
  }: {
    label: string;
  },
  hitCallback: () => unknown
): any {
  return googleAnalytics.outboundLink({ label }, hitCallback);
}

export function sendTiming(
  timingCategory: any,
  timingVar: any,
  timingValue: any,
  timingLabel: any
): any {
  return googleAnalytics.gaCommandSendTiming(
    timingCategory,
    timingVar,
    timingValue,
    timingLabel
  );
}

if (IS_CLIENT) {
  const storedClientId = window.localStorage.getItem(
    GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY
  );

  if (GOOGLE_ANALYTICS_ID && typeof GOOGLE_ANALYTICS_ID === "string") {
    googleAnalytics.initialize(GOOGLE_ANALYTICS_ID, {
      gaOptions: {
        storage: "none",
        storeGac: false,
        clientId: storedClientId ?? undefined,
      },
    });
    googleAnalytics.set({
      anonymizeIp: true,
      customBrowserType: !isMobile
        ? "desktop"
        : "web3" in window || "ethereum" in window
        ? "mobileWeb3"
        : "mobileRegular",
    });
  } else {
    googleAnalytics.initialize("test", { gtagOptions: { debug_mode: true } });
  }
}

// tracks web vitals and pageviews
export function useAnalyticsReporter({ pathname }: { pathname: string }): void {
  useEffect(() => {
    googleAnalytics.pageview(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!IS_CLIENT) return;

    // typed as 'any' in react-ga4 -.-
    googleAnalytics.ga((tracker: any) => {
      if (!tracker) return;

      const clientId = tracker.get("clientId");
      window.localStorage.setItem(
        GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY,
        clientId
      );
    });
  }, []);
}
