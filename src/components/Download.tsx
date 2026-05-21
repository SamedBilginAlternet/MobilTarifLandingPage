import TypewriterEffect from "./TypewriterEffect";

export default function Download() {
  return (
    <section
      id="indir"
      style={{
        background: "linear-gradient(135deg, #2c76be 0%, #1a5a9a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl">
            Hemen İndirin,{" "}
            <TypewriterEffect
              words={[{ word: "Ücretsiz Başlayın" }, { word: "Sağlığınızı Koruyun" }, { word: "Fark Hissedin" }]}
              typingSpeed={85}
              deletingSpeed={50}
              pauseDuration={2000}
              cursorColor="rgba(255,255,255,0.8)"
              cursorWidth={3}
              cursorHeight={80}
              textColor="white"
            />
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-lg">
            10.000&apos;den fazla kullanıcıya katılın ve sağlığınızı kontrol
            altına alın.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white font-bold text-base transition-colors hover:bg-gray-100"
              style={{ color: "#212529" }}
            >
              <svg
                width="24"
                height="24"
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
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white font-bold text-base transition-colors hover:bg-gray-100"
              style={{ color: "#212529" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.18 23.76c.3.17.64.22.98.14l12.38-12.38L12.76 8l-9.58 15.76zm17.83-10.67l-2.91-1.68-3.18 3.18 3.18 3.18 2.93-1.69c.84-.48.84-1.51-.02-1.99zM2.01 1.05C1.84 1.3 1.75 1.62 1.75 2v20c0 .38.09.7.26.95L14.09 12l-12.08-10.95zM16.56 3.9L4.16.14C3.82.06 3.48.11 3.18.28L14.76 12l1.8-8.1z" />
              </svg>
              Google Play&apos;den İndir
            </a>
          </div>

          {/* QR Code Placeholder */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-36 h-36 rounded-2xl border-2 border-dashed border-blue-200 flex flex-col items-center justify-center gap-2 bg-white/10"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* QR code visual placeholder */}
                <rect x="2" y="2" width="14" height="14" rx="2" stroke="white" strokeWidth="2" />
                <rect x="6" y="6" width="6" height="6" fill="white" />
                <rect x="24" y="2" width="14" height="14" rx="2" stroke="white" strokeWidth="2" />
                <rect x="28" y="6" width="6" height="6" fill="white" />
                <rect x="2" y="24" width="14" height="14" rx="2" stroke="white" strokeWidth="2" />
                <rect x="6" y="28" width="6" height="6" fill="white" />
                <rect x="20" y="20" width="4" height="4" fill="white" />
                <rect x="26" y="20" width="4" height="4" fill="white" />
                <rect x="32" y="20" width="6" height="4" fill="white" />
                <rect x="20" y="26" width="4" height="4" fill="white" />
                <rect x="26" y="26" width="12" height="4" fill="white" />
                <rect x="20" y="32" width="18" height="4" fill="white" />
              </svg>
              <span className="text-xs text-blue-100 font-medium">QR Kod</span>
            </div>
            <p className="text-sm text-blue-100">
              Kameranızla tarayın ve indirin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
