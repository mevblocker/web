import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import ReactGA from 'react-ga';
import { Media } from '@src/const/styles/variables'
import useMediaQuery from '@src/lib/hooks/useMediaQuery';
import { siteConfig } from '@src/const/meta'

function handleRouteChange(url: string) {
  console.log('[Analytics] Page view', url)
  ReactGA.pageview(url);
}

function initializeAnalytics(isMobile: boolean) {
  console.log('[Analytics] Tracking ID', siteConfig.googleAnalyticsID)
  ReactGA.initialize(siteConfig.googleAnalyticsID, {
    gaOptions: {
      storage: 'none',
      storeGac: false,
    },
  })
  ReactGA.set({
    anonymizeIp: true,
    customBrowserType: !isMobile
      ? 'desktop'
      : 'web3' in window || 'ethereum' in window
        ? 'mobileWeb3'
        : 'mobileRegular',
  })


  // Handle all route changes
  handleRouteChange(Router.pathname)
  Router.events.on('routeChangeComplete', handleRouteChange)
}

export function Analytics() {

  // Internal state
  const [analytics, setAnalytics] = useState({
    isInitialized: false
  })

  const isMobile = useMediaQuery(`(max-width: ${Media.smallScreen})`);

  // Use effect is used so the code is only executed client side (not server side)
  useEffect(() => {
    const { isInitialized } = analytics

    // Initialize Analytics
    if (siteConfig.googleAnalyticsID && !isInitialized) {
      initializeAnalytics(isMobile)
      setAnalytics(prev => ({
        ...prev,
        isInitialized: true
      }))
    }

    return () => {
      // clean up
      if (isInitialized) {
        Router.events.off('routeChangeComplete', handleRouteChange);
      }
    }
  }, [analytics, isMobile])

  return null
}
