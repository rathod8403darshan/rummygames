export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/admin/", "/_next/", "/private/"],
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/api/", "/admin/", "/private/"],
        },
        {
          userAgent: "Bingbot",
          allow: "/",
          disallow: ["/api/", "/admin/", "/private/"],
        },
      ],
      sitemap: "https://www.rummygamesapp.com/sitemap.xml",
      host: "https://www.rummygamesapp.com",
    };
  }
  