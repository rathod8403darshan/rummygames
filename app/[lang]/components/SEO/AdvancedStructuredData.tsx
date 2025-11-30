"use client";

import { useEffect } from "react";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";
import {
  generateComprehensiveSchema,
  generateAdvancedOrganizationSchema,
  generateAdvancedWebsiteSchema,
  generateSoftwareApplicationSchema,
} from "@/src/utils/advanced-seo";

interface AdvancedStructuredDataProps {
  lang: string;
  seoData?: Partial<AdvancedSEOData>;
  pageType?: "home" | "download" | "how-to-play" | "real-cash-rummy" | "blog" | "tournaments" | "rules" | "strategies";
}

export function AdvancedStructuredData({
  lang,
  seoData,
  pageType = "home",
}: AdvancedStructuredDataProps) {
  useEffect(() => {
    const isHindi = lang === "hi";

    // Default SEO data
    const defaultSEOData: AdvancedSEOData = {
      title: isHindi
        ? "रम्मी गेम्स – ऑनलाइन रियल कैश रम्मी खेलें | rummygamesapp.com"
        : "Rummy Games – Play Real Cash Rummy Online | rummygamesapp.com",
      description: isHindi
        ? "Rummy Games App डाउनलोड करें और रियल कैश रम्मी ऑनलाइन खेलें। 100% सुरक्षित, कानूनी और तेज़ निकासी वाला भारत का भरोसेमंद रम्मी ऐप।"
        : "Download Rummy Games App and play real cash rummy online. 100% safe, legal, fast withdrawal, and India's most trusted rummy platform.",
      keywords: isHindi
        ? ["रम्मी गेम्स", "रम्मी ऐप", "रियल कैश रम्मी", "ऑनलाइन रम्मी", "बेस्ट रम्मी ऐप"]
        : ["rummy games", "rummy app", "real cash rummy", "online rummy", "best rummy app"],
      canonicalUrl: `https://www.rummygamesapp.com/${lang}${pageType !== "home" ? `/${pageType}` : ""}`,
      ogImage: "https://www.rummygamesapp.com/images/og-image.jpg",
      ogType: "website",
      ...seoData,
    };

    // Generate all schemas
    const schemas = generateComprehensiveSchema(defaultSEOData);

    // Remove only our own structured data scripts (identified by data attribute)
    const scriptIdPrefix = "advanced-structured-data-";
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
      script.text = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    });

    return () => {
      // Only remove our own scripts on cleanup
      const scripts = document.querySelectorAll(
        `script[type="application/ld+json"][data-source="${scriptIdPrefix}"]`
      );
      scripts.forEach((script) => script.remove());
    };
  }, [lang, pageType, seoData]);

  return null;
}

