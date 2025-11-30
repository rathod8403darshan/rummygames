/**
 * Advanced SEO Enhancements
 * Comprehensive SEO utilities for maximum search engine visibility
 */

export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  relatedPages?: Array<{ title: string; url: string }>;
}

/**
 * Generate comprehensive meta tags with all SEO elements
 */
export function generateComprehensiveMetaTags(config: PageSEOConfig): Record<string, string> {
  const tags: Record<string, string> = {
    // Basic Meta
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(", "),
    
    // Robots
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "bingbot": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // Open Graph
    "og:title": config.title,
    "og:description": config.description,
    "og:url": config.canonicalUrl,
    "og:type": config.article ? "article" : "website",
    "og:site_name": "Rummy Games App",
    "og:locale": "en_US",
    "og:locale:alternate": "hi_IN",
    
    // Twitter Card
    "twitter:card": "summary_large_image",
    "twitter:title": config.title,
    "twitter:description": config.description,
    "twitter:site": "@rummygamesapp",
    "twitter:creator": "@rummygamesapp",
    
    // Canonical
    canonical: config.canonicalUrl,
    
    // Article specific
    ...(config.article && {
      "article:published_time": config.publishedTime || new Date().toISOString(),
      "article:modified_time": config.modifiedTime || config.publishedTime || new Date().toISOString(),
      "article:author": config.author || "Rummy Games App",
      "article:section": config.section || "Gaming",
      "article:tag": config.tags?.join(", ") || "",
    }),
  };

  if (config.ogImage) {
    tags["og:image"] = config.ogImage;
    tags["og:image:width"] = "1200";
    tags["og:image:height"] = "630";
    tags["og:image:alt"] = config.title;
    tags["twitter:image"] = config.ogImage;
    tags["twitter:image:alt"] = config.title;
  }

  return tags;
}

/**
 * Generate comprehensive schema markup
 */
export function generateComprehensiveSchema(config: PageSEOConfig): any[] {
  const schemas: any[] = [];

  // Organization Schema (always included)
  schemas.push({
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
  });

  // WebPage Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: config.canonicalUrl,
    name: config.title,
    description: config.description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rummy Games App",
      url: "https://www.rummygamesapp.com",
    },
    about: {
      "@type": "Organization",
      name: "Rummy Games App",
    },
    primaryImageOfPage: config.ogImage ? {
      "@type": "ImageObject",
      url: config.ogImage,
    } : undefined,
  });

  // Breadcrumb Schema
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: config.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  // Article Schema
  if (config.article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: config.title,
      description: config.description,
      image: config.ogImage,
      datePublished: config.publishedTime || new Date().toISOString(),
      dateModified: config.modifiedTime || config.publishedTime || new Date().toISOString(),
      author: {
        "@type": "Person",
        name: config.author || "Rummy Games App",
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
        "@id": config.canonicalUrl,
      },
      keywords: config.keywords.join(", "),
    });
  }

  // FAQ Schema
  if (config.faqs && config.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // Related Pages Schema
  if (config.relatedPages && config.relatedPages.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: config.relatedPages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          "@id": page.url,
          name: page.title,
        },
      })),
    });
  }

  return schemas;
}

/**
 * Generate internal linking structure
 */
export function generateInternalLinks(
  currentPage: string,
  allPages: Array<{ url: string; title: string; keywords: string[] }>
): Array<{ url: string; title: string; relevance: number }> {
  const currentPageData = allPages.find((p) => p.url === currentPage);
  if (!currentPageData) return [];

  const links: Array<{ url: string; title: string; relevance: number }> = [];

  allPages.forEach((page) => {
    if (page.url === currentPage) return;

    let relevance = 0;
    currentPageData.keywords.forEach((keyword) => {
      if (page.keywords.includes(keyword)) {
        relevance += 2;
      }
    });

    if (relevance > 0) {
      links.push({
        url: page.url,
        title: page.title,
        relevance,
      });
    }
  });

  return links.sort((a, b) => b.relevance - a.relevance).slice(0, 5);
}

/**
 * Generate semantic HTML structure
 */
export function generateSemanticHTML(content: {
  heading: string;
  paragraphs: string[];
  lists?: Array<{ items: string[]; ordered?: boolean }>;
  images?: Array<{ src: string; alt: string }>;
}): string {
  let html = `<article><h1>${content.heading}</h1>`;

  content.paragraphs.forEach((para) => {
    html += `<p>${para}</p>`;
  });

  if (content.lists) {
    content.lists.forEach((list) => {
      const tag = list.ordered ? "ol" : "ul";
      html += `<${tag}>`;
      list.items.forEach((item) => {
        html += `<li>${item}</li>`;
      });
      html += `</${tag}>`;
    });
  }

  if (content.images) {
    content.images.forEach((img) => {
      html += `<figure><img src="${img.src}" alt="${img.alt}" /><figcaption>${img.alt}</figcaption></figure>`;
    });
  }

  html += "</article>";
  return html;
}

/**
 * Generate keyword-rich content
 */
export function generateKeywordRichContent(
  primaryKeyword: string,
  secondaryKeywords: string[],
  contentLength: number = 500
): string {
  const sentences = [
    `${primaryKeyword} is one of the most popular card games in India.`,
    `Playing ${primaryKeyword} online has become increasingly popular.`,
    `Learn how to play ${primaryKeyword} and win big prizes.`,
    `${primaryKeyword} requires skill and strategy to master.`,
    `Join millions of players enjoying ${primaryKeyword} every day.`,
  ];

  secondaryKeywords.forEach((keyword) => {
    sentences.push(`Our ${primaryKeyword} platform offers the best ${keyword} experience.`);
    sentences.push(`Discover amazing ${keyword} features in our ${primaryKeyword} app.`);
  });

  let content = "";
  while (content.length < contentLength) {
    content += sentences[Math.floor(Math.random() * sentences.length)] + " ";
  }

  return content.substring(0, contentLength).trim() + "...";
}

/**
 * Generate alt text for images
 */
export function generateImageAltText(
  imageName: string,
  context: string,
  keywords: string[] = []
): string {
  const name = imageName
    .replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const keywordText = keywords.length > 0 ? ` ${keywords.join(" ")}` : "";
  return `${context} - ${name}${keywordText}`;
}

/**
 * Generate meta description with keywords
 */
export function generateKeywordRichMetaDescription(
  content: string,
  primaryKeyword: string,
  maxLength: number = 160
): string {
  const cleanContent = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  
  if (cleanContent.length <= maxLength) {
    return cleanContent.includes(primaryKeyword) 
      ? cleanContent 
      : `${primaryKeyword} - ${cleanContent}`.substring(0, maxLength);
  }

  // Try to include primary keyword
  const sentences = cleanContent.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  let description = "";
  
  for (const sentence of sentences) {
    if ((description + sentence).length <= maxLength - 3) {
      description += sentence + ". ";
    } else {
      break;
    }
  }

  if (!description.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    description = `${primaryKeyword} - ${description}`;
  }

  return description.substring(0, maxLength - 3).trim() + "...";
}

/**
 * Generate structured data for reviews
 */
export function generateReviewSchema(
  itemName: string,
  rating: number,
  reviewCount: number,
  reviews: Array<{
    author: string;
    rating: number;
    text: string;
    date: string;
  }>
): any {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: itemName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };
}

/**
 * Generate local business schema
 */
export function generateLocalBusinessSchema(data: {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  website: string;
  openingHours?: string[];
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      postalCode: data.address.zip,
      addressCountry: data.address.country,
    },
    telephone: data.phone,
    url: data.website,
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
  };
}

/**
 * Generate video schema
 */
export function generateVideoSchema(data: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
  duration?: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    uploadDate: data.uploadDate,
    contentUrl: data.contentUrl,
    duration: data.duration || "PT5M",
    publisher: {
      "@type": "Organization",
      name: "Rummy Games App",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rummygamesapp.com/logo.jpg",
      },
    },
  };
}

/**
 * Generate event schema
 */
export function generateEventSchema(data: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  organizer: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: data.name,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate || data.startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: data.location,
    },
    organizer: {
      "@type": "Organization",
      name: data.organizer,
      url: "https://www.rummygamesapp.com",
    },
  };
}

/**
 * Generate how-to schema
 */
export function generateHowToSchema(data: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  totalTime?: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: data.name,
    description: data.description,
    step: data.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
    totalTime: data.totalTime || "PT15M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
  };
}

/**
 * Generate course schema
 */
export function generateCourseSchema(data: {
  name: string;
  description: string;
  provider: string;
  courseCode?: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider,
      url: "https://www.rummygamesapp.com",
    },
    courseCode: data.courseCode,
  };
}

/**
 * Generate software application schema
 */
export function generateSoftwareApplicationSchema(data: {
  name: string;
  description: string;
  operatingSystem: string;
  applicationCategory: string;
  offers: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.name,
    description: data.description,
    operatingSystem: data.operatingSystem,
    applicationCategory: data.applicationCategory,
    offers: {
      "@type": "Offer",
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: data.aggregateRating ? {
      "@type": "AggregateRating",
      ratingValue: data.aggregateRating.ratingValue,
      reviewCount: data.aggregateRating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    } : undefined,
  };
}

/**
 * Generate collection page schema
 */
export function generateCollectionPageSchema(data: {
  name: string;
  description: string;
  items: Array<{ name: string; url: string; description?: string }>;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.name,
    description: data.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: data.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          "@id": item.url,
          name: item.name,
          description: item.description,
        },
      })),
    },
  };
}

/**
 * Generate QAPage schema
 */
export function generateQAPageSchema(data: {
  mainEntity: Array<{
    name: string;
    acceptedAnswer: {
      text: string;
      author?: string;
    };
  }>;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: data.mainEntity.map((qa) => ({
      "@type": "Question",
      name: qa.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.acceptedAnswer.text,
        author: qa.acceptedAnswer.author ? {
          "@type": "Person",
          name: qa.acceptedAnswer.author,
        } : undefined,
      },
    })),
  };
}

/**
 * Generate search action schema
 */
export function generateSearchActionSchema(searchUrl: string): any {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${searchUrl}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): any {
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
 * Generate rating schema
 */
export function generateRatingSchema(data: {
  itemName: string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  reviewCount?: number;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.itemName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.ratingValue.toString(),
      bestRating: (data.bestRating || 5).toString(),
      worstRating: (data.worstRating || 1).toString(),
      reviewCount: data.reviewCount?.toString() || "0",
    },
  };
}

/**
 * Generate service schema
 */
export function generateServiceSchema(data: {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider,
      url: "https://www.rummygamesapp.com",
    },
    areaServed: {
      "@type": "Country",
      name: data.areaServed,
    },
    serviceType: data.serviceType,
  };
}

/**
 * Generate game schema
 */
export function generateGameSchema(data: {
  name: string;
  description: string;
  gamePlatform: string;
  operatingSystem: string;
  applicationCategory: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: data.name,
    description: data.description,
    gamePlatform: data.gamePlatform,
    operatingSystem: data.operatingSystem,
    applicationCategory: data.applicationCategory,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "125000",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Generate mobile app schema
 */
export function generateMobileAppSchema(data: {
  name: string;
  description: string;
  operatingSystem: string;
  applicationCategory: string;
  downloadUrl: string;
  screenshot?: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: data.name,
    description: data.description,
    operatingSystem: data.operatingSystem,
    applicationCategory: data.applicationCategory,
    downloadUrl: data.downloadUrl,
    screenshot: data.screenshot,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "125000",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Generate person schema
 */
export function generatePersonSchema(data: {
  name: string;
  jobTitle?: string;
  worksFor?: string;
  url?: string;
  image?: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.jobTitle,
    worksFor: data.worksFor ? {
      "@type": "Organization",
      name: data.worksFor,
    } : undefined,
    url: data.url,
    image: data.image,
  };
}

/**
 * Generate organization schema with comprehensive data
 */
export function generateOrganizationSchema(data: {
  name: string;
  url: string;
  logo: string;
  description?: string;
  foundingDate?: string;
  numberOfEmployees?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string[];
  };
  sameAs?: string[];
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: {
      "@type": "ImageObject",
      url: data.logo,
      width: 600,
      height: 200,
    },
    description: data.description,
    foundingDate: data.foundingDate,
    numberOfEmployees: data.numberOfEmployees ? {
      "@type": "QuantitativeValue",
      value: data.numberOfEmployees,
    } : undefined,
    address: data.address ? {
      "@type": "PostalAddress",
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      postalCode: data.address.zip,
      addressCountry: data.address.country,
    } : undefined,
    contactPoint: data.contactPoint ? {
      "@type": "ContactPoint",
      telephone: data.contactPoint.telephone,
      contactType: data.contactPoint.contactType,
      areaServed: data.contactPoint.areaServed,
      availableLanguage: data.contactPoint.availableLanguage,
    } : undefined,
    sameAs: data.sameAs || [],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "125000",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Generate website schema
 */
export function generateWebsiteSchema(data: {
  name: string;
  url: string;
  description?: string;
  inLanguage?: string[];
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
    description: data.description,
    inLanguage: data.inLanguage || ["en", "hi"],
    potentialAction: data.potentialAction ? {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: data.potentialAction.target,
      },
      "query-input": data.potentialAction.queryInput,
    } : undefined,
    publisher: {
      "@type": "Organization",
      name: data.name,
      url: data.url,
    },
  };
}

/**
 * Generate item list schema
 */
export function generateItemListSchema(data: {
  name: string;
  description?: string;
  items: Array<{
    name: string;
    url: string;
    description?: string;
    image?: string;
  }>;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data.name,
    description: data.description,
    itemListElement: data.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": item.url.includes("/blog/") ? "Article" : "WebPage",
        "@id": item.url,
        name: item.name,
        description: item.description,
        image: item.image,
      },
    })),
  };
}

/**
 * Generate creative work schema
 */
export function generateCreativeWorkSchema(data: {
  name: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.name,
    description: data.description,
    author: {
      "@type": "Person",
      name: data.author,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    url: data.url,
    image: data.image,
    publisher: {
      "@type": "Organization",
      name: "Rummy Games App",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rummygamesapp.com/logo.jpg",
      },
    },
  };
}

/**
 * Generate product schema
 */
export function generateProductSchema(data: {
  name: string;
  description: string;
  image: string;
  brand: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}): any {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    image: data.image,
    brand: {
      "@type": "Brand",
      name: data.brand,
    },
    offers: {
      "@type": "Offer",
      url: data.offers.url,
      priceCurrency: data.offers.priceCurrency,
      price: data.offers.price,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      availability: `https://schema.org/${data.offers.availability}`,
      seller: {
        "@type": "Organization",
        name: "Rummy Games App",
        url: "https://www.rummygamesapp.com",
      },
    },
    aggregateRating: data.aggregateRating ? {
      "@type": "AggregateRating",
      ratingValue: data.aggregateRating.ratingValue,
      reviewCount: data.aggregateRating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    } : undefined,
  };
}

/**
 * Generate all schemas for a page
 */
export function generateAllSchemasForPage(config: PageSEOConfig): any[] {
  const schemas: any[] = [];

  // Always include Organization and Website
  schemas.push(generateOrganizationSchema({
    name: "Rummy Games App",
    url: "https://www.rummygamesapp.com",
    logo: "https://www.rummygamesapp.com/logo.jpg",
    description: "India's most trusted rummy gaming platform",
    sameAs: [
      "https://www.facebook.com/rummygamesapp",
      "https://www.twitter.com/rummygamesapp",
      "https://www.instagram.com/rummygamesapp",
      "https://www.youtube.com/rummygamesapp",
    ],
    contactPoint: {
      telephone: "+91-1800-XXX-XXXX",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  }));

  schemas.push(generateWebsiteSchema({
    name: "Rummy Games App",
    url: "https://www.rummygamesapp.com",
    description: "Play real cash rummy online",
    inLanguage: ["en", "hi"],
    potentialAction: {
      target: "https://www.rummygamesapp.com/search?q={search_term_string}",
      queryInput: "required name=search_term_string",
    },
  }));

  // Add page-specific schemas
  const pageSchemas = generateComprehensiveSchema(config);
  schemas.push(...pageSchemas);

  return schemas;
}

/**
 * Optimize title tag
 */
export function optimizeTitleTag(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) return title;
  
  // Try to cut at word boundary
  const words = title.split(" ");
  let optimized = "";
  
  for (const word of words) {
    if ((optimized + " " + word).length <= maxLength - 3) {
      optimized += (optimized ? " " : "") + word;
    } else {
      break;
    }
  }
  
  return optimized.trim() + "...";
}

/**
 * Optimize meta description
 */
export function optimizeMetaDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) return description;
  
  // Try to cut at sentence boundary
  const sentences = description.match(/[^.!?]+[.!?]+/g) || [];
  let optimized = "";
  
  for (const sentence of sentences) {
    if ((optimized + sentence).length <= maxLength - 3) {
      optimized += sentence;
    } else {
      break;
    }
  }
  
  if (optimized.length === 0) {
    // Fallback to word boundary
    const words = description.split(" ");
    for (const word of words) {
      if ((optimized + " " + word).length <= maxLength - 3) {
        optimized += (optimized ? " " : "") + word;
      } else {
        break;
      }
    }
  }
  
  return optimized.trim() + (optimized.length < description.length ? "..." : "");
}

/**
 * Generate sitemap entry with all SEO data
 */
export function generateSitemapEntry(data: {
  url: string;
  lastModified?: Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  alternates?: Record<string, string>;
}): any {
  return {
    url: data.url,
    lastModified: data.lastModified || new Date(),
    changeFrequency: data.changeFrequency || "weekly",
    priority: data.priority || 0.8,
    alternates: data.alternates || {},
  };
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxtContent(data: {
  sitemapUrl: string;
  allowPaths?: string[];
  disallowPaths?: string[];
  crawlDelay?: number;
}): string {
  let content = "User-agent: *\n";
  
  if (data.allowPaths && data.allowPaths.length > 0) {
    data.allowPaths.forEach((path) => {
      content += `Allow: ${path}\n`;
    });
  }
  
  if (data.disallowPaths && data.disallowPaths.length > 0) {
    data.disallowPaths.forEach((path) => {
      content += `Disallow: ${path}\n`;
    });
  }
  
  if (data.crawlDelay) {
    content += `Crawl-delay: ${data.crawlDelay}\n`;
  }
  
  content += `\nSitemap: ${data.sitemapUrl}\n`;
  
  return content;
}

/**
 * Generate hreflang tags
 */
export function generateHreflangTags(
  currentUrl: string,
  languages: string[] = ["en", "hi"]
): Array<{ rel: string; hreflang: string; href: string }> {
  return languages.map((lang) => {
    const langUrl = currentUrl.replace(/\/[a-z]{2}(\/|$)/, `/${lang}$1`);
    return {
      rel: "alternate",
      hreflang: lang,
      href: langUrl,
    };
  });
}

/**
 * Generate preconnect and dns-prefetch tags
 */
export function generatePerformanceTags(): {
  preconnect: string[];
  dnsPrefetch: string[];
} {
  return {
    preconnect: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
      "https://www.rummygamesapp.com",
    ],
    dnsPrefetch: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
    ],
  };
}

/**
 * Generate all meta tags for a page
 */
export function generateAllMetaTags(config: PageSEOConfig): string {
  const tags = generateComprehensiveMetaTags(config);
  return Object.entries(tags)
    .map(([key, value]) => {
      if (key.startsWith("og:") || key.startsWith("article:")) {
        return `<meta property="${key}" content="${value}" />`;
      } else if (key.startsWith("twitter:")) {
        return `<meta name="${key}" content="${value}" />`;
      } else if (key === "canonical") {
        return `<link rel="canonical" href="${value}" />`;
      } else {
        return `<meta name="${key}" content="${value}" />`;
      }
    })
    .join("\n");
}

/**
 * Generate all JSON-LD scripts
 */
export function generateAllJSONLDScripts(config: PageSEOConfig): string {
  const schemas = generateAllSchemasForPage(config);
  return schemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`)
    .join("\n");
}

/**
 * Generate comprehensive SEO data for a page
 */
export function generatePageSEO(config: PageSEOConfig): {
  metaTags: string;
  jsonLdScripts: string;
  hreflangTags: Array<{ rel: string; hreflang: string; href: string }>;
  performanceTags: { preconnect: string[]; dnsPrefetch: string[] };
} {
  return {
    metaTags: generateAllMetaTags(config),
    jsonLdScripts: generateAllJSONLDScripts(config),
    hreflangTags: generateHreflangTags(config.canonicalUrl),
    performanceTags: generatePerformanceTags(),
  };
}

