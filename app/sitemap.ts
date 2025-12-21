import { MetadataRoute } from "next";
import { getAllGameSlugs } from "@/src/utils/games";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["en", "hi"];
  const baseUrl = "https://www.rummygamesapp.com";
  const gameSlugs = getAllGameSlugs();

  const pages = [
    { path: "", priority: 1.0, changefreq: "daily" as const },
    { path: "/real-cash-rummy", priority: 0.9, changefreq: "weekly" as const },
    { path: "/how-to-play", priority: 0.8, changefreq: "monthly" as const },
    { path: "/rules", priority: 0.8, changefreq: "monthly" as const },
    { path: "/strategies", priority: 0.8, changefreq: "monthly" as const },
    { path: "/blog", priority: 0.8, changefreq: "daily" as const },
    { path: "/about", priority: 0.7, changefreq: "monthly" as const },
    { path: "/contact", priority: 0.7, changefreq: "monthly" as const },
    { path: "/careers", priority: 0.6, changefreq: "monthly" as const },
    { path: "/press", priority: 0.5, changefreq: "monthly" as const },
    { path: "/responsible-gaming", priority: 0.7, changefreq: "yearly" as const },
    { path: "/fair-play", priority: 0.7, changefreq: "yearly" as const },
    { path: "/faq", priority: 0.8, changefreq: "monthly" as const },
    { path: "/help", priority: 0.7, changefreq: "monthly" as const },
    { path: "/payment", priority: 0.7, changefreq: "monthly" as const },
    { path: "/withdrawal", priority: 0.7, changefreq: "monthly" as const },
    { path: "/pool-rummy", priority: 0.8, changefreq: "weekly" as const },
    { path: "/points-rummy", priority: 0.8, changefreq: "weekly" as const },
    { path: "/disclaimer", priority: 0.6, changefreq: "yearly" as const },
    { path: "/privacy", priority: 0.6, changefreq: "yearly" as const },
    { path: "/terms", priority: 0.6, changefreq: "yearly" as const },
  ];

  const blogPosts = [
    "rummy-tips-for-beginners",
    "advanced-rummy-strategies",
    "how-to-win-rummy-tournaments",
    "rummy-rules-explained",
    "common-rummy-mistakes",
    "rummy-variants-explained",
    "best-rummy-tips",
    "rummy-winning-strategies",
    "online-rummy-guide",
    "rummy-tournament-tips",
  ];

  const urls: MetadataRoute.Sitemap = [];
  const now = new Date();

  languages.forEach((lang) => {
    pages.forEach((page) => {
      urls.push({
        url: `${baseUrl}/${lang}${page.path}`,
        lastModified: now,
        changeFrequency: page.changefreq,
        priority: page.priority,
        alternates: {
          languages: languages.reduce((acc, l) => {
            acc[l] = `${baseUrl}/${l}${page.path}`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });

    // Add blog posts
    blogPosts.forEach((post, index) => {
      const postDate = new Date(now);
      postDate.setDate(postDate.getDate() - index * 7); // Stagger dates

      urls.push({
        url: `${baseUrl}/${lang}/blog/${post}`,
        lastModified: postDate,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: languages.reduce((acc, l) => {
            acc[l] = `${baseUrl}/${l}/blog/${post}`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });

    // Add game pages
    gameSlugs.forEach((slug) => {
      urls.push({
        url: `${baseUrl}/${lang}/${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: languages.reduce((acc, l) => {
            acc[l] = `${baseUrl}/${l}/${slug}`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });

  // Add default language redirects
  urls.push({
    url: baseUrl,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  });

  return urls;
}

