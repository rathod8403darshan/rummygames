"use client";

import { useEffect } from "react";

/**
 * Page Speed Optimizer Component
 * Implements various page speed optimizations
 */
export function PageSpeedOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const criticalResources = [
      "/logo.jpg",
      "/images/hero-phone.png",
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = resource;
      document.head.appendChild(link);
    });

    // Defer non-critical CSS
    const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
    nonCriticalCSS.forEach((link) => {
      link.setAttribute("media", "print");
      link.setAttribute("onload", "this.media='all'");
    });

    // Lazy load images
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }

    // Optimize fonts
    if ("fonts" in document) {
      (document.fonts as FontFaceSet).ready.then(() => {
        document.documentElement.classList.add("fonts-loaded");
      });
    }
  }, []);

  return null;
}

