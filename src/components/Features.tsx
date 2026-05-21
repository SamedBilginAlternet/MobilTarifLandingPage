const features = [
  {
    icon: "🔔",
    title: "Akıllı Hatırlatmalar",
    description:
      "Günlük, haftalık, periyodik alarm sistemleri ile hiçbir dozu kaçırmayın.",
  },
  {
    icon: "🔒",
    title: "Uçtan Uca Şifreleme",
    description:
      "RSA-2048 + AES-256-CBC ile reçeteleriniz yalnızca size ait. Tam güvenlik.",
  },
  {
    icon: "📋",
    title: "Reçete Yönetimi",
    description:
      "Tüm reçetelerinizi tek yerde yönetin, dijital arşivinize her zaman erişin.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Aile Paylaşımı",
    description:
      "Sevdiklerinizle güvenli reçete paylaşımı yapın, onların sağlığını takip edin.",
  },
  {
    icon: "📅",
    title: "Takvim Takibi",
    description:
      "Alınan ve kaçırılan dozları görsel takvimde kolayca izleyin.",
  },
  {
    icon: "💊",
    title: "Barkod Tarama",
    description:
      "Eczane barkodlarıyla ilaçlarınızı anında ekleyin, manuel giriş gerekmez.",
  },
];

export default function Features() {
  return (
    <section id="ozellikler" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neden MobilTarif?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sağlığınızı yönetmek için ihtiyacınız olan her şey tek bir
            uygulamada.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: "#e8f0fb" }}
              >
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
