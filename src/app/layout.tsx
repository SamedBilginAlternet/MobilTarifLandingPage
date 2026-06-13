import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MobilTarif — Akıllı İlaç Hatırlatma",
  description:
    "MobilTarif ile ilaçlarınızı hiç unutmayın. Akıllı hatırlatmalar, şifreli reçete yönetimi, aile paylaşımı ve eczane bağlantısı tek uygulamada. iOS ve Android için ücretsiz indirin.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
