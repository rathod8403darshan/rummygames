/**
 * Content Optimization Utilities
 * Functions to optimize content for SEO
 */

/**
 * Optimize heading structure for SEO
 */
export function optimizeHeadings(content: string): {
  h1: string[];
  h2: string[];
  h3: string[];
} {
  const h1Matches = content.match(/<h1[^>]*>(.*?)<\/h1>/gi) || [];
  const h2Matches = content.match(/<h2[^>]*>(.*?)<\/h2>/gi) || [];
  const h3Matches = content.match(/<h3[^>]*>(.*?)<\/h3>/gi) || [];

  return {
    h1: h1Matches.map((h) => h.replace(/<[^>]*>/g, "")),
    h2: h2Matches.map((h) => h.replace(/<[^>]*>/g, "")),
    h3: h3Matches.map((h) => h.replace(/<[^>]*>/g, "")),
  };
}

/**
 * Extract keywords from content
 */
export function extractKeywords(content: string, minLength: number = 3): string[] {
  const stopWords = new Set([
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by",
    "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did",
    "will", "would", "should", "could", "may", "might", "must", "can", "this", "that", "these", "those",
    "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them",
  ]);

  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length >= minLength && !stopWords.has(word));

  const wordFreq: Record<string, number> = {};
  words.forEach((word) => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });

  return Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([word]) => word);
}

/**
 * Calculate content readability score
 */
export function calculateReadability(text: string): {
  score: number;
  level: string;
  avgWordsPerSentence: number;
  avgSyllablesPerWord: number;
} {
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const words = text.split(/\s+/).filter((w) => w.length > 0);
  const syllables = words.reduce((count, word) => {
    return count + countSyllables(word);
  }, 0);

  const avgWordsPerSentence = words.length / sentences.length;
  const avgSyllablesPerWord = syllables / words.length;

  // Flesch Reading Ease Score
  const score =
    206.835 -
    1.015 * avgWordsPerSentence -
    84.6 * avgSyllablesPerWord;

  let level = "Very Difficult";
  if (score >= 90) level = "Very Easy";
  else if (score >= 80) level = "Easy";
  else if (score >= 70) level = "Fairly Easy";
  else if (score >= 60) level = "Standard";
  else if (score >= 50) level = "Fairly Difficult";
  else if (score >= 30) level = "Difficult";

  return {
    score: Math.round(score),
    level,
    avgWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
    avgSyllablesPerWord: Math.round(avgSyllablesPerWord * 10) / 10,
  };
}

/**
 * Count syllables in a word
 */
function countSyllables(word: string): number {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(
  content: string,
  maxLength: number = 160
): string {
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  if (text.length <= maxLength) return text;

  // Try to cut at sentence boundary
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  let description = "";

  for (const sentence of sentences) {
    if ((description + sentence).length <= maxLength - 3) {
      description += sentence;
    } else {
      break;
    }
  }

  if (description.length > 0) {
    return description.trim() + "...";
  }

  // Fallback to word boundary
  const words = text.split(" ");
  description = "";
  for (const word of words) {
    if ((description + " " + word).length <= maxLength - 3) {
      description += (description ? " " : "") + word;
    } else {
      break;
    }
  }

  return description.trim() + "...";
}

/**
 * Optimize image alt text
 */
export function generateImageAltText(imageName: string, context?: string): string {
  const name = imageName
    .replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  if (context) {
    return `${context} - ${name}`;
  }

  return name;
}

/**
 * Generate internal linking suggestions
 */
export function generateInternalLinks(
  content: string,
  availablePages: Array<{ title: string; url: string; keywords: string[] }>
): Array<{ text: string; url: string; position: number }> {
  const links: Array<{ text: string; url: string; position: number }> = [];
  const contentLower = content.toLowerCase();

  availablePages.forEach((page) => {
    page.keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      const matches = contentLower.match(regex);

      if (matches && matches.length > 0) {
        const firstMatch = contentLower.indexOf(keyword);
        if (firstMatch !== -1) {
          links.push({
            text: keyword,
            url: page.url,
            position: firstMatch,
          });
        }
      }
    });
  });

  return links.sort((a, b) => a.position - b.position);
}

/**
 * Check content for SEO best practices
 */
export function checkSEOContent(content: string, title: string): {
  score: number;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];
  let score = 100;

  // Check word count
  const wordCount = content.split(/\s+/).length;
  if (wordCount < 300) {
    issues.push("Content is too short (less than 300 words)");
    score -= 20;
  } else if (wordCount > 2000) {
    suggestions.push("Consider breaking long content into multiple pages");
  }

  // Check for H1
  if (!content.includes("<h1") && !content.match(/^#\s/)) {
    issues.push("Missing H1 heading");
    score -= 10;
  }

  // Check for multiple H1s
  const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
  if (h1Count > 1) {
    issues.push("Multiple H1 headings found (should be only one)");
    score -= 15;
  }

  // Check for images with alt text
  const images = content.match(/<img[^>]*>/gi) || [];
  const imagesWithoutAlt = images.filter((img) => !img.includes('alt='));
  if (imagesWithoutAlt.length > 0) {
    issues.push(`${imagesWithoutAlt.length} image(s) missing alt text`);
    score -= imagesWithoutAlt.length * 5;
  }

  // Check for internal links
  const internalLinks = content.match(/href=["']\/[^"']*["']/gi) || [];
  if (internalLinks.length < 2) {
    suggestions.push("Add more internal links to improve SEO");
  }

  // Check for external links
  const externalLinks = content.match(/href=["']https?:\/\//gi) || [];
  if (externalLinks.length === 0) {
    suggestions.push("Consider adding relevant external links");
  }

  // Check keyword density
  const titleWords = title.toLowerCase().split(/\s+/);
  const contentLower = content.toLowerCase();
  titleWords.forEach((word) => {
    if (word.length > 3) {
      const matches = contentLower.match(new RegExp(`\\b${word}\\b`, "g"));
      if (!matches || matches.length < 2) {
        suggestions.push(`Keyword "${word}" from title should appear more in content`);
      }
    }
  });

  // Check for meta description length
  const metaDesc = content.match(/<meta[^>]*name=["']description["'][^>]*>/i);
  if (metaDesc) {
    const contentMatch = metaDesc[0].match(/content=["']([^"']+)["']/i);
    if (contentMatch && contentMatch[1].length > 160) {
      issues.push("Meta description is too long (should be 160 characters or less)");
      score -= 10;
    }
  }

  return {
    score: Math.max(0, score),
    issues,
    suggestions,
  };
}

/**
 * Generate table of contents from headings
 */
export function generateTableOfContents(content: string): Array<{
  level: number;
  text: string;
  id: string;
}> {
  const headings: Array<{ level: number; text: string; id: string }> = [];
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .substring(0, 50);

    headings.push({ level, text, id });
  }

  return headings;
}

/**
 * Optimize content for featured snippets
 */
export function optimizeForFeaturedSnippets(content: string): {
  paragraphs: string[];
  lists: string[];
  tables: string[];
} {
  const paragraphs = content
    .match(/<p[^>]*>(.*?)<\/p>/gi)
    ?.map((p) => p.replace(/<[^>]*>/g, "").trim())
    .filter((p) => p.length > 50 && p.length < 300) || [];

  const lists = content.match(/<[ou]l[^>]*>[\s\S]*?<\/[ou]l>/gi) || [];

  const tables = content.match(/<table[^>]*>[\s\S]*?<\/table>/gi) || [];

  return {
    paragraphs: paragraphs.slice(0, 5),
    lists: lists.slice(0, 3),
    tables: tables.slice(0, 2),
  };
}

/**
 * Generate schema markup for content
 */
export function generateContentSchema(
  title: string,
  content: string,
  url: string,
  author: string,
  publishedDate: string
): any {
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: generateMetaDescription(content),
    image: `${url}/og-image.jpg`,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      "@type": "Person",
      name: author,
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
      "@id": url,
    },
    wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: "en",
  };
}

