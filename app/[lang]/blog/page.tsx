import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "रम्मी ब्लॉग – टिप्स, ट्रिक्स और गाइड | rummygamesapp.com"
      : "Rummy Blog – Tips, Tricks and Guides | rummygamesapp.com",
    description: isHindi
      ? "रम्मी के बारे में नवीनतम टिप्स, ट्रिक्स, रणनीतियाँ और गाइड। अपने गेम को बेहतर बनाएं।"
      : "Latest tips, tricks, strategies and guides about rummy. Improve your game.",
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const blogPosts = [
    {
      slug: "rummy-tips-for-beginners",
      title: isHindi ? "शुरुआती के लिए रम्मी टिप्स" : "Rummy Tips for Beginners",
      excerpt: isHindi
        ? "रम्मी खेलना शुरू कर रहे हैं? यहां शुरुआती के लिए सर्वश्रेष्ठ टिप्स हैं जो आपको जीतने में मदद करेंगे।"
        : "Starting to play rummy? Here are the best tips for beginners that will help you win.",
      image: "/images/blog-1.jpg",
      date: isHindi ? "15 जनवरी 2024" : "January 15, 2024",
      category: isHindi ? "टिप्स" : "Tips",
    },
    {
      slug: "advanced-rummy-strategies",
      title: isHindi ? "उन्नत रम्मी रणनीतियाँ" : "Advanced Rummy Strategies",
      excerpt: isHindi
        ? "अपने रम्मी गेम को अगले स्तर पर ले जाएं। उन्नत रणनीतियाँ जानें जो आपको एक्सपर्ट बनाएंगी।"
        : "Take your rummy game to the next level. Learn advanced strategies that will make you an expert.",
      image: "/images/blog-2.jfif",
      date: isHindi ? "12 जनवरी 2024" : "January 12, 2024",
      category: isHindi ? "रणनीति" : "Strategy",
    },
    {
      slug: "how-to-win-rummy-tournaments",
      title: isHindi ? "रम्मी टूर्नामेंट कैसे जीतें" : "How to Win Rummy Tournaments",
      excerpt: isHindi
        ? "टूर्नामेंट में जीतने के लिए सर्वश्रेष्ठ रणनीतियाँ और टिप्स। बड़े पुरस्कार जीतें।"
        : "Best strategies and tips to win tournaments. Win big prizes.",
      image: "/images/blog-3.jfif",
      date: isHindi ? "10 जनवरी 2024" : "January 10, 2024",
      category: isHindi ? "टूर्नामेंट" : "Tournaments",
    },
    {
      slug: "rummy-rules-explained",
      title: isHindi ? "रम्मी नियम समझाया" : "Rummy Rules Explained",
      excerpt: isHindi
        ? "रम्मी के सभी नियमों की विस्तृत व्याख्या। प्योर सीक्वेंस, सेट, जोकर और बहुत कुछ।"
        : "Detailed explanation of all rummy rules. Pure sequence, sets, joker and much more.",
      image: "/images/blog-4.jfif",
      date: isHindi ? "8 जनवरी 2024" : "January 8, 2024",
      category: isHindi ? "नियम" : "Rules",
    },
    {
      slug: "common-rummy-mistakes",
      title: isHindi ? "सामान्य रम्मी गलतियाँ" : "Common Rummy Mistakes",
      excerpt: isHindi
        ? "वे गलतियाँ जो अधिकांश खिलाड़ी करते हैं और उनसे कैसे बचें। अपने गेम में सुधार करें।"
        : "Mistakes that most players make and how to avoid them. Improve your game.",
      image: "/images/blog-5.jfif",
      date: isHindi ? "5 जनवरी 2024" : "January 5, 2024",
      category: isHindi ? "टिप्स" : "Tips",
    },
    {
      slug: "rummy-variants-explained",
      title: isHindi ? "रम्मी वेरिएंट समझाया" : "Rummy Variants Explained",
      excerpt: isHindi
        ? "पॉइंट्स रम्मी, पूल रम्मी, डील रम्मी - सभी वेरिएंट के बारे में जानें।"
        : "Points Rummy, Pool Rummy, Deal Rummy - Learn about all variants.",
      image: "/images/blog-6.jfif",
      date: isHindi ? "3 जनवरी 2024" : "January 3, 2024",
      category: isHindi ? "गाइड" : "Guide",
    },
  ];

  return (
    <>
      <StructuredData lang={lang} pageType="blog" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "ब्लॉग" : "Blog", href: `/${lang}/blog` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isHindi ? "रम्मी ब्लॉग" : "Rummy Blog"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {isHindi
              ? "टिप्स, ट्रिक्स, रणनीतियाँ और गाइड"
              : "Tips, Tricks, Strategies and Guides"}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={`/${lang}/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    {isHindi ? "पढ़ना जारी रखें" : "Read More"}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {isHindi ? "न्यूज़लेटर सब्सक्राइब करें" : "Subscribe to Newsletter"}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {isHindi
              ? "नवीनतम टिप्स और अपडेट प्राप्त करें"
              : "Get latest tips and updates"}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={isHindi ? "आपका ईमेल" : "Your Email"}
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              {isHindi ? "सब्सक्राइब" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

