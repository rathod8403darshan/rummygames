import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { AdvancedStructuredData } from "../components/SEO/AdvancedStructuredData";
import { SEOContent } from "../components/Content/SEOContent";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "निष्पक्ष खेल – निष्पक्ष रम्मी गेमिंग | rummygamesapp.com"
      : "Fair Play – Fair Rummy Gaming | rummygamesapp.com",
    description: isHindi
      ? "निष्पक्ष खेल नीति। हम धोखाधड़ी और अनुचित प्रथाओं को रोकने के लिए प्रतिबद्ध हैं।"
      : "Fair play policy. We are committed to preventing fraud and unfair practices.",
    keywords: isHindi
      ? "निष्पक्ष खेल, धोखाधड़ी रोकथाम, निष्पक्ष गेमिंग"
      : "fair play, fraud prevention, fair gaming, anti-cheating",
  };
}

export default async function FairPlayPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "निष्पक्ष खेल – रम्मी गेम्स ऐप"
      : "Fair Play – Rummy Games App",
    description: isHindi
      ? "निष्पक्ष खेल नीति और धोखाधड़ी रोकथाम।"
      : "Fair play policy and fraud prevention.",
    keywords: isHindi
      ? ["निष्पक्ष खेल", "धोखाधड़ी", "निष्पक्ष गेमिंग"]
      : ["fair play", "fraud", "fair gaming"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/fair-play`,
    ogImage: "https://www.rummygamesapp.com/images/fair-play-og.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "निष्पक्ष खेल" : "Fair Play", href: `/${lang}/fair-play` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "निष्पक्ष खेल" : "Fair Play"}>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-xl leading-relaxed">
                {isHindi
                  ? "रम्मी गेम्स ऐप निष्पक्ष खेल के लिए प्रतिबद्ध है। हम सुनिश्चित करते हैं कि सभी खिलाड़ी निष्पक्ष और पारदर्शी माहौल में खेलें।"
                  : "Rummy Games App is committed to fair play. We ensure all players play in a fair and transparent environment."}
              </p>

              <SEOContent headingLevel={2} heading={isHindi ? "हमारी निष्पक्ष खेल नीति" : "Our Fair Play Policy"}>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>{isHindi ? "सभी गेम्स निष्पक्ष और यादृच्छिक हैं" : "All games are fair and random"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>{isHindi ? "धोखाधड़ी और बॉट का उपयोग सख्त वर्जित है" : "Fraud and bot usage is strictly prohibited"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>{isHindi ? "सभी खिलाड़ियों के लिए समान अवसर" : "Equal opportunities for all players"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>{isHindi ? "उन्नत सुरक्षा उपाय" : "Advanced security measures"}</span>
                  </li>
                </ul>
              </SEOContent>

              <SEOContent headingLevel={2} heading={isHindi ? "धोखाधड़ी रोकथाम" : "Fraud Prevention"}>
                <p className="text-lg mb-4">
                  {isHindi
                    ? "हम धोखाधड़ी को रोकने के लिए उन्नत तकनीकों का उपयोग करते हैं:"
                    : "We use advanced technologies to prevent fraud:"}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: isHindi ? "AI-आधारित निगरानी" : "AI-based Monitoring", icon: "🤖" },
                    { title: isHindi ? "यादृच्छिक संख्या जनरेटर" : "Random Number Generator", icon: "🎲" },
                    { title: isHindi ? "खाता सत्यापन" : "Account Verification", icon: "✅" },
                    { title: isHindi ? "24/7 निगरानी" : "24/7 Monitoring", icon: "👁️" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </SEOContent>
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

