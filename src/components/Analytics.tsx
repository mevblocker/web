import { useState, useEffect } from "react";
import Router from "next/router";
import ReactGA from "react-ga4";
import useMediaQuery from "@/src/lib/hooks/useMediaQuery";
import { CONFIG } from "@/src/const/meta";

function handleRouteChange(url: string) {
  console.log("[Analytics] Page view", url);
  ReactGA.pageview(url);
}

function initializeAnalytics(isMobile: boolean) {
  console.log("[Analytics] Tracking ID", CONFIG.googleAnalyticsID);
  ReactGA.initialize(CONFIG.googleAnalyticsID, {
    gaOptions: {
      storage: "none",
      storeGac: false,
    },
  });
  ReactGA.set({
    anonymizeIp: true,
    customBrowserType: !isMobile
      ? "desktop"
      : "web3" in window || "ethereum" in window
      ? "mobileWeb3"
      : "mobileRegular",
  });

  // Handle all route changes
  handleRouteChange(Router.pathname);
  Router.events.on("routeChangeComplete", handleRouteChange);
}

let isInitialized = false;

export function Analytics() {
  const isMobile = useMediaQuery(`(max-width: 736px)`);

  // Use effect is used so the code is only executed client side (not server side)
  useEffect(() => {
    // Initialize Analytics
    if (CONFIG.googleAnalyticsID && !isInitialized) {
      initializeAnalytics(isMobile);
      isInitialized = true;
    }

    return () => {
      // clean up
      if (isInitialized) {
        Router.events.off("routeChangeComplete", handleRouteChange);
      }
    };
  }, [isMobile]);

  return null;
}
