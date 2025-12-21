"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  lang: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
}

/**
 * SearchBar Component
 * Large searchable section at the top of pages
 */
export function SearchBar({ lang, defaultValue = "", onSearch }: SearchBarProps) {
  const [search, setSearch] = useState(defaultValue);
  const router = useRouter();
  const isHindi = lang === "hi";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(search);
    } else {
      // Default behavior: navigate to search results
      if (search.trim()) {
        router.push(`/${lang}?search=${encodeURIComponent(search.trim())}`);
      } else {
        router.push(`/${lang}`);
      }
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isHindi
                  ? "रम्मी ऐप खोजें... (उदाहरण: Rummy Yes, Ak777, Rummy Nabob)"
                  : "Search rummy app... (e.g., Rummy Yes, Ak777, Rummy Nabob)"
              }
              className="w-full px-8 py-5 pl-16 text-xl border-3 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
            />
            <svg
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-400"
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
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              {isHindi ? "खोजें" : "Search"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
