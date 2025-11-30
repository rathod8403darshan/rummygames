import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { AdvancedStructuredData } from "../components/SEO/AdvancedStructuredData";
import { SEOContent } from "../components/Content/SEOContent";
import { CTA } from "../components/CTA";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "पॉइंट्स रम्मी – तेज़ रम्मी गेम्स | rummygamesapp.com"
      : "Points Rummy – Fast Rummy Games | rummygamesapp.com",
    description: isHindi
      ? "पॉइंट्स रम्मी खेलें - तेज़-तर्रार गेमप्ले के साथ क्विक गेम्स। तुरंत खेलना शुरू करें।"
      : "Play Points Rummy - quick games with fast-paced gameplay. Start playing instantly.",
    keywords: isHindi
      ? "पॉइंट्स रम्मी, तेज़ रम्मी, क्विक रम्मी, ऑनलाइन पॉइंट्स रम्मी"
      : "points rummy, fast rummy, quick rummy, online points rummy, points rummy game",
  };
}

export default async function PointsRummyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "पॉइंट्स रम्मी – रम्मी गेम्स ऐप"
      : "Points Rummy – Rummy Games App",
    description: isHindi
      ? "तेज़-तर्रार पॉइंट्स रम्मी खेलें।"
      : "Play fast-paced Points Rummy.",
    keywords: isHindi
      ? ["पॉइंट्स रम्मी", "तेज़ रम्मी", "क्विक गेम"]
      : ["points rummy", "fast rummy", "quick game"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/points-rummy`,
    ogImage: "https://www.rummygamesapp.com/images/points-rummy-og.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "पॉइंट्स रम्मी" : "Points Rummy", href: `/${lang}/points-rummy` },
        ]}
      />

      <section className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isHindi ? "पॉइंट्स रम्मी" : "Points Rummy"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {isHindi
              ? "तेज़-तर्रार गेमप्ले के साथ क्विक रम्मी गेम्स।"
              : "Quick rummy games with fast-paced gameplay."}
          </p>
        </div>
      </section>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={2} heading={isHindi ? "पॉइंट्स रम्मी क्या है?" : "What is Points Rummy?"}>
            <p className="text-lg text-gray-700 mb-6">
              {isHindi
                ? "पॉइंट्स रम्मी रम्मी का सबसे तेज़ रूप है। प्रत्येक गेम एक डील पर आधारित होता है और पहले जीतने वाला खिलाड़ी जीतता है।"
                : "Points Rummy is the fastest form of rummy. Each game is based on one deal and the first player to win takes the prize."}
            </p>
          </SEOContent>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {isHindi ? "पॉइंट्स रम्मी की विशेषताएं" : "Features of Points Rummy"}
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>{isHindi ? "तेज़ गेमप्ले - 5-10 मिनट" : "Fast gameplay - 5-10 minutes"}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>{isHindi ? "कम प्रवेश शुल्क" : "Low entry fee"}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>{isHindi ? "तुरंत परिणाम" : "Instant results"}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>{isHindi ? "कई गेम्स खेलें" : "Play multiple games"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CTA lang={lang} variant="secondary" />
    </>
  );
}

