"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

/**
 * Custom hook to get current language and translations
 */
export function useLanguage() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";
  const isHindi = lang === "hi";

  const t = useMemo(() => {
    return {
      lang,
      isHindi,
      isEnglish: !isHindi,
      switchLanguage: () => {
        const newLang = lang === "en" ? "hi" : "en";
        return `/${newLang}`;
      },
    };
  }, [lang, isHindi]);

  return t;
}

/**
 * Get translation function
 */
export function useTranslation() {
  const { lang, isHindi } = useLanguage();

  return {
    lang,
    isHindi,
    t: (key: string, fallback?: string) => {
      // In a real app, you'd load translations from a file
      // For now, return the key or fallback
      return fallback || key;
    },
  };
}

