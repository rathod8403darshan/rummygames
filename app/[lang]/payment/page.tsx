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
      ? "भुगतान – सुरक्षित भुगतान विकल्प | rummygamesapp.com"
      : "Payment – Secure Payment Options | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप में भुगतान करने के सुरक्षित तरीके। UPI, क्रेडिट कार्ड, डेबिट कार्ड और अधिक।"
      : "Secure ways to make payments in Rummy Games App. UPI, credit card, debit card and more.",
    keywords: isHindi
      ? "भुगतान, पेमेंट, UPI, क्रेडिट कार्ड, सुरक्षित भुगतान"
      : "payment, payments, UPI, credit card, secure payment, payment methods",
  };
}

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "भुगतान – रम्मी गेम्स ऐप"
      : "Payment – Rummy Games App",
    description: isHindi
      ? "सुरक्षित भुगतान विकल्प और तरीके।"
      : "Secure payment options and methods.",
    keywords: isHindi
      ? ["भुगतान", "UPI", "क्रेडिट कार्ड"]
      : ["payment", "UPI", "credit card"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/payment`,
    ogImage: "https://www.rummygamesapp.com/images/payment-og.jpg",
  };

  const paymentMethods = [
    {
      name: isHindi ? "UPI" : "UPI",
      description: isHindi ? "Google Pay, PhonePe, Paytm" : "Google Pay, PhonePe, Paytm",
      icon: "📱",
    },
    {
      name: isHindi ? "क्रेडिट/डेबिट कार्ड" : "Credit/Debit Card",
      description: isHindi ? "Visa, Mastercard, RuPay" : "Visa, Mastercard, RuPay",
      icon: "💳",
    },
    {
      name: isHindi ? "नेट बैंकिंग" : "Net Banking",
      description: isHindi ? "सभी प्रमुख बैंक" : "All major banks",
      icon: "🏦",
    },
    {
      name: isHindi ? "डिजिटल वॉलेट" : "Digital Wallets",
      description: isHindi ? "Paytm, Mobikwik, Freecharge" : "Paytm, Mobikwik, Freecharge",
      icon: "👛",
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
          { label: isHindi ? "भुगतान" : "Payment", href: `/${lang}/payment` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "भुगतान" : "Payment"}>
            <p className="text-xl text-gray-700 mb-12">
              {isHindi
                ? "रम्मी गेम्स ऐप में भुगतान करने के लिए सुरक्षित और आसान तरीके।"
                : "Secure and easy ways to make payments in Rummy Games App."}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.name}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isHindi ? "सुरक्षा" : "Security"}
              </h2>
              <p className="text-lg text-gray-700">
                {isHindi
                  ? "सभी भुगतान SSL एन्क्रिप्शन के साथ सुरक्षित हैं। आपका डेटा सुरक्षित है।"
                  : "All payments are secure with SSL encryption. Your data is safe."}
              </p>
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

