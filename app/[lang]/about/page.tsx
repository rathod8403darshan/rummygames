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
      ? "हमारे बारे में – रम्मी गेम्स ऐप | rummygamesapp.com"
      : "About Us – Rummy Games App | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप के बारे में जानें। भारत का सबसे भरोसेमंद रम्मी गेमिंग प्लेटफॉर्म। 10 मिलियन+ खिलाड़ी, 100% सुरक्षित, कानूनी।"
      : "Learn about Rummy Games App. India's most trusted rummy gaming platform. 10 million+ players, 100% secure, legal.",
    keywords: isHindi
      ? "रम्मी गेम्स ऐप, हमारे बारे में, रम्मी प्लेटफॉर्म, ऑनलाइन रम्मी"
      : "rummy games app, about us, rummy platform, online rummy, rummy company",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "हमारे बारे में – रम्मी गेम्स ऐप"
      : "About Us – Rummy Games App",
    description: isHindi
      ? "रम्मी गेम्स ऐप भारत का सबसे भरोसेमंद रम्मी गेमिंग प्लेटफॉर्म है।"
      : "Rummy Games App is India's most trusted rummy gaming platform.",
    keywords: isHindi
      ? ["रम्मी गेम्स", "हमारे बारे में", "रम्मी प्लेटफॉर्म"]
      : ["rummy games", "about us", "rummy platform"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/about`,
    ogImage: "https://www.rummygamesapp.com/images/about-og.jpg",
    organizationData: {
      name: "Rummy Games App",
      url: "https://www.rummygamesapp.com",
      logo: "https://www.rummygamesapp.com/logo.jpg",
      contactPoint: {
        telephone: "+91-1800-XXX-XXXX",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      sameAs: [
        "https://www.facebook.com/rummygamesapp",
        "https://www.twitter.com/rummygamesapp",
        "https://www.instagram.com/rummygamesapp",
        "https://www.youtube.com/rummygamesapp",
      ],
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
          { label: isHindi ? "हमारे बारे में" : "About Us", href: `/${lang}/about` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "हमारे बारे में" : "About Us"}>
            <p className="text-lg text-gray-700 mb-6">
              {isHindi
                ? "रम्मी गेम्स ऐप भारत का सबसे भरोसेमंद और सुरक्षित रम्मी गेमिंग प्लेटफॉर्म है। हम 2020 से लाखों खिलाड़ियों को रियल कैश रम्मी खेलने का मौका प्रदान कर रहे हैं।"
                : "Rummy Games App is India's most trusted and secure rummy gaming platform. Since 2020, we have been providing millions of players the opportunity to play real cash rummy."}
            </p>
            
            <SEOContent headingLevel={2} heading={isHindi ? "हमारा मिशन" : "Our Mission"}>
              <p className="text-lg text-gray-700 mb-4">
                {isHindi
                  ? "हमारा मिशन भारत में सुरक्षित, कानूनी और मनोरंजक रम्मी गेमिंग अनुभव प्रदान करना है। हम चाहते हैं कि हर खिलाड़ी निष्पक्ष और पारदर्शी माहौल में रम्मी खेल सके।"
                  : "Our mission is to provide safe, legal, and entertaining rummy gaming experience in India. We want every player to enjoy rummy in a fair and transparent environment."}
              </p>
            </SEOContent>

            <SEOContent headingLevel={2} heading={isHindi ? "हमारे मूल्य" : "Our Values"}>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>{isHindi ? "100% सुरक्षा और सुरक्षा" : "100% Security and Safety"}</li>
                <li>{isHindi ? "निष्पक्ष खेल" : "Fair Play"}</li>
                <li>{isHindi ? "पारदर्शिता" : "Transparency"}</li>
                <li>{isHindi ? "ग्राहक संतुष्टि" : "Customer Satisfaction"}</li>
                <li>{isHindi ? "जिम्मेदार गेमिंग" : "Responsible Gaming"}</li>
              </ul>
            </SEOContent>

            <SEOContent headingLevel={2} heading={isHindi ? "हमारी उपलब्धियां" : "Our Achievements"}>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
                  <div className="text-gray-700">{isHindi ? "खिलाड़ी" : "Players"}</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">₹500Cr+</div>
                  <div className="text-gray-700">{isHindi ? "जीत" : "Winnings"}</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">4.8★</div>
                  <div className="text-gray-700">{isHindi ? "रेटिंग" : "Rating"}</div>
                </div>
              </div>
            </SEOContent>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

