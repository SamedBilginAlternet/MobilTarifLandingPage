"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "İlaçlarımı hiç unutmuyorum artık, hayat kurtarıcı bir uygulama! Her gün düzenli kullanıyorum.",
    name: "Ayşe K.",
    role: "Hasta",
    initials: "AK",
    avatarColor: "#2c76be",
  },
  {
    quote:
      "Annemin ilaçlarını uzaktan takip edebiliyorum. Aile paylaşımı özelliği çok değerli.",
    name: "Mehmet T.",
    role: "Bakıcı",
    initials: "MT",
    avatarColor: "#1a5a9a",
  },
  {
    quote:
      "Reçete paylaşımı çok pratik ve güvenli. Eczaneye giderken her şey hazır.",
    name: "Fatma Y.",
    role: "Hasta",
    initials: "FY",
    avatarColor: "#2c76be",
  },
];

export default function Testimonials() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const all: { el: Element; delay: number }[] = [];
    if (headingRef.current) all.push({ el: headingRef.current, delay: 0 });
    cardRefs.current.forEach((el, i) => {
      if (el) all.push({ el, delay: 120 + i * 110 });
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
    <section style={{ backgroundColor: "#f0f2f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kullanıcılarımız Ne Diyor?
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Binlerce kullanıcının güvendiği uygulama hakkında gerçek yorumlar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="reveal bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label="5 yıldız">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg leading-none">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
