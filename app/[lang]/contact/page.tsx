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
      ? "संपर्क करें – रम्मी गेम्स ऐप | rummygamesapp.com"
      : "Contact Us – Rummy Games App | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप से संपर्क करें। सामान्य प्रश्नों, सुझावों या रिपोर्ट के लिए हमसे संपर्क करें। 24-48 घंटे में जवाब।"
      : "Contact Rummy Games App. Reach out for general queries, suggestions, or reports. Response within 24-48 hours.",
    keywords: isHindi
      ? "संपर्क करें, ग्राहक सहायता, रम्मी सपोर्ट, ईमेल"
      : "contact us, customer support, rummy support, email, help center",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "संपर्क करें – रम्मी गेम्स ऐप"
      : "Contact Us – Rummy Games App",
    description: isHindi
      ? "रम्मी गेम्स ऐप से संपर्क करें। सामान्य प्रश्नों, सुझावों या रिपोर्ट के लिए हमसे संपर्क करें।"
      : "Contact Rummy Games App. Reach out for general queries, suggestions, or reports.",
    keywords: isHindi
      ? ["संपर्क", "ग्राहक सहायता", "सपोर्ट"]
      : ["contact", "customer support", "help"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/contact`,
    ogImage: "https://www.rummygamesapp.com/images/contact-og.jpg",
    localBusinessData: {
      name: "Rummy Games App",
      image: "https://www.rummygamesapp.com/logo.jpg",
      address: {
        streetAddress: "123 Gaming Street",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400001",
        addressCountry: "IN",
      },
      telephone: "+91-1800-XXX-XXXX",
      priceRange: "Free",
    },
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "संपर्क करें" : "Contact Us", href: `/${lang}/contact` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "संपर्क करें" : "Contact Us"}>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                {isHindi
                  ? "यदि आप एक नए रम्मी ऐप का सुझाव देना चाहते हैं, एक टूटी हुई लिंक की रिपोर्ट करना चाहते हैं, या सामान्य प्रश्नों के लिए हमसे संपर्क करना चाहते हैं, तो आप कभी भी हमसे संपर्क कर सकते हैं।"
                  : "If you want to suggest a new rummy app, report a broken link, or contact us for general queries, you can reach out anytime."}
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">📩</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {isHindi ? "ईमेल" : "Email"}
                    </h2>
                    <a
                      href="mailto:support.rummygames@gmail.com"
                      className="text-xl text-blue-600 hover:text-blue-800 font-semibold break-all"
                    >
                      support.rummygames@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-4xl">⏰</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {isHindi ? "प्रतिक्रिया समय" : "Response Time"}
                    </h2>
                    <p className="text-lg text-gray-700">
                      {isHindi ? "24–48 घंटे" : "24–48 hours"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isHindi ? "कृपया ध्यान दें:" : "Please note:"}
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>
                      {isHindi
                        ? "हम किसी भी ऐप से संबंधित वॉलेट या निकासी के मुद्दों को हल नहीं कर सकते"
                        : "We cannot solve wallet or withdrawal issues related to any app"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>
                      {isHindi
                        ? "हम आपके KYC को अपडेट नहीं कर सकते या गेम सपोर्ट प्रदान नहीं कर सकते।"
                        : "We cannot update your KYC or provide game support."}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>
                      {isHindi
                        ? "ऐसे मुद्दों के लिए, संबंधित रम्मीगेम की आधिकारिक सपोर्ट टीम से संपर्क करें।"
                        : "For such issues, contact the official support team of the respective rummygame."}
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}
