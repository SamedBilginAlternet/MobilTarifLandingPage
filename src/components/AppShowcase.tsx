"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: 1,
    heading: "Ana Ekran",
    body: "Günlük ilaç planınıza tek bakışta ulaşın.",
    accent: "#2c76be",
    bg: "#f0f4ff",
    phoneRight: true,
    imageSrc: "/ilaclar.webp",
    imageAlt: "İlaçlarım ekranı",
  },
  {
    number: 2,
    heading: "Hatırlatmalar",
    body: "Zamanlı alarmlar hiçbir dozu kaçırmanıza izin vermez.",
    accent: "#f57c00",
    bg: "#fff9f0",
    phoneRight: false,
    imageSrc: "/alarmlar.webp",
    imageAlt: "Alarmlar ekranı",
  },
  {
    number: 3,
    heading: "Reçete Arşivi",
    body: "Tüm reçeteleriniz şifreli olarak cebinizde.",
    accent: "#c2185b",
    bg: "#fff0f4",
    phoneRight: true,
    imageSrc: "/receteler.webp",
    imageAlt: "Reçetelerim ekranı",
  },
  {
    number: 4,
    heading: "Aile Paylaşımı",
    body: "Sevdiklerinizin sağlığını uzaktan takip edin.",
    accent: "#388e3c",
    bg: "#f0fff4",
    phoneRight: false,
    imageSrc: "/paylasim-detayi.webp",
    imageAlt: "Aile paylaşımı ekranı",
  },
];

function StepBlock({ step, index }: { step: typeof steps[0]; index: number }) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phone = phoneRef.current;
    const text = textRef.current;
    if (!phone || !text) return;

    const flipClass = step.phoneRight ? "phone-flip-right" : "phone-flip-left";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          phone.classList.add(flipClass);
          setTimeout(() => text.classList.add("visible"), 150);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(phone);
    return () => obs.disconnect();
  }, [step.phoneRight]);

  const phoneEl = (
    <div
      ref={phoneRef}
      className="flex-shrink-0 flex justify-center"
      style={{ opacity: 0 }}
    >
      <img
        src={step.imageSrc}
        alt={step.imageAlt}
        width={600}
        height={1237}
        loading="lazy"
        className="phone-shot"
        style={{ width: "300px", maxWidth: "78vw" }}
      />
    </div>
  );

  const textEl = (
    <div ref={textRef} className="reveal flex-1 flex flex-col justify-center text-center lg:text-left">
      <span
        className="inline-flex w-10 h-10 rounded-full text-white font-bold text-base items-center justify-center mb-4 mx-auto lg:mx-0"
        style={{ backgroundColor: step.accent }}
      >
        {step.number}
      </span>
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        {step.heading}
      </h3>
      <p className="text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0">
        {step.body}
      </p>
    </div>
  );

  return (
    <div
      className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-5xl mx-auto w-full"
    >
      {step.phoneRight ? (
        <>
          {textEl}
          {phoneEl}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{phoneEl}</div>
          <div className="order-1 lg:order-2">{textEl}</div>
        </>
      )}
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section id="app-showcase">
      {/* Section label */}
      <div className="text-center pt-20 pb-4 px-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#2c76be" }}>
          Uygulamayı Keşfet
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Her Adımda{" "}
          <span style={{ color: "#2c76be" }}>Yanınızda</span>
        </h2>
      </div>

      {/* 4 alternating step blocks */}
      {steps.map((step, i) => (
        <div key={i} style={{ backgroundColor: step.bg }}>
          <StepBlock step={step} index={i} />
        </div>
      ))}
    </section>
  );
}
