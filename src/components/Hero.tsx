"use client";
import dynamic from "next/dynamic";
import TypewriterEffect from "./TypewriterEffect";
import GooglePlayIcon from "./icons/GooglePlayIcon";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/storeLinks";

const PillParticles = dynamic(() => import("./PillParticlesScene"), {
  ssr: false,
});

const heroWords = [
  { word: "Hiç Unutmayın" },
  { word: "Takip Edin" },
  { word: "Güvende Tutun" },
  { word: "Paylaşın" },
];

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 relative" style={{ overflow: "hidden", maxWidth: "100vw" }}>
      <PillParticles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-sm font-medium" style={{ color: "#2c76be" }}>
                🏆 Türkiye&apos;nin 1 Numaralı İlaç Takip Uygulaması
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
              İlaçlarınızı{" "}
              <br className="hidden sm:block" />
              <TypewriterEffect
                words={heroWords}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={1800}
                cursorColor="#2c76be"
                cursorWidth={3}
                cursorHeight={80}
                textColor="#2c76be"
              />
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Akıllı hatırlatmalar, şifreli reçete yönetimi ve aile paylaşımı
              ile sağlığınızı güvende tutun. Her dozunuzu zamanında alın.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.79.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.84M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store&apos;dan İndir
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                <GooglePlayIcon size={20} />
                Google Play&apos;den İndir
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: "#2c76be" }}
                >
                  10K
                </div>
                <span className="text-sm font-medium text-gray-700">
                  10.000+ Kullanıcı
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg leading-none">★</span>
                <span className="text-sm font-medium text-gray-700">
                  4.8 Puan
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: "#2c76be" }}
                >
                  ✓
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Ücretsiz
                </span>
              </div>
            </div>
          </div>

          {/* Right: Phone screenshot (frame baked into the image) */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="phone-float">
              <img
                src="/ilaclar.webp"
                alt="MobilTarif İlaçlarım ekranı"
                width={600}
                height={1237}
                fetchPriority="high"
                className="phone-shot"
                style={{ width: "300px", maxWidth: "78vw" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
