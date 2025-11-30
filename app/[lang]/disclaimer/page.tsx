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
      ? "अस्वीकरण – रम्मी गेम्स ऐप | rummygamesapp.com"
      : "Disclaimer – Rummy Games App | rummygamesapp.com",
    description: isHindi
      ? "अस्वीकरण: यह वेबसाइट केवल सूचनात्मक उद्देश्यों के लिए बनाई गई है। हम केवल मौजूदा रम्मी ऐप्स के डाउनलोड और रेफरल लिंक साझा करते हैं।"
      : "Disclaimer: This website is made only for informational purposes. We only share download and referral links of existing rummy apps.",
    keywords: isHindi
      ? "अस्वीकरण, रम्मी ऐप, जिम्मेदारी, कानूनी"
      : "disclaimer, rummy app, responsibility, legal, terms",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "अस्वीकरण – रम्मी गेम्स ऐप"
      : "Disclaimer – Rummy Games App",
    description: isHindi
      ? "यह वेबसाइट केवल सूचनात्मक उद्देश्यों के लिए बनाई गई है।"
      : "This website is made only for informational purposes.",
    keywords: isHindi
      ? ["अस्वीकरण", "जिम्मेदारी", "कानूनी"]
      : ["disclaimer", "responsibility", "legal"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/disclaimer`,
    ogImage: "https://www.rummygamesapp.com/images/disclaimer-og.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "अस्वीकरण" : "Disclaimer", href: `/${lang}/disclaimer` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "अस्वीकरण" : "Disclaimer"}>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                {isHindi
                  ? "यह वेबसाइट केवल सूचनात्मक उद्देश्यों के लिए बनाई गई है। हम केवल मौजूदा रम्मी ऐप्स के डाउनलोड और रेफरल लिंक साझा करते हैं। हम यहाँ सूचीबद्ध किसी भी गेमिंग प्लेटफॉर्म के मालिक या संचालक नहीं हैं।"
                  : "This website is made only for informational purposes. We only share download and referral links of existing rummy apps. We do not own or operate any gaming platform listed here."}
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isHindi ? "जोखिम चेतावनी" : "Risk Warning"}
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  {isHindi
                    ? "ऑनलाइन रम्मी में वित्तीय जोखिम शामिल है। उपयोगकर्ता पैसे खो सकते हैं। निवेश करने से पहले कृपया नियमों को ध्यान से पढ़ें। उपयोगकर्ताओं को यह जांचना चाहिए कि उनके राज्य में ऑनलाइन गेमिंग कानूनी रूप से अनुमत है या नहीं। हम 18 वर्ष से कम उम्र के उपयोगकर्ताओं को दृढ़ता से सलाह देते हैं कि वे रियल मनी गेम्स से दूर रहें।"
                    : "Online rummy involves financial risk. Users may lose money. Please read rules carefully before investing. Users must check whether online gaming is legally allowed in their state. We strongly advise users who are under 18 to stay away from real money games."}
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isHindi ? "इस वेबसाइट का उपयोग करके, आप सहमत हैं कि:" : "By using this website, you agree that:"}
                </h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">1.</span>
                    <span>
                      {isHindi
                        ? "आप 18 वर्ष या उससे अधिक उम्र के हैं"
                        : "You are 18 years or older"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">2.</span>
                    <span>
                      {isHindi
                        ? "आप जिम्मेदारी से खेलेंगे और अपने जोखिम पर"
                        : "You will play responsibly and at your own risk"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">3.</span>
                    <span>
                      {isHindi
                        ? "आप समझते हैं कि हम किसी भी रम्मी ऐप में जीत या हानि के लिए जिम्मेदार नहीं हैं"
                        : "You understand that we are not responsible for winnings or losses in any rummy apps"}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isHindi ? "महत्वपूर्ण नोट" : "Important Note"}
                </h2>
                <p className="text-lg leading-relaxed">
                  {isHindi
                    ? "यदि आप इस अस्वीकरण से सहमत नहीं हैं, तो कृपया हमारी वेबसाइट का उपयोग करना बंद कर दें।"
                    : "If you do not agree with this disclaimer, please stop using our website."}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isHindi ? "अतिरिक्त जानकारी" : "Additional Information"}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {isHindi
                    ? "हम सभी उपयोगकर्ताओं को जिम्मेदार गेमिंग की सलाह देते हैं। यदि आपको लगता है कि आपको गेमिंग की लत है, तो कृपया पेशेवर मदद लें।"
                    : "We advise all users to practice responsible gaming. If you feel you have a gaming addiction, please seek professional help."}
                </p>
              </div>
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

