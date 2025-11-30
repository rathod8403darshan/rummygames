export default function sitemap() {
    const languages = ["en", "hi"];
    const baseUrl = "https://www.rummygamesapp.com";
  
    const pages = [
      { path: "", priority: 1.0, changefreq: "daily" },
      { path: "/download", priority: 0.9, changefreq: "weekly" },
      { path: "/real-cash-rummy", priority: 0.9, changefreq: "weekly" },
      { path: "/how-to-play", priority: 0.8, changefreq: "monthly" },
      { path: "/rules", priority: 0.8, changefreq: "monthly" },
      { path: "/strategies", priority: 0.8, changefreq: "monthly" },
      { path: "/blog", priority: 0.8, changefreq: "daily" },
      { path: "/about", priority: 0.7, changefreq: "monthly" },
      { path: "/contact", priority: 0.7, changefreq: "monthly" },
      { path: "/careers", priority: 0.6, changefreq: "monthly" },
      { path: "/press", priority: 0.5, changefreq: "monthly" },
      { path: "/responsible-gaming", priority: 0.7, changefreq: "yearly" },
      { path: "/fair-play", priority: 0.7, changefreq: "yearly" },
      { path: "/faq", priority: 0.8, changefreq: "monthly" },
      { path: "/help", priority: 0.7, changefreq: "monthly" },
      { path: "/payment", priority: 0.7, changefreq: "monthly" },
      { path: "/withdrawal", priority: 0.7, changefreq: "monthly" },
      { path: "/pool-rummy", priority: 0.8, changefreq: "weekly" },
      { path: "/points-rummy", priority: 0.8, changefreq: "weekly" },
      { path: "/disclaimer", priority: 0.6, changefreq: "yearly" },
      { path: "/privacy", priority: 0.6, changefreq: "yearly" },
      { path: "/terms", priority: 0.6, changefreq: "yearly" },
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
  
    const urls = [];
    const now = new Date();
  
    languages.forEach(lang => {
      pages.forEach(page => {
        urls.push({
          url: `${baseUrl}/${lang}${page.path}`,
          lastModified: now,
          changeFrequency: page.changefreq,
          priority: page.priority,
          alternates: {
            languages: languages.reduce((acc, l) => {
              acc[l] = `${baseUrl}/${l}${page.path}`;
              return acc;
            }, {}),
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
            }, {}),
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
  