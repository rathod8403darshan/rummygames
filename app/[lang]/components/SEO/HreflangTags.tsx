"use client";

import { useEffect } from "react";

interface HreflangTagsProps {
  currentUrl: string;
  languages: Array<{ code: string; url: string }>;
  defaultLanguage?: string;
}

/**
 * Hreflang Tags Component
 * Generates hreflang tags for multilingual SEO
 */
export function HreflangTags({
  currentUrl,
  languages,
  defaultLanguage = "en",
}: HreflangTagsProps) {
  useEffect(() => {
    // Add hreflang tags for each language
    languages.forEach((lang) => {
      let link = document.querySelector(
        `link[rel="alternate"][hreflang="${lang.code}"]`
      ) as HTMLLinkElement;

      if (!link) {
        link = document.createElement("link");
        link.rel = "alternate";
        link.setAttribute("hreflang", lang.code);
        document.head.appendChild(link);
      }

      link.href = lang.url;
    });

    // Add x-default hreflang
    const defaultLang = languages.find((l) => l.code === defaultLanguage);
    if (defaultLang) {
      let defaultLink = document.querySelector(
        'link[rel="alternate"][hreflang="x-default"]'
      ) as HTMLLinkElement;

      if (!defaultLink) {
        defaultLink = document.createElement("link");
        defaultLink.rel = "alternate";
        defaultLink.setAttribute("hreflang", "x-default");
        document.head.appendChild(defaultLink);
      }

      defaultLink.href = defaultLang.url;
    }

    // Add self-referencing hreflang
    const currentLang = languages.find((l) => currentUrl.includes(`/${l.code}/`));
    if (currentLang) {
      let selfLink = document.querySelector(
        `link[rel="alternate"][hreflang="${currentLang.code}"]`
      ) as HTMLLinkElement;
      if (selfLink) {
        selfLink.href = currentUrl;
      }
    }

    return () => {
      // Cleanup is handled by React
    };
  }, [currentUrl, languages, defaultLanguage]);

  return null;
}

