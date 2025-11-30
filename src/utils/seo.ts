/**
 * SEO Utility Functions
 * Provides helper functions for SEO optimization
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

/**
 * Generate meta tags for a page
 */
export function generateMetaTags(data: SEOData): Record<string, string> {
  const tags: Record<string, string> = {
    "og:title": data.title,
    "og:description": data.description,
    "og:type": data.type || "website",
    "twitter:card": "summary_large_image",
    "twitter:title": data.title,
    "twitter:description": data.description,
  };

  if (data.image) {
    tags["og:image"] = data.image;
    tags["twitter:image"] = data.image;
  }

  if (data.url) {
    tags["og:url"] = data.url;
  }

  if (data.publishedTime) {
    tags["article:published_time"] = data.publishedTime;
  }

  if (data.modifiedTime) {
    tags["article:modified_time"] = data.modifiedTime;
  }

  if (data.author) {
    tags["article:author"] = data.author;
  }

  if (data.keywords && data.keywords.length > 0) {
    tags["keywords"] = data.keywords.join(", ");
  }

  return tags;
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string, baseUrl: string = "https://www.rummygamesapp.com"): string {
  return `${baseUrl}${path}`;
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate article schema
 */
export function generateArticleSchema(data: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      "@type": "Person",
      name: data.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Rummy Games App",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rummygamesapp.com/logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
  };
}

/**
 * Generate organization schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rummy Games App",
    url: "https://www.rummygamesapp.com",
    logo: "https://www.rummygamesapp.com/logo.jpg",
    sameAs: [
      "https://www.facebook.com/rummygamesapp",
      "https://www.twitter.com/rummygamesapp",
      "https://www.instagram.com/rummygamesapp",
      "https://www.youtube.com/rummygamesapp",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-1800-XXX-XXXX",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

/**
 * Generate website schema
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rummy Games App",
    url: "https://www.rummygamesapp.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.rummygamesapp.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en", "hi"],
  };
}

/**
 * Generate mobile application schema
 */
export function generateMobileAppSchema(lang: string = "en") {
  const isHindi = lang === "hi";
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: isHindi ? "रम्मी गेम्स ऐप" : "Rummy Games App",
    applicationCategory: "GameApplication",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "125000",
      bestRating: "5",
      worstRating: "1",
    },
    screenshot: "https://www.rummygamesapp.com/images/app-screenshot.jpg",
  };
}

/**
 * Generate game schema
 */
export function generateGameSchema(lang: string = "en") {
  const isHindi = lang === "hi";
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: isHindi ? "रम्मी गेम्स" : "Rummy Games",
    description: isHindi
      ? "ऑनलाइन रियल कैश रम्मी गेम खेलें"
      : "Play online real cash rummy games",
    applicationCategory: "Game",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "125000",
    },
  };
}

/**
 * Generate how-to schema
 */
export function generateHowToSchema(steps: Array<{ name: string; text: string }>, lang: string = "en") {
  const isHindi = lang === "hi";
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: isHindi ? "रम्मी कैसे खेलें" : "How to Play Rummy",
    description: isHindi ? "रम्मी खेलने के लिए पूरी गाइड" : "Complete guide on how to play rummy",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Sanitize text for meta description
 */
export function sanitizeMetaDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
}

/**
 * Generate keywords from content
 */
export function generateKeywords(content: string, additionalKeywords: string[] = []): string[] {
  const commonWords = ["the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by"];
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !commonWords.includes(word));

  const wordFreq: Record<string, number> = {};
  words.forEach((word) => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });

  const sortedWords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);

  return [...new Set([...sortedWords, ...additionalKeywords])];
}

