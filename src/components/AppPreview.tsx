import GooglePlayIcon from "./icons/GooglePlayIcon";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/storeLinks";

export default function AppPreview() {
  return (
    <section style={{ backgroundColor: "#2c76be" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Her Platformda Yanınızda
          </h2>
          <p className="text-lg text-white max-w-xl mx-auto">
            iOS ve Android için optimize edilmiş, sorunsuz bir deneyim.
          </p>
        </div>

        {/* Phone Mockups */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          {/* Left Phone: Hatırlatmalar */}
          <div className="phone-mockup-sm">
            <div className="phone-screen-sm">
              <img
                src="/hatirlatmalar.webp"
                alt="Hatırlatmalar ekranı"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Phone: Reçetelerim */}
          <div className="phone-mockup-sm">
            <div className="phone-screen-sm">
              <img
                src="/receteler.webp"
                alt="Reçetelerim ekranı"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-white font-semibold text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#212529" }}
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
            App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-white font-semibold text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#212529" }}
          >
            <GooglePlayIcon size={20} />
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
