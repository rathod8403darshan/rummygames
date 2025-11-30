import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { AdvancedStructuredData } from "../components/SEO/AdvancedStructuredData";
import { SEOContent } from "../components/Content/SEOContent";
import Link from "next/link";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "सहायता केंद्र – रम्मी गेम्स ऐप सहायता | rummygamesapp.com"
      : "Help Center – Rummy Games App Support | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप के लिए सहायता केंद्र। सभी सवालों के जवाब, गाइड और सहायता यहाँ मिलेंगे।"
      : "Help center for Rummy Games App. Find answers, guides and support for all your questions.",
    keywords: isHindi
      ? "सहायता, हेल्प सेंटर, ग्राहक सहायता, सपोर्ट"
      : "help, help center, customer support, support, assistance",
  };
}

export default async function HelpPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "सहायता केंद्र – रम्मी गेम्स ऐप"
      : "Help Center – Rummy Games App",
    description: isHindi
      ? "रम्मी गेम्स ऐप के लिए सहायता और गाइड।"
      : "Help and guides for Rummy Games App.",
    keywords: isHindi
      ? ["सहायता", "गाइड", "सपोर्ट"]
      : ["help", "guide", "support"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/help`,
    ogImage: "https://www.rummygamesapp.com/images/help-og.jpg",
  };

  const helpCategories = [
    {
      title: isHindi ? "शुरुआत करना" : "Getting Started",
      links: [
        { href: `/${lang}/download`, label: isHindi ? "ऐप डाउनलोड करें" : "Download App" },
        { href: `/${lang}/how-to-play`, label: isHindi ? "कैसे खेलें" : "How to Play" },
        { href: `/${lang}/rules`, label: isHindi ? "नियम" : "Rules" },
      ],
    },
    {
      title: isHindi ? "खाता और भुगतान" : "Account & Payment",
      links: [
        { href: `/${lang}/payment`, label: isHindi ? "भुगतान" : "Payment" },
        { href: `/${lang}/withdrawal`, label: isHindi ? "निकासी" : "Withdrawal" },
      ],
    },
    {
      title: isHindi ? "गेमप्ले" : "Gameplay",
      links: [
        { href: `/${lang}/strategies`, label: isHindi ? "रणनीतियाँ" : "Strategies" },
        { href: `/${lang}/tournaments`, label: isHindi ? "टूर्नामेंट" : "Tournaments" },
      ],
    },
  ];

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "सहायता" : "Help Center", href: `/${lang}/help` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "सहायता केंद्र" : "Help Center"}>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              {isHindi
                ? "रम्मी गेम्स ऐप के लिए सहायता और गाइड खोजें। हम आपकी मदद करने के लिए यहाँ हैं।"
                : "Find help and guides for Rummy Games App. We're here to help you."}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h2>
                  <ul className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                {isHindi ? "अभी भी सहायता चाहिए?" : "Still Need Help?"}
              </h2>
              <p className="text-xl mb-6 text-white/90">
                {isHindi
                  ? "हमारी सपोर्ट टीम 24/7 आपकी मदद के लिए उपलब्ध है"
                  : "Our support team is available 24/7 to help you"}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isHindi ? "संपर्क करें" : "Contact Us"}
              </Link>
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

