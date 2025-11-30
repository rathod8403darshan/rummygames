import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { CTA } from "../components/CTA";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "रम्मी रणनीतियाँ – जीतने के टिप्स | rummygamesapp.com"
      : "Rummy Strategies – Winning Tips | rummygamesapp.com",
    description: isHindi
      ? "रम्मी जीतने के लिए सर्वश्रेष्ठ रणनीतियाँ और टिप्स। शुरुआती से लेकर एक्सपर्ट तक सभी के लिए।"
      : "Best strategies and tips to win rummy. For beginners to experts.",
  };
}

export default async function StrategiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const strategies = [
    {
      title: isHindi ? "प्योर सीक्वेंस पहले बनाएं" : "Make Pure Sequence First",
      description: isHindi
        ? "हमेशा पहले प्योर सीक्वेंस बनाने पर ध्यान दें। यह अनिवार्य है और बिना इसके आप जीत नहीं सकते। प्योर सीक्वेंस बनाने के बाद ही अन्य कार्डों पर काम करें।"
        : "Always focus on making pure sequence first. It's mandatory and you cannot win without it. Only after making pure sequence, work on other cards.",
      tips: [
        isHindi ? "एक ही सूट के कार्ड इकट्ठा करें" : "Collect cards of the same suit",
        isHindi ? "क्रमागत कार्डों की तलाश करें" : "Look for consecutive cards",
        isHindi ? "जोकर का उपयोग न करें" : "Don't use joker",
      ],
    },
    {
      title: isHindi ? "उच्च मूल्य वाले कार्ड जल्दी डिसकार्ड करें" : "Discard High Value Cards Early",
      description: isHindi
        ? "यदि आप जीत नहीं सकते, तो उच्च मूल्य वाले कार्ड (J, Q, K, A) जल्दी डिसकार्ड करें। यह आपके पॉइंट्स कम करेगा यदि आप हार जाते हैं।"
        : "If you can't win, discard high value cards (J, Q, K, A) early. This will reduce your points if you lose.",
      tips: [
        isHindi ? "फेस कार्ड पहले डिसकार्ड करें" : "Discard face cards first",
        isHindi ? "Ace कार्ड भी जल्दी डिसकार्ड करें" : "Discard Ace cards early too",
        isHindi ? "केवल तभी रखें जब सेट/सीक्वेंस बना रहे हों" : "Keep only when making set/sequence",
      ],
    },
    {
      title: isHindi ? "जोकर का स्मार्ट उपयोग" : "Smart Use of Joker",
      description: isHindi
        ? "जोकर का उपयोग बुद्धिमानी से करें। इसे कठिन सेट या सीक्वेंस में उपयोग करें जहाँ आपको कार्ड मिलना मुश्किल है।"
        : "Use joker wisely. Use it in difficult sets or sequences where getting cards is hard.",
      tips: [
        isHindi ? "जोकर को बचाएं जब तक जरूरी न हो" : "Save joker until necessary",
        isHindi ? "कठिन सेट/सीक्वेंस में उपयोग करें" : "Use in difficult set/sequence",
        isHindi ? "प्योर सीक्वेंस में न उपयोग करें" : "Don't use in pure sequence",
      ],
    },
    {
      title: isHindi ? "प्रतिद्वंद्वी के कार्ड देखें" : "Observe Opponent's Cards",
      description: isHindi
        ? "प्रतिद्वंद्वी कौन से कार्ड डिसकार्ड कर रहा है, इस पर ध्यान दें। यह आपको बताएगा कि वह क्या बना रहा है और आप कौन से कार्ड रख सकते हैं।"
        : "Pay attention to which cards your opponent is discarding. This will tell you what they're making and which cards you can keep.",
      tips: [
        isHindi ? "डिसकार्ड पाइल देखें" : "Watch discard pile",
        isHindi ? "प्रतिद्वंद्वी की रणनीति समझें" : "Understand opponent's strategy",
        isHindi ? "अपनी रणनीति तदनुसार बदलें" : "Change your strategy accordingly",
      ],
    },
    {
      title: isHindi ? "सेट बनाने की कोशिश करें" : "Try to Make Sets",
      description: isHindi
        ? "सेट बनाना सीक्वेंस से आसान हो सकता है क्योंकि आपको क्रमागत कार्डों की जरूरत नहीं है। एक ही रैंक के अलग-अलग सूट के कार्ड इकट्ठा करें।"
        : "Making sets can be easier than sequences as you don't need consecutive cards. Collect cards of the same rank from different suits.",
      tips: [
        isHindi ? "एक ही रैंक के कार्ड इकट्ठा करें" : "Collect cards of same rank",
        isHindi ? "अलग-अलग सूट के कार्ड लें" : "Take cards from different suits",
        isHindi ? "जोकर का उपयोग करें यदि जरूरी हो" : "Use joker if necessary",
      ],
    },
    {
      title: isHindi ? "मिडिल कार्ड रखें" : "Keep Middle Cards",
      description: isHindi
        ? "मिडिल कार्ड (4, 5, 6, 7, 8, 9) रखना बेहतर है क्योंकि वे दोनों तरफ से सीक्वेंस बनाने में मदद करते हैं।"
        : "Keeping middle cards (4, 5, 6, 7, 8, 9) is better as they help make sequences from both sides.",
      tips: [
        isHindi ? "मिडिल कार्ड प्राथमिकता दें" : "Prioritize middle cards",
        isHindi ? "एक्सट्रीम कार्ड (A, 2, K) जल्दी डिसकार्ड करें" : "Discard extreme cards (A, 2, K) early",
        isHindi ? "दोनों तरफ सीक्वेंस बनाने की कोशिश करें" : "Try to make sequences from both sides",
      ],
    },
  ];

  return (
    <>
      <StructuredData lang={lang} pageType="strategies" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "रणनीतियाँ" : "Strategies", href: `/${lang}/strategies` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isHindi ? "रम्मी रणनीतियाँ" : "Rummy Strategies"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {isHindi
              ? "जीतने के लिए सर्वश्रेष्ठ रणनीतियाँ और टिप्स"
              : "Best strategies and tips to win"}
          </p>
        </div>
      </section>

      {/* Strategies Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{strategy.title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{strategy.description}</p>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {isHindi ? "टिप्स:" : "Tips:"}
                      </h3>
                      <ul className="space-y-3">
                        {strategy.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {isHindi ? "प्रो टिप्स" : "Pro Tips"}
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              {[
                isHindi
                  ? "हमेशा प्योर सीक्वेंस पहले बनाएं - यह सबसे महत्वपूर्ण है"
                  : "Always make pure sequence first - it's most important",
                isHindi
                  ? "प्रतिद्वंद्वी के कार्ड देखें और अपनी रणनीति तदनुसार बदलें"
                  : "Watch opponent's cards and change your strategy accordingly",
                isHindi
                  ? "यदि जीत नहीं सकते, तो उच्च मूल्य वाले कार्ड जल्दी डिसकार्ड करें"
                  : "If you can't win, discard high value cards early",
                isHindi
                  ? "जोकर का उपयोग बुद्धिमानी से करें - इसे बचाएं जब तक जरूरी न हो"
                  : "Use joker wisely - save it until necessary",
                isHindi
                  ? "अभ्यास करते रहें - अधिक खेलने से आप बेहतर हो जाएंगे"
                  : "Keep practicing - playing more will make you better",
              ].map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA lang={lang} variant="secondary" />
    </>
  );
}

