import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { CTA } from "../components/CTA";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "रम्मी नियम – पूरी गाइड | rummygamesapp.com"
      : "Rummy Rules – Complete Guide | rummygamesapp.com",
    description: isHindi
      ? "रम्मी के सभी नियम जानें। प्योर सीक्वेंस, सेट, जोकर, और सभी महत्वपूर्ण नियम।"
      : "Learn all rummy rules. Pure sequence, sets, joker, and all important rules.",
  };
}

export default async function RulesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const rules = [
    {
      title: isHindi ? "बुनियादी नियम" : "Basic Rules",
      content: isHindi
        ? "रम्मी में, प्रत्येक खिलाड़ी को 13 कार्ड मिलते हैं। लक्ष्य कम से कम 2 सीक्वेंस बनाना है, जिनमें से एक प्योर सीक्वेंस होना चाहिए। शेष कार्ड सेट या सीक्वेंस में व्यवस्थित होने चाहिए। पहले सभी कार्ड व्यवस्थित करने वाला खिलाड़ी जीतता है।"
        : "In Rummy, each player gets 13 cards. The goal is to form at least 2 sequences, one of which must be a pure sequence. Remaining cards should be arranged in sets or sequences. The first player to arrange all cards wins.",
    },
    {
      title: isHindi ? "प्योर सीक्वेंस" : "Pure Sequence",
      content: isHindi
        ? "प्योर सीक्वेंस एक ही सूट के क्रमागत कार्डों का समूह है जिसमें जोकर नहीं होता। उदाहरण: 3♥, 4♥, 5♥ या 10♠, J♠, Q♠, K♠। प्योर सीक्वेंस बनाना अनिवार्य है।"
        : "Pure sequence is a group of consecutive cards of the same suit without joker. Example: 3♥, 4♥, 5♥ or 10♠, J♠, Q♠, K♠. Making pure sequence is mandatory.",
    },
    {
      title: isHindi ? "इम्प्योर सीक्वेंस" : "Impure Sequence",
      content: isHindi
        ? "इम्प्योर सीक्वेंस जोकर के साथ बनाई जाती है। उदाहरण: 3♥, Joker, 5♥ या 7♠, 8♠, Joker।"
        : "Impure sequence is made with joker. Example: 3♥, Joker, 5♥ or 7♠, 8♠, Joker.",
    },
    {
      title: isHindi ? "सेट" : "Set",
      content: isHindi
        ? "सेट एक ही रैंक के अलग-अलग सूट के कार्डों का समूह है। उदाहरण: 7♥, 7♠, 7♦ या K♥, K♠, K♦, K♣। एक सेट में कम से कम 3 कार्ड होने चाहिए।"
        : "Set is a group of cards of the same rank from different suits. Example: 7♥, 7♠, 7♦ or K♥, K♠, K♦, K♣. A set must have at least 3 cards.",
    },
    {
      title: isHindi ? "जोकर" : "Joker",
      content: isHindi
        ? "जोकर किसी भी कार्ड की जगह ले सकता है। हर गेम में एक रैंडम जोकर होता है। जोकर का उपयोग सेट या इम्प्योर सीक्वेंस बनाने के लिए किया जा सकता है, लेकिन प्योर सीक्वेंस में नहीं।"
        : "Joker can replace any card. Every game has a random joker. Joker can be used to make sets or impure sequences, but not in pure sequence.",
    },
    {
      title: isHindi ? "विजेता निर्धारण" : "Winner Declaration",
      content: isHindi
        ? "जब कोई खिलाड़ी सभी 13 कार्ड व्यवस्थित कर लेता है, तो वह 'फिनिश' बटन दबाता है। यदि सभी कार्ड वैध हैं, तो वह खिलाड़ी जीत जाता है।"
        : "When a player arranges all 13 cards, they press the 'Finish' button. If all cards are valid, that player wins.",
    },
    {
      title: isHindi ? "पॉइंट्स कैलकुलेशन" : "Points Calculation",
      content: isHindi
        ? "हारने वाले खिलाड़ी के पॉइंट्स उनके अव्यवस्थित कार्डों के मूल्य के आधार पर गिने जाते हैं। फेस कार्ड (J, Q, K) 10 पॉइंट्स के होते हैं, A 10 पॉइंट्स का होता है, और नंबर कार्ड अपने मूल्य के होते हैं।"
        : "Losing player's points are calculated based on the value of their unarranged cards. Face cards (J, Q, K) are worth 10 points, A is worth 10 points, and number cards are worth their face value.",
    },
    {
      title: isHindi ? "ड्रॉ और डिसकार्ड" : "Draw and Discard",
      content: isHindi
        ? "हर चाल में, खिलाड़ी ड्रॉ पाइल से एक कार्ड लेता है या डिसकार्ड पाइल से उठाता है, फिर एक कार्ड डिसकार्ड करता है।"
        : "In every turn, player draws a card from draw pile or picks from discard pile, then discards a card.",
    },
  ];

  return (
    <>
      <StructuredData lang={lang} pageType="rules" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "नियम" : "Rules", href: `/${lang}/rules` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isHindi ? "रम्मी नियम" : "Rummy Rules"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {isHindi
              ? "रम्मी खेलने के सभी नियम और नियम जानें"
              : "Learn all rules and regulations for playing rummy"}
          </p>
        </div>
      </section>

      {/* Rules Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{rule.title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{rule.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {isHindi ? "महत्वपूर्ण नोट्स" : "Important Notes"}
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              {[
                isHindi
                  ? "प्योर सीक्वेंस बनाना अनिवार्य है - बिना इसके आप जीत नहीं सकते"
                  : "Making pure sequence is mandatory - you cannot win without it",
                isHindi
                  ? "एक सेट में कम से कम 3 कार्ड होने चाहिए"
                  : "A set must have at least 3 cards",
                isHindi
                  ? "जोकर का उपयोग केवल सेट या इम्प्योर सीक्वेंस में किया जा सकता है"
                  : "Joker can only be used in sets or impure sequences",
                isHindi
                  ? "सभी 13 कार्ड व्यवस्थित होने चाहिए - कोई भी कार्ड अव्यवस्थित नहीं रहना चाहिए"
                  : "All 13 cards must be arranged - no card should remain unarranged",
              ].map((note, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA lang={lang} variant="secondary" />
    </>
  );
}

