"use client";

import { useMemo } from "react";
import { GameCard } from "./GameCard";
import type { Game } from "@/src/utils/games";

interface RandomGamesHeroProps {
  games: Game[];
  lang: string;
  excludeSlug?: string;
}

/**
 * RandomGamesHero Component
 * Displays exactly 3 random games that randomize on every page refresh
 * Excludes a specific game if excludeSlug is provided
 */
export function RandomGamesHero({
  games,
  lang,
  excludeSlug,
}: RandomGamesHeroProps) {
  const randomGames = useMemo(() => {
    // Filter out excluded game if provided
    let availableGames = excludeSlug
      ? games.filter((game) => game.slug !== excludeSlug)
      : games;

    // Shuffle array using Fisher-Yates algorithm
    const shuffled = [...availableGames];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return first 3 games
    return shuffled.slice(0, 3);
  }, [games, excludeSlug]);

  const isHindi = lang === "hi";

  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {isHindi ? "⭐ लोकप्रिय रम्मी ऐप्स" : "⭐ Popular Rummy Apps"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {randomGames.map((game) => (
            <GameCard key={game.slug} game={game} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
