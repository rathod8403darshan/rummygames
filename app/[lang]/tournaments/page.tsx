import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { AdvancedStructuredData } from "../components/SEO/AdvancedStructuredData";
import { CTA } from "../components/CTA";
import { Game, getGames } from "@/src/utils/games";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "रम्मी टूर्नामेंट – बड़े पुरस्कार जीतें | rummygamesapp.com"
      : "Rummy Tournaments – Win Big Prizes | rummygamesapp.com",
    description: isHindi
      ? "रम्मी टूर्नामेंट में भाग लें और लाखों रुपये जीतें। दैनिक, साप्ताहिक और मासिक टूर्नामेंट। तुरंत भाग लें!"
      : "Participate in rummy tournaments and win lakhs of rupees. Daily, weekly, and monthly tournaments. Join now!",
    keywords: isHindi
      ? "रम्मी टूर्नामेंट, ऑनलाइन रम्मी टूर्नामेंट, रम्मी प्रतियोगिता, रम्मी टूर्नामेंट पुरस्कार"
      : "rummy tournaments, online rummy tournaments, rummy competition, rummy tournament prizes, rummy championship",
  };
}

export default async function TournamentsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";  

  // Select random game **server-side**
  const allGames = getGames();
  const shuffled = [...allGames].sort(() => Math.random() - 0.5);
  const randomGame: Game | null = shuffled[0] || null;

  const tournaments = [
    {
      name: isHindi ? "मेगा टूर्नामेंट" : "Mega Tournament",
      prize: "₹10,00,000",
      entry: "₹500",
      players: "5000",
      date: isHindi ? "रोजाना" : "Daily",
      time: "8:00 PM",
      status: "upcoming",
      description: isHindi
        ? "सबसे बड़ा दैनिक टूर्नामेंट - ₹10 लाख का पुरस्कार"
        : "Biggest daily tournament - ₹10 Lakh prize pool",
    },
    {
      name: isHindi ? "सुपर टूर्नामेंट" : "Super Tournament",
      prize: "₹5,00,000",
      entry: "₹250",
      players: "3000",
      date: isHindi ? "रोजाना" : "Daily",
      time: "6:00 PM",
      status: "live",
      description: isHindi
        ? "शाम का सुपर टूर्नामेंट - ₹5 लाख का पुरस्कार"
        : "Evening super tournament - ₹5 Lakh prize pool",
    },
    {
      name: isHindi ? "वीकेंड स्पेशल" : "Weekend Special",
      prize: "₹25,00,000",
      entry: "₹1000",
      players: "10000",
      date: isHindi ? "शनिवार-रविवार" : "Saturday-Sunday",
      time: "7:00 PM",
      status: "upcoming",
      description: isHindi
        ? "सप्ताहांत का विशेष टूर्नामेंट - ₹25 लाख का पुरस्कार"
        : "Weekend special tournament - ₹25 Lakh prize pool",
    },
    {
      name: isHindi ? "क्विक टूर्नामेंट" : "Quick Tournament",
      prize: "₹1,00,000",
      entry: "₹100",
      players: "2000",
      date: isHindi ? "हर 2 घंटे" : "Every 2 hours",
      time: "Ongoing",
      status: "live",
      description: isHindi
        ? "तेज़-तर्रार टूर्नामेंट - हर 2 घंटे में"
        : "Fast-paced tournament - Every 2 hours",
    },
  ];

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "रम्मी टूर्नामेंट – बड़े पुरस्कार जीतें | rummygamesapp.com"
      : "Rummy Tournaments – Win Big Prizes | rummygamesapp.com",
    description: isHindi
      ? "रम्मी टूर्नामेंट में भाग लें और लाखों रुपये जीतें। दैनिक, साप्ताहिक और मासिक टूर्नामेंट।"
      : "Participate in rummy tournaments and win lakhs of rupees. Daily, weekly, and monthly tournaments.",
    keywords: isHindi
      ? ["रम्मी टूर्नामेंट", "ऑनलाइन रम्मी", "रम्मी प्रतियोगिता", "रम्मी पुरस्कार"]
      : ["rummy tournaments", "online rummy", "rummy competition", "rummy prizes"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/tournaments`,
    ogImage: "https://www.rummygamesapp.com/images/tournaments-og.jpg",
    eventData: {
      name: isHindi ? "रम्मी टूर्नामेंट" : "Rummy Tournaments",
      startDate: new Date().toISOString(),
      organizer: "Rummy Games App",
    },
  };

  return (
    <>
      <StructuredData lang={lang} pageType="tournaments" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="tournaments" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "टूर्नामेंट" : "Tournaments", href: `/${lang}/tournaments` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isHindi ? "रम्मी टूर्नामेंट" : "Rummy Tournaments"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {isHindi
              ? "बड़े पुरस्कार जीतें और चैंपियन बनें। हर दिन लाखों रुपये के पुरस्कार।"
              : "Win Big Prizes and Become a Champion. Lakhs of rupees in prizes every day."}
          </p>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">₹500Cr+</div>
              <div className="text-white/80">{isHindi ? "कुल पुरस्कार" : "Total Prizes"}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">{isHindi ? "दैनिक खिलाड़ी" : "Daily Players"}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">{isHindi ? "टूर्नामेंट/दिन" : "Tournaments/Day"}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">{isHindi ? "उपलब्ध" : "Available"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            {isHindi ? "उपलब्ध टूर्नामेंट" : "Available Tournaments"}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {isHindi
              ? "विभिन्न प्रकार के टूर्नामेंट में भाग लें और बड़े पुरस्कार जीतें"
              : "Participate in various types of tournaments and win big prizes"}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tournaments.map((tournament, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg border-2 transition-all transform hover:scale-105 ${
                  tournament.status === "live"
                    ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-500"
                    : "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-500"
                }`}
              >
                {tournament.status === "live" && (
                  <div className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full mb-4 animate-pulse">
                    {isHindi ? "लाइव" : "LIVE"}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tournament.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tournament.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{isHindi ? "पुरस्कार:" : "Prize:"}</span>
                    <span className="text-2xl font-bold text-green-600">{tournament.prize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{isHindi ? "प्रवेश:" : "Entry:"}</span>
                    <span className="font-bold text-gray-900">{tournament.entry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{isHindi ? "खिलाड़ी:" : "Players:"}</span>
                    <span className="font-bold text-gray-900">{tournament.players}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{isHindi ? "तारीख:" : "Date:"}</span>
                    <span className="font-bold text-gray-900">{tournament.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{isHindi ? "समय:" : "Time:"}</span>
                    <span className="font-bold text-gray-900">{tournament.time}</span>
                  </div>
                </div>
                <a
                  href={randomGame?.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  {isHindi ? "भाग लें" : "Join Now"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {isHindi ? "टूर्नामेंट के फायदे" : "Tournament Benefits"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: isHindi ? "बड़े पुरस्कार" : "Big Prizes",
              description: isHindi
                ? "हर टूर्नामेंट में लाखों रुपये के पुरस्कार"
                : "Lakhs of rupees in prizes in every tournament",
              icon: "💰",
            },{
              title: isHindi ? "रोमांच" : "Thrill",
              description: isHindi
                ? "हजारों खिलाड़ियों के साथ प्रतिस्पर्धा"
                : "Compete with thousands of players",
              icon: "🎯",
            },{
              title: isHindi ? "मान्यता" : "Recognition",
              description: isHindi
                ? "चैंपियन बनें और मान्यता पाएं"
                : "Become a champion and get recognition",
              icon: "🏆",
            }].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {isHindi ? "रम्मी टूर्नामेंट के बारे में" : "About Rummy Tournaments"}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              {isHindi
                ? "रम्मी टूर्नामेंट एक रोमांचक तरीका है जिससे आप बड़े पुरस्कार जीत सकते हैं। हमारे प्लेटफॉर्म पर हर दिन कई टूर्नामेंट आयोजित किए जाते हैं, जिनमें से कुछ लाखों रुपये के पुरस्कार प्रदान करते हैं।"
                : "Rummy tournaments are an exciting way to win big prizes. Our platform hosts multiple tournaments every day, some offering prizes worth lakhs of rupees."}
            </p>
            <p>
              {isHindi
                ? "हमारे टूर्नामेंट विभिन्न प्रकार के होते हैं - दैनिक टूर्नामेंट, साप्ताहिक टूर्नामेंट, और विशेष टूर्नामेंट। प्रत्येक टूर्नामेंट में अलग-अलग प्रवेश शुल्क और पुरस्कार राशि होती है, जिससे सभी प्रकार के खिलाड़ी भाग ले सकते हैं।"
                : "Our tournaments come in various types - daily tournaments, weekly tournaments, and special tournaments. Each tournament has different entry fees and prize pools, allowing players of all types to participate."}
            </p>
            <p>
              {isHindi
                ? "टूर्नामेंट में भाग लेने के लिए, बस ऐप डाउनलोड करें, एक अकाउंट बनाएं, और अपने पसंदीदा टूर्नामेंट में शामिल हों। हमारा प्लेटफॉर्म 100% सुरक्षित है और सभी पुरस्कार तुरंत वितरित किए जाते हैं।"
                : "To participate in tournaments, simply download the app, create an account, and join your preferred tournament. Our platform is 100% secure and all prizes are distributed instantly."}
            </p>
          </div>
        </div>
      </section>

      <CTA lang={lang} variant="secondary" />
    </>
  );
}
