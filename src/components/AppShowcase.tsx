"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import ImageSequence, { ImageItem } from "./ImageSequence";

const PillParticlesScene = dynamic(() => import("./PillParticlesScene"), {
  ssr: false,
});

const steps = [
  {
    number: 1,
    heading: "Ana Ekran",
    body: "Günlük ilaç planınıza tek bakışta ulaşın.",
    accent: "#2c76be",
    bg: "e8f0fb",
    fg: "2c76be",
    label: "Ana+Ekran",
  },
  {
    number: 2,
    heading: "Hatırlatmalar",
    body: "Zamanlı alarmlar hiçbir dozu kaçırmanıza izin vermez.",
    accent: "#f57c00",
    bg: "fff3e0",
    fg: "f57c00",
    label: "Hatırlatmalar",
  },
  {
    number: 3,
    heading: "Reçete Arşivi",
    body: "Tüm reçeteleriniz şifreli olarak cebinizde.",
    accent: "#c2185b",
    bg: "fce4ec",
    fg: "c2185b",
    label: "Reçete+Arşivi",
  },
  {
    number: 4,
    heading: "Aile Paylaşımı",
    body: "Sevdiklerinizin sağlığını uzaktan takip edin.",
    accent: "#388e3c",
    bg: "e8f5e9",
    fg: "388e3c",
    label: "Aile+Paylaşımı",
  },
];

// 4 distinct frames — one per step (replace with real screenshots)
const frames: ImageItem[] = steps.map((s) => ({
  src: `https://placehold.co/390x844/${s.bg}/${s.fg}?text=${s.label}`,
  alt: s.heading,
}));

const SECTION_ID = "app-showcase";
// Each step occupies 1 viewport of scroll → 4 steps = 4 × 100vh
const TOTAL_VH = 400;

export default function AppShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = el.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      setActiveStep(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const step = steps[activeStep];

  return (
    <section
      id={SECTION_ID}
      ref={sectionRef}
      className="relative"
      style={{ height: `${TOTAL_VH}vh` }}
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 h-screen flex items-center"
        style={{ backgroundColor: "#f8fafc", overflow: "hidden", maxWidth: "100vw" }}
      >
        {/* Pill particle background */}
        <div className="absolute inset-0 pointer-events-none">
          <PillParticlesScene />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

            {/* ── Left: step text ── */}
            <div className="flex-1 text-center lg:text-left">
              {/* Section label */}
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#2c76be" }}
              >
                Uygulamayı Keşfet
              </p>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Her Adımda
                <br />
                <span style={{ color: "#2c76be" }}>Yanınızda</span>
              </h2>

              {/* Step info — crossfades on activeStep change */}
              <div
                key={activeStep}
                className="mt-8"
                style={{
                  animation: "stepFadeIn 0.4s ease both",
                }}
              >
                <div className="flex items-center gap-3 justify-center lg:justify-start mb-3">
                  <span
                    className="w-9 h-9 rounded-full text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-md transition-colors duration-300"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.heading}
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {step.body}
                </p>
              </div>

              {/* Progress dots */}
              <div className="flex gap-2.5 mt-10 justify-center lg:justify-start">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === activeStep ? 24 : 8,
                      height: 8,
                      backgroundColor:
                        i === activeStep ? step.accent : "#d1d5db",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* ── Right: phone + image sequence ── */}
            <div className="hidden sm:flex flex-shrink-0 justify-center">
              <div className="phone-float">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <ImageSequence
                      images={frames}
                      scrollBehavior="scrollSection"
                      sectionId={SECTION_ID}
                      smoothing={0.08}
                      preloadImages
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes stepFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
