"use client";

import { useEffect } from "react";

interface OpenGraphTagsProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  alternateLocales?: string[];
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

/**
 * Open Graph Tags Component
 * Generates comprehensive Open Graph meta tags for social media sharing
 */
export function OpenGraphTags({
  title,
  description,
  url,
  image,
  type = "website",
  siteName = "Rummy Games App",
  locale = "en_US",
  alternateLocales = ["hi_IN"],
  article,
}: OpenGraphTagsProps) {
  useEffect(() => {
    const tags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: locale },
    ];

    // Add alternate locales
    alternateLocales.forEach((altLocale) => {
      tags.push({ property: "og:locale:alternate", content: altLocale });
    });

    // Add image
    if (image) {
      tags.push(
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: title }
      );
    }

    // Add article tags if applicable
    if (article && type === "article") {
      if (article.publishedTime) {
        tags.push({ property: "article:published_time", content: article.publishedTime });
      }
      if (article.modifiedTime) {
        tags.push({ property: "article:modified_time", content: article.modifiedTime });
      }
      if (article.author) {
        tags.push({ property: "article:author", content: article.author });
      }
      if (article.section) {
        tags.push({ property: "article:section", content: article.section });
      }
      if (article.tags) {
        article.tags.forEach((tag) => {
          tags.push({ property: "article:tag", content: tag });
        });
      }
    }

    // Update or create meta tags
    tags.forEach((tag) => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    return () => {
      // Cleanup is handled by React
    };
  }, [title, description, url, image, type, siteName, locale, alternateLocales, article]);

  return null;
}

