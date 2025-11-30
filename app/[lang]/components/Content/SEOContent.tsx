"use client";

import { ElementType, ReactNode } from "react";

interface SEOContentProps {
  children: ReactNode;
  className?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  heading?: string;
  id?: string;
}

/**
 * SEO Content Component
 * Wraps content with proper semantic HTML for SEO
 */
export function SEOContent({
  children,
  className = "",
  headingLevel = 2,
  heading,
  id,
}: SEOContentProps) {
  // Workaround for lack of JSX.IntrinsicElements namespace error in some TS setups:
  // Dynamically select heading element, fallback to h2 if level is invalid.
  const getHeadingElement = (
    level: number,
    headingText: string
  ): React.ReactNode => {
    switch (level) {
      case 1:
        return <h1 className="text-3xl font-bold mb-6">{headingText}</h1>;
      case 2:
        return <h2 className="text-3xl font-bold mb-6">{headingText}</h2>;
      case 3:
        return <h3 className="text-3xl font-bold mb-6">{headingText}</h3>;
      case 4:
        return <h4 className="text-3xl font-bold mb-6">{headingText}</h4>;
      case 5:
        return <h5 className="text-3xl font-bold mb-6">{headingText}</h5>;
      case 6:
        return <h6 className="text-3xl font-bold mb-6">{headingText}</h6>;
      default:
        return <h2 className="text-3xl font-bold mb-6">{headingText}</h2>;
    }
  };

  return (
    <section className={className} id={id}>
      {heading && getHeadingElement(headingLevel, heading)}
      <div className="prose prose-lg max-w-none">{children}</div>
    </section>
  );
}

/**
 * SEO Text Component
 * Optimized text component with proper semantic markup
 */
export function SEOText({
  children,
  className = "",
  as: Component = "p",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Component className={className}>{children}</Component>;
}

/**
 * SEO List Component
 * Creates SEO-friendly lists
 */
export function SEOList({
  items,
  ordered = false,
  className = "",
}: {
  items: string[];
  ordered?: boolean;
  className?: string;
}) {
  const ListTag = ordered ? "ol" : "ul";
  
  return (
    <ListTag className={className}>
      {items.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ListTag>
  );
}

