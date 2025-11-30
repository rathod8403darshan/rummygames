import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { CTA } from "../components/CTA";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "रियल कैश रम्मी – ऑनलाइन पैसे कमाएं | rummygamesapp.com"
      : "Real Cash Rummy – Earn Money Online | rummygamesapp.com",
    description: isHindi
      ? "रियल कैश रम्मी खेलें और पैसे कमाएं। 100% सुरक्षित, तुरंत निकासी, और बड़े पुरस्कार। भारत का सबसे भरोसेमंद रम्मी प्लेटफॉर्म।"
      : "Play real cash rummy and earn money. 100% secure, instant withdrawal, and big prizes. India's most trusted rummy platform.",
  };
}

export default async function RealCashRummyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: isHindi ? "तुरंत निकासी" : "Instant Withdrawal",
      description: isHindi
        ? "अपने जीते हुए पैसे तुरंत बैंक या UPI में निकालें। 24 घंटे के भीतर प्रोसेसिंग।"
        : "Withdraw your winnings instantly to bank or UPI. Processing within 24 hours.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: isHindi ? "100% सुरक्षित" : "100% Secure",
      description: isHindi
        ? "बैंक-ग्रेड एन्क्रिप्शन और सुरक्षित भुगतान गेटवे। आपका पैसा सुरक्षित है।"
        : "Bank-grade encryption and secure payment gateways. Your money is safe.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: isHindi ? "10M+ खिलाड़ी" : "10M+ Players",
      description: isHindi
        ? "भारत में लाखों खिलाड़ी हमारे साथ रम्मी खेल रहे हैं और जीत रहे हैं।"
        : "Millions of players across India are playing and winning rummy with us.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: isHindi ? "बड़े पुरस्कार" : "Big Prizes",
      description: isHindi
        ? "हर दिन लाखों रुपये के पुरस्कार। टूर्नामेंट में बड़ी जीतें।"
        : "Lakhs of rupees in prizes every day. Big wins in tournaments.",
    },
  ];

  const gameTypes = [
    {
      name: isHindi ? "पॉइंट्स रम्मी" : "Points Rummy",
      description: isHindi
        ? "तेज़-तर्रार गेमप्ले के साथ क्विक गेम्स।"
        : "Quick games with fast-paced gameplay.",
      minEntry: "₹5",
      duration: isHindi ? "5-10 मिनट" : "5-10 minutes",
    },
    {
      name: isHindi ? "पूल रम्मी" : "Pool Rummy",
      description: isHindi
        ? "101 और 201 पूल के साथ लंबे गेम्स।"
        : "Longer games with 101 and 201 pools.",
      minEntry: "₹10",
      duration: isHindi ? "15-30 मिनट" : "15-30 minutes",
    },
    {
      name: isHindi ? "डील रम्मी" : "Deal Rummy",
      description: isHindi
        ? "निश्चित डील के साथ संरचित गेम्स।"
        : "Structured games with fixed deals.",
      minEntry: "₹25",
      duration: isHindi ? "10-20 मिनट" : "10-20 minutes",
    },
    {
      name: isHindi ? "टूर्नामेंट" : "Tournaments",
      description: isHindi
        ? "बड़े पुरस्कार राशि के साथ टूर्नामेंट।"
        : "Tournaments with big prize pools.",
      minEntry: "₹50",
      duration: isHindi ? "30-60 मिनट" : "30-60 minutes",
    },
  ];

  return (
    <>
      <StructuredData lang={lang} pageType="real-cash-rummy" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "रियल कैश रम्मी" : "Real Cash Rummy", href: `/${lang}/real-cash-rummy` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isHindi ? "रियल कैश रम्मी खेलें" : "Play Real Cash Rummy"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {isHindi
              ? "रम्मी खेलें और पैसे कमाएं। 100% सुरक्षित, तुरंत निकासी, और बड़े पुरस्कार।"
              : "Play rummy and earn money. 100% secure, instant withdrawal, and big prizes."}
          </p>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">₹500Cr+</div>
              <div className="text-white/80">{isHindi ? "जीत" : "Winnings"}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">10M+</div>
              <div className="text-white/80">{isHindi ? "खिलाड़ी" : "Players"}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">{isHindi ? "गेमप्ले" : "Gameplay"}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/80">{isHindi ? "रेटिंग" : "Rating"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {isHindi ? "क्यों रियल कैश रम्मी?" : "Why Real Cash Rummy?"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {isHindi ? "गेम के प्रकार" : "Types of Games"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameTypes.map((game, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{game.name}</h3>
                <p className="text-gray-600 mb-6">{game.description}</p>
                <div className="space-y-2 pt-6 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{isHindi ? "न्यूनतम प्रवेश:" : "Min Entry:"}</span>
                    <span className="font-bold text-gray-900">{game.minEntry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{isHindi ? "अवधि:" : "Duration:"}</span>
                    <span className="font-bold text-gray-900">{game.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {isHindi ? "यह कैसे काम करता है" : "How It Works"}
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: isHindi ? "अकाउंट बनाएं" : "Create Account",
                description: isHindi
                  ? "ऐप डाउनलोड करें और अपना अकाउंट बनाएं। ₹51 वेलकम बोनस पाएं।"
                  : "Download the app and create your account. Get ₹51 welcome bonus.",
              },
              {
                step: "2",
                title: isHindi ? "टेबल चुनें" : "Choose Table",
                description: isHindi
                  ? "अपनी पसंद का टेबल चुनें और प्रवेश शुल्क का भुगतान करें।"
                  : "Choose your preferred table and pay entry fee.",
              },
              {
                step: "3",
                title: isHindi ? "खेलें और जीतें" : "Play and Win",
                description: isHindi
                  ? "रम्मी खेलें और अपने कौशल से जीतें।"
                  : "Play rummy and win with your skills.",
              },
              {
                step: "4",
                title: isHindi ? "पैसे निकालें" : "Withdraw Money",
                description: isHindi
                  ? "अपने जीते हुए पैसे तुरंत बैंक या UPI में निकालें।"
                  : "Withdraw your winnings instantly to bank or UPI.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA lang={lang} />
    </>
  );
}

