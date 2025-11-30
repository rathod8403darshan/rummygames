"use client";

import { useEffect } from "react";

interface SitemapGeneratorProps {
  pages: Array<{
    url: string;
    lastModified: string;
    changeFrequency: string;
    priority: number;
  }>;
}

/**
 * Sitemap Generator Component
 * Generates XML sitemap for better SEO
 */
export function SitemapGenerator({ pages }: SitemapGeneratorProps) {
  useEffect(() => {
    // In a real implementation, this would generate an XML sitemap
    // For now, we'll just log it in development
    if (process.env.NODE_ENV === "development") {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

      console.log("Generated Sitemap:", sitemap);
    }
  }, [pages]);

  return null;
}

