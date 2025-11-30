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
      ? "पूल रम्मी – 101 और 201 पूल रम्मी खेलें | rummygamesapp.com"
      : "Pool Rummy – Play 101 and 201 Pool Rummy | rummygamesapp.com",
    description: isHindi
      ? "पूल रम्मी खेलें - 101 पूल और 201 पूल रम्मी। लंबे गेम्स, बड़े पुरस्कार। तुरंत खेलना शुरू करें।"
      : "Play Pool Rummy - 101 Pool and 201 Pool Rummy. Longer games, bigger prizes. Start playing now.",
    keywords: isHindi
      ? "पूल रम्मी, 101 पूल रम्मी, 201 पूल रम्मी, पूल रम्मी गेम"
      : "pool rummy, 101 pool rummy, 201 pool rummy, pool rummy game, online pool rummy",
  };
}

export default async function PoolRummyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "पूल रम्मी – रम्मी गेम्स ऐप"
      : "Pool Rummy – Rummy Games App",
    description: isHindi
      ? "101 और 201 पूल रम्मी खेलें।"
      : "Play 101 and 201 Pool Rummy.",
    keywords: isHindi
      ? ["पूल रम्मी", "101 पूल", "201 पूल"]
      : ["pool rummy", "101 pool", "201 pool"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/pool-rummy`,
    ogImage: "https://www.rummygamesapp.com/images/pool-rummy-og.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "पूल रम्मी" : "Pool Rummy", href: `/${lang}/pool-rummy` },
        ]}
      />

      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isHindi ? "पूल रम्मी" : "Pool Rummy"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {isHindi
              ? "101 और 201 पूल रम्मी खेलें। लंबे गेम्स, बड़े पुरस्कार।"
              : "Play 101 and 201 Pool Rummy. Longer games, bigger prizes."}
          </p>
        </div>
      </section>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={2} heading={isHindi ? "पूल रम्मी क्या है?" : "What is Pool Rummy?"}>
            <p className="text-lg text-gray-700 mb-6">
              {isHindi
                ? "पूल रम्मी रम्मी का एक प्रकार है जहाँ खिलाड़ी एक पूल में प्रवेश करते हैं और जब तक वे 101 या 201 पॉइंट्स तक नहीं पहुंच जाते, तब तक खेलते हैं।"
                : "Pool Rummy is a type of rummy where players enter a pool and play until they reach 101 or 201 points."}
            </p>
          </SEOContent>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">101 Pool</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {isHindi ? "101 पॉइंट्स तक खेलें" : "Play until 101 points"}</li>
                <li>• {isHindi ? "तेज़ गेमप्ले" : "Fast gameplay"}</li>
                <li>• {isHindi ? "छोटे पुरस्कार" : "Smaller prizes"}</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">201 Pool</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {isHindi ? "201 पॉइंट्स तक खेलें" : "Play until 201 points"}</li>
                <li>• {isHindi ? "लंबा गेमप्ले" : "Longer gameplay"}</li>
                <li>• {isHindi ? "बड़े पुरस्कार" : "Bigger prizes"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CTA lang={lang} variant="secondary" />
    </>
  );
}

