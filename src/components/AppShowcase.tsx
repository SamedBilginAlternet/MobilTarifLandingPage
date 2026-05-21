"use client";
import { useEffect, useRef } from "react";

/* ── Per-step phone screen content ─────────────────────────────── */
function ScreenAnaEkran() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 pt-14 pb-2 flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-900">09:41</span>
      </div>
      <div className="px-4 pb-2 border-b border-gray-100">
        <p className="text-sm font-bold text-gray-900">İlaçlarım</p>
        <p className="text-xs text-gray-400">21 Mayıs</p>
      </div>
      <div className="px-4 pt-3 flex flex-col gap-2 flex-1 overflow-hidden">
        {[
          { name: "Aspirin 100mg", time: "08:00", dot: "bg-green-500", done: true },
          { name: "Metformin 850mg", time: "12:00", dot: "bg-orange-400", done: false },
          { name: "Losartan 50mg", time: "20:00", dot: "bg-purple-400", done: false },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-2 p-2 rounded-xl border ${item.done ? "bg-blue-50 border-blue-100" : "border-gray-100"}`}>
            <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.dot}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">{item.name}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${item.done ? "text-white" : "text-gray-400 border border-gray-200"}`} style={item.done ? { backgroundColor: "#2c76be" } : {}}>
              {item.done ? "✓" : "Al"}
            </span>
          </div>
        ))}
      </div>
      <div className="px-4 pb-5 pt-2">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-600">Günlük ilerleme</span>
          <span className="font-bold" style={{ color: "#2c76be" }}>1/3</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full w-1/3" style={{ backgroundColor: "#2c76be" }} />
        </div>
      </div>
    </div>
  );
}

function ScreenHatirlatma() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-white gap-4 px-5">
      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#fff3e0" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-1">Sonraki hatırlatma</p>
        <p className="text-3xl font-bold text-gray-900">12:00</p>
        <p className="text-sm font-semibold text-gray-700 mt-1">Metformin 850mg</p>
      </div>
      <div className="flex gap-2 w-full mt-2">
        <button className="flex-1 py-2 rounded-xl text-xs font-semibold border border-gray-200 text-gray-600">Ertele</button>
        <button className="flex-1 py-2 rounded-xl text-xs font-semibold text-white" style={{ backgroundColor: "#f57c00" }}>Alındı ✓</button>
      </div>
    </div>
  );
}

function ScreenRecete() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 pt-14 pb-3 border-b border-gray-100">
        <p className="text-sm font-bold text-gray-900">Reçetelerim</p>
      </div>
      <div className="px-4 pt-3 flex flex-col gap-2 flex-1 overflow-hidden">
        {[
          { label: "Kronik Reçete", date: "15 May", color: "#fce4ec", accent: "#c2185b" },
          { label: "Diabet İlaçları", date: "10 May", color: "#e8f5e9", accent: "#388e3c" },
          { label: "Tansiyon", date: "01 May", color: "#e8f0fb", accent: "#2c76be" },
        ].map((rx, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: rx.color }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: rx.accent }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">{rx.label}</p>
              <p className="text-xs text-gray-500">{rx.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenAile() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 pt-14 pb-3 border-b border-gray-100">
        <p className="text-sm font-bold text-gray-900">Aile Paylaşımı</p>
      </div>
      <div className="px-4 pt-4 flex flex-col gap-3 flex-1 overflow-hidden">
        {[
          { name: "Anne", initials: "AY", color: "#2c76be", status: "2 reçete paylaşıldı" },
          { name: "Eş", initials: "MY", color: "#388e3c", status: "Davet gönderildi" },
        ].map((person, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: person.color }}>
              {person.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900">{person.name}</p>
              <p className="text-xs text-gray-500">{person.status}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          </div>
        ))}
        <button className="mt-2 py-2.5 rounded-xl text-xs font-semibold text-white w-full" style={{ backgroundColor: "#388e3c" }}>
          + Kişi Ekle
        </button>
      </div>
    </div>
  );
}

const steps = [
  {
    number: 1,
    heading: "Ana Ekran",
    body: "Günlük ilaç planınıza tek bakışta ulaşın.",
    accent: "#2c76be",
    bg: "#f0f4ff",
    phoneRight: true,
    Screen: ScreenAnaEkran,
  },
  {
    number: 2,
    heading: "Hatırlatmalar",
    body: "Zamanlı alarmlar hiçbir dozu kaçırmanıza izin vermez.",
    accent: "#f57c00",
    bg: "#fff9f0",
    phoneRight: false,
    Screen: ScreenHatirlatma,
  },
  {
    number: 3,
    heading: "Reçete Arşivi",
    body: "Tüm reçeteleriniz şifreli olarak cebinizde.",
    accent: "#c2185b",
    bg: "#fff0f4",
    phoneRight: true,
    Screen: ScreenRecete,
  },
  {
    number: 4,
    heading: "Aile Paylaşımı",
    body: "Sevdiklerinizin sağlığını uzaktan takip edin.",
    accent: "#388e3c",
    bg: "#f0fff4",
    phoneRight: false,
    Screen: ScreenAile,
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

  const { Screen } = step;

  const phoneEl = (
    <div
      ref={phoneRef}
      className="flex-shrink-0 flex justify-center"
      style={{ opacity: 0 }}
    >
      <div className="phone-mockup">
        <div className="phone-screen overflow-hidden">
          <Screen />
        </div>
      </div>
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
