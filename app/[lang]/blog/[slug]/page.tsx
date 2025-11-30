import { Breadcrumbs } from "../../components/SEO/Breadcrumbs";
import { StructuredData } from "../../components/SEO/StructuredData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? `${slug} – रम्मी ब्लॉग | rummygamesapp.com`
      : `${slug} – Rummy Blog | rummygamesapp.com`,
    description: isHindi
      ? "रम्मी के बारे में नवीनतम टिप्स और गाइड"
      : "Latest tips and guides about rummy",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isHindi = lang === "hi";

  // In a real app, you'd fetch this from a CMS or database
  const post = {
    title: isHindi ? "रम्मी टिप्स" : "Rummy Tips",
    content: isHindi
      ? "रम्मी एक रोमांचक कार्ड गेम है जो स्किल और रणनीति पर आधारित है। यहां कुछ महत्वपूर्ण टिप्स हैं जो आपको जीतने में मदद करेंगे।"
      : "Rummy is an exciting card game based on skill and strategy. Here are some important tips that will help you win.",
    image: "/images/blog-1.jpg",
    date: isHindi ? "15 जनवरी 2024" : "January 15, 2024",
    author: isHindi ? "रम्मी एक्सपर्ट" : "Rummy Expert",
  };

  // Convert formatted date to ISO 8601 format for structured data
  const parseDateToISO = (dateString: string): string => {
    try {
      // Try parsing the date string
      const date = new Date(dateString);
      // Check if date is valid
      if (isNaN(date.getTime())) {
        // If parsing fails, return current date as fallback
        return new Date().toISOString();
      }
      return date.toISOString();
    } catch {
      // If any error occurs, return current date as fallback
      return new Date().toISOString();
    }
  };

  const datePublishedISO = parseDateToISO(post.date);
  const dateModifiedISO = datePublishedISO; // Use same date for modified if not provided

  return (
    <>
      <StructuredData
        lang={lang}
        pageType="blog"
        title={post.title}
        description={post.content}
        image={post.image}
        datePublished={datePublishedISO}
        dateModified={dateModifiedISO}
        author={post.author}
      />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "ब्लॉग" : "Blog", href: `/${lang}/blog` },
          { label: post.title, href: `/${lang}/blog/${slug}` },
        ]}
      />

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </header>

          <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">{post.content}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {isHindi
                ? "रम्मी खेलते समय, हमेशा प्योर सीक्वेंस बनाने पर ध्यान दें। यह सबसे महत्वपूर्ण नियम है और बिना इसके आप जीत नहीं सकते।"
                : "When playing rummy, always focus on making pure sequence. This is the most important rule and you cannot win without it."}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {isHindi
                ? "उच्च मूल्य वाले कार्ड जल्दी डिसकार्ड करना भी एक अच्छी रणनीति है। यदि आप जीत नहीं सकते, तो अपने पॉइंट्स कम करने की कोशिश करें।"
                : "Discarding high value cards early is also a good strategy. If you can't win, try to reduce your points."}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isHindi ? "ब्लॉग पर वापस" : "Back to Blog"}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

