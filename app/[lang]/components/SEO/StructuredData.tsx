"use client";

import { useEffect } from "react";

interface StructuredDataProps {
  lang: string;
  pageType?: "home" | "download" | "how-to-play" | "real-cash-rummy" | "blog" | "tournaments" | "rules" | "strategies";
  title?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

// Allowed schema types for our array, for TS safety
type Schema =
  | ReturnType<typeof buildOrganizationSchema>
  | ReturnType<typeof buildWebsiteSchema>
  | ReturnType<typeof buildMobileAppSchema>
  | ReturnType<typeof buildBreadcrumbSchema>
  | ReturnType<typeof buildFaqSchema>
  | ReturnType<typeof buildGameSchema>
  | ReturnType<typeof buildArticleSchema>
  | ReturnType<typeof buildHowToSchema>;

// Helper functions return schema objects, properly typed
function buildOrganizationSchema(isHindi: boolean) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rummy Games App",
    "alternateName": "रम्मी गेम्स ऐप",
    "url": "https://www.rummygamesapp.com",
    "logo": "https://www.rummygamesapp.com/logo.jpg",
    "description": isHindi
      ? "भारत का सबसे भरोसेमंद रम्मी गेमिंग प्लेटफॉर्म"
      : "India's most trusted rummy gaming platform",
    "sameAs": [
      "https://www.facebook.com/rummygamesapp",
      "https://www.twitter.com/rummygamesapp",
      "https://www.instagram.com/rummygamesapp",
      "https://www.youtube.com/rummygamesapp",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1800-XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"],
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
  };
}

function buildWebsiteSchema(lang: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rummy Games App",
    "url": "https://www.rummygamesapp.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.rummygamesapp.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    "inLanguage": [lang, "en", "hi"],
  };
}

function buildMobileAppSchema(isHindi: boolean) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": isHindi ? "रम्मी गेम्स ऐप" : "Rummy Games App",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "125000",
      "bestRating": "5",
      "worstRating": "1",
    },
    "screenshot": "https://www.rummygamesapp.com/images/app-screenshot.jpg",
  };
}

function buildBreadcrumbSchema(isHindi: boolean, lang: string, pageType: string, title?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isHindi ? "होम" : "Home",
        "item": `https://www.rummygamesapp.com/${lang}`,
      },
      ...(pageType !== "home"
        ? [
            {
              "@type": "ListItem",
              "position": 2,
              "name": title || (isHindi ? "पेज" : "Page"),
              "item": `https://www.rummygamesapp.com/${lang}/${pageType}`,
            },
          ]
        : []),
    ],
  };
}

function buildFaqSchema(isHindi: boolean) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isHindi
          ? "रम्मी गेम्स ऐप क्या है?"
          : "What is Rummy Games App?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isHindi
            ? "रम्मी गेम्स ऐप भारत का सबसे भरोसेमंद और सुरक्षित रम्मी गेमिंग प्लेटफॉर्म है जहाँ आप रियल कैश रम्मी खेल सकते हैं।"
            : "Rummy Games App is India's most trusted and secure rummy gaming platform where you can play real cash rummy games.",
        },
      },
      {
        "@type": "Question",
        "name": isHindi
          ? "क्या रम्मी गेम्स ऐप कानूनी है?"
          : "Is Rummy Games App legal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isHindi
            ? "हाँ, रम्मी गेम्स ऐप 100% कानूनी है और भारत में स्किल-बेस्ड गेमिंग के तहत संचालित होता है।"
            : "Yes, Rummy Games App is 100% legal and operates under skill-based gaming in India.",
        },
      },
      {
        "@type": "Question",
        "name": isHindi
          ? "मैं पैसे कैसे निकाल सकता हूँ?"
          : "How can I withdraw money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isHindi
            ? "आप अपने बैंक खाते या UPI में तुरंत पैसे निकाल सकते हैं। निकासी प्रक्रिया तेज़ और सुरक्षित है।"
            : "You can withdraw money instantly to your bank account or UPI. The withdrawal process is fast and secure.",
        },
      },
    ],
  };
}

function buildGameSchema(isHindi: boolean) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": isHindi ? "रम्मी गेम्स" : "Rummy Games",
    "description": isHindi
      ? "ऑनलाइन रियल कैश रम्मी गेम खेलें"
      : "Play online real cash rummy games",
    "applicationCategory": "Game",
    "operatingSystem": "Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "125000",
    },
  };
}

// Helper function to ensure date is in ISO 8601 format
function ensureISO8601Date(dateString: string | undefined): string {
  if (!dateString) {
    return new Date().toISOString();
  }
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(dateString)) {
    return dateString;
  }
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function buildArticleSchema(
  title?: string,
  description?: string,
  image?: string,
  datePublished?: string,
  dateModified?: string,
  author?: string,
  lang?: string,
  pageType?: string
) {
  if (!title) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || "https://www.rummygamesapp.com/images/default-article.jpg",
    "datePublished": ensureISO8601Date(datePublished),
    "dateModified": ensureISO8601Date(dateModified || datePublished),
    "author": {
      "@type": "Person",
      "name": author || "Rummy Games App Team",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rummy Games App",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.rummygamesapp.com/logo.jpg",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.rummygamesapp.com/${lang}/${pageType}`,
    },
  };
}

function buildHowToSchema(pageType: string, isHindi: boolean) {
  if (pageType !== "how-to-play") return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": isHindi ? "रम्मी कैसे खेलें" : "How to Play Rummy",
    "description": isHindi
      ? "रम्मी खेलने के लिए पूरी गाइड"
      : "Complete guide on how to play rummy",
    "step": [
      {
        "@type": "HowToStep",
        "name": isHindi ? "ऐप डाउनलोड करें" : "Download the App",
        "text": isHindi
          ? "रम्मी गेम्स ऐप को अपने स्मार्टफोन पर डाउनलोड करें"
          : "Download Rummy Games App on your smartphone",
      },
      {
        "@type": "HowToStep",
        "name": isHindi ? "अकाउंट बनाएं" : "Create Account",
        "text": isHindi
          ? "एक नया अकाउंट बनाएं और सत्यापन करें"
          : "Create a new account and verify it",
      },
      {
        "@type": "HowToStep",
        "name": isHindi ? "गेम शुरू करें" : "Start Playing",
        "text": isHindi
          ? "एक टेबल चुनें और रम्मी खेलना शुरू करें"
          : "Choose a table and start playing rummy",
      },
    ],
  };
}

export function StructuredData({
  lang,
  pageType = "home",
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: StructuredDataProps) {
  useEffect(() => {
    const isHindi = lang === "hi";

    // Build schemas individually (typed)
    const organizationSchema = buildOrganizationSchema(isHindi);
    const websiteSchema = buildWebsiteSchema(lang);
    const mobileAppSchema = buildMobileAppSchema(isHindi);
    const breadcrumbSchema = buildBreadcrumbSchema(isHindi, lang, pageType, title);
    const faqSchema = buildFaqSchema(isHindi);
    const gameSchema = buildGameSchema(isHindi);
    const articleSchema = buildArticleSchema(
      title,
      description,
      image,
      datePublished,
      dateModified,
      author,
      lang,
      pageType
    );
    const howToSchema = buildHowToSchema(pageType, isHindi);

    // TS-safe schemas array (only push valid types)
    const schemas: Schema[] = [
      organizationSchema,
      websiteSchema,
      mobileAppSchema,
      breadcrumbSchema,
      faqSchema,
      gameSchema,
    ];
    if (articleSchema) schemas.push(articleSchema as NonNullable<typeof articleSchema>);
    if (howToSchema) schemas.push(howToSchema as NonNullable<typeof howToSchema>);

    // Remove only our own structured data scripts (identified by data attribute)
    const scriptIdPrefix = "structured-data-";
    const existingScripts = document.querySelectorAll(
      `script[type="application/ld+json"][data-source="${scriptIdPrefix}"]`
    );
    existingScripts.forEach((script) => script.remove());

    // Add new structured data with unique identifiers
    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-source", scriptIdPrefix);
      script.setAttribute("data-index", index.toString());
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Only remove our own scripts on cleanup
      const scripts = document.querySelectorAll(
        `script[type="application/ld+json"][data-source="${scriptIdPrefix}"]`
      );
      scripts.forEach((script) => script.remove());
    };
  }, [lang, pageType, title, description, image, datePublished, dateModified, author]);

  return null;
}

