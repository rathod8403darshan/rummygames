import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { AdvancedStructuredData } from "../components/SEO/AdvancedStructuredData";
import { FAQ } from "../components/FAQ";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "सामान्य प्रश्न (FAQ) – रम्मी गेम्स ऐप | rummygamesapp.com"
      : "Frequently Asked Questions (FAQ) – Rummy Games App | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप के बारे में सामान्य प्रश्नों के उत्तर। सभी सवालों के जवाब यहाँ मिलेंगे।"
      : "Answers to frequently asked questions about Rummy Games App. Find answers to all your questions here.",
    keywords: isHindi
      ? "FAQ, सामान्य प्रश्न, रम्मी सवाल, सहायता"
      : "FAQ, frequently asked questions, rummy questions, help, support",
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "सामान्य प्रश्न – रम्मी गेम्स ऐप"
      : "FAQ – Rummy Games App",
    description: isHindi
      ? "रम्मी गेम्स ऐप के बारे में सामान्य प्रश्नों के उत्तर।"
      : "Answers to frequently asked questions about Rummy Games App.",
    keywords: isHindi
      ? ["FAQ", "सवाल", "जवाब"]
      : ["FAQ", "questions", "answers"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/faq`,
    ogImage: "https://www.rummygamesapp.com/images/faq-og.jpg",
    faqData: [
      {
        question: isHindi ? "रम्मी गेम्स ऐप क्या है?" : "What is Rummy Games App?",
        answer: isHindi
          ? "रम्मी गेम्स ऐप भारत का सबसे भरोसेमंद रम्मी गेमिंग प्लेटफॉर्म है।"
          : "Rummy Games App is India's most trusted rummy gaming platform.",
      },
      {
        question: isHindi ? "क्या यह कानूनी है?" : "Is it legal?",
        answer: isHindi
          ? "हाँ, रम्मी एक स्किल-बेस्ड गेम है और भारत में कानूनी है।"
          : "Yes, rummy is a skill-based game and is legal in India.",
      },
    ],
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "सामान्य प्रश्न" : "FAQ", href: `/${lang}/faq` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {isHindi ? "सामान्य प्रश्न" : "Frequently Asked Questions"}
          </h1>
          <FAQ lang={lang} />
        </div>
      </div>
    </>
  );
}

