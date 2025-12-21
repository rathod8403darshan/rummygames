"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { getGames } from "@/src/utils/games";
import type { Game } from "@/src/utils/games";

interface HeroProps {
  lang: string;
}

export function Hero({ lang }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isHindi = lang === "hi";
  const [randomGame, setRandomGame] = useState<Game | null>(null);
  const [randomGames, setRandomGames] = useState<Game[]>([]);
  
  useEffect(() => {
    const allGames = getGames();
    const shuffled = [...allGames].sort(() => Math.random() - 0.5);
    setRandomGame(shuffled[0]);
    setRandomGames(shuffled.slice(0, 3));
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      number: "10M+",
      label: isHindi ? "खिलाड़ी" : "Players",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "₹500Cr+",
      label: isHindi ? "जीत" : "Winnings",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "24/7",
      label: isHindi ? "सपोर्ट" : "Support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      number: "4.8★",
      label: isHindi ? "रेटिंग" : "Rating",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              {isHindi ? "🇮🇳 भारत का #1 रम्मी ऐप" : "🇮🇳 India's #1 Rummy App"}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              {isHindi ? (
                <>
                  रियल कैश रम्मी
                  <br />
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    ऑनलाइन खेलें
                  </span>
                </>
              ) : (
                <>
                  Play Real Cash
                  <br />
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Rummy Online
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              {isHindi
                ? "100% सुरक्षित, कानूनी और तेज़ निकासी के साथ भारत का सबसे भरोसेमंद रम्मी गेमिंग प्लेटफॉर्म। तुरंत जीतें और पैसे निकालें!"
                : "India's most trusted rummy gaming platform with 100% safe, legal, and instant withdrawals. Win big and withdraw instantly!"}
            </p>

            {/* Random Games Download Buttons */}
            <div className="mb-8">
              <p className="text-white/80 mb-4 text-sm font-medium">
                {isHindi ? "⭐ लोकप्रिय ऐप्स" : "⭐ Popular Apps"}
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {randomGames.map((game) => (
                  <a
                    key={game.slug}
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm rounded-lg hover:bg-white/20 transition-all border border-white/20 flex items-center space-x-2"
                  >
                    <Image
                      src={game.src}
                      alt={game.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded object-cover"
                    />
                    <span className="truncate max-w-[120px]">{game.name}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              {randomGame && (
                <a
                  href={randomGame.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                  <span>{isHindi ? "अभी डाउनलोड करें" : "Download Now"}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
              <Link
                href={`/${lang}/how-to-play`}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all border-2 border-white/30 flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{isHindi ? "कैसे खेलें" : "How to Play"}</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
                >
                  <div className="flex justify-center mb-2 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Random Game */}
          {randomGame && (
            <div className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <a
                    href={randomGame.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src={randomGame.src}
                      alt={`${randomGame.name} - ${isHindi ? "रम्मी गेम ऐप" : "Rummy Game App"}`}
                      width={400}
                      height={400}
                      className="w-full h-auto rounded-2xl"
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

