import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { CTA } from "../components/CTA";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "रम्मी कैसे खेलें – पूरी गाइड | rummygamesapp.com"
      : "How to Play Rummy – Complete Guide | rummygamesapp.com",
    description: isHindi
      ? "रम्मी खेलने की पूरी गाइड। नियम, रणनीतियाँ, और टिप्स जानें। शुरुआती से लेकर एक्सपर्ट तक सभी के लिए।"
      : "Complete guide on how to play rummy. Learn rules, strategies, and tips. For beginners to experts.",
  };
}

export default async function HowToPlayPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const sections = [
    {
      title: isHindi ? "रम्मी क्या है?" : "What is Rummy?",
      content: isHindi
        ? "रम्मी एक लोकप्रिय कार्ड गेम है जो स्किल और रणनीति पर आधारित है। इसमें खिलाड़ी कार्डों को सेट और सीक्वेंस में व्यवस्थित करते हैं। रम्मी भारत में सबसे लोकप्रिय कार्ड गेम्स में से एक है और इसे ऑनलाइन रियल कैश के साथ खेला जा सकता है।"
        : "Rummy is a popular card game based on skill and strategy. Players arrange cards into sets and sequences. Rummy is one of the most popular card games in India and can be played online with real cash.",
      image: "/images/what-is-rummy.jpg",
    },
    {
      title: isHindi ? "रम्मी के नियम" : "Rummy Rules",
      content: isHindi
        ? "रम्मी में, प्रत्येक खिलाड़ी को 13 कार्ड मिलते हैं। लक्ष्य कम से कम 2 सीक्वेंस बनाना है, जिनमें से एक प्योर सीक्वेंस होना चाहिए (बिना जोकर के)। शेष कार्ड सेट या सीक्वेंस में व्यवस्थित होने चाहिए। पहले सभी कार्ड व्यवस्थित करने वाला खिलाड़ी जीतता है।"
        : "In Rummy, each player gets 13 cards. The goal is to form at least 2 sequences, one of which must be a pure sequence (without joker). Remaining cards should be arranged in sets or sequences. The first player to arrange all cards wins.",
      image: "/images/rummy-rules.jpg",
    },
    {
      title: isHindi ? "सीक्वेंस और सेट" : "Sequences and Sets",
      content: isHindi
        ? "प्योर सीक्वेंस: एक ही सूट के क्रमागत कार्ड (जैसे 3♥, 4♥, 5♥)। इम्प्योर सीक्वेंस: जोकर के साथ सीक्वेंस। सेट: एक ही रैंक के अलग-अलग सूट के कार्ड (जैसे 7♥, 7♠, 7♦)।"
        : "Pure Sequence: Consecutive cards of the same suit (e.g., 3♥, 4♥, 5♥). Impure Sequence: Sequence with joker. Set: Cards of the same rank from different suits (e.g., 7♥, 7♠, 7♦).",
      image: "/images/sequences-sets.jpg",
    },
    {
      title: isHindi ? "कैसे खेलें" : "How to Play",
      content: isHindi
        ? "1. ऐप डाउनलोड करें और अकाउंट बनाएं। 2. एक टेबल चुनें और प्रवेश शुल्क का भुगतान करें। 3. 13 कार्ड प्राप्त करें। 4. कार्डों को व्यवस्थित करें। 5. जब सभी कार्ड व्यवस्थित हो जाएं, 'फिनिश' बटन दबाएं। 6. जीतें और पुरस्कार प्राप्त करें।"
        : "1. Download the app and create an account. 2. Choose a table and pay entry fee. 3. Receive 13 cards. 4. Arrange your cards. 5. When all cards are arranged, press 'Finish' button. 6. Win and receive prizes.",
      image: "/images/how-to-play.jpg",
    },
  ];

  const tips = [
    {
      title: isHindi ? "प्योर सीक्वेंस पहले बनाएं" : "Make Pure Sequence First",
      description: isHindi
        ? "हमेशा पहले प्योर सीक्वेंस बनाने पर ध्यान दें क्योंकि यह अनिवार्य है।"
        : "Always focus on making pure sequence first as it's mandatory.",
    },
    {
      title: isHindi ? "उच्च मूल्य वाले कार्ड जल्दी डिसकार्ड करें" : "Discard High Value Cards Early",
      description: isHindi
        ? "यदि आप जीत नहीं सकते, तो उच्च मूल्य वाले कार्ड जल्दी डिसकार्ड करें।"
        : "If you can't win, discard high value cards early.",
    },
    {
      title: isHindi ? "जोकर का स्मार्ट उपयोग" : "Smart Use of Joker",
      description: isHindi
        ? "जोकर का उपयोग बुद्धिमानी से करें - इसे कठिन सेट या सीक्वेंस में उपयोग करें।"
        : "Use joker wisely - use it in difficult sets or sequences.",
    },
    {
      title: isHindi ? "प्रतिद्वंद्वी के कार्ड देखें" : "Observe Opponent's Cards",
      description: isHindi
        ? "प्रतिद्वंद्वी कौन से कार्ड डिसकार्ड कर रहा है, इस पर ध्यान दें।"
        : "Pay attention to which cards your opponent is discarding.",
    },
  ];

  return (
    <>
      <StructuredData lang={lang} pageType="how-to-play" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "कैसे खेलें" : "How to Play", href: `/${lang}/how-to-play` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isHindi ? "रम्मी कैसे खेलें" : "How to Play Rummy"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {isHindi
              ? "शुरुआती से लेकर एक्सपर्ट तक - रम्मी खेलने की पूरी गाइड"
              : "From Beginner to Expert - Complete Guide to Playing Rummy"}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`mb-16 ${index % 2 === 0 ? "lg:flex lg:items-center lg:gap-12" : "lg:flex lg:flex-row-reverse lg:items-center lg:gap-12"}`}
            >
              <div className="flex-1 mb-8 lg:mb-0">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {isHindi ? "विजेता टिप्स" : "Winning Tips"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {isHindi ? "वीडियो ट्यूटोरियल" : "Video Tutorial"}
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                <p className="text-xl">{isHindi ? "वीडियो जल्द ही उपलब्ध होगा" : "Video coming soon"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA lang={lang} variant="secondary" />
    </>
  );
}

