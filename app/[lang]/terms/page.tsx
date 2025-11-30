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
      ? "नियम और शर्तें – रम्मी गेम्स ऐप | rummygamesapp.com"
      : "Terms and Conditions – Rummy Games App | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप की नियम और शर्तें। सेवा की शर्तें, उपयोगकर्ता दायित्व और नियम।"
      : "Terms and Conditions of Rummy Games App. Service terms, user responsibilities and rules.",
    keywords: isHindi
      ? "नियम और शर्तें, सेवा की शर्तें, उपयोगकर्ता समझौता"
      : "terms and conditions, service terms, user agreement, legal terms",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "नियम और शर्तें – रम्मी गेम्स ऐप"
      : "Terms and Conditions – Rummy Games App",
    description: isHindi
      ? "इस वेबसाइट तक पहुंचने और उपयोग करने से, आप निम्नलिखित नियमों को स्वीकार करते हैं।"
      : "By accessing and using this website, you accept the following terms.",
    keywords: isHindi
      ? ["नियम", "शर्तें", "सेवा"]
      : ["terms", "conditions", "service"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/terms`,
    ogImage: "https://www.rummygamesapp.com/images/terms-og.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "नियम और शर्तें" : "Terms & Conditions", href: `/${lang}/terms` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "नियम और शर्तें" : "Terms and Conditions"}>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed mb-8">
                {isHindi
                  ? "इस वेबसाइट तक पहुंचने और उपयोग करने से, आप निम्नलिखित नियमों को स्वीकार करते हैं:"
                  : "By accessing and using this website, you accept the following terms:"}
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">
                      1
                    </span>
                    {isHindi ? "हम केवल लिंक प्रदान करते हैं" : "We only provide links"}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isHindi
                      ? "हम केवल लिंक प्रदान करते हैं। जब तक उल्लेख न किया जाए, हम किसी भी गेमिंग ऑपरेटर के साथ साझेदार नहीं हैं।"
                      : "We only provide links. We are not partners with any gaming operator unless mentioned."}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">
                      2
                    </span>
                    {isHindi ? "भुगतान जिम्मेदारी" : "Payment Responsibility"}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isHindi
                      ? "हम किसी भी रम्मी एप्लिकेशन के भुगतान, जमा, निकासी या पुरस्कारों के लिए जिम्मेदार नहीं हैं।"
                      : "We are not responsible for payments, deposits, withdrawals or rewards of any rummy application."}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">
                      3
                    </span>
                    {isHindi ? "कानूनी अनुपालन" : "Legal Compliance"}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isHindi
                      ? "उपयोगकर्ताओं को रियल मनी गेम्स खेलने से पहले अपने क्षेत्र में कानूनी अनुपालन सत्यापित करना चाहिए।"
                      : "Users must verify legal compliance in their region before playing real money games."}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">
                      4
                    </span>
                    {isHindi ? "लिंक और ऑफर परिवर्तन" : "Link and Offer Changes"}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isHindi
                      ? "सभी डाउनलोड लिंक, ऑफर और बोनस गेम प्रदाता द्वारा बिना सूचना के बदले जा सकते हैं।"
                      : "All download links, offers and bonuses are subject to change by the game provider without notice."}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">
                      5
                    </span>
                    {isHindi ? "दुरुपयोग निषेध" : "Misuse Prohibition"}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isHindi
                      ? "आप वेबसाइट का दुरुपयोग नहीं करने, सामग्री की नकल नहीं करने, या इसे अवैध उद्देश्यों के लिए उपयोग नहीं करने के लिए सहमत हैं।"
                      : "You agree not to misuse the website, copy content, or use it for illegal purposes."}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">
                      6
                    </span>
                    {isHindi ? "सामग्री अधिकार" : "Content Rights"}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isHindi
                      ? "हम बिना पूर्व सूचना के किसी भी समय सामग्री को अपडेट, हटाने या संशोधित करने का अधिकार सुरक्षित रखते हैं।"
                      : "We reserve the right to update, remove or modify content anytime without prior notice."}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">
                      7
                    </span>
                    {isHindi ? "ग्राहक सहायता" : "Customer Support"}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isHindi
                      ? "यदि आपको किसी रम्मी ऐप के साथ कोई समस्या आती है, तो आपको उस ऐप की आधिकारिक ग्राहक सहायता से संपर्क करना चाहिए।"
                      : "If you face any issue with a rummy app, you must contact the official customer support of that app."}
                  </p>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-xl p-8 mt-8 text-center">
                <p className="text-xl font-bold mb-2">
                  {isHindi ? "सहमति" : "Agreement"}
                </p>
                <p className="text-lg">
                  {isHindi
                    ? "वेबसाइट का उपयोग जारी रखकर, आप पुष्टि करते हैं कि आप इन नियमों से सहमत हैं।"
                    : "By continuing to use the website, you confirm that you agree to these terms."}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {isHindi ? "अंतिम अपडेट" : "Last Updated"}
                </h2>
                <p className="text-gray-700">
                  {isHindi
                    ? "1 जनवरी 2024"
                    : "January 1, 2024"}
                </p>
              </div>
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}
