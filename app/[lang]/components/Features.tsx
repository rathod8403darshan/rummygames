"use client";

import Image from "next/image";

interface FeaturesProps {
  lang: string;
}

export function Features({ lang }: FeaturesProps) {
  const isHindi = lang === "hi";

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: isHindi ? "100% सुरक्षित और सुरक्षित" : "100% Safe & Secure",
      description: isHindi
        ? "बैंक-ग्रेड एन्क्रिप्शन और सुरक्षित भुगतान गेटवे के साथ आपके डेटा और पैसे पूरी तरह सुरक्षित हैं।"
        : "Your data and money are completely secure with bank-grade encryption and secure payment gateways.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: isHindi ? "तुरंत निकासी" : "Instant Withdrawal",
      description: isHindi
        ? "अपने जीते हुए पैसे तुरंत बैंक खाते या UPI में निकालें। कोई छुपी हुई फीस नहीं।"
        : "Withdraw your winnings instantly to bank account or UPI. No hidden charges.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: isHindi ? "100% कानूनी" : "100% Legal",
      description: isHindi
        ? "भारत में स्किल-बेस्ड गेमिंग के तहत पूरी तरह कानूनी और लाइसेंस प्राप्त।"
        : "Fully legal and licensed under skill-based gaming in India.",
      color: "from-purple-500 to-pink-500",
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
      color: "from-orange-500 to-red-500",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: isHindi ? "24/7 गेमप्ले" : "24/7 Gameplay",
      description: isHindi
        ? "कभी भी, कहीं भी रम्मी खेलें। हमारे प्लेटफॉर्म पर हमेशा सक्रिय खिलाड़ी मिलेंगे।"
        : "Play rummy anytime, anywhere. Always find active players on our platform.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: isHindi ? "बड़े टूर्नामेंट" : "Big Tournaments",
      description: isHindi
        ? "हर दिन लाखों रुपये के पुरस्कार के साथ बड़े टूर्नामेंट में भाग लें।"
        : "Participate in big tournaments with lakhs of rupees in prizes every day.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {isHindi ? "क्यों चुनें रम्मी गेम्स ऐप?" : "Why Choose Rummy Games App?"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isHindi
              ? "भारत का सबसे भरोसेमंद और सुरक्षित रम्मी गेमिंग अनुभव"
              : "India's most trusted and secure rummy gaming experience"}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                {isHindi ? "तुरंत शुरू करें" : "Get Started Instantly"}
              </h3>
              <p className="text-lg text-white/90 mb-6">
                {isHindi
                  ? "अभी डाउनलोड करें और ₹51 बोनस पाएं। कोई डिपॉजिट की जरूरत नहीं!"
                  : "Download now and get ₹51 bonus. No deposit required!"}
              </p>
              <ul className="space-y-3">
                {[
                  isHindi ? "तुरंत साइन अप" : "Instant Sign Up",
                  isHindi ? "₹51 वेलकम बोनस" : "₹51 Welcome Bonus",
                  isHindi ? "तुरंत खेलना शुरू करें" : "Start Playing Instantly",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/features-app.webp"
                alt={isHindi ? "रम्मी गेम्स ऐप फीचर्स" : "Rummy Games App Features"}
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

