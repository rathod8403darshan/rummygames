import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { CTA } from "../components/CTA";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "रम्मी गेम्स ऐप डाउनलोड करें – Android & iOS | rummygamesapp.com"
      : "Download Rummy Games App – Android & iOS | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप को Android और iOS पर मुफ्त में डाउनलोड करें। ₹51 वेलकम बोनस पाएं और तुरंत रियल कैश रम्मी खेलना शुरू करें।"
      : "Download Rummy Games App for free on Android and iOS. Get ₹51 welcome bonus and start playing real cash rummy instantly.",
  };
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const downloadFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: isHindi ? "Android & iOS" : "Android & iOS",
      description: isHindi
        ? "दोनों प्लेटफॉर्म पर उपलब्ध"
        : "Available on both platforms",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: isHindi ? "तुरंत डाउनलोड" : "Instant Download",
      description: isHindi
        ? "कुछ सेकंड में डाउनलोड करें"
        : "Download in seconds",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: isHindi ? "100% सुरक्षित" : "100% Secure",
      description: isHindi
        ? "वायरस-मुक्त और सुरक्षित"
        : "Virus-free and secure",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: isHindi ? "छोटा आकार" : "Small Size",
      description: isHindi
        ? "केवल 50MB डाउनलोड"
        : "Only 50MB download",
    },
  ];

  const steps = [
    {
      number: "1",
      title: isHindi ? "डाउनलोड करें" : "Download",
      description: isHindi
        ? "Android या iOS के लिए ऐप डाउनलोड करें"
        : "Download the app for Android or iOS",
    },
    {
      number: "2",
      title: isHindi ? "साइन अप करें" : "Sign Up",
      description: isHindi
        ? "अपना मोबाइल नंबर दर्ज करें और OTP सत्यापित करें"
        : "Enter your mobile number and verify OTP",
    },
    {
      number: "3",
      title: isHindi ? "बोनस पाएं" : "Get Bonus",
      description: isHindi
        ? "₹51 वेलकम बोनस प्राप्त करें"
        : "Receive ₹51 welcome bonus",
    },
    {
      number: "4",
      title: isHindi ? "खेलना शुरू करें" : "Start Playing",
      description: isHindi
        ? "तुरंत रम्मी खेलना शुरू करें और जीतें"
        : "Start playing rummy instantly and win",
    },
  ];

  return (
    <>
      <StructuredData lang={lang} pageType="download" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "डाउनलोड" : "Download", href: `/${lang}/download` },
        ]}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {isHindi ? "रम्मी गेम्स ऐप डाउनलोड करें" : "Download Rummy Games App"}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {isHindi
                ? "Android और iOS पर मुफ्त में डाउनलोड करें। ₹51 वेलकम बोनस पाएं और तुरंत खेलना शुरू करें।"
                : "Download for free on Android and iOS. Get ₹51 welcome bonus and start playing instantly."}
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="#"
              className="group flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.88-.78-3.28-.4-4.7 1.1-1.27 1.21-2.8 1.9-4.78 1.08-1.85-.77-2.66-2.16-2.5-4.25.13-1.7 1.17-3.08 2.23-4.25C2.8 10.5 2 9.35 2 8c0-2.35 1.95-4.3 4.35-4.3 1.5 0 2.85.73 3.7 1.85 1.07-.3 2.22-.5 3.45-.5 3.5 0 6.5 2.1 7.9 5.15 1.1-.35 2.3-.55 3.6-.55 4.5 0 8.5 3.5 8.5 8.2 0 3.1-2.1 5.7-5 7.2-.5.2-1 .4-1.5.5-.2.05-.4.1-.6.1-.3.1-.6.15-.9.2-.2.05-.4.1-.6.1z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">{isHindi ? "Android के लिए उपलब्ध" : "Available on"}</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#"
              className="group flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.88-.78-3.28-.4-4.7 1.1-1.27 1.21-2.8 1.9-4.78 1.08-1.85-.77-2.66-2.16-2.5-4.25.13-1.7 1.17-3.08 2.23-4.25C2.8 10.5 2 9.35 2 8c0-2.35 1.95-4.3 4.35-4.3 1.5 0 2.85.73 3.7 1.85 1.07-.3 2.22-.5 3.45-.5 3.5 0 6.5 2.1 7.9 5.15 1.1-.35 2.3-.55 3.6-.55 4.5 0 8.5 3.5 8.5 8.2 0 3.1-2.1 5.7-5 7.2-.5.2-1 .4-1.5.5-.2.05-.4.1-.6.1-.3.1-.6.15-.9.2-.2.05-.4.1-.6.1z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">{isHindi ? "iOS के लिए उपलब्ध" : "Available on"}</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <Image
                src="/images/download-phone.png"
                alt={isHindi ? "रम्मी गेम्स ऐप" : "Rummy Games App"}
                width={400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downloadFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {isHindi ? "कैसे डाउनलोड करें" : "How to Download"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {isHindi ? "सिस्टम आवश्यकताएं" : "System Requirements"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c-.29.354-.54.69-.724 1h6.848c-.184-.31-.435-.646-.724-1A18.87 18.87 0 0110.422 6H13a1 1 0 110 2H8V3a1 1 0 011-1z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                {isHindi ? "Android" : "Android"}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isHindi ? "Android 5.0 या उच्चतर" : "Android 5.0 or higher"}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isHindi ? "2GB RAM (4GB अनुशंसित)" : "2GB RAM (4GB recommended)"}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isHindi ? "100MB खाली जगह" : "100MB free space"}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isHindi ? "इंटरनेट कनेक्शन" : "Internet connection"}
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c-.29.354-.54.69-.724 1h6.848c-.184-.31-.435-.646-.724-1A18.87 18.87 0 0110.422 6H13a1 1 0 110 2H8V3a1 1 0 011-1z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                {isHindi ? "iOS" : "iOS"}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isHindi ? "iOS 12.0 या उच्चतर" : "iOS 12.0 or higher"}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isHindi ? "iPhone 6 या नया" : "iPhone 6 or newer"}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isHindi ? "100MB खाली जगह" : "100MB free space"}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isHindi ? "इंटरनेट कनेक्शन" : "Internet connection"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA lang={lang} variant="secondary" />
    </>
  );
}

