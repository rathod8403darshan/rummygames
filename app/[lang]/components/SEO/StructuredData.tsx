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
    
    // Organization Schema
    const organizationSchema = {
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

    // WebSite Schema
    const websiteSchema = {
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

    // MobileApplication Schema
    const mobileAppSchema = {
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

    // BreadcrumbList Schema
    const breadcrumbSchema = {
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

    // FAQPage Schema (for FAQ pages)
    const faqSchema = {
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

    // Article Schema (for blog posts)
    const articleSchema = title
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "image": image || "https://www.rummygamesapp.com/images/default-article.jpg",
          "datePublished": datePublished || new Date().toISOString(),
          "dateModified": dateModified || new Date().toISOString(),
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
        }
      : null;

    // HowTo Schema (for how-to-play pages)
    const howToSchema = pageType === "how-to-play"
      ? {
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
        }
      : null;

    // Game Schema
    const gameSchema = {
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

    // Combine all schemas
    const schemas = [
      organizationSchema,
      websiteSchema,
      mobileAppSchema,
      breadcrumbSchema,
      faqSchema,
      gameSchema,
    ];

    if (articleSchema) schemas.push(articleSchema);
    if (howToSchema) schemas.push(howToSchema);

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => script.remove());

    // Add new structured data
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach((script) => script.remove());
    };
  }, [lang, pageType, title, description, image, datePublished, dateModified, author]);

  return null;
}

