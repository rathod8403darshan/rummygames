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
      ? "प्रेस – रम्मी गेम्स ऐप समाचार | rummygamesapp.com"
      : "Press – Rummy Games App News | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप के बारे में नवीनतम समाचार, प्रेस विज्ञप्ति और मीडिया कवरेज।"
      : "Latest news, press releases and media coverage about Rummy Games App.",
    keywords: isHindi
      ? "प्रेस, समाचार, प्रेस विज्ञप्ति, मीडिया"
      : "press, news, press release, media, rummy games news",
  };
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "प्रेस – रम्मी गेम्स ऐप"
      : "Press – Rummy Games App",
    description: isHindi
      ? "रम्मी गेम्स ऐप के बारे में नवीनतम समाचार।"
      : "Latest news about Rummy Games App.",
    keywords: isHindi
      ? ["प्रेस", "समाचार", "मीडिया"]
      : ["press", "news", "media"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/press`,
    ogImage: "https://www.rummygamesapp.com/images/press-og.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "प्रेस" : "Press", href: `/${lang}/press` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "प्रेस" : "Press"}>
            <p className="text-xl text-gray-700 mb-12">
              {isHindi
                ? "रम्मी गेम्स ऐप के बारे में नवीनतम समाचार, प्रेस विज्ञप्ति और मीडिया कवरेज।"
                : "Latest news, press releases and media coverage about Rummy Games App."}
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isHindi ? "प्रेस संपर्क" : "Press Contact"}
                </h2>
                <p className="text-gray-700 mb-4">
                  {isHindi
                    ? "मीडिया पूछताछ के लिए, कृपया हमसे संपर्क करें:"
                    : "For media inquiries, please contact us:"}
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>{isHindi ? "ईमेल:" : "Email:"}</strong> press@rummygamesapp.com
                  </p>
                  <p className="text-gray-700">
                    <strong>{isHindi ? "फोन:" : "Phone:"}</strong> +91-1800-XXX-XXXX
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {isHindi ? "प्रेस किट" : "Press Kit"}
                </h2>
                <p className="text-gray-700 mb-6">
                  {isHindi
                    ? "हमारी प्रेस किट में लोगो, छवियां और कंपनी जानकारी शामिल है।"
                    : "Our press kit includes logos, images and company information."}
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                  {isHindi ? "डाउनलोड करें" : "Download Press Kit"}
                </button>
              </div>
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

