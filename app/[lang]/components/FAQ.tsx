"use client";

import { useState } from "react";

interface FAQProps {
  lang: string;
}

export function FAQ({ lang }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isHindi = lang === "hi";

  const faqs = [
    {
      question: isHindi
        ? "रम्मी गेम्स ऐप क्या है?"
        : "What is Rummy Games App?",
      answer: isHindi
        ? "रम्मी गेम्स ऐप भारत का सबसे भरोसेमंद और सुरक्षित रम्मी गेमिंग प्लेटफॉर्म है जहाँ आप रियल कैश रम्मी खेल सकते हैं। हमारे पास 10 मिलियन+ खिलाड़ी हैं जो हर दिन हमारे साथ खेलते और जीतते हैं।"
        : "Rummy Games App is India's most trusted and secure rummy gaming platform where you can play real cash rummy games. We have 10 million+ players who play and win with us every day.",
    },
    {
      question: isHindi
        ? "क्या रम्मी गेम्स ऐप कानूनी है?"
        : "Is Rummy Games App legal?",
      answer: isHindi
        ? "हाँ, रम्मी गेम्स ऐप 100% कानूनी है। भारत में, रम्मी एक स्किल-बेस्ड गेम है और सुप्रीम कोर्ट ने इसे कानूनी माना है। हमारे पास सभी आवश्यक लाइसेंस और अनुमतियां हैं।"
        : "Yes, Rummy Games App is 100% legal. In India, rummy is a skill-based game and the Supreme Court has declared it legal. We have all necessary licenses and permissions.",
    },
    {
      question: isHindi
        ? "मैं पैसे कैसे निकाल सकता हूँ?"
        : "How can I withdraw money?",
      answer: isHindi
        ? "आप अपने जीते हुए पैसे तुरंत निकाल सकते हैं। बस 'निकासी' सेक्शन में जाएं, अपना बैंक खाता या UPI ID दर्ज करें, और राशि दर्ज करें। निकासी आमतौर पर 24 घंटे के भीतर हो जाती है।"
        : "You can withdraw your winnings instantly. Just go to the 'Withdrawal' section, enter your bank account or UPI ID, and enter the amount. Withdrawals are usually processed within 24 hours.",
    },
    {
      question: isHindi
        ? "क्या निकासी के लिए कोई शुल्क है?"
        : "Is there any fee for withdrawal?",
      answer: isHindi
        ? "नहीं, हमारे पास निकासी के लिए कोई छुपी हुई फीस नहीं है। हालाँकि, बैंक या पेमेंट गेटवे द्वारा लगाया गया कोई भी शुल्क आपके खाते से काटा जा सकता है।"
        : "No, we don't have any hidden fees for withdrawals. However, any charges levied by the bank or payment gateway may be deducted from your account.",
    },
    {
      question: isHindi
        ? "मैं कैसे खेलना शुरू करूं?"
        : "How do I start playing?",
      answer: isHindi
        ? "खेलना शुरू करना बहुत आसान है! बस ऐप डाउनलोड करें, एक अकाउंट बनाएं, और ₹51 वेलकम बोनस पाएं। कोई डिपॉजिट की जरूरत नहीं है। आप तुरंत खेलना शुरू कर सकते हैं।"
        : "Starting to play is very easy! Just download the app, create an account, and get ₹51 welcome bonus. No deposit required. You can start playing immediately.",
    },
    {
      question: isHindi
        ? "क्या मैं फ्री में खेल सकता हूँ?"
        : "Can I play for free?",
      answer: isHindi
        ? "हाँ, हमारे पास प्रैक्टिस गेम्स हैं जहाँ आप बिना पैसे लगाए रम्मी खेल सकते हैं। यह नए खिलाड़ियों के लिए बहुत अच्छा है जो गेम सीखना चाहते हैं।"
        : "Yes, we have practice games where you can play rummy without any money. This is great for new players who want to learn the game.",
    },
    {
      question: isHindi
        ? "टूर्नामेंट क्या हैं?"
        : "What are tournaments?",
      answer: isHindi
        ? "टूर्नामेंट बड़े पुरस्कार राशि के साथ विशेष रम्मी गेम्स हैं। आप एक प्रवेश शुल्क का भुगतान करते हैं और बड़े पुरस्कार जीतने का मौका मिलता है। हमारे पास हर दिन कई टूर्नामेंट होते हैं।"
        : "Tournaments are special rummy games with big prize pools. You pay an entry fee and get a chance to win big prizes. We have multiple tournaments every day.",
    },
    {
      question: isHindi
        ? "ऐप कितना सुरक्षित है?"
        : "How secure is the app?",
      answer: isHindi
        ? "हमारा ऐप बैंक-ग्रेड एन्क्रिप्शन का उपयोग करता है और सभी भुगतान सुरक्षित गेटवे के माध्यम से किए जाते हैं। आपका डेटा और पैसे पूरी तरह सुरक्षित हैं। हमारे पास SSL सर्टिफिकेट और अन्य सुरक्षा प्रमाणपत्र हैं।"
        : "Our app uses bank-grade encryption and all payments are made through secure gateways. Your data and money are completely secure. We have SSL certificates and other security certifications.",
    },
    {
      question: isHindi
        ? "क्या मैं कई डिवाइस पर खेल सकता हूँ?"
        : "Can I play on multiple devices?",
      answer: isHindi
        ? "हाँ, आप एक ही अकाउंट से कई डिवाइस पर खेल सकते हैं। हालाँकि, एक समय में केवल एक डिवाइस पर लॉग इन करने की अनुमति है सुरक्षा कारणों से।"
        : "Yes, you can play on multiple devices with the same account. However, only one device can be logged in at a time for security reasons.",
    },
    {
      question: isHindi
        ? "अगर मुझे समस्या आती है तो मैं कैसे संपर्क करूं?"
        : "How can I contact if I face any issue?",
      answer: isHindi
        ? "हमारी सपोर्ट टीम 24/7 उपलब्ध है। आप हमसे ईमेल, फोन, या ऐप के अंदर लाइव चैट के माध्यम से संपर्क कर सकते हैं। हम आमतौर पर 5 मिनट के भीतर जवाब देते हैं।"
        : "Our support team is available 24/7. You can contact us via email, phone, or live chat within the app. We usually respond within 5 minutes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {isHindi ? "सामान्य प्रश्न" : "Frequently Asked Questions"}
          </h2>
          <p className="text-xl text-gray-600">
            {isHindi
              ? "आपके सवालों के जवाब"
              : "Answers to Your Questions"}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            {isHindi ? "अभी भी सवाल हैं?" : "Still Have Questions?"}
          </h3>
          <p className="mb-6 text-white/90">
            {isHindi
              ? "हमारी सपोर्ट टीम आपकी मदद के लिए 24/7 उपलब्ध है"
              : "Our support team is available 24/7 to help you"}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isHindi ? "संपर्क करें" : "Contact Us"}
          </a>
        </div>
      </div>
    </section>
  );
}

