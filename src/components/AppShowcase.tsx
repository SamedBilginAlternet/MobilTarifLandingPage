"use client";
import ImageSequence, { ImageItem } from "./ImageSequence";

// Placeholder frames — replace with real app screenshots.
// For best results: 30–100 sequential JPEG images, same dimensions.
const W = 390;
const H = 844;

function makeFrames(): ImageItem[] {
  const frames: ImageItem[] = [];

  // Simulate 24 frames cycling through 4 "screen" states with colour shifts
  const screens = [
    { bg: "e8f0fb", fg: "2c76be", label: "Ana+Ekran" },
    { bg: "e8f0fb", fg: "2c76be", label: "Ilaçlarım" },
    { bg: "fff3e0", fg: "f57c00", label: "Hatirlatma" },
    { bg: "e8f5e9", fg: "388e3c", label: "Alinmis+Doz" },
    { bg: "fce4ec", fg: "c2185b", label: "Reçete" },
    { bg: "ede7f6", fg: "512da8", label: "Takvim" },
    { bg: "e0f7fa", fg: "00838f", label: "Paylasim" },
    { bg: "e8f0fb", fg: "2c76be", label: "Profil" },
  ];

  screens.forEach((s, si) => {
    // 3 frames per screen state for smooth-ish transition
    for (let f = 0; f < 3; f++) {
      frames.push({
        src: `https://placehold.co/${W}x${H}/${s.bg}/${s.fg}?text=${s.label}`,
        alt: `${s.label} ekranı`,
      });
    }
  });

  return frames;
}

const frames = makeFrames();

const steps = [
  { heading: "Ana Ekran", body: "Günlük ilaç planınıza tek bakışta ulaşın." },
  { heading: "Hatırlatmalar", body: "Zamanlı alarmlar hiçbir dozu kaçırmanıza izin vermez." },
  { heading: "Reçete Arşivi", body: "Tüm reçeteleriniz şifreli olarak cebinizde." },
  { heading: "Aile Paylaşımı", body: "Sevdiklerinizin sağlığını uzaktan takip edin." },
];

export default function AppShowcase() {
  return (
    <section
      id="app-showcase"
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: copy that fades per scroll step */}
            <div className="flex-1 space-y-6">
              <p
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#2c76be" }}
              >
                Uygulamayı Keşfet
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Her Adımda <br />
                <span style={{ color: "#2c76be" }}>Yanınızda</span>
              </h2>
              <ul className="space-y-4">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#2c76be" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">{s.heading}</p>
                      <p className="text-sm text-gray-600">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: phone frame + image sequence canvas */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <ImageSequence
                    images={frames}
                    scrollBehavior="scrollSection"
                    sectionId="app-showcase"
                    smoothing={0.12}
                    preloadImages={true}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
