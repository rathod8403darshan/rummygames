"use client";

import { useEffect } from "react";
import { analyzeKeywordPerformance } from "@/src/utils/keyword-research";

interface KeywordOptimizerProps {
  primaryKeyword: string;
  secondaryKeywords: string[];
  content: string;
}

/**
 * Keyword Optimizer Component
 * Analyzes and optimizes keyword usage in content
 */
export function KeywordOptimizer({
  primaryKeyword,
  secondaryKeywords,
  content,
}: KeywordOptimizerProps) {
  useEffect(() => {
    // Analyze primary keyword
    const primaryAnalysis = analyzeKeywordPerformance(primaryKeyword, content);
    
    // Log recommendations in development
    if (process.env.NODE_ENV === "development") {
      console.log("Keyword Optimization Analysis:", {
        primaryKeyword,
        analysis: primaryAnalysis,
      });
    }

    // Analyze secondary keywords
    secondaryKeywords.forEach((keyword) => {
      const analysis = analyzeKeywordPerformance(keyword, content, 0.5);
      if (process.env.NODE_ENV === "development") {
        console.log(`Secondary keyword "${keyword}":`, analysis);
      }
    });
  }, [primaryKeyword, secondaryKeywords, content]);

  return null;
}

