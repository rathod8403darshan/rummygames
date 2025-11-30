import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { SEOContent } from "../components/Content/SEOContent";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "गोपनीयता नीति – रम्मी गेम्स ऐप | rummygamesapp.com"
      : "Privacy Policy – Rummy Games App | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप की गोपनीयता नीति। हम आपकी गोपनीयता की रक्षा कैसे करते हैं और आपका डेटा कैसे उपयोग करते हैं।"
      : "Privacy Policy of Rummy Games App. How we protect your privacy and use your data.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "गोपनीयता नीति" : "Privacy Policy", href: `/${lang}/privacy` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "गोपनीयता नीति" : "Privacy Policy"}>
            <p className="text-lg text-gray-700 mb-6">
              {isHindi
                ? "अंतिम अपडेट: 1 जनवरी 2024"
                : "Last Updated: January 1, 2024"}
            </p>

            <SEOContent headingLevel={2} heading={isHindi ? "परिचय" : "Introduction"}>
              <p className="text-lg text-gray-700 mb-4">
                {isHindi
                  ? "रम्मी गेम्स ऐप आपकी गोपनीयता को गंभीरता से लेता है। यह गोपनीयता नीति बताती है कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग, संग्रहीत और सुरक्षित करते हैं।"
                  : "Rummy Games App takes your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information."}
              </p>
            </SEOContent>

            <SEOContent headingLevel={2} heading={isHindi ? "जानकारी एकत्र करना" : "Information We Collect"}>
              <p className="text-lg text-gray-700 mb-4">
                {isHindi
                  ? "हम निम्नलिखित प्रकार की जानकारी एकत्र करते हैं:"
                  : "We collect the following types of information:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
                <li>{isHindi ? "व्यक्तिगत जानकारी (नाम, ईमेल, फोन नंबर)" : "Personal Information (name, email, phone number)"}</li>
                <li>{isHindi ? "भुगतान जानकारी" : "Payment Information"}</li>
                <li>{isHindi ? "उपकरण जानकारी" : "Device Information"}</li>
                <li>{isHindi ? "उपयोग डेटा" : "Usage Data"}</li>
              </ul>
            </SEOContent>

            <SEOContent headingLevel={2} heading={isHindi ? "जानकारी का उपयोग" : "How We Use Information"}>
              <p className="text-lg text-gray-700 mb-4">
                {isHindi
                  ? "हम आपकी जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:"
                  : "We use your information for the following purposes:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
                <li>{isHindi ? "सेवा प्रदान करना" : "To provide our services"}</li>
                <li>{isHindi ? "ग्राहक सहायता" : "Customer support"}</li>
                <li>{isHindi ? "सुरक्षा और धोखाधड़ी की रोकथाम" : "Security and fraud prevention"}</li>
                <li>{isHindi ? "सुधार और विश्लेषण" : "Improvements and analytics"}</li>
              </ul>
            </SEOContent>

            <SEOContent headingLevel={2} heading={isHindi ? "डेटा सुरक्षा" : "Data Security"}>
              <p className="text-lg text-gray-700 mb-4">
                {isHindi
                  ? "हम आपके डेटा की सुरक्षा के लिए उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं, जिसमें एन्क्रिप्शन, सुरक्षित सर्वर और नियमित सुरक्षा ऑडिट शामिल हैं।"
                  : "We use industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits."}
              </p>
            </SEOContent>

            <SEOContent headingLevel={2} heading={isHindi ? "आपके अधिकार" : "Your Rights"}>
              <p className="text-lg text-gray-700 mb-4">
                {isHindi
                  ? "आपके पास निम्नलिखित अधिकार हैं:"
                  : "You have the following rights:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
                <li>{isHindi ? "अपनी जानकारी तक पहुंच" : "Access to your information"}</li>
                <li>{isHindi ? "सुधार का अधिकार" : "Right to correction"}</li>
                <li>{isHindi ? "हटाने का अधिकार" : "Right to deletion"}</li>
                <li>{isHindi ? "डेटा पोर्टेबिलिटी" : "Data portability"}</li>
              </ul>
            </SEOContent>

            <SEOContent headingLevel={2} heading={isHindi ? "संपर्क करें" : "Contact Us"}>
              <p className="text-lg text-gray-700 mb-4">
                {isHindi
                  ? "गोपनीयता से संबंधित किसी भी प्रश्न के लिए, कृपया हमसे संपर्क करें:"
                  : "For any questions regarding privacy, please contact us:"}
              </p>
              <p className="text-lg text-gray-700">
                {isHindi ? "ईमेल:" : "Email:"} privacy@rummygamesapp.com
                <br />
                {isHindi ? "फोन:" : "Phone:"} +91-1800-XXX-XXXX
              </p>
            </SEOContent>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

