import GooglePlayIcon from "./icons/GooglePlayIcon";

export default function AppPreview() {
  return (
    <section style={{ backgroundColor: "#2c76be" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Her Platformda Yanınızda
          </h2>
          <p className="text-lg text-blue-100 max-w-xl mx-auto">
            iOS ve Android için optimize edilmiş, sorunsuz bir deneyim.
          </p>
        </div>

        {/* Phone Mockups */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          {/* Left Phone: Alarm Screen */}
          <div className="phone-mockup-sm">
            <div className="phone-screen-sm">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 pt-10 pb-2">
                <span className="text-xs font-semibold text-gray-900">09:41</span>
                <div className="flex items-center gap-1">
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
                    <rect x="0" y="3" width="3" height="6" rx="1" fill="#1a1a1a" />
                    <rect x="4" y="2" width="3" height="7" rx="1" fill="#1a1a1a" />
                    <rect x="8" y="0" width="3" height="9" rx="1" fill="#1a1a1a" />
                  </svg>
                </div>
              </div>

              {/* App Content: Alarms */}
              <div className="px-3 pt-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-gray-900">Hatırlatmalar</h3>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: "#2c76be" }}
                  >
                    3 Aktif
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    { name: "Aspirin 100mg", time: "08:00", color: "bg-green-400", status: "✓" },
                    { name: "Metformin 850mg", time: "12:00", color: "bg-orange-400", status: "!" },
                    { name: "Losartan 50mg", time: "20:00", color: "bg-purple-400", status: "⏰" },
                  ].map((alarm, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${alarm.color}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-900 truncate">{alarm.name}</p>
                        <p className="text-xs text-gray-400">{alarm.time}</p>
                      </div>
                      <span className="text-xs">{alarm.status}</span>
                    </div>
                  ))}
                </div>

                {/* Mini calendar strip */}
                <div className="mt-3 p-2.5 bg-white rounded-xl border border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Bu Hafta</p>
                  <div className="flex justify-between">
                    {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((day, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <span className="text-xs text-gray-400">{day}</span>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                            i < 3
                              ? "text-white"
                              : i === 3
                              ? "text-white opacity-70"
                              : "bg-gray-100 text-gray-400"
                          }`}
                          style={i <= 3 ? { backgroundColor: "#2c76be" } : {}}
                        >
                          {i < 3 ? "✓" : i === 3 ? "•" : ""}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone: Prescription List */}
          <div className="phone-mockup-sm">
            <div className="phone-screen-sm">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 pt-10 pb-2">
                <span className="text-xs font-semibold text-gray-900">09:41</span>
                <div className="flex items-center gap-1">
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
                    <rect x="0" y="3" width="3" height="6" rx="1" fill="#1a1a1a" />
                    <rect x="4" y="2" width="3" height="7" rx="1" fill="#1a1a1a" />
                    <rect x="8" y="0" width="3" height="9" rx="1" fill="#1a1a1a" />
                  </svg>
                </div>
              </div>

              {/* App Content: Prescriptions */}
              <div className="px-3 pt-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-gray-900">Reçetelerim</h3>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: "#2c76be" }}
                  >
                    +
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    { date: "15 May 2026", doctor: "Dr. Yılmaz", count: 3, shared: true },
                    { date: "02 Mar 2026", doctor: "Dr. Kaya", count: 2, shared: false },
                    { date: "10 Oca 2026", doctor: "Dr. Arslan", count: 4, shared: true },
                  ].map((rx, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-gray-900">{rx.date}</span>
                        {rx.shared && (
                          <span
                            className="text-xs px-1.5 py-0.5 rounded-full text-white"
                            style={{ backgroundColor: "#2c76be", fontSize: "10px" }}
                          >
                            Paylaşıldı
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{rx.doctor}</p>
                      <p className="text-xs text-gray-400">{rx.count} ilaç · 🔒 Şifreli</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-white font-semibold text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#212529" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.79.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.84M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-white font-semibold text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#212529" }}
          >
            <GooglePlayIcon size={20} />
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
