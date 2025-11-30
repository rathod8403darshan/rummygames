"use client";

import { useEffect } from "react";

interface PerformanceTagsProps {
  preconnect?: string[];
  dnsPrefetch?: string[];
  preload?: Array<{ href: string; as: string; type?: string }>;
}

/**
 * Performance Tags Component
 * Adds preconnect, dns-prefetch, and preload tags for better performance
 */
export function PerformanceTags({
  preconnect = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
  ],
  dnsPrefetch = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ],
  preload = [],
}: PerformanceTagsProps) {
  useEffect(() => {
    // Add preconnect tags
    preconnect.forEach((url) => {
      let link = document.querySelector(`link[rel="preconnect"][href="${url}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "preconnect";
        link.href = url;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    });

    // Add dns-prefetch tags
    dnsPrefetch.forEach((url) => {
      let link = document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = url;
        document.head.appendChild(link);
      }
    });

    // Add preload tags
    preload.forEach((item) => {
      let link = document.querySelector(`link[rel="preload"][href="${item.href}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "preload";
        link.href = item.href;
        link.setAttribute("as", item.as);
        if (item.type) {
          link.type = item.type;
        }
        document.head.appendChild(link);
      }
    });

    return () => {
      // Cleanup is handled by React
    };
  }, [preconnect, dnsPrefetch, preload]);

  return null;
}

