"use client";

import { ElementType, ReactNode } from "react";
import Image from "next/image";

interface RichContentProps {
  children: ReactNode;
  className?: string;
  heading?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

/**
 * Rich Content Component
 * Creates SEO-optimized content sections with proper semantic HTML
 */
export function RichContent({
  children,
  className = "",
  heading,
  headingLevel = 2,
  image,
}: RichContentProps) {
  // Use JSX syntax to render the heading tag dynamically
  return (
    <article className={`prose prose-lg max-w-none ${className}`}>
      {heading && (() => {
        // Only allow heading tags from h1 to h6
        const level = Math.min(Math.max(headingLevel, 1), 6);
        switch (level) {
          case 1:
            return <h1 className="text-3xl font-bold mb-6 text-gray-900">{heading}</h1>;
          case 2:
            return <h2 className="text-3xl font-bold mb-6 text-gray-900">{heading}</h2>;
          case 3:
            return <h3 className="text-3xl font-bold mb-6 text-gray-900">{heading}</h3>;
          case 4:
            return <h4 className="text-3xl font-bold mb-6 text-gray-900">{heading}</h4>;
          case 5:
            return <h5 className="text-3xl font-bold mb-6 text-gray-900">{heading}</h5>;
          case 6:
            return <h6 className="text-3xl font-bold mb-6 text-gray-900">{heading}</h6>;
          default:
            return null;
        }
      })()}
      {image && (
        <figure className="my-8">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 1200}
            height={image.height || 630}
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <figcaption className="text-center text-gray-600 mt-2 text-sm">
            {image.alt}
          </figcaption>
        </figure>
      )}
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </article>
  );
}

/**
 * Rich Text Component
 * Optimized text component with semantic markup
 */

interface RichTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function RichText({
  children,
  className = "",
  as: Component = "p",
}: RichTextProps) {
  return <Component className={`text-lg leading-relaxed ${className}`}>{children}</Component>;
}

/**
 * Rich List Component
 * Creates SEO-friendly lists
 */
export function RichList({
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
    <ListTag className={`space-y-3 text-lg text-gray-700 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-blue-600 mr-3 font-bold">{ordered ? `${index + 1}.` : "•"}</span>
          <span>{item}</span>
        </li>
      ))}
    </ListTag>
  );
}

/**
 * Rich Table Component
 * Creates SEO-friendly tables
 */
export function RichTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        {caption && <caption className="text-lg font-semibold mb-2">{caption}</caption>}
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Rich Quote Component
 * Creates SEO-friendly blockquotes
 */
export function RichQuote({
  text,
  author,
  source,
}: {
  text: string;
  author?: string;
  source?: string;
}) {
  return (
    <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 rounded-r-lg">
      <p className="text-lg italic text-gray-700 mb-2">"{text}"</p>
      {(author || source) && (
        <footer className="text-sm text-gray-600">
          {author && <cite className="font-semibold">{author}</cite>}
          {source && <span> - {source}</span>}
        </footer>
      )}
    </blockquote>
  );
}

