"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";

// ─── Phone screens ────────────────────────────────────────────────────────────

function ReminderScreen() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="pt-14 px-4 pb-3 border-b border-gray-100 bg-white">
        <p className="text-[10px] text-gray-400">Bugün, 13 Haziran</p>
        <h2 className="text-sm font-bold text-gray-900">Hatırlatmalar</h2>
      </div>
      <div className="flex flex-col gap-2 p-3">
        {[
          { name: "Aspirin 100mg", time: "08:00", dot: "bg-green-500", badge: "Alındı ✓", cls: "text-green-700 bg-green-50" },
          { name: "Metformin 850mg", time: "12:00", dot: "bg-orange-400", badge: "10 dk. kaldı", cls: "text-orange-600 bg-orange-50" },
          { name: "Losartan 50mg", time: "20:00", dot: "bg-gray-300", badge: "Al", cls: "text-white bg-[#2c76be]" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2.5 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.dot}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">{item.name}</p>
              <p className="text-[10px] text-gray-400">{item.time}</p>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-lg whitespace-nowrap ${item.cls}`}>{item.badge}</span>
          </div>
        ))}
        <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] text-gray-500">Günlük İlerleme</p>
            <p className="text-[10px] font-bold" style={{ color: "#2c76be" }}>1/3</p>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ backgroundColor: "#2c76be", width: "33%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityScreen() {
  return (
    <div className="flex flex-col h-full bg-white items-center justify-center px-6 pt-16 pb-6">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: "#e8f0fb" }}>
        <svg className="w-9 h-9" style={{ color: "#2c76be" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <p className="text-sm font-bold text-gray-900 mb-1">Verileriniz Güvende</p>
      <p className="text-[10px] text-gray-400 text-center mb-5 max-w-[160px]">Tüm bilgileriniz şifrelenerek korunur</p>
      <div className="flex flex-col gap-2 w-full">
        {["Reçeteleriniz", "Kişisel Bilgileriniz", "İlaç Geçmişiniz"].map((item) => (
          <div key={item} className="flex items-center gap-2 p-2.5 rounded-xl bg-green-50 border border-green-100">
            <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[10px] font-semibold text-green-700">{item}</span>
            <span className="ml-auto text-[9px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-md">Şifreli</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrescriptionScreen() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="pt-14 px-4 pb-3 border-b border-gray-100 bg-white flex items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-400">Dijital Arşiv</p>
          <h2 className="text-sm font-bold text-gray-900">Reçetelerim</h2>
        </div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-base font-bold leading-none" style={{ backgroundColor: "#2c76be" }}>+</div>
      </div>
      <div className="flex flex-col gap-2 p-3">
        {[
          { doc: "Dr. Ayşe Kaya", date: "15 Haz 2025", count: 3 },
          { doc: "Dr. Mehmet Demir", date: "02 Mar 2025", count: 2 },
          { doc: "Dr. Fatma Şahin", date: "10 Oca 2025", count: 4 },
        ].map((rx) => (
          <div key={rx.doc} className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#e8f0fb" }}>
              <svg className="w-4 h-4" style={{ color: "#2c76be" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">{rx.doc}</p>
              <p className="text-[10px] text-gray-400">{rx.date}</p>
            </div>
            <span className="text-[10px] text-gray-500 whitespace-nowrap">{rx.count} ilaç</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FamilyScreen() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="pt-14 px-4 pb-3 border-b border-gray-100 bg-white">
        <p className="text-[10px] text-gray-400">Paylaşılan Profiller</p>
        <h2 className="text-sm font-bold text-gray-900">Ailem</h2>
      </div>
      <div className="flex flex-col gap-2 p-3">
        {[
          { name: "Ayşe A.", role: "Anne", initials: "AA", ok: true, note: "3 ilaç güncel" },
          { name: "Mehmet A.", role: "Baba", initials: "MA", ok: false, note: "1 ilaç atlandı" },
          { name: "Ali A.", role: "Kardeş", initials: "AL", ok: true, note: "2 ilaç güncel" },
        ].map((member) => (
          <div key={member.name} className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: "#2c76be" }}>
              {member.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900">{member.name}</p>
              <p className="text-[10px] text-gray-400">{member.role}</p>
            </div>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg ${member.ok ? "bg-green-50" : "bg-orange-50"}`}>
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${member.ok ? "bg-green-500" : "bg-orange-400"}`} />
              <span className={`text-[9px] font-semibold whitespace-nowrap ${member.ok ? "text-green-700" : "text-orange-700"}`}>{member.note}</span>
            </div>
          </div>
        ))}
        <button className="flex items-center justify-center gap-2 p-2.5 rounded-2xl border-2 border-dashed border-gray-200 text-[10px] text-gray-400 font-medium mt-1">
          + Üye Ekle
        </button>
      </div>
    </div>
  );
}

function CalendarScreen() {
  const dayLabels = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"];
  // June 2025 starts on Sunday → Mon-Sun grid: first 6 cols of row 0 are empty
  const weeks: (number | null)[][] = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, null, null, null, null, null, null],
  ];
  const missed = [4, 8, 11];
  const today = 13;

  const status = (day: number | null) => {
    if (day === null) return "empty";
    if (day === today) return "today";
    if (day > today) return "future";
    if (missed.includes(day)) return "miss";
    return "done";
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="pt-14 px-4 pb-2 border-b border-gray-100">
        <p className="text-[10px] text-gray-400">İlaç Takvimi</p>
        <h2 className="text-sm font-bold text-gray-900">Haziran 2025</h2>
      </div>
      <div className="p-3 flex-1">
        <div className="grid grid-cols-7 mb-1">
          {dayLabels.map((d) => (
            <p key={d} className="text-center text-[9px] font-semibold text-gray-400">{d}</p>
          ))}
        </div>
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 mb-0.5">
            {week.map((day, di) => {
              const s = status(day);
              return (
                <div key={di} className="flex flex-col items-center gap-0.5 py-0.5 min-h-[22px]">
                  {s !== "empty" && (
                    <>
                      <span className={`text-[9px] leading-none ${s === "today" ? "font-bold text-[#2c76be]" : "text-gray-500"}`}>{day}</span>
                      <div className={`w-2.5 h-2.5 rounded-full ${s === "done" ? "bg-green-400" : s === "miss" ? "bg-red-400" : s === "today" ? "bg-[#2c76be]" : "bg-gray-200"}`} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
        <div className="mt-2 p-2.5 bg-gray-50 rounded-xl">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] text-gray-500">Bu ay ilerleme</p>
            <p className="text-[10px] font-bold text-gray-700">10/13</p>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-green-400" style={{ width: "77%" }} />
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          {[["bg-green-400", "Alındı"], ["bg-red-400", "Atlandı"], ["bg-[#2c76be]", "Bugün"]].map(([cls, label]) => (
            <div key={label} className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${cls}`} />
              <span className="text-[9px] text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BarcodeScreen() {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#111" }}>
      <div className="pt-14 px-4 pb-3">
        <h2 className="text-sm font-bold text-white">Barkod Tara</h2>
      </div>
      <div className="flex-1 relative flex items-center justify-center mx-3 mb-3 rounded-2xl overflow-hidden" style={{ backgroundColor: "#222" }}>
        <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-white rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-white rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-white rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-white rounded-br-lg" />
        <div className="absolute w-4/5 h-px opacity-80" style={{ backgroundColor: "#2c76be" }} />
        <div className="flex items-center gap-px">
          {[2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 1, 2, 3, 1].map((w, i) => (
            <div key={i} className="rounded-sm opacity-50 bg-white" style={{ width: `${w * 2}px`, height: "44px" }} />
          ))}
        </div>
      </div>
      <div className="text-center pb-6 px-4">
        <p className="text-white text-xs font-semibold mb-0.5">Barkodu Okutun</p>
        <p className="text-[10px]" style={{ color: "#888" }}>Kutu üzerindeki barkodu kameraya tutun</p>
      </div>
    </div>
  );
}

// ─── Feature data ─────────────────────────────────────────────────────────────

const features = [
  {
    title: "Akıllı Hatırlatmalar",
    description: "Günlük, haftalık, periyodik alarm sistemleri ile hiçbir dozu kaçırmayın.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    Screen: ReminderScreen,
  },
  {
    title: "Uçtan Uca Şifreleme",
    description: "Reçeteleriniz ve sağlık verileriniz şifrelenerek saklanır. Sadece siz erişebilirsiniz.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Screen: SecurityScreen,
  },
  {
    title: "Reçete Yönetimi",
    description: "Tüm reçetelerinizi tek yerde yönetin, dijital arşivinize her zaman erişin.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    Screen: PrescriptionScreen,
  },
  {
    title: "Aile Paylaşımı",
    description: "Sevdiklerinizle güvenli reçete paylaşımı yapın, onların sağlığını takip edin.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    Screen: FamilyScreen,
  },
  {
    title: "Takvim Takibi",
    description: "Alınan ve kaçırılan dozları görsel takvimde kolayca izleyin.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    Screen: CalendarScreen,
  },
  {
    title: "Barkod Tarama",
    description: "Eczane barkodlarıyla ilaçlarınızı anında ekleyin, manuel giriş gerekmez.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8H4a1 1 0 00-1 1v10a1 1 0 001 1h3M4 4h3a1 1 0 011 1v3M16 4h3a1 1 0 011 1v3" />
      </svg>
    ),
    Screen: BarcodeScreen,
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function Features() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  // Auto-advance; clicking resets the interval via tick
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % features.length), 3500);
    return () => clearInterval(t);
  }, [tick]);

  const handleSelect = (i: number) => {
    setActive(i);
    setTick((t) => t + 1);
  };

  const ActiveScreen = features[active].Screen;

  return (
    <section id="ozellikler" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neden{" "}
            <TypewriterEffect
              words={[{ word: "MobilTarif?" }, { word: "Bizi Seçmelisiniz?" }, { word: "Fark Yaratıyoruz?" }]}
              typingSpeed={90}
              deletingSpeed={55}
              pauseDuration={2200}
              cursorColor="#2c76be"
              cursorWidth={2}
              cursorHeight={75}
              textColor="#2c76be"
            />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sağlığınızı yönetmek için ihtiyacınız olan her şey tek bir uygulamada.
          </p>
        </div>

        {/* Split layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Feature list — left on desktop, below phone on mobile */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="flex flex-col gap-1">
              {features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`flex items-start gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 border-l-4 ${
                    active === i
                      ? "bg-white shadow-sm border-[#2c76be]"
                      : "border-transparent hover:bg-white/60"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={active === i ? { backgroundColor: "#2c76be", color: "white" } : { backgroundColor: "white", color: "#6b7280" }}
                  >
                    {f.icon}
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <p className={`text-sm font-bold transition-colors ${active === i ? "text-gray-900" : "text-gray-500"}`}>
                      {f.title}
                    </p>
                    <div className={`overflow-hidden transition-all duration-300 ${active === i ? "max-h-16 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Phone mockup — right on desktop, top on mobile */}
          <div className="flex-shrink-0 order-1 lg:order-2 flex flex-col items-center gap-4">
            <div className="phone-mockup">
              <div className="phone-screen overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <ActiveScreen />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  aria-label={features[i].title}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width: active === i ? "20px" : "8px",
                    height: "8px",
                    backgroundColor: active === i ? "#2c76be" : "#cbd5e1",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
