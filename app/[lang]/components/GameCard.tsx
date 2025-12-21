"use client";

import Image from "next/image";
import type { Game } from "@/src/utils/games";
import { useEffect, useState } from "react";

interface GameCardProps {
  game: Game;
  lang: string;
  index?: number;
  featured?: boolean;
}

export function GameCard({ game, lang, index, featured = false }: GameCardProps) {
  const isHindi = lang === "hi";
  const [downloads, setDownloads] = useState(0);
  const [bonus, setBonus] = useState(0);

  useEffect(() => {
    setDownloads(Math.floor(Math.random() * 500 + 50));
    setBonus(Math.floor(Math.random() * 50 + 35));
  }, []);
  const handleClick = () => {
    if (game.link) {
      window.open(game.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Mobile View - Table Format */}
      <div
        className={`md:hidden bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors ${
          featured ? "bg-blue-50 border-blue-300" : ""
        }`}
      >
        <div className="flex items-center gap-3 p-4">
          {/* Logo */}
          <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src={game.src}
              alt={`${game.name} - ${isHindi ? "रम्मी गेम ऐप" : "Rummy Game App"}`}
              fill
              className="object-cover"
              sizes="64px"
            />
            {featured && (
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                ⭐
              </div>
            )}
          </div>

          {/* Name + Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-base font-bold text-gray-900 truncate">
                {game.name}
              </h3>
              {typeof index === "number" && (
                <span className="text-xs text-gray-500 flex-shrink-0">#{index}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600">
              <span>
                {downloads}K+ {isHindi ? "डाउनलोड" : "Downloads"}
              </span>
              <span className="text-green-600 font-semibold">
                ₹{bonus} {isHindi ? "बोनस" : "Bonus"}
              </span>
              <span>₹100/- {isHindi ? "न्यूनतम" : "Min"}</span>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={handleClick}
            className={`flex-shrink-0 px-4 py-2 rounded-lg font-bold text-sm text-white transition-all shadow-md ${
              featured
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
            }`}
            aria-label={`${isHindi ? "डाउनलोड करें" : "Download"} ${game.name}`}
          >
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="hidden xs:inline">{isHindi ? "डाउनलोड" : "Download"}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Desktop View - Card Format */}
      <div
        className={`hidden md:block group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 ${
          featured
            ? "border-blue-500 ring-4 ring-blue-200"
            : "border-gray-200 hover:border-blue-400"
        }`}
      >
        {/* Index Badge */}
        {typeof index === "number" && (
          <div className="absolute top-2 left-2 z-10 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">
            {index}
          </div>
        )}

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {isHindi ? "⭐ फीचर्ड" : "⭐ Featured"}
          </div>
        )}

        {/* Game Image */}
        <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <Image
            src={game.src}
            alt={`${game.name} - ${isHindi ? "रम्मी गेम ऐप" : "Rummy Game App"}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Game Info */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
            {game.name}
          </h3>

          {/* Game Stats */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {isHindi ? "डाउनलोड" : "Downloads"}
              </span>
              <span className="font-semibold text-gray-900">
                {downloads}K+
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {isHindi ? "बोनस" : "Bonus"}
              </span>
              <span className="font-semibold text-green-600">
                ₹{bonus}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {isHindi ? "न्यूनतम निकासी" : "Min. Withdrawal"}
              </span>
              <span className="font-semibold text-gray-900">₹100/-</span>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={handleClick}
            className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
              featured
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
            }`}
            aria-label={`${isHindi ? "डाउनलोड करें" : "Download"} ${game.name}`}
          >
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>{isHindi ? "डाउनलोड करें" : "Download"}</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

