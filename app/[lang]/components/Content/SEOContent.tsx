"use client";

import { ReactNode } from "react";

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
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <section className={className} id={id}>
      {heading && <HeadingTag className="text-3xl font-bold mb-6">{heading}</HeadingTag>}
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
  as?: keyof JSX.IntrinsicElements;
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

