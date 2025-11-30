"use client";

import { useEffect } from "react";
import { generatePageSEO, type PageSEOConfig } from "@/src/utils/seo-enhancements";
import { SEOScript } from "./SEOScript";
import { CanonicalUrl } from "./CanonicalUrl";
import { HreflangTags } from "./HreflangTags";
import { PerformanceTags } from "./PerformanceTags";
import { OpenGraphTags } from "./OpenGraphTags";
import { TwitterCardTags } from "./TwitterCardTags";

interface PageSEOProps {
  config: PageSEOConfig;
  languages?: Array<{ code: string; url: string }>;
}

/**
 * Comprehensive Page SEO Component
 * Handles all SEO aspects for a page
 */
export function PageSEO({ config, languages = [
  { code: "en", url: config.canonicalUrl.replace(/\/[a-z]{2}(\/|$)/, "/en$1") },
  { code: "hi", url: config.canonicalUrl.replace(/\/[a-z]{2}(\/|$)/, "/hi$1") },
] }: PageSEOProps) {
  const seoData = generatePageSEO(config);

  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = config.description;

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = config.keywords.join(", ");
  }, [config]);

  const schemas = generatePageSEO(config);

  return (
    <>
      <CanonicalUrl url={config.canonicalUrl} />
      <HreflangTags currentUrl={config.canonicalUrl} languages={languages} />
      <PerformanceTags {...seoData.performanceTags} />
      <OpenGraphTags
        title={config.title}
        description={config.description}
        url={config.canonicalUrl}
        image={config.ogImage}
        type={config.article ? "article" : "website"}
        article={config.article ? {
          publishedTime: config.publishedTime,
          modifiedTime: config.modifiedTime,
          author: config.author,
          section: config.section,
          tags: config.tags,
        } : undefined}
      />
      <TwitterCardTags
        title={config.title}
        description={config.description}
        image={config.ogImage}
      />
      {schemas.jsonLdScripts && (
        <div dangerouslySetInnerHTML={{ __html: schemas.jsonLdScripts }} />
      )}
    </>
  );
}

