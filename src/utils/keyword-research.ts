/**
 * Keyword Research and Optimization Utilities
 * Advanced keyword research and optimization functions for SEO
 */

export interface KeywordData {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  competition: "low" | "medium" | "high";
  trends?: number[];
}

/**
 * Primary keywords for rummy gaming
 */
export const PRIMARY_KEYWORDS = {
  en: [
    "rummy games",
    "rummy app",
    "online rummy",
    "real cash rummy",
    "rummy download",
    "play rummy online",
    "rummy tournaments",
    "rummy cash games",
    "best rummy app",
    "rummy game download",
    "rummy card game",
    "rummy rules",
    "rummy strategies",
    "rummy tips",
    "rummy how to play",
    "rummy winning tips",
    "rummy tricks",
    "rummy variants",
    "pool rummy",
    "points rummy",
    "deal rummy",
    "rummy championship",
    "rummy competition",
    "rummy prizes",
    "rummy bonus",
    "rummy withdrawal",
    "rummy payment",
    "rummy kyc",
    "rummy support",
    "rummy help",
  ],
  hi: [
    "रम्मी गेम्स",
    "रम्मी ऐप",
    "ऑनलाइन रम्मी",
    "रियल कैश रम्मी",
    "रम्मी डाउनलोड",
    "रम्मी खेलें",
    "रम्मी टूर्नामेंट",
    "रम्मी कैश गेम्स",
    "बेस्ट रम्मी ऐप",
    "रम्मी गेम डाउनलोड",
    "रम्मी कार्ड गेम",
    "रम्मी नियम",
    "रम्मी रणनीतियाँ",
    "रम्मी टिप्स",
    "रम्मी कैसे खेलें",
    "रम्मी जीतने के टिप्स",
    "रम्मी ट्रिक्स",
    "रम्मी वेरिएंट",
    "पूल रम्मी",
    "पॉइंट्स रम्मी",
    "डील रम्मी",
    "रम्मी चैंपियनशिप",
    "रम्मी प्रतियोगिता",
    "रम्मी पुरस्कार",
    "रम्मी बोनस",
    "रम्मी निकासी",
    "रम्मी भुगतान",
    "रम्मी KYC",
    "रम्मी सपोर्ट",
    "रम्मी सहायता",
  ],
};

/**
 * Long-tail keywords
 */
export const LONG_TAIL_KEYWORDS = {
  en: [
    "how to play rummy online for money",
    "best rummy app for real cash",
    "rummy app download for android",
    "rummy app download for ios",
    "how to win rummy games",
    "rummy game rules and strategies",
    "online rummy tournaments in india",
    "real cash rummy withdrawal process",
    "rummy app with instant withdrawal",
    "legal rummy apps in india",
    "rummy game tips for beginners",
    "advanced rummy strategies",
    "rummy card game online free",
    "rummy game with bonus",
    "rummy app review",
    "rummy game download apk",
    "play rummy and win money",
    "rummy game customer support",
    "rummy app payment methods",
    "rummy game kyc verification",
  ],
  hi: [
    "पैसे के लिए ऑनलाइन रम्मी कैसे खेलें",
    "रियल कैश के लिए बेस्ट रम्मी ऐप",
    "Android के लिए रम्मी ऐप डाउनलोड",
    "iOS के लिए रम्मी ऐप डाउनलोड",
    "रम्मी गेम्स कैसे जीतें",
    "रम्मी गेम नियम और रणनीतियाँ",
    "भारत में ऑनलाइन रम्मी टूर्नामेंट",
    "रियल कैश रम्मी निकासी प्रक्रिया",
    "तुरंत निकासी वाला रम्मी ऐप",
    "भारत में कानूनी रम्मी ऐप्स",
    "शुरुआती के लिए रम्मी गेम टिप्स",
    "उन्नत रम्मी रणनीतियाँ",
    "ऑनलाइन मुफ्त रम्मी कार्ड गेम",
    "बोनस के साथ रम्मी गेम",
    "रम्मी ऐप रिव्यू",
    "रम्मी गेम डाउनलोड APK",
    "रम्मी खेलें और पैसे जीतें",
    "रम्मी गेम ग्राहक सहायता",
    "रम्मी ऐप भुगतान विधियाँ",
    "रम्मी गेम KYC सत्यापन",
  ],
};

/**
 * LSI (Latent Semantic Indexing) keywords
 */
export const LSI_KEYWORDS = {
  en: [
    "card game",
    "skill game",
    "gaming platform",
    "mobile app",
    "cash prizes",
    "tournament",
    "leaderboard",
    "bonus",
    "referral",
    "deposit",
    "withdrawal",
    "bank transfer",
    "UPI",
    "wallet",
    "KYC",
    "verification",
    "customer support",
    "help center",
    "faq",
    "tutorial",
    "guide",
    "tips",
    "tricks",
    "strategies",
    "rules",
    "variants",
    "championship",
    "competition",
    "prize pool",
    "entry fee",
  ],
  hi: [
    "कार्ड गेम",
    "स्किल गेम",
    "गेमिंग प्लेटफॉर्म",
    "मोबाइल ऐप",
    "कैश पुरस्कार",
    "टूर्नामेंट",
    "लीडरबोर्ड",
    "बोनस",
    "रेफरल",
    "जमा",
    "निकासी",
    "बैंक ट्रांसफर",
    "UPI",
    "वॉलेट",
    "KYC",
    "सत्यापन",
    "ग्राहक सहायता",
    "सहायता केंद्र",
    "FAQ",
    "ट्यूटोरियल",
    "गाइड",
    "टिप्स",
    "ट्रिक्स",
    "रणनीतियाँ",
    "नियम",
    "वेरिएंट",
    "चैंपियनशिप",
    "प्रतियोगिता",
    "पुरस्कार राशि",
    "प्रवेश शुल्क",
  ],
};

/**
 * Generate keyword variations
 */
export function generateKeywordVariations(baseKeyword: string): string[] {
  const variations: string[] = [baseKeyword];
  
  // Add question variations
  variations.push(`how to ${baseKeyword}`);
  variations.push(`what is ${baseKeyword}`);
  variations.push(`best ${baseKeyword}`);
  variations.push(`top ${baseKeyword}`);
  variations.push(`${baseKeyword} guide`);
  variations.push(`${baseKeyword} tips`);
  variations.push(`${baseKeyword} tricks`);
  variations.push(`${baseKeyword} strategies`);
  variations.push(`${baseKeyword} online`);
  variations.push(`${baseKeyword} app`);
  variations.push(`${baseKeyword} download`);
  variations.push(`free ${baseKeyword}`);
  variations.push(`play ${baseKeyword}`);
  variations.push(`${baseKeyword} game`);
  variations.push(`${baseKeyword} rules`);
  
  return variations;
}

/**
 * Calculate keyword density
 */
export function calculateKeywordDensity(
  content: string,
  keyword: string
): { density: number; count: number; totalWords: number } {
  const cleanContent = content.toLowerCase().replace(/[^\w\s]/g, " ");
  const words = cleanContent.split(/\s+/).filter((w) => w.length > 0);
  const keywordLower = keyword.toLowerCase();
  const keywordWords = keywordLower.split(/\s+/);
  
  let count = 0;
  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    const slice = words.slice(i, i + keywordWords.length).join(" ");
    if (slice === keywordLower) {
      count++;
    }
  }
  
  const density = (count / words.length) * 100;
  
  return {
    density: Math.round(density * 100) / 100,
    count,
    totalWords: words.length,
  };
}

/**
 * Find keyword opportunities
 */
export function findKeywordOpportunities(
  content: string,
  targetKeywords: string[]
): Array<{ keyword: string; currentCount: number; recommendedCount: number }> {
  const opportunities: Array<{ keyword: string; currentCount: number; recommendedCount: number }> = [];
  
  targetKeywords.forEach((keyword) => {
    const { count } = calculateKeywordDensity(content, keyword);
    const wordCount = content.split(/\s+/).length;
    const recommendedCount = Math.ceil(wordCount / 100); // 1% density
    
    if (count < recommendedCount) {
      opportunities.push({
        keyword,
        currentCount: count,
        recommendedCount,
      });
    }
  });
  
  return opportunities.sort((a, b) => b.recommendedCount - a.recommendedCount);
}

/**
 * Generate keyword-rich content
 */
export function generateKeywordRichContent(
  primaryKeyword: string,
  secondaryKeywords: string[],
  lsiKeywords: string[],
  targetLength: number = 1000
): string {
  const sentences: string[] = [];
  
  // Primary keyword sentences
  sentences.push(`${primaryKeyword} is one of the most popular card games in India.`);
  sentences.push(`Playing ${primaryKeyword} online has become increasingly popular among Indian players.`);
  sentences.push(`Learn how to master ${primaryKeyword} and win big prizes.`);
  sentences.push(`${primaryKeyword} requires skill, strategy, and practice to excel.`);
  sentences.push(`Join millions of players enjoying ${primaryKeyword} every day.`);
  
  // Secondary keyword sentences
  secondaryKeywords.forEach((keyword) => {
    sentences.push(`Our ${primaryKeyword} platform offers the best ${keyword} experience.`);
    sentences.push(`Discover amazing ${keyword} features in our ${primaryKeyword} app.`);
    sentences.push(`Experience premium ${keyword} gameplay with ${primaryKeyword}.`);
  });
  
  // LSI keyword sentences
  lsiKeywords.forEach((lsi) => {
    sentences.push(`Our ${primaryKeyword} app includes advanced ${lsi} features.`);
    sentences.push(`Enjoy seamless ${lsi} integration with ${primaryKeyword}.`);
  });
  
  // Build content
  let content = "";
  while (content.length < targetLength) {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    content += randomSentence + " ";
  }
  
  return content.substring(0, targetLength).trim() + "...";
}

/**
 * Optimize content for featured snippets
 */
export function optimizeForFeaturedSnippets(
  question: string,
  answer: string,
  additionalInfo?: string[]
): string {
  let optimized = `<p><strong>${question}</strong></p>\n<p>${answer}</p>`;
  
  if (additionalInfo && additionalInfo.length > 0) {
    optimized += "\n<ul>\n";
    additionalInfo.forEach((info) => {
      optimized += `  <li>${info}</li>\n`;
    });
    optimized += "</ul>";
  }
  
  return optimized;
}

/**
 * Generate FAQ content for featured snippets
 */
export function generateFAQForSnippets(
  faqs: Array<{ question: string; answer: string }>
): string {
  let html = '<div class="faq-section">\n';
  
  faqs.forEach((faq) => {
    html += `  <div class="faq-item">\n`;
    html += `    <h3>${faq.question}</h3>\n`;
    html += `    <p>${faq.answer}</p>\n`;
    html += `  </div>\n`;
  });
  
  html += "</div>";
  return html;
}

/**
 * Generate table of contents for long content
 */
export function generateTableOfContents(
  headings: Array<{ level: number; text: string; id: string }>
): string {
  let toc = '<nav class="table-of-contents">\n  <ul>\n';
  
  headings.forEach((heading) => {
    const indent = "    ".repeat(heading.level - 1);
    toc += `${indent}<li><a href="#${heading.id}">${heading.text}</a></li>\n`;
  });
  
  toc += "  </ul>\n</nav>";
  return toc;
}

/**
 * Generate internal linking suggestions
 */
export function generateInternalLinkingSuggestions(
  currentPage: string,
  allPages: Array<{ url: string; title: string; keywords: string[]; content: string }>,
  maxLinks: number = 5
): Array<{ url: string; title: string; anchorText: string; relevance: number }> {
  const currentPageData = allPages.find((p) => p.url === currentPage);
  if (!currentPageData) return [];
  
  const suggestions: Array<{ url: string; title: string; anchorText: string; relevance: number }> = [];
  
  allPages.forEach((page) => {
    if (page.url === currentPage) return;
    
    let relevance = 0;
    
    // Keyword overlap
    currentPageData.keywords.forEach((keyword) => {
      if (page.keywords.includes(keyword)) {
        relevance += 3;
      }
      if (page.content.toLowerCase().includes(keyword.toLowerCase())) {
        relevance += 1;
      }
    });
    
    // Content similarity
    const currentWords = new Set(currentPageData.content.toLowerCase().split(/\s+/));
    const pageWords = new Set(page.content.toLowerCase().split(/\s+/));
    const commonWords = [...currentWords].filter((w) => pageWords.has(w));
    relevance += commonWords.length * 0.1;
    
    if (relevance > 0) {
      suggestions.push({
        url: page.url,
        title: page.title,
        anchorText: page.title,
        relevance,
      });
    }
  });
  
  return suggestions
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxLinks);
}

/**
 * Generate semantic keywords
 */
export function generateSemanticKeywords(baseKeyword: string): string[] {
  const semanticMap: Record<string, string[]> = {
    "rummy": [
      "card game",
      "skill game",
      "indian rummy",
      "13 card rummy",
      "rummy circle",
      "rummy passion",
      "rummy culture",
      "ace2three",
      "junglee rummy",
      "adda52 rummy",
    ],
    "rummy app": [
      "rummy application",
      "rummy mobile app",
      "rummy android app",
      "rummy ios app",
      "rummy game app",
      "rummy gaming app",
      "best rummy app",
      "rummy app download",
      "rummy app review",
      "rummy app india",
    ],
    "online rummy": [
      "play rummy online",
      "rummy online game",
      "rummy online platform",
      "rummy online india",
      "rummy online cash",
      "rummy online free",
      "rummy online download",
      "rummy online app",
      "rummy online website",
      "rummy online registration",
    ],
  };
  
  return semanticMap[baseKeyword.toLowerCase()] || [];
}

/**
 * Generate keyword clusters
 */
export function generateKeywordClusters(
  primaryKeyword: string,
  relatedKeywords: string[]
): Array<{ cluster: string; keywords: string[] }> {
  const clusters: Array<{ cluster: string; keywords: string[] }> = [];
  
  // Gameplay cluster
  clusters.push({
    cluster: "Gameplay",
    keywords: relatedKeywords.filter((k) =>
      k.includes("play") || k.includes("game") || k.includes("rules") || k.includes("how")
    ),
  });
  
  // Strategy cluster
  clusters.push({
    cluster: "Strategy",
    keywords: relatedKeywords.filter((k) =>
      k.includes("strategy") || k.includes("tip") || k.includes("trick") || k.includes("win")
    ),
  });
  
  // App cluster
  clusters.push({
    cluster: "App",
    keywords: relatedKeywords.filter((k) =>
      k.includes("app") || k.includes("download") || k.includes("mobile") || k.includes("android") || k.includes("ios")
    ),
  });
  
  // Money cluster
  clusters.push({
    cluster: "Money",
    keywords: relatedKeywords.filter((k) =>
      k.includes("cash") || k.includes("money") || k.includes("prize") || k.includes("withdrawal") || k.includes("payment")
    ),
  });
  
  return clusters.filter((c) => c.keywords.length > 0);
}

/**
 * Calculate keyword difficulty
 */
export function calculateKeywordDifficulty(
  keyword: string,
  searchVolume: number,
  competition: "low" | "medium" | "high"
): number {
  let difficulty = 0;
  
  // Base difficulty from competition
  if (competition === "high") difficulty += 70;
  else if (competition === "medium") difficulty += 40;
  else difficulty += 20;
  
  // Adjust for search volume
  if (searchVolume > 100000) difficulty += 20;
  else if (searchVolume > 10000) difficulty += 10;
  else if (searchVolume > 1000) difficulty += 5;
  
  // Adjust for keyword length (long-tail is easier)
  const wordCount = keyword.split(/\s+/).length;
  if (wordCount > 3) difficulty -= 10;
  else if (wordCount > 2) difficulty -= 5;
  
  return Math.max(0, Math.min(100, difficulty));
}

/**
 * Generate keyword-rich headings
 */
export function generateKeywordRichHeadings(
  primaryKeyword: string,
  secondaryKeywords: string[],
  count: number = 5
): string[] {
  const headings: string[] = [];
  
  headings.push(`Best ${primaryKeyword} Guide`);
  headings.push(`How to Play ${primaryKeyword}`);
  headings.push(`${primaryKeyword} Tips and Strategies`);
  headings.push(`Top ${primaryKeyword} Features`);
  headings.push(`${primaryKeyword} Rules and Regulations`);
  
  secondaryKeywords.forEach((keyword) => {
    if (headings.length < count) {
      headings.push(`${primaryKeyword} ${keyword} Guide`);
    }
  });
  
  return headings.slice(0, count);
}

/**
 * Generate meta keywords string
 */
export function generateMetaKeywords(
  primaryKeywords: string[],
  secondaryKeywords: string[],
  lsiKeywords: string[],
  maxKeywords: number = 15
): string {
  const allKeywords = [
    ...primaryKeywords,
    ...secondaryKeywords,
    ...lsiKeywords,
  ];
  
  return [...new Set(allKeywords)].slice(0, maxKeywords).join(", ");
}

/**
 * Generate keyword-rich URL
 */
export function generateKeywordRichURL(
  basePath: string,
  keyword: string
): string {
  const cleanKeyword = keyword
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 50);
  
  return `${basePath}/${cleanKeyword}`;
}

/**
 * Generate keyword-rich anchor text
 */
export function generateAnchorText(
  keyword: string,
  context: string
): string {
  // Use keyword as anchor if it fits naturally
  if (context.toLowerCase().includes(keyword.toLowerCase())) {
    return keyword;
  }
  
  // Generate contextual anchor
  const variations = [
    `Learn more about ${keyword}`,
    `Read our ${keyword} guide`,
    `Discover ${keyword}`,
    `Explore ${keyword}`,
    keyword,
  ];
  
  return variations[0];
}

/**
 * Analyze keyword performance
 */
export function analyzeKeywordPerformance(
  keyword: string,
  content: string,
  targetDensity: number = 1.5
): {
  currentDensity: number;
  targetDensity: number;
  count: number;
  recommendations: string[];
} {
  const { density, count } = calculateKeywordDensity(content, keyword);
  const recommendations: string[] = [];
  
  if (density < targetDensity * 0.5) {
    recommendations.push(`Increase usage of "${keyword}" - current density is too low`);
  } else if (density > targetDensity * 2) {
    recommendations.push(`Reduce usage of "${keyword}" - current density may be too high (keyword stuffing)`);
  } else {
    recommendations.push(`Keyword density for "${keyword}" is optimal`);
  }
  
  // Check for keyword in headings
  const headingRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi;
  const headings = content.match(headingRegex) || [];
  const keywordInHeadings = headings.some((h) =>
    h.toLowerCase().includes(keyword.toLowerCase())
  );
  
  if (!keywordInHeadings) {
    recommendations.push(`Include "${keyword}" in at least one heading`);
  }
  
  // Check for keyword in first paragraph
  const firstParagraph = content.match(/<p[^>]*>(.*?)<\/p>/i);
  if (firstParagraph && !firstParagraph[1].toLowerCase().includes(keyword.toLowerCase())) {
    recommendations.push(`Include "${keyword}" in the first paragraph`);
  }
  
  return {
    currentDensity: density,
    targetDensity,
    count,
    recommendations,
  };
}

/**
 * Generate keyword mapping for site structure
 */
export function generateKeywordMapping(
  pages: Array<{ url: string; title: string; keywords: string[] }>
): Map<string, string[]> {
  const mapping = new Map<string, string[]>();
  
  pages.forEach((page) => {
    page.keywords.forEach((keyword) => {
      if (!mapping.has(keyword)) {
        mapping.set(keyword, []);
      }
      mapping.get(keyword)!.push(page.url);
    });
  });
  
  return mapping;
}

/**
 * Generate content outline with keywords
 */
export function generateContentOutline(
  primaryKeyword: string,
  secondaryKeywords: string[],
  sections: number = 5
): Array<{ heading: string; keywords: string[]; content: string }> {
  const outline: Array<{ heading: string; keywords: string[]; content: string }> = [];
  
  const sectionTemplates = [
    {
      heading: `Introduction to ${primaryKeyword}`,
      keywords: [primaryKeyword, ...secondaryKeywords.slice(0, 2)],
      content: `Learn everything about ${primaryKeyword} and how to get started.`,
    },
    {
      heading: `How to Play ${primaryKeyword}`,
      keywords: [primaryKeyword, "how to play", "rules", ...secondaryKeywords.slice(2, 4)],
      content: `Step-by-step guide on playing ${primaryKeyword} like a pro.`,
    },
    {
      heading: `${primaryKeyword} Strategies`,
      keywords: [primaryKeyword, "strategies", "tips", ...secondaryKeywords.slice(4, 6)],
      content: `Master ${primaryKeyword} with these proven strategies and tips.`,
    },
    {
      heading: `Best ${primaryKeyword} Features`,
      keywords: [primaryKeyword, "features", "benefits", ...secondaryKeywords.slice(6, 8)],
      content: `Discover the amazing features that make ${primaryKeyword} the best choice.`,
    },
    {
      heading: `${primaryKeyword} FAQ`,
      keywords: [primaryKeyword, "faq", "questions", ...secondaryKeywords.slice(8, 10)],
      content: `Frequently asked questions about ${primaryKeyword} answered.`,
    },
  ];
  
  return sectionTemplates.slice(0, sections);
}

