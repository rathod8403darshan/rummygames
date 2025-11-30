"use client";

import { useEffect } from "react";
import { trackCoreWebVitals } from "@/src/utils/analytics-seo";

/**
 * Core Web Vitals Tracker
 * Tracks and reports Core Web Vitals metrics
 */
export function CoreWebVitals() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Track Largest Contentful Paint (LCP)
    if ("PerformanceObserver" in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          const lcp = lastEntry.renderTime || lastEntry.loadTime;
          trackCoreWebVitals("LCP", lcp, window.location.pathname);
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        // LCP not supported
      }

      // Track First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            trackCoreWebVitals("FID", fid, window.location.pathname);
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });
      } catch (e) {
        // FID not supported
      }

      // Track Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          trackCoreWebVitals("CLS", clsValue, window.location.pathname);
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        // CLS not supported
      }

      // Track First Contentful Paint (FCP)
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.name === "first-contentful-paint") {
              trackCoreWebVitals("FCP", entry.startTime, window.location.pathname);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ["paint"] });
      } catch (e) {
        // FCP not supported
      }

      // Track Time to First Byte (TTFB)
      try {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        if (navigation) {
          const ttfb = navigation.responseStart - navigation.requestStart;
          trackCoreWebVitals("TTFB", ttfb, window.location.pathname);
        }
      } catch (e) {
        // TTFB not available
      }
    }
  }, []);

  return null;
}

