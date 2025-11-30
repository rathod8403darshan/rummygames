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
      ? "जिम्मेदार गेमिंग – सुरक्षित रूप से खेलें | rummygamesapp.com"
      : "Responsible Gaming – Play Safely | rummygamesapp.com",
    description: isHindi
      ? "जिम्मेदार गेमिंग के बारे में जानें। सुरक्षित रूप से रम्मी खेलने के लिए दिशानिर्देश और सुझाव।"
      : "Learn about responsible gaming. Guidelines and tips for playing rummy safely.",
    keywords: isHindi
      ? "जिम्मेदार गेमिंग, सुरक्षित गेमिंग, गेमिंग लत"
      : "responsible gaming, safe gaming, gaming addiction, play responsibly",
  };
}

export default async function ResponsibleGamingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "जिम्मेदार गेमिंग – रम्मी गेम्स ऐप"
      : "Responsible Gaming – Rummy Games App",
    description: isHindi
      ? "जिम्मेदार गेमिंग के बारे में जानें और सुरक्षित रूप से खेलें।"
      : "Learn about responsible gaming and play safely.",
    keywords: isHindi
      ? ["जिम्मेदार गेमिंग", "सुरक्षित खेल", "गेमिंग लत"]
      : ["responsible gaming", "safe gaming", "gaming addiction"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/responsible-gaming`,
    ogImage: "https://www.rummygamesapp.com/images/responsible-gaming-og.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "जिम्मेदार गेमिंग" : "Responsible Gaming", href: `/${lang}/responsible-gaming` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "जिम्मेदार गेमिंग" : "Responsible Gaming"}>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-xl leading-relaxed">
                {isHindi
                  ? "रम्मी गेम्स ऐप जिम्मेदार गेमिंग को बढ़ावा देता है। हम चाहते हैं कि सभी खिलाड़ी सुरक्षित और जिम्मेदारी से खेलें।"
                  : "Rummy Games App promotes responsible gaming. We want all players to play safely and responsibly."}
              </p>

              <SEOContent headingLevel={2} heading={isHindi ? "जिम्मेदार गेमिंग के सिद्धांत" : "Principles of Responsible Gaming"}>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>{isHindi ? "केवल वही पैसा खेलें जो आप खो सकते हैं" : "Only play with money you can afford to lose"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>{isHindi ? "समय सीमा निर्धारित करें" : "Set time limits"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>{isHindi ? "बजट निर्धारित करें और उससे चिपके रहें" : "Set a budget and stick to it"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>{isHindi ? "गेमिंग को मनोरंजन के रूप में देखें, आय के स्रोत के रूप में नहीं" : "View gaming as entertainment, not as a source of income"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>{isHindi ? "18 वर्ष से कम उम्र के लोगों को खेलने की अनुमति नहीं है" : "People under 18 are not allowed to play"}</span>
                  </li>
                </ul>
              </SEOContent>

              <SEOContent headingLevel={2} heading={isHindi ? "सहायता प्राप्त करें" : "Get Help"}>
                <p className="text-lg mb-4">
                  {isHindi
                    ? "यदि आपको लगता है कि आपको गेमिंग की लत है, तो कृपया पेशेवर मदद लें:"
                    : "If you feel you have a gaming addiction, please seek professional help:"}
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {isHindi ? "हेल्पलाइन:" : "Helpline:"}
                  </p>
                  <p className="text-xl text-red-600 font-bold">1800-XXX-XXXX</p>
                </div>
              </SEOContent>
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

