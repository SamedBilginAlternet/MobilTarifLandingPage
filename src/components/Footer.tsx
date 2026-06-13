export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/mobiltarif-svg-2.svg"
                alt="MobilTarif logo"
                width={22}
                height={36}
              />
              <span className="text-lg font-bold text-white">MobilTarif</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Akıllı ilaç hatırlatma ve reçete yönetimi uygulaması.
            </p>
          </div>

          {/* Uygulama */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Uygulama
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "#ozellikler", label: "Özellikler" },
                { href: "#nasil-calisir", label: "Nasıl Çalışır" },
                { href: "#indir", label: "İndir" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Yasal
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "#", label: "Gizlilik Politikası" },
                { href: "#", label: "Kullanım Koşulları" },
                { href: "#", label: "KVKK" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              İletişim
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:destek@mobiltarif.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  destek@mobiltarif.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                style={{ backgroundColor: "#2a2a2a" }}
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                style={{ backgroundColor: "#2a2a2a" }}
                aria-label="Twitter/X"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2025 MobilTarif. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
