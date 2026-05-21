"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "1",
    title: "İndir",
    description:
      "App Store veya Google Play'den ücretsiz indirin ve hemen başlayın.",
  },
  {
    number: "2",
    title: "Ekle",
    description: "İlaçlarınızı, dozajlarınızı ve kullanım zamanlarını girin.",
  },
  {
    number: "3",
    title: "Takip Et",
    description: "Hatırlatmalar alın ve takvimden dozlarınızı takip edin.",
  },
];

export default function HowItWorks() {
  const headingRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const all: { el: Element; delay: number }[] = [];

    if (headingRef.current) all.push({ el: headingRef.current, delay: 0 });
    stepRefs.current.forEach((el, i) => {
      if (el) all.push({ el, delay: 150 + i * 150 });
    });

    const observers = all.map(({ el, delay }) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("visible"), delay);
            obs.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="nasil-calisir" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            3 Adımda Başlayın
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Dakikalar içinde kurulum yapın ve ilaç takibine hemen başlayın.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-2/3 h-0.5"
            style={{ backgroundColor: "#e8f0fb" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="reveal flex flex-col items-center text-center"
              >
                {/* Numbered Circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg"
                  style={{ backgroundColor: "#2c76be" }}
                >
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
