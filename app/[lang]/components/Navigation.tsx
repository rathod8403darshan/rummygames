"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  lang: string;
}

export function Navigation({ lang }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHindi = lang === "hi";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: `/${lang}`, label: isHindi ? "होम" : "Home" },
    { href: `/${lang}/real-cash-rummy`, label: isHindi ? "रियल कैश रम्मी" : "Real Cash Rummy" },
    { href: `/${lang}/how-to-play`, label: isHindi ? "कैसे खेलें" : "How to Play" },
    { href: `/${lang}/rules`, label: isHindi ? "नियम" : "Rules" },
    { href: `/${lang}/strategies`, label: isHindi ? "रणनीतियाँ" : "Strategies" },
    { href: `/${lang}/blog`, label: isHindi ? "ब्लॉग" : "Blog" },
    { href: `/${lang}/download`, label: isHindi ? "डाउनलोड" : "Download" },
  ];

  const languageSwitcher = (
    <div className="flex items-center space-x-2">
      <Link
        href={lang === "hi" ? "/en" : "/hi"}
        className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-100"
        aria-label={lang === "hi" ? "Switch to English" : "हिंदी में बदलें"}
      >
        {lang === "hi" ? "English" : "हिंदी"}
      </Link>
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${lang}`} className="flex items-center">
              <Image
                src="/logo.jpg"
                alt={isHindi ? "रम्मी गेम्स लोगो" : "Rummy Games Logo"}
                width={180}
                height={60}
                className="h-12 w-auto lg:h-16"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            {languageSwitcher}
            <Link
              href={`/${lang}/download`}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {isHindi ? "अभी डाउनलोड करें" : "Download Now"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            {languageSwitcher}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isHindi ? "मेनू खोलें" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col space-y-1 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={`/${lang}/download`}
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-center"
              >
                {isHindi ? "अभी डाउनलोड करें" : "Download Now"}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

