export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
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
              <span style={{ color: "#2c76be" }}>Hiç Unutmayın</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Akıllı hatırlatmalar, şifreli reçete yönetimi ve aile paylaşımı
              ile sağlığınızı güvende tutun. Her dozunuzu zamanında alın.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#"
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
                href="#"
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.18 23.76c.3.17.64.22.98.14l12.38-12.38L12.76 8l-9.58 15.76zm17.83-10.67l-2.91-1.68-3.18 3.18 3.18 3.18 2.93-1.69c.84-.48.84-1.51-.02-1.99zM2.01 1.05C1.84 1.3 1.75 1.62 1.75 2v20c0 .38.09.7.26.95L14.09 12l-12.08-10.95zM16.56 3.9L4.16.14C3.82.06 3.48.11 3.18.28L14.76 12l1.8-8.1z" />
                </svg>
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

          {/* Right: Phone Mockup */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="phone-mockup">
              <div className="phone-screen">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-5 pt-14 pb-2">
                  <span className="text-xs font-semibold text-gray-900">
                    09:41
                  </span>
                  <div className="flex items-center gap-1">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                      <rect x="0" y="4" width="3" height="6" rx="1" fill="#1a1a1a" />
                      <rect x="4" y="2.5" width="3" height="7.5" rx="1" fill="#1a1a1a" />
                      <rect x="8" y="1" width="3" height="9" rx="1" fill="#1a1a1a" />
                      <rect x="12" y="0" width="4" height="10" rx="1" fill="#1a1a1a" opacity="0.3" />
                    </svg>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                      <rect x="1" y="2" width="12" height="8" rx="1.5" stroke="#1a1a1a" strokeWidth="1" />
                      <rect x="2" y="3" width="8" height="6" rx="0.5" fill="#1a1a1a" />
                      <path d="M14 4.5v3c.83-.5.83-2.5 0-3z" fill="#1a1a1a" />
                    </svg>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-4 pt-2 pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">
                    Bugünkü İlaçlarım
                  </h2>
                  <p className="text-xs text-gray-500">21 Mayıs 2026</p>
                </div>

                {/* Medication Cards */}
                <div className="px-4 pt-3 flex flex-col gap-2.5 flex-1 overflow-hidden">
                  {/* Card 1 */}
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        Aspirin 100mg
                      </p>
                      <p className="text-xs text-gray-500">08:00</p>
                    </div>
                    <button
                      className="px-2.5 py-1 text-xs font-semibold text-white rounded-lg flex-shrink-0"
                      style={{ backgroundColor: "#2c76be" }}
                    >
                      Alındı ✓
                    </button>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-200">
                    <div className="w-3 h-3 rounded-full bg-orange-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        Metformin 850mg
                      </p>
                      <p className="text-xs text-gray-500">12:00</p>
                    </div>
                    <button
                      className="px-2.5 py-1 text-xs font-semibold text-white rounded-lg flex-shrink-0"
                      style={{ backgroundColor: "#2c76be" }}
                    >
                      Al
                    </button>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-200">
                    <div className="w-3 h-3 rounded-full bg-purple-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        Losartan 50mg
                      </p>
                      <p className="text-xs text-gray-500">20:00</p>
                    </div>
                    <button className="px-2.5 py-1 text-xs font-semibold text-gray-400 rounded-lg border border-gray-200 flex-shrink-0">
                      Al
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="px-4 pb-6 pt-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-medium text-gray-700">
                      Günlük İlerleme
                    </span>
                    <span className="text-xs font-bold" style={{ color: "#2c76be" }}>
                      2/3
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "66%",
                        backgroundColor: "#2c76be",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
