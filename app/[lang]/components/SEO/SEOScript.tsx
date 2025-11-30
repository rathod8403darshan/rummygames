"use client";

import { useEffect } from "react";

interface SEOScriptProps {
  type: "application/ld+json" | "application/json";
  id?: string;
  children: object;
}

/**
 * SEO Script Component
 * Safely injects JSON-LD structured data scripts
 */
export function SEOScript({ type, id, children }: SEOScriptProps) {
  useEffect(() => {
    const scriptId = id || `seo-script-${Date.now()}`;
    
    // Remove existing script with same ID
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.type = type;
    script.id = scriptId;
    script.text = JSON.stringify(children, null, 2);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, id, children]);

  return null;
}

