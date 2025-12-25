import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Breadcrumbs } from "./components/SEO/Breadcrumbs";
import { StructuredData } from "./components/SEO/StructuredData";
import { AdvancedStructuredData } from "./components/SEO/AdvancedStructuredData";
import { GamesListing } from "./components/GamesListing";
import { getGames } from "@/src/utils/games";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  const keywords = isHindi
    ? "रम्मी गेम्स, रम्मी ऐप, ऑनलाइन रम्मी, रियल कैश रम्मी, रम्मी डाउनलोड, रम्मी खेलें, रम्मी टूर्नामेंट, रम्मी कैश गेम्स, बेस्ट रम्मी ऐप, रम्मी गेम डाउनलोड"
    : "rummy games, rummy app, online rummy, real cash rummy, rummy download, play rummy online, rummy tournaments, rummy cash games, best rummy app, rummy game download";
  
  return {
    title: isHindi 
      ? "रम्मी गेम्स – ऑनलाइन रियल कैश रम्मी खेलें | rummygamesapp.com"
      : "Rummy Games – Play Real Cash Rummy Online | rummygamesapp.com",
    description: isHindi
      ? "Rummy Games App डाउनलोड करें और रियल कैश रम्मी ऑनलाइन खेलें। 100% सुरक्षित, कानूनी और तेज़ निकासी वाला भारत का भरोसेमंद रम्मी ऐप। 10 मिलियन+ खिलाड़ी, ₹500Cr+ जीत, 4.8★ रेटिंग।"
      : "Download Rummy Games App and play real cash rummy online. 100% safe, legal, fast withdrawal, and India's most trusted rummy platform. 10M+ players, ₹500Cr+ winnings, 4.8★ rating.",
    keywords,
    openGraph: {
      title: isHindi
        ? "रम्मी गेम्स – ऑनलाइन रियल कैश रम्मी खेलें"
        : "Rummy Games – Play Real Cash Rummy Online",
      description: isHindi
        ? "भारत का #1 रम्मी ऐप - 10M+ खिलाड़ी, ₹500Cr+ जीत, 4.8★ रेटिंग"
        : "India's #1 Rummy App - 10M+ Players, ₹500Cr+ Winnings, 4.8★ Rating",
      images: [
        {
          url: "https://www.rummygamesapp.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isHindi ? "रम्मी गेम्स ऐप" : "Rummy Games App",
        },
      ],
    },
  };
}

export default async function HomePage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ search?: string; app?: string }>;
}) {
  const { lang } = await params;
  const { search, app } = await searchParams;
  const isHindi = lang === "hi";
  const games = getGames();

  // Get featured app if search query matches a slug
  const featuredSlug = app || (search ? games.find(g => g.slug.includes(search.toLowerCase()))?.slug : undefined);

  const seoData = {
    title: isHindi
      ? "रम्मी गेम्स – ऑनलाइन रियल कैश रम्मी खेलें | rummygamesapp.com"
      : "Rummy Games – Play Real Cash Rummy Online | rummygamesapp.com",
    description: isHindi
      ? "Rummy Games App डाउनलोड करें और रियल कैश रम्मी ऑनलाइन खेलें। 100% सुरक्षित, कानूनी और तेज़ निकासी वाला भारत का भरोसेमंद रम्मी ऐप।"
      : "Download Rummy Games App and play real cash rummy online. 100% safe, legal, fast withdrawal, and India's most trusted rummy platform.",
    keywords: isHindi
      ? ["रम्मी गेम्स", "रम्मी ऐप", "ऑनलाइन रम्मी", "रियल कैश रम्मी"]
      : ["rummy games", "rummy app", "online rummy", "real cash rummy"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}`,
    ogImage: "https://www.rummygamesapp.com/images/og-image.jpg",
  };

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs lang={lang} items={[{ label: isHindi ? "होम" : "Home", href: `/${lang}` }]} />
      
      <Hero lang={lang} />
      
      <div id="games">
        <GamesListing 
          games={games} 
          lang={lang} 
          searchQuery={search || ""}
          featuredSlug={featuredSlug}
        />
      </div>

      <Features lang={lang} />
      <Testimonials lang={lang} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            {isHindi ? "रम्मी गेम्स ऐप के बारे में" : "About Rummy Games App"}
          </h2>
          <p className="text-xl leading-relaxed mb-6 text-gray-700">
            {isHindi
              ? "रम्मी गेम्स ऐप भारत का सबसे भरोसेमंद और सुरक्षित रम्मी गेमिंग प्लेटफॉर्म है। हम 10 मिलियन से अधिक खिलाड़ियों को रियल कैश रम्मी खेलने का मौका प्रदान कर रहे हैं। हमारा प्लेटफॉर्म 100% सुरक्षित है, कानूनी रूप से लाइसेंस प्राप्त है, और तुरंत निकासी प्रदान करता है।"
              : "Rummy Games App is India's most trusted and secure rummy gaming platform. We are providing over 10 million players the opportunity to play real cash rummy. Our platform is 100% secure, legally licensed, and offers instant withdrawals."}
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            {isHindi
              ? "हमारे प्लेटफॉर्म पर, आप विभिन्न प्रकार के रम्मी गेम्स खेल सकते हैं जैसे पॉइंट्स रम्मी, पूल रम्मी, और डील रम्मी। हमारे पास हर दिन लाखों रुपये के पुरस्कार के साथ बड़े टूर्नामेंट भी होते हैं।"
              : "On our platform, you can play various types of rummy games like Points Rummy, Pool Rummy, and Deal Rummy. We also have big tournaments every day with lakhs of rupees in prizes."}
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            {isHindi
              ? "हमारी सुरक्षा और गोपनीयता नीति सुनिश्चित करती है कि आपका डेटा और पैसा पूरी तरह सुरक्षित है। हम बैंक-ग्रेड एन्क्रिप्शन और सुरक्षित भुगतान गेटवे का उपयोग करते हैं।"
              : "Our security and privacy policy ensures that your data and money are completely secure. We use bank-grade encryption and secure payment gateways."}
          </p>
        </article>
      </div>
      <FAQ lang={lang} />
      <CTA lang={lang} />
    </>
  );
}

