"use client";

import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  title: string;
  description: string;
  icon: ReactNode;
  src?: string;
  alt?: string;
  coded?: ReactNode;
};

const slides: Slide[] = [
  {
    title: "Akıllı Hatırlatmalar",
    description: "Günlük, haftalık, periyodik alarm sistemleri ile hiçbir dozu kaçırmayın.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    src: "/hatirlatmalar.webp",
    alt: "Hatırlatmalar ekranı",
  },
  {
    title: "Uçtan Uca Şifreleme",
    description: "Reçeteleriniz ve sağlık verileriniz şifrelenerek saklanır. Sadece siz erişebilirsiniz.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    coded: (
      <div className="flex flex-col h-full bg-white items-center justify-center p-6 pt-16">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: "#e8f0fb" }}>
          <svg className="w-9 h-9" style={{ color: "#2c76be" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <p className="text-sm font-bold text-gray-900 mb-1">Verileriniz Güvende</p>
        <p className="text-[10px] text-gray-400 text-center mb-5 max-w-[160px]">Tüm bilgileriniz şifrelenerek saklanır</p>
        <div className="flex flex-col gap-2 w-full max-w-[200px]">
          {["Reçeteleriniz", "Kişisel Bilgileriniz", "İlaç Geçmişiniz"].map((item) => (
            <div key={item} className="flex items-center gap-2 p-2.5 rounded-xl bg-green-50 border border-green-100">
              <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
              <span className="text-[10px] font-semibold text-green-700">{item}</span>
              <span className="ml-auto text-[9px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-md">Şifreli</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Reçete Yönetimi",
    description: "Tüm reçetelerinizi tek yerde yönetin, dijital arşivinize her zaman erişin.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    src: "/receteler.webp",
    alt: "Reçetelerim ekranı",
  },
  {
    title: "Aile Paylaşımı",
    description: "Sevdiklerinizle güvenli reçete paylaşımı yapın, onların sağlığını takip edin.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    src: "/paylasim-detayi.webp",
    alt: "Aile paylaşımı ekranı",
  },
  {
    title: "Takvim Takibi",
    description: "Alınan ve kaçırılan dozları görsel takvimde kolayca izleyin.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    src: "/alarmlar.webp",
    alt: "Alarmlar ekranı",
  },
  {
    title: "Barkod Tarama",
    description: "Eczane barkodlarıyla ilaçlarınızı anında ekleyin, manuel giriş gerekmez.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8H4a1 1 0 00-1 1v10a1 1 0 001 1h3M4 4h3a1 1 0 011 1v3M16 4h3a1 1 0 011 1v3" /></svg>,
    coded: (
      <div className="flex flex-col h-full" style={{ backgroundColor: "#111" }}>
        <div className="pt-14 px-4 pb-3">
          <h2 className="text-sm font-bold text-white">Barkod Tara</h2>
        </div>
        <div className="flex-1 relative flex items-center justify-center mx-3 mb-3 rounded-2xl overflow-hidden" style={{ backgroundColor: "#222" }}>
          <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-white rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-white rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-white rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-white rounded-br-lg" />
          <div className="absolute w-4/5 h-px opacity-70" style={{ backgroundColor: "#2c76be" }} />
          <div className="flex items-center gap-px">
            {[2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 1, 2, 3, 1].map((w, i) => (
              <div key={i} className="rounded-sm opacity-50" style={{ width: `${w * 2}px`, height: "44px", backgroundColor: "white" }} />
            ))}
          </div>
        </div>
        <div className="text-center pb-5 px-4">
          <p className="text-white text-xs font-semibold mb-0.5">Barkodu Okutun</p>
          <p className="text-[10px]" style={{ color: "#888" }}>Kutu üzerindeki barkodu kameraya tutun</p>
        </div>
      </div>
    ),
  },
];

export default function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % slides.length);
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => {
    setDirection(-1);
    setActive((i) => (i - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const next = () => {
    setDirection(1);
    setActive((i) => (i + 1) % slides.length);
    resetTimer();
  };

  const select = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
    resetTimer();
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Uygulamayı{" "}
            <span style={{ color: "#2c76be" }}>Keşfedin</span>
          </h2>
          <p className="text-lg text-gray-500">Her özellik, sağlığınızı kolaylaştırmak için tasarlandı.</p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-white hover:shadow-md transition-all text-gray-500 hover:text-[#2c76be] flex-shrink-0" aria-label="Önceki">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="phone-stage">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {slides[active].src ? (
                  <img
                    src={slides[active].src}
                    alt={slides[active].alt}
                    className="phone-shot-fill"
                  />
                ) : (
                  <div className="coded-phone">
                    <div className="coded-phone-screen">{slides[active].coded}</div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-white hover:shadow-md transition-all text-gray-500 hover:text-[#2c76be] flex-shrink-0" aria-label="Sonraki">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="text-center mb-6 min-h-[52px]">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              <p className="text-base font-bold text-gray-900 mb-1">{slides[active].title}</p>
              <p className="text-sm text-gray-500 max-w-sm mx-auto">{slides[active].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              aria-label={slide.title}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${active === i ? "text-white shadow-sm" : "bg-gray-100 text-gray-400 hover:text-[#2c76be] hover:bg-gray-200"}`}
              style={active === i ? { backgroundColor: "#2c76be" } : {}}
            >
              {slide.icon}
              <span className="text-xs font-semibold hidden sm:inline">{slide.title}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-5">
          {slides.map((_, i) => (
            <div key={i} className="h-1 rounded-full transition-all duration-300" style={{ width: active === i ? "24px" : "6px", backgroundColor: active === i ? "#2c76be" : "#d1d5db" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
