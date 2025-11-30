"use client";

import { useEffect } from "react";

interface CanonicalUrlProps {
  url: string;
}

/**
 * Canonical URL Component
 * Sets the canonical URL to prevent duplicate content issues
 */
export function CanonicalUrl({ url }: CanonicalUrlProps) {
  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    
    canonical.href = url;

    return () => {
      // Cleanup is handled by React
    };
  }, [url]);

  return null;
}

