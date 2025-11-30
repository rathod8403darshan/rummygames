"use client";

import { useEffect } from "react";

interface TwitterCardTagsProps {
  card?: "summary" | "summary_large_image" | "app" | "player";
  title: string;
  description: string;
  image?: string;
  site?: string;
  creator?: string;
  player?: {
    url: string;
    width: number;
    height: number;
  };
}

/**
 * Twitter Card Tags Component
 * Generates Twitter Card meta tags for enhanced Twitter sharing
 */
export function TwitterCardTags({
  card = "summary_large_image",
  title,
  description,
  image,
  site = "@rummygamesapp",
  creator = "@rummygamesapp",
  player,
}: TwitterCardTagsProps) {
  useEffect(() => {
    const tags = [
      { name: "twitter:card", content: card },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:site", content: site },
      { name: "twitter:creator", content: creator },
    ];

    if (image) {
      tags.push(
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: title }
      );
    }

    if (player && card === "player") {
      tags.push(
        { name: "twitter:player", content: player.url },
        { name: "twitter:player:width", content: player.width.toString() },
        { name: "twitter:player:height", content: player.height.toString() }
      );
    }

    // Update or create meta tags
    tags.forEach((tag) => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = tag.name;
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    return () => {
      // Cleanup is handled by React
    };
  }, [card, title, description, image, site, creator, player]);

  return null;
}

