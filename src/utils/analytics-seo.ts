/**
 * Analytics and SEO Tracking Utilities
 * Functions for tracking SEO performance and analytics
 */

/**
 * Track page view for SEO analytics
 */
export function trackPageView(url: string, title: string, lang: string = "en") {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("config", "GA_MEASUREMENT_ID", {
      page_path: url,
      page_title: title,
      page_language: lang,
    });
  }

  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "page_view",
      page_path: url,
      page_title: title,
      page_language: lang,
    });
  }
}

/**
 * Track SEO events
 */
export function trackSEOEvent(
  eventName: string,
  eventData: Record<string, any>
) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", eventName, {
      ...eventData,
      event_category: "SEO",
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      event_category: "SEO",
      ...eventData,
    });
  }
}

/**
 * Track search engine visibility
 */
export function trackSearchVisibility(
  searchEngine: "google" | "bing" | "yahoo" | "other",
  query: string,
  position?: number
) {
  trackSEOEvent("search_visibility", {
    search_engine: searchEngine,
    search_query: query,
    position: position || "unknown",
  });
}

/**
 * Track click-through rate
 */
export function trackCTR(element: string, url: string) {
  trackSEOEvent("ctr_click", {
    element_type: element,
    destination_url: url,
  });
}

/**
 * Track time on page
 */
export function trackTimeOnPage(url: string, timeSpent: number) {
  trackSEOEvent("time_on_page", {
    page_url: url,
    time_spent_seconds: timeSpent,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(url: string, depth: number) {
  trackSEOEvent("scroll_depth", {
    page_url: url,
    scroll_depth_percent: depth,
  });
}

/**
 * Track form submissions for SEO
 */
export function trackFormSubmission(formName: string, success: boolean) {
  trackSEOEvent("form_submission", {
    form_name: formName,
    success,
  });
}

/**
 * Track download events
 */
export function trackDownload(fileName: string, fileType: string) {
  trackSEOEvent("file_download", {
    file_name: fileName,
    file_type: fileType,
  });
}

/**
 * Track video engagement
 */
export function trackVideoEngagement(
  videoTitle: string,
  action: "play" | "pause" | "complete",
  duration?: number
) {
  trackSEOEvent("video_engagement", {
    video_title: videoTitle,
    action,
    duration,
  });
}

/**
 * Track social shares
 */
export function trackSocialShare(
  platform: "facebook" | "twitter" | "linkedin" | "whatsapp" | "other",
  url: string
) {
  trackSEOEvent("social_share", {
    platform,
    shared_url: url,
  });
}

/**
 * Track outbound links
 */
export function trackOutboundLink(url: string, linkText: string) {
  trackSEOEvent("outbound_link_click", {
    destination_url: url,
    link_text: linkText,
  });
}

/**
 * Track internal search
 */
export function trackInternalSearch(query: string, resultsCount: number) {
  trackSEOEvent("internal_search", {
    search_query: query,
    results_count: resultsCount,
  });
}

/**
 * Track error events for SEO
 */
export function trackError(errorType: string, errorMessage: string, url: string) {
  trackSEOEvent("error", {
    error_type: errorType,
    error_message: errorMessage,
    page_url: url,
  });
}

/**
 * Track Core Web Vitals
 */
export function trackCoreWebVitals(
  metric: "LCP" | "FID" | "CLS" | "FCP" | "TTFB",
  value: number,
  url: string
) {
  trackSEOEvent("core_web_vital", {
    metric_name: metric,
    metric_value: value,
    page_url: url,
  });
}

/**
 * Track mobile vs desktop usage
 */
export function trackDeviceType(deviceType: "mobile" | "tablet" | "desktop") {
  trackSEOEvent("device_type", {
    device_type: deviceType,
  });
}

/**
 * Track language preference
 */
export function trackLanguagePreference(lang: string) {
  trackSEOEvent("language_preference", {
    language: lang,
  });
}

// Type declarations for window objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

