"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleContentProps {
  title: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  readingTime?: number;
  children: ReactNode;
  tags?: string[];
  relatedArticles?: Array<{ title: string; url: string }>;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

/**
 * Article Content Component
 * Creates SEO-optimized article structure
 */
export function ArticleContent({
  title,
  author,
  publishedDate,
  modifiedDate,
  readingTime,
  children,
  tags,
  relatedArticles,
  image,
}: ArticleContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={publishedDate}>{new Date(publishedDate).toLocaleDateString()}</time>
          </div>
          {readingTime && (
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readingTime} min read</span>
            </div>
          )}
        </div>

        {image && (
          <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        {modifiedDate && (
          <p className="text-sm text-gray-600 mb-4">
            Last updated: {new Date(modifiedDate).toLocaleDateString()}
          </p>
        )}

        {relatedArticles && relatedArticles.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <ul className="space-y-2">
              {relatedArticles.map((article, index) => (
                <li key={index}>
                  <Link
                    href={article.url}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </footer>
    </article>
  );
}

