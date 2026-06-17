"use client";
import { useEffect, useRef, useState } from "react";

const screens = [
  {
    num: "01",
    img: "/ilaclar.webp",
    title: "İlaçlarım",
    desc: "Tüm ilaçlarınız tek listede, dozları ve saatleriyle.",
  },
  {
    num: "02",
    img: "/hatirlatmalar.webp",
    title: "Hatırlatmalar",
    desc: "Yaklaşan dozlarınız için tam zamanında bildirim.",
  },
  {
    num: "03",
    img: "/alarmlar.webp",
    title: "Alarmlar",
    desc: "Her ilaç için ayrı, özelleştirilebilir alarmlar.",
  },
  {
    num: "04",
    img: "/receteler.webp",
    title: "Reçetelerim",
    desc: "Şifrelenmiş dijital reçete arşivi, her an erişilebilir.",
  },
  {
    num: "05",
    img: "/paylasim-detayi.webp",
    title: "Aile Paylaşımı",
    desc: "Sevdiklerinizin tedavisini güvenle takip edin.",
  },
];

export default function ScreenGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="ekranlar" className="gallery-section py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "#2c76be" }}
          >
            Ekran Turu
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Her ekran, sağlığınız için{" "}
            <span style={{ color: "#2c76be" }}>tasarlandı</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Sade, anlaşılır ve güvenli. Uygulamadaki gerçek ekranlara yakından bakın.
          </p>
        </div>

        {/* Swipe hint — mobile/tablet only */}
        <p className="lg:hidden text-center text-xs font-medium text-gray-400 mt-6 tracking-wide">
          ← Kaydırarak tüm ekranları görün →
        </p>

        {/* Device rail */}
        <div className="gallery-rail">
          {screens.map((s, i) => (
            <div
              key={s.num}
              className={`device ${i % 2 === 1 ? "device-raised" : ""} reveal ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="device-frame">
                <div className="device-screen">
                  <img src={s.img} alt={`${s.title} ekranı`} loading="lazy" />
                </div>
              </div>
              <div className="device-shadow" />

              {/* Caption */}
              <div className="mt-5 text-center" style={{ width: "190px" }}>
                <span
                  className="block text-sm font-bold tracking-widest mb-1"
                  style={{ color: "rgba(44, 118, 190, 0.55)" }}
                >
                  {s.num}
                </span>
                <p className="text-base font-bold text-gray-900">{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
