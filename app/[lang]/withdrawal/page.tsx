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
      ? "निकासी – तुरंत पैसे निकालें | rummygamesapp.com"
      : "Withdrawal – Withdraw Money Instantly | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप से पैसे निकालने के तरीके। तुरंत निकासी, बैंक खाते, UPI और अधिक।"
      : "Ways to withdraw money from Rummy Games App. Instant withdrawal, bank account, UPI and more.",
    keywords: isHindi
      ? "निकासी, पैसे निकालना, बैंक निकासी, UPI निकासी"
      : "withdrawal, withdraw money, bank withdrawal, UPI withdrawal, instant withdrawal",
  };
}

export default async function WithdrawalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "निकासी – रम्मी गेम्स ऐप"
      : "Withdrawal – Rummy Games App",
    description: isHindi
      ? "तुरंत पैसे निकालने के तरीके।"
      : "Ways to withdraw money instantly.",
    keywords: isHindi
      ? ["निकासी", "पैसे निकालना", "बैंक"]
      : ["withdrawal", "withdraw", "bank"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/withdrawal`,
    ogImage: "https://www.rummygamesapp.com/images/withdrawal-og.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "निकासी" : "Withdrawal", href: `/${lang}/withdrawal` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "निकासी" : "Withdrawal"}>
            <p className="text-xl text-gray-700 mb-12">
              {isHindi
                ? "अपने जीते हुए पैसे तुरंत निकालें। सुरक्षित और तेज़ निकासी प्रक्रिया।"
                : "Withdraw your winnings instantly. Secure and fast withdrawal process."}
            </p>

            <div className="space-y-8">
              <SEOContent headingLevel={2} heading={isHindi ? "निकासी के तरीके" : "Withdrawal Methods"}>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: isHindi ? "बैंक खाता" : "Bank Account",
                      time: isHindi ? "24 घंटे" : "24 hours",
                      icon: "🏦",
                    },
                    {
                      name: isHindi ? "UPI" : "UPI",
                      time: isHindi ? "तुरंत" : "Instant",
                      icon: "📱",
                    },
                  ].map((method, index) => (
                    <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <div className="text-4xl mb-4">{method.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{method.name}</h3>
                      <p className="text-gray-600">
                        {isHindi ? "प्रसंस्करण समय:" : "Processing Time:"} <strong>{method.time}</strong>
                      </p>
                    </div>
                  ))}
                </div>
              </SEOContent>

              <SEOContent headingLevel={2} heading={isHindi ? "निकासी प्रक्रिया" : "Withdrawal Process"}>
                <ol className="space-y-4 text-lg">
                  {[
                    isHindi ? "निकासी सेक्शन में जाएं" : "Go to Withdrawal section",
                    isHindi ? "राशि दर्ज करें" : "Enter amount",
                    isHindi ? "भुगतान विधि चुनें" : "Choose payment method",
                    isHindi ? "निकासी अनुरोध सबमिट करें" : "Submit withdrawal request",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </SEOContent>
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

