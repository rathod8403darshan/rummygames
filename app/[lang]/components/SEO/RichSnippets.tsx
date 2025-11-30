"use client";

import { useEffect } from "react";

interface RichSnippetsProps {
  type: "review" | "product" | "event" | "article" | "faq" | "video" | "breadcrumb" | "organization";
  data: any;
}

/**
 * Rich Snippets Component for Enhanced SEO
 * Generates various types of structured data for rich snippets in search results
 */
export function RichSnippets({ type, data }: RichSnippetsProps) {
  useEffect(() => {
    let schema: any = null;

    switch (type) {
      case "review":
        schema = {
          "@context": "https://schema.org",
          "@type": "Product",
          name: data.name,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: data.rating,
            reviewCount: data.reviewCount,
            bestRating: data.bestRating || 5,
            worstRating: data.worstRating || 1,
          },
          review: data.reviews?.map((review: any) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: review.author,
            },
            datePublished: review.date,
            reviewBody: review.text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating,
              bestRating: 5,
              worstRating: 1,
            },
          })) || [],
        };
        break;

      case "product":
        schema = {
          "@context": "https://schema.org",
          "@type": "Product",
          name: data.name,
          image: data.image,
          description: data.description,
          brand: {
            "@type": "Brand",
            name: data.brand || "Rummy Games App",
          },
          offers: {
            "@type": "Offer",
            url: data.url,
            priceCurrency: data.currency || "INR",
            price: data.price || "0",
            availability: `https://schema.org/${data.availability || "InStock"}`,
            seller: {
              "@type": "Organization",
              name: "Rummy Games App",
            },
          },
          aggregateRating: data.rating ? {
            "@type": "AggregateRating",
            ratingValue: data.rating.value,
            reviewCount: data.rating.count,
          } : undefined,
        };
        break;

      case "event":
        schema = {
          "@context": "https://schema.org",
          "@type": "Event",
          name: data.name,
          startDate: data.startDate,
          endDate: data.endDate || data.startDate,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          location: {
            "@type": "VirtualLocation",
            url: data.location || "https://www.rummygamesapp.com",
          },
          organizer: {
            "@type": "Organization",
            name: data.organizer || "Rummy Games App",
            url: "https://www.rummygamesapp.com",
          },
          offers: {
            "@type": "Offer",
            url: data.url || "https://www.rummygamesapp.com/tournaments",
            price: data.price || "0",
            priceCurrency: data.currency || "INR",
            availability: "https://schema.org/InStock",
          },
        };
        break;

      case "article":
        schema = {
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
        break;

      case "faq":
        schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq: any) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        };
        break;

      case "video":
        schema = {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: data.name,
          description: data.description,
          thumbnailUrl: data.thumbnailUrl,
          uploadDate: data.uploadDate,
          duration: data.duration,
          contentUrl: data.contentUrl,
          embedUrl: data.embedUrl,
          publisher: {
            "@type": "Organization",
            name: "Rummy Games App",
            logo: {
              "@type": "ImageObject",
              url: "https://www.rummygamesapp.com/logo.jpg",
            },
          },
        };
        break;

      case "breadcrumb":
        schema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };
        break;

      case "organization":
        schema = {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: data.name || "Rummy Games App",
          url: data.url || "https://www.rummygamesapp.com",
          logo: data.logo || "https://www.rummygamesapp.com/logo.jpg",
          sameAs: data.sameAs || [
            "https://www.facebook.com/rummygamesapp",
            "https://www.twitter.com/rummygamesapp",
            "https://www.instagram.com/rummygamesapp",
            "https://www.youtube.com/rummygamesapp",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: data.telephone || "+91-1800-XXX-XXXX",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
        };
        break;
    }

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `rich-snippet-${type}`;
      script.text = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById(`rich-snippet-${type}`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [type, data]);

  return null;
}

