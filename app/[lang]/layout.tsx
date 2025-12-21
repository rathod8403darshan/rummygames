import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = await params;
  const isHindi = lang === "hi";

  return {
    title: isHindi
      ? "रम्मी गेम्स – ऑनलाइन रियल कैश रम्मी खेलें | rummygamesapp.com"
      : "Rummy Games – Play Real Cash Rummy Online | rummygamesapp.com",
    description: isHindi
      ? "Rummy Games App डाउनलोड करें और रियल कैश रम्मी ऑनलाइन खेलें। 100% सुरक्षित, कानूनी और तेज़ निकासी वाला भारत का भरोसेमंद रम्मी ऐप।"
      : "Download Rummy Games App and play real cash rummy online. 100% safe, legal, fast withdrawal, and India's most trusted rummy platform.",
    keywords: isHindi
      ? "रम्मी गेम्स, रम्मी ऐप, रियल कैश रम्मी, ऑनलाइन रम्मी, बेस्ट रम्मी ऐप, रम्मी गेम डाउनलोड"
      : "rummy games, rummy game download, real cash rummy, online rummy, best rummy app, rummy games app, play rummy online, rummy tournaments, rummy cash games",
    authors: [{ name: "Rummy Games App" }],
    creator: "Rummy Games App",
    publisher: "Rummy Games App",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://www.rummygamesapp.com"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        hi: "/hi",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: isHindi
        ? "रम्मी गेम्स – ऑनलाइन रियल कैश रम्मी खेलें"
        : "Rummy Games – Play Real Cash Rummy Online",
      description: isHindi
        ? "Rummy Games App डाउनलोड करें और रियल कैश रम्मी ऑनलाइन खेलें। 100% सुरक्षित, कानूनी और तेज़ निकासी।"
        : "Download Rummy Games App and play real cash rummy online. 100% safe, legal, fast withdrawal.",
      url: `https://www.rummygamesapp.com/${lang}`,
      siteName: "Rummy Games App",
      images: [
        {
          url: "https://www.rummygamesapp.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isHindi ? "रम्मी गेम्स ऐप" : "Rummy Games App",
        },
      ],
      locale: isHindi ? "hi_IN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isHindi
        ? "रम्मी गेम्स – ऑनलाइन रियल कैश रम्मी खेलें"
        : "Rummy Games – Play Real Cash Rummy Online",
      description: isHindi
        ? "Rummy Games App डाउनलोड करें और रियल कैश रम्मी ऑनलाइन खेलें।"
        : "Download Rummy Games App and play real cash rummy online.",
      images: ["https://www.rummygamesapp.com/images/twitter-card.jpg"],
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
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <Navigation lang={lang} />
      <main className="min-h-screen">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
