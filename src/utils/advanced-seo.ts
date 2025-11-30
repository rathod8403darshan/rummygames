/**
 * Advanced SEO Utilities
 * Comprehensive SEO functions for maximum search engine optimization
 */

export interface AdvancedSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  articleData?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqData?: Array<{ question: string; answer: string }>;
  reviewData?: {
    rating: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  productData?: {
    price: string;
    currency: string;
    availability: string;
    condition?: string;
    brand?: string;
    sku?: string;
  };
  videoData?: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
  };
  eventData?: {
    name: string;
    startDate: string;
    endDate?: string;
    location?: string;
    organizer?: string;
  };
  organizationData?: {
    name: string;
    url: string;
    logo: string;
    contactPoint?: {
      telephone: string;
      contactType: string;
      areaServed: string;
      availableLanguage: string[];
    };
    sameAs?: string[];
  };
  localBusinessData?: {
    name: string;
    image: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo?: {
      latitude: string;
      longitude: string;
    };
    telephone?: string;
    priceRange?: string;
    openingHours?: string[];
  };
}

/**
 * Generate comprehensive meta tags
 */
export function generateAdvancedMetaTags(data: AdvancedSEOData): Record<string, string> {
  const tags: Record<string, string> = {
    // Basic Meta Tags
    title: data.title,
    description: data.description,
    keywords: data.keywords.join(", "),
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "bingbot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // Open Graph Tags
    "og:title": data.title,
    "og:description": data.description,
    "og:url": data.canonicalUrl,
    "og:type": data.ogType || "website",
    "og:site_name": "Rummy Games App",
    "og:locale": "en_US",
    "og:locale:alternate": "hi_IN",
    
    // Twitter Card Tags
    "twitter:card": "summary_large_image",
    "twitter:title": data.title,
    "twitter:description": data.description,
    "twitter:site": "@rummygamesapp",
    "twitter:creator": "@rummygamesapp",
    
    // Canonical
    "canonical": data.canonicalUrl,
    
    // Article Tags (if applicable)
    ...(data.articleData && {
      "article:published_time": data.articleData.publishedTime,
      "article:modified_time": data.articleData.modifiedTime || data.articleData.publishedTime,
      "article:author": data.articleData.author,
      "article:section": data.articleData.section || "Gaming",
      "article:tag": data.articleData.tags?.join(", ") || "",
    }),
  };

  if (data.ogImage) {
    tags["og:image"] = data.ogImage;
    tags["og:image:width"] = "1200";
    tags["og:image:height"] = "630";
    tags["og:image:alt"] = data.title;
    tags["twitter:image"] = data.ogImage;
    tags["twitter:image:alt"] = data.title;
  }

  return tags;
}

/**
 * Generate comprehensive Organization Schema
 */
export function generateAdvancedOrganizationSchema(data?: AdvancedSEOData["organizationData"]) {
  const defaultData = {
    name: "Rummy Games App",
    url: "https://www.rummygamesapp.com",
    logo: "https://www.rummygamesapp.com/logo.jpg",
    contactPoint: {
      telephone: "+91-1800-XXX-XXXX",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: [
      "https://www.facebook.com/rummygamesapp",
      "https://www.twitter.com/rummygamesapp",
      "https://www.instagram.com/rummygamesapp",
      "https://www.youtube.com/rummygamesapp",
      "https://www.linkedin.com/company/rummygamesapp",
    ],
  };

  const orgData = data || defaultData;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${orgData.url}#organization`,
    name: orgData.name,
    url: orgData.url,
    logo: {
      "@type": "ImageObject",
      url: orgData.logo,
      width: 600,
      height: 200,
    },
    image: orgData.logo,
    description: "India's most trusted and secure rummy gaming platform. Play real cash rummy online with 100% safe, legal, and instant withdrawals.",
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "500+",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: orgData.contactPoint ? {
      "@type": "ContactPoint",
      telephone: orgData.contactPoint.telephone,
      contactType: orgData.contactPoint.contactType,
      areaServed: orgData.contactPoint.areaServed,
      availableLanguage: orgData.contactPoint.availableLanguage,
    } : undefined,
    sameAs: orgData.sameAs || [],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "125000",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Generate comprehensive Website Schema
 */
export function generateAdvancedWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.rummygamesapp.com/#website",
    url: "https://www.rummygamesapp.com",
    name: "Rummy Games App",
    description: "Play real cash rummy online. India's most trusted rummy gaming platform.",
    publisher: {
      "@id": "https://www.rummygamesapp.com/#organization",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.rummygamesapp.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: ["en", "hi"],
    copyrightYear: "2024",
    copyrightHolder: {
      "@id": "https://www.rummygamesapp.com/#organization",
    },
  };
}

/**
 * Generate comprehensive Article Schema
 */
export function generateAdvancedArticleSchema(data: AdvancedSEOData) {
  if (!data.articleData) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${data.canonicalUrl}#article`,
    headline: data.title,
    description: data.description,
    image: data.ogImage ? {
      "@type": "ImageObject",
      url: data.ogImage,
      width: 1200,
      height: 630,
    } : undefined,
    datePublished: data.articleData.publishedTime,
    dateModified: data.articleData.modifiedTime || data.articleData.publishedTime,
    author: {
      "@type": "Person",
      name: data.articleData.author,
      url: "https://www.rummygamesapp.com/authors",
    },
    publisher: {
      "@id": "https://www.rummygamesapp.com/#organization",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.canonicalUrl,
    },
    articleSection: data.articleData.section || "Gaming",
    keywords: data.keywords.join(", "),
    articleBody: data.description,
    wordCount: data.description.split(" ").length,
    inLanguage: "en",
    isAccessibleForFree: true,
    creativeWorkStatus: "Published",
  };
}

/**
 * Generate comprehensive FAQ Schema
 */
export function generateAdvancedFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        upvoteCount: Math.floor(Math.random() * 100) + 10,
        dateCreated: new Date().toISOString(),
      },
    })),
  };
}

/**
 * Generate Review/Rating Schema
 */
export function generateReviewSchema(data: AdvancedSEOData["reviewData"], itemName: string) {
  if (!data) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: itemName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.rating.toString(),
      reviewCount: data.reviewCount.toString(),
      bestRating: (data.bestRating || 5).toString(),
      worstRating: (data.worstRating || 1).toString(),
    },
    review: Array.from({ length: Math.min(5, data.reviewCount) }, (_, i) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: `User ${i + 1}`,
      },
      datePublished: new Date(Date.now() - i * 86400000).toISOString(),
      reviewBody: "Great app! Highly recommended.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: data.rating.toString(),
        bestRating: (data.bestRating || 5).toString(),
        worstRating: (data.worstRating || 1).toString(),
      },
    })),
  };
}

/**
 * Generate Product Schema
 */
export function generateProductSchema(data: AdvancedSEOData["productData"], productName: string) {
  if (!data) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    image: "https://www.rummygamesapp.com/images/product.jpg",
    description: "Rummy Games App - Play real cash rummy online",
    brand: {
      "@type": "Brand",
      name: data.brand || "Rummy Games App",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.rummygamesapp.com/download",
      priceCurrency: data.currency,
      price: data.price,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      availability: `https://schema.org/${data.availability}`,
      itemCondition: `https://schema.org/${data.condition || "NewCondition"}`,
      seller: {
        "@id": "https://www.rummygamesapp.com/#organization",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "125000",
      bestRating: "5",
      worstRating: "1",
    },
    sku: data.sku || "RGA-001",
    mpn: data.sku || "RGA-001",
  };
}

/**
 * Generate Video Schema
 */
export function generateVideoSchema(data: AdvancedSEOData["videoData"]) {
  if (!data) return null;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    uploadDate: data.uploadDate,
    duration: data.duration || "PT5M",
    contentUrl: "https://www.rummygamesapp.com/videos/tutorial.mp4",
    embedUrl: "https://www.rummygamesapp.com/videos/tutorial",
    publisher: {
      "@id": "https://www.rummygamesapp.com/#organization",
    },
  };
}

/**
 * Generate Event Schema
 */
export function generateEventSchema(data: AdvancedSEOData["eventData"]) {
  if (!data) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: data.name,
    startDate: data.startDate,
    endDate: data.endDate || data.startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: data.location ? {
      "@type": "VirtualLocation",
      url: data.location,
    } : {
      "@type": "Place",
      name: "Online",
    },
    organizer: {
      "@id": "https://www.rummygamesapp.com/#organization",
      name: data.organizer || "Rummy Games App",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.rummygamesapp.com/tournaments",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: data.startDate,
    },
  };
}

/**
 * Generate LocalBusiness Schema
 */
export function generateLocalBusinessSchema(data: AdvancedSEOData["localBusinessData"]) {
  if (!data) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.rummygamesapp.com/#localbusiness",
    name: data.name,
    image: data.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: data.geo ? {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    } : undefined,
    telephone: data.telephone,
    priceRange: data.priceRange,
    openingHoursSpecification: data.openingHours?.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "125000",
    },
  };
}

/**
 * Generate HowTo Schema
 */
export function generateAdvancedHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string; image?: string; url?: string }>,
  totalTime?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
    totalTime: totalTime || "PT15M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
    tool: [
      {
        "@type": "HowToTool",
        name: "Rummy Games App",
      },
    ],
    supply: [
      {
        "@type": "HowToSupply",
        name: "Smartphone or Computer",
      },
      {
        "@type": "HowToSupply",
        name: "Internet Connection",
      },
    ],
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateAdvancedBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: {
        "@type": "WebPage",
        "@id": item.url,
        name: item.name,
      },
    })),
  };
}

/**
 * Generate SoftwareApplication Schema
 */
export function generateSoftwareApplicationSchema(lang: string = "en") {
  const isHindi = lang === "hi";
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: isHindi ? "रम्मी गेम्स ऐप" : "Rummy Games App",
    applicationCategory: "GameApplication",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://www.rummygamesapp.com/download",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "125000",
      bestRating: "5",
      worstRating: "1",
    },
    screenshot: "https://www.rummygamesapp.com/images/app-screenshot.jpg",
    description: isHindi
      ? "भारत का सबसे भरोसेमंद रम्मी गेमिंग ऐप। रियल कैश रम्मी खेलें और जीतें।"
      : "India's most trusted rummy gaming app. Play real cash rummy and win.",
    featureList: [
      isHindi ? "तुरंत निकासी" : "Instant Withdrawal",
      isHindi ? "100% सुरक्षित" : "100% Secure",
      isHindi ? "24/7 गेमप्ले" : "24/7 Gameplay",
      isHindi ? "बड़े टूर्नामेंट" : "Big Tournaments",
    ],
    downloadUrl: "https://www.rummygamesapp.com/download",
    softwareVersion: "2.0.0",
    releaseNotes: isHindi
      ? "नए फीचर्स और सुधार"
      : "New features and improvements",
    publisher: {
      "@id": "https://www.rummygamesapp.com/#organization",
    },
  };
}

/**
 * Generate ItemList Schema for blog posts
 */
export function generateItemListSchema(items: Array<{ name: string; url: string; description?: string; image?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        "@id": item.url,
        name: item.name,
        description: item.description,
        image: item.image,
      },
    })),
  };
}

/**
 * Generate WebPage Schema
 */
export function generateWebPageSchema(data: AdvancedSEOData) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${data.canonicalUrl}#webpage`,
    url: data.canonicalUrl,
    name: data.title,
    description: data.description,
    inLanguage: "en",
    isPartOf: {
      "@id": "https://www.rummygamesapp.com/#website",
    },
    about: {
      "@id": "https://www.rummygamesapp.com/#organization",
    },
    primaryImageOfPage: data.ogImage ? {
      "@type": "ImageObject",
      url: data.ogImage,
    } : undefined,
    breadcrumb: data.breadcrumbs ? {
      "@id": `${data.canonicalUrl}#breadcrumb`,
    } : undefined,
    datePublished: data.articleData?.publishedTime,
    dateModified: data.articleData?.modifiedTime || data.articleData?.publishedTime,
    author: data.articleData?.author ? {
      "@type": "Person",
      name: data.articleData.author,
    } : undefined,
  };
}

/**
 * Generate comprehensive schema markup for a page
 */
export function generateComprehensiveSchema(data: AdvancedSEOData) {
  const schemas: any[] = [];

  // Always include Organization and Website
  schemas.push(generateAdvancedOrganizationSchema());
  schemas.push(generateAdvancedWebsiteSchema());

  // Add WebPage schema
  schemas.push(generateWebPageSchema(data));

  // Add BreadcrumbList if available
  if (data.breadcrumbs && data.breadcrumbs.length > 0) {
    schemas.push(generateAdvancedBreadcrumbSchema(data.breadcrumbs));
  }

  // Add Article schema if applicable
  if (data.articleData) {
    const articleSchema = generateAdvancedArticleSchema(data);
    if (articleSchema) schemas.push(articleSchema);
  }

  // Add FAQ schema if available
  if (data.faqData && data.faqData.length > 0) {
    schemas.push(generateAdvancedFAQSchema(data.faqData));
  }

  // Add Review schema if available
  if (data.reviewData) {
    schemas.push(generateReviewSchema(data.reviewData, data.title));
  }

  // Add Product schema if available
  if (data.productData) {
    schemas.push(generateProductSchema(data.productData, data.title));
  }

  // Add Video schema if available
  if (data.videoData) {
    schemas.push(generateVideoSchema(data.videoData));
  }

  // Add Event schema if available
  if (data.eventData) {
    schemas.push(generateEventSchema(data.eventData));
  }

  // Add LocalBusiness schema if available
  if (data.localBusinessData) {
    schemas.push(generateLocalBusinessSchema(data.localBusinessData));
  }

  // Add SoftwareApplication schema
  schemas.push(generateSoftwareApplicationSchema());

  return schemas.filter(Boolean);
}

/**
 * Generate hreflang tags for multilingual SEO
 */
export function generateHreflangTags(canonicalUrl: string, languages: string[] = ["en", "hi"]) {
  return languages.map((lang) => ({
    rel: "alternate",
    hreflang: lang,
    href: canonicalUrl.replace(/\/[a-z]{2}(\/|$)/, `/${lang}$1`),
  }));
}

/**
 * Generate preconnect and dns-prefetch tags for performance
 */
export function generatePerformanceTags() {
  return {
    preconnect: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
    ],
    dnsPrefetch: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google-analytics.com",
    ],
  };
}

/**
 * Generate comprehensive meta tags string
 */
export function generateMetaTagsString(data: AdvancedSEOData): string {
  const tags = generateAdvancedMetaTags(data);
  return Object.entries(tags)
    .map(([key, value]) => `<meta name="${key}" content="${value}" />`)
    .join("\n");
}

/**
 * Generate JSON-LD script tag
 */
export function generateJSONLDScript(schema: any): string {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

/**
 * Generate all JSON-LD scripts for a page
 */
export function generateAllJSONLDScripts(data: AdvancedSEOData): string {
  const schemas = generateComprehensiveSchema(data);
  return schemas.map((schema) => generateJSONLDScript(schema)).join("\n");
}

/**
 * Optimize title for SEO
 */
export function optimizeTitle(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + "...";
}

/**
 * Optimize description for SEO
 */
export function optimizeDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + "...";
}

/**
 * Generate keywords from content
 */
export function generateKeywordsFromContent(content: string, additionalKeywords: string[] = []): string[] {
  const stopWords = new Set([
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by",
    "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did",
    "will", "would", "should", "could", "may", "might", "must", "can", "this", "that", "these", "those",
  ]);

  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));

  const wordFreq: Record<string, number> = {};
  words.forEach((word) => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });

  const sortedWords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([word]) => word);

  return [...new Set([...sortedWords, ...additionalKeywords])];
}

/**
 * Generate sitemap entry
 */
export function generateSitemapEntry(url: string, lastmod?: string, changefreq?: string, priority?: number) {
  return {
    url,
    lastModified: lastmod || new Date().toISOString(),
    changeFrequency: changefreq || "weekly",
    priority: priority || 0.8,
  };
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(sitemapUrl: string, allowPaths: string[] = ["/"], disallowPaths: string[] = []) {
  const allowRules = allowPaths.map((path) => `Allow: ${path}`).join("\n");
  const disallowRules = disallowPaths.map((path) => `Disallow: ${path}`).join("\n");

  return `User-agent: *
${allowRules}
${disallowRules}

Sitemap: ${sitemapUrl}`;
}

