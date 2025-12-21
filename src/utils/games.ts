import gamesData from "../../game.json";

export interface Game {
  src: string;
  name: string;
  link: string;
  slug: string;
}

/**
 * Generate URL-friendly slug from game name
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Process games data and add slugs
 */
export function getGames(): Game[] {
  return gamesData.map((game) => ({
    ...game,
    slug: generateSlug(game.name),
  }));
}

/**
 * Get game by slug
 */
export function getGameBySlug(slug: string): Game | undefined {
  const games = getGames();
  return games.find((game) => game.slug === slug);
}

/**
 * Search games by name (case-insensitive)
 */
export function searchGames(query: string): Game[] {
  const games = getGames();
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) return games;
  
  return games.filter((game) =>
    game.name.toLowerCase().includes(lowerQuery) ||
    game.slug.includes(lowerQuery)
  );
}

/**
 * Get all game slugs for static generation
 */
export function getAllGameSlugs(): string[] {
  return getGames().map((game) => game.slug);
}

/**
 * Generate SEO-friendly title for game page
 */
export function generateGameTitle(game: Game, lang: string = "en"): string {
  const isHindi = lang === "hi";
  const appName = game.name;
  
  if (isHindi) {
    return `${appName} – डाउनलोड करें और खेलें | रम्मी गेम्स ऐप | rummygamesapp.com`;
  }
  
  return `${appName} – Download & Play | Rummy Games App | rummygamesapp.com`;
}

/**
 * Generate SEO-friendly description for game page
 */
export function generateGameDescription(game: Game, lang: string = "en"): string {
  const isHindi = lang === "hi";
  const appName = game.name;
  
  if (isHindi) {
    return `${appName} ऐप डाउनलोड करें और रियल कैश रम्मी खेलें। 100% सुरक्षित, तेज़ निकासी, और बेस्ट बोनस ऑफर। ${appName} के साथ रम्मी का मजा लें और पैसे कमाएं।`;
  }
  
  return `Download ${appName} app and play real cash rummy online. 100% safe, fast withdrawal, and best bonus offers. Enjoy rummy with ${appName} and win real money.`;
}

/**
 * Generate SEO keywords for game page
 */
export function generateGameKeywords(game: Game, lang: string = "en"): string {
  const isHindi = lang === "hi";
  const appName = game.name.toLowerCase();
  const slug = game.slug;
  
  if (isHindi) {
    return `${appName}, ${appName} ऐप, ${appName} डाउनलोड, रम्मी गेम्स, ऑनलाइन रम्मी, रियल कैश रम्मी, ${slug}, रम्मी ऐप`;
  }
  
  return `${appName}, ${appName} app, ${appName} download, rummy games, online rummy, real cash rummy, ${slug}, rummy app, play ${appName}`;
}

