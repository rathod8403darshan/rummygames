"use client";

import { useState, useMemo } from "react";
import { GameCard } from "./GameCard";
import type { Game } from "@/src/utils/games";

interface GamesListingProps {
  games: Game[];
  lang: string;
  searchQuery?: string;
  featuredSlug?: string;
}

/**
 * GamesListing Component
 * Displays ALL games with search functionality
 * - Route-matched game appears FIRST
 * - All other games appear below
 * - Search filters the entire list
 */
export function GamesListing({
  games,
  lang,
  searchQuery = "",
  featuredSlug,
}: GamesListingProps) {
  const [search, setSearch] = useState(searchQuery);
  const isHindi = lang === "hi";

  // Filter games based on search
  const filteredGames = useMemo(() => {
    if (!search.trim()) return games;

    const lowerSearch = search.toLowerCase().trim();
    return games.filter(
      (game) =>
        game.name.toLowerCase().includes(lowerSearch) ||
        game.slug.includes(lowerSearch)
    );
  }, [games, search]);

  // Find featured game (route-matched game)
  const featuredGame = featuredSlug
    ? filteredGames.find((game) => game.slug === featuredSlug)
    : null;

  // Other games (excluding featured)
  const otherGames = featuredGame
    ? filteredGames.filter((game) => game.slug !== featuredSlug)
    : filteredGames;

  // Combine: featured first, then others
  const displayGames = featuredGame
    ? [featuredGame, ...otherGames]
    : filteredGames;

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Games Section - ALL games */}
        {displayGames.length > 0 && (
          <div>
            {/* Header with Title and Search Bar in Flex Layout */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {isHindi
                  ? featuredGame
                    ? "रम्मी ऐप्स"
                    : "सभी रम्मी ऐप्स"
                  : featuredGame
                  ? "Rummy Apps"
                  : "All Rummy Apps"}
              </h2>
              
              {/* Search Bar - Right Section */}
              <div className="flex-shrink-0 w-full md:w-auto md:max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={
                      isHindi
                        ? "रम्मी ऐप खोजें..."
                        : "Search rummy app..."
                    }
                    className="w-full px-4 py-2 pl-10 pr-4 text-sm md:text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                {search && (
                  <p className="mt-1 text-xs text-gray-600">
                    {isHindi
                      ? `${filteredGames.length} ऐप मिले`
                      : `Found ${filteredGames.length} app${filteredGames.length !== 1 ? "s" : ""}`}
                  </p>
                )}
              </div>
            </div>
            {/* Mobile: Table format, Desktop: Grid format */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
              {displayGames.map((game, index) => {
                // Mark featured game (route-matched) as featured
                const isFeatured = game.slug === featuredSlug;
                return (
                  <GameCard
                    key={game.slug}
                    game={game}
                    lang={lang}
                    index={isFeatured ? undefined : index + 1}
                    featured={isFeatured}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredGames.length === 0 && search.trim() && (
          <div className="text-center py-12">
            <svg
              className="w-24 h-24 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {isHindi ? "कोई ऐप नहीं मिला" : "No Apps Found"}
            </h3>
            <p className="text-gray-600">
              {isHindi
                ? `"${search}" के लिए कोई परिणाम नहीं मिला। कृपया दूसरे कीवर्ड से खोजें।`
                : `No results found for "${search}". Please try different keywords.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

