"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#ozellikler", label: "Özellikler" },
    { href: "#nasil-calisir", label: "Nasıl Çalışır" },
    { href: "#indir", label: "İndir" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="4"
                y="10"
                width="24"
                height="12"
                rx="6"
                fill="#2c76be"
              />
              <rect x="14" y="4" width="4" height="24" rx="2" fill="#ffffff" />
              <rect x="4" y="14" width="24" height="4" rx="2" fill="#ffffff" />
            </svg>
            <span
              className="text-xl font-bold"
              style={{ color: "#2c76be" }}
            >
              MobilTarif
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Ana navigasyon">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#2c76be] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#indir"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "#2c76be" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1a5a9a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#2c76be")
              }
            >
              Ücretsiz İndir
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menüyü aç/kapat"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobil navigasyon">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#2c76be] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="#indir"
                  className="flex items-center justify-center w-full py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: "#2c76be" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Ücretsiz İndir
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
