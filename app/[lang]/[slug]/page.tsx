import { notFound } from "next/navigation";
import {
  getGameBySlug,
  generateGameTitle,
  generateGameDescription,
  generateGameKeywords,
  getAllGameSlugs,
  getGames,
} from "@/src/utils/games";
import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { AdvancedStructuredData } from "../components/SEO/AdvancedStructuredData";
import { GamesListing } from "../components/GamesListing";
import { Hero } from "../components/Hero";
import type { Metadata } from "next";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";
import { SEOContent } from "../components/Content/SEOContent";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = getAllGameSlugs();
  const languages = ["en", "hi"];

  return languages.flatMap((lang) =>
    slugs.map((slug) => ({
      lang,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found | rummygamesapp.com",
    };
  }

  const isHindi = lang === "hi";
  const title = generateGameTitle(game, lang);
  const description = generateGameDescription(game, lang);
  const keywords = generateGameKeywords(game, lang);

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Rummy Games App" }],
    creator: "Rummy Games App",
    publisher: "Rummy Games App",
    metadataBase: new URL("https://www.rummygamesapp.com"),
    alternates: {
      canonical: `/${lang}/${slug}`,
      languages: {
        en: `/en/${slug}`,
        hi: `/hi/${slug}`,
        "x-default": `/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.rummygamesapp.com/${lang}/${slug}`,
      siteName: "Rummy Games App",
      images: [
        {
          url: `https://www.rummygamesapp.com${game.src}`,
          width: 1200,
          height: 630,
          alt: `${game.name} - ${isHindi ? "रम्मी गेम ऐप" : "Rummy Game App"}`,
        },
      ],
      locale: isHindi ? "hi_IN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.rummygamesapp.com${game.src}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const isHindi = lang === "hi";
  const allGames = getGames();

  const seoData: Partial<AdvancedSEOData> = {
    title: generateGameTitle(game, lang),
    description: generateGameDescription(game, lang),
    keywords: generateGameKeywords(game, lang).split(", "),
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/${slug}`,
    ogImage: `https://www.rummygamesapp.com${game.src}`,
  };

  const gameName = game.name;

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          {
            label: isHindi ? "गेम्स" : "Games",
            href: `/${lang}#games`,
          },
          {
            label: gameName,
            href: `/${lang}/${slug}`,
          },
        ]}
      />

      {/* Hero Section */}

      {/* Main Games Section - ALL games, route-matched game FIRST */}


      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <Image
                src={game.src}
                alt={`${gameName} - ${isHindi ? "रम्मी गेम ऐप" : "Rummy Game App"}`}
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
                sizes="192px"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {gameName}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {isHindi
                ? `${gameName} - भारत का सबसे लोकप्रिय रम्मी गेम ऐप`
                : `${gameName} - India's Most Popular Rummy Game App`}
            </p>
            <a
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {isHindi ? "अभी डाउनलोड करें" : "Download Now"}
            </a>
          </div>

          {/* SEO Content */}
          <SEOContent headingLevel={2} heading={isHindi ? "ऐप के बारे में" : "About the App"}>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                {isHindi
                  ? `${gameName} एक प्रीमियम रम्मी गेमिंग ऐप है जो भारत भर के लाखों खिलाड़ियों को रियल कैश रम्मी खेलने का अवसर प्रदान करता है। यह ऐप उच्च गुणवत्ता वाले गेमप्ले, सुरक्षित भुगतान, और तेज़ निकासी के लिए जाना जाता है।`
                  : `${gameName} is a premium rummy gaming app that provides millions of players across India the opportunity to play real cash rummy. This app is known for high-quality gameplay, secure payments, and fast withdrawals.`}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isHindi ? "मुख्य विशेषताएं" : "Key Features"}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  {isHindi
                    ? "100% सुरक्षित और कानूनी रम्मी गेमिंग प्लेटफॉर्म"
                    : "100% safe and legal rummy gaming platform"}
                </li>
                <li>
                  {isHindi
                    ? "तेज़ और आसान निकासी प्रक्रिया"
                    : "Fast and easy withdrawal process"}
                </li>
                <li>
                  {isHindi
                    ? "रोज़ाना बोनस और रिवार्ड"
                    : "Daily bonuses and rewards"}
                </li>
                <li>
                  {isHindi
                    ? "24/7 ग्राहक सहायता"
                    : "24/7 customer support"}
                </li>
                <li>
                  {isHindi
                    ? "विभिन्न रम्मी गेम वेरिएंट"
                    : "Various rummy game variants"}
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isHindi ? "कैसे खेलें" : "How to Play"}
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  {isHindi
                    ? `${gameName} ऐप डाउनलोड करें और साइन अप करें`
                    : `Download ${gameName} app and sign up`}
                </li>
                <li>
                  {isHindi
                    ? "अपना KYC सत्यापित करें"
                    : "Verify your KYC"}
                </li>
                <li>
                  {isHindi
                    ? "अपना पहला जमा करें और बोनस प्राप्त करें"
                    : "Make your first deposit and get bonus"}
                </li>
                <li>
                  {isHindi
                    ? "रम्मी गेम्स खेलना शुरू करें और जीतें"
                    : "Start playing rummy games and win"}
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isHindi ? `क्यों ${gameName} चुनें?` : `Why Choose ${gameName}?`}
              </h3>
              <p className="text-lg leading-relaxed">
                {isHindi
                  ? `${gameName} भारत में रम्मी खिलाड़ियों के लिए सबसे भरोसेमंद प्लेटफॉर्मों में से एक है। हमारे पास लाखों संतुष्ट उपयोगकर्ता हैं जो नियमित रूप से हमारे प्लेटफॉर्म पर खेलते हैं और जीतते हैं। हमारा मिशन सुरक्षित, निष्पक्ष और मनोरंजक गेमिंग अनुभव प्रदान करना है।`
                  : `${gameName} wwdwdwdqdqdqdq is one odwdwf the most trusted platforms for rummy players in India. We have millions of satisfied users who regularly play and win on our platform. Our mission is to provide a safe, fair, and entertaining gaming experience.`}
              </p>
            </div>
          </SEOContent>
        </div>
      </div>
      <div id="games">
        <GamesListing
          games={allGames}
          lang={lang}
          searchQuery={''}
          featuredSlug={slug}
        />
      </div>
    </>
  );
}

