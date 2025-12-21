"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  lang: string;
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({ lang, items }: BreadcrumbsProps) {
  const pathname = usePathname();
  const isHindi = lang === "hi";

  const defaultItems: BreadcrumbItem[] = [];

  // Auto-generate breadcrumbs from pathname if items not provided
  if (!items) {
    const pathSegments = pathname.split("/").filter(Boolean);
    const segments = pathSegments.slice(1); // Remove lang segment

    segments.forEach((segment, index) => {
      const href = `/${lang}/${segments.slice(0, index + 1).join("/")}`;
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      defaultItems.push({ label, href });
    });
  } else {
    defaultItems.push(...items);
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 border-b border-gray-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {defaultItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-gray-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === defaultItems.length - 1 ? (
                <span className="text-gray-600 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

