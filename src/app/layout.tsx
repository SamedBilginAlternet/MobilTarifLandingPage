import type { Metadata, Viewport } from "next";
import "./globals.css";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/storeLinks";

const SITE_URL = "https://mobiltarif.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MobilTarif — Akıllı İlaç Hatırlatma ve Reçete Yönetimi",
    template: "%s | MobilTarif",
  },
  description:
    "MobilTarif ile ilaçlarınızı hiç unutmayın. Akıllı hatırlatmalar, şifreli reçete yönetimi, ilaç takibi ve aile paylaşımı tek uygulamada. Hemen ücretsiz indirin.",
  keywords: [
    "ilaç hatırlatma",
    "reçete yönetimi",
    "ilaç takip",
    "ilaç alarmı",
    "aile paylaşımı",
    "ilaç hatırlatıcı",
    "sağlık uygulaması",
    "ilaç takvimi",
    "reçete takibi",
    "MobilTarif",
  ],
  authors: [{ name: "MobilTarif" }],
  creator: "MobilTarif",
  publisher: "MobilTarif",
  applicationName: "MobilTarif",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "MobilTarif",
    title: "MobilTarif — Akıllı İlaç Hatırlatma ve Reçete Yönetimi",
    description:
      "MobilTarif ile ilaçlarınızı hiç unutmayın. Akıllı hatırlatmalar, şifreli reçete yönetimi, ilaç takibi ve aile paylaşımı tek uygulamada. Hemen ücretsiz indirin.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MobilTarif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MobilTarif — Akıllı İlaç Hatırlatma ve Reçete Yönetimi",
    description:
      "MobilTarif ile ilaçlarınızı hiç unutmayın. Akıllı hatırlatmalar, şifreli reçete yönetimi, ilaç takibi ve aile paylaşımı tek uygulamada. Hemen ücretsiz indirin.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/mobiltarif-svg-1.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/mobiltarif-svg-1.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2c76be",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "MobilTarif",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "MedicalApplication",
  operatingSystem: "iOS, Android",
  url: SITE_URL,
  downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
  sameAs: [APP_STORE_URL, PLAY_STORE_URL],
  description:
    "MobilTarif ile ilaçlarınızı hiç unutmayın. Akıllı hatırlatmalar, şifreli reçete yönetimi, ilaç takibi ve aile paylaşımı tek uygulamada. Hemen ücretsiz indirin.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "10000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.cdnfonts.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
