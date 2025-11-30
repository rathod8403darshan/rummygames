"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  trackPageView,
  trackTimeOnPage,
  trackScrollDepth,
} from "@/src/utils/analytics-seo";

interface SEOTrackerProps {
  title: string;
  lang?: string;
}

/**
 * SEO Tracker Component
 * Tracks various SEO metrics and user engagement
 */
export function SEOTracker({ title, lang = "en" }: SEOTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    const startTime = Date.now();
    let maxScroll = 0;

    // Track page view
    trackPageView(pathname, title, lang);

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // Track milestones
        if (scrollPercent >= 25 && scrollPercent < 50) {
          trackScrollDepth(pathname, 25);
        } else if (scrollPercent >= 50 && scrollPercent < 75) {
          trackScrollDepth(pathname, 50);
        } else if (scrollPercent >= 75 && scrollPercent < 100) {
          trackScrollDepth(pathname, 75);
        } else if (scrollPercent >= 100) {
          trackScrollDepth(pathname, 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(pathname, timeSpent);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);

      // Final time tracking
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 0) {
        trackTimeOnPage(pathname, timeSpent);
      }
    };
  }, [pathname, title, lang]);

  return null;
}

