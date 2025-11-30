"use client";

import { useEffect } from "react";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";
import { generateAdvancedMetaTags, generateHreflangTags } from "@/src/utils/advanced-seo";

interface MetaTagsProps {
  seoData: AdvancedSEOData;
  languages?: string[];
}

export function MetaTags({ seoData, languages = ["en", "hi"] }: MetaTagsProps) {
  useEffect(() => {
    const metaTags = generateAdvancedMetaTags(seoData);
    const hreflangTags = generateHreflangTags(seoData.canonicalUrl, languages);

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    // Update Open Graph tags
    Object.entries(metaTags).forEach(([property, content]) => {
      if (property.startsWith("og:")) {
        let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("property", property);
          document.head.appendChild(meta);
        }
        meta.content = content;
      }
    });

    // Update Twitter Card tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (name.startsWith("twitter:")) {
        let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement("meta");
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      }
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = seoData.canonicalUrl;

    // Update hreflang tags
    hreflangTags.forEach((tag) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${tag.hreflang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "alternate";
        link.setAttribute("hreflang", tag.hreflang);
        document.head.appendChild(link);
      }
      link.href = tag.href;
    });
  }, [seoData, languages]);

  return null;
}

