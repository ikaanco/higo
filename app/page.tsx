import Image from "next/image";

const APPLY_URL = "#";

export default function Home() {
  const stats = [
    ["İstanbul", "Operasyon Bölgesi"],
    ["Taksim", "Saha Deneyimi"],
    ["Günlük", "Sürücü Koordinasyonu"],
    ["Büyüyen", "Filo Ağı"],
  ];

  const operations = [
    {
      title: "Filo Koordinasyonu",
      desc: "Sürücü ve araç yönetimi için organize operasyon yapısı.",
    },
    {
      title: "Sürücü Süreçleri",
      desc: "Düzenli onboarding ve sürücü destek sistemi.",
    },
    {
      title: "Operasyon Desteği",
      desc: "İstanbul odaklı günlük operasyon yönetimi.",
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-black tracking-tight">
            <span className="text-yellow-400">HI</span>GO
          </div>

          <nav className="hidden md:flex gap-8 text-zinc-300">
            <a href="#operations" className="hover:text-white transition">
              Operasyon
            </a>

            <a href="#about" className="hover:text-white transition">
              Hakkımızda
            </a>

            <a href="#contact" className="hover:text-white transition">
              İletişim
            </a>
          </nav>

          <a
            href={APPLY_URL}
            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            İletişime Geç
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center">
        <div className="absolute w-[900px] h-[900px] bg-yellow-500/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-[-450px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-yellow-400/10 text-yellow-400 mb-8">
              İstanbul Filo Operasyonları
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              İstanbul İçin
              <br />
              Modern
              <br />
              <span className="text-yellow-400">
                Operasyon Yapısı
              </span>
            </h1>

            <p className="mt-8 text-zinc-400 text-xl max-w-xl leading-9">
              Sürücü koordinasyonu, operasyon desteği ve büyüyebilir filo
              yönetimi için İstanbul merkezli yapı.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={APPLY_URL}
                className="bg-yellow-400 text-black px-10 py-5 rounded-3xl font-black hover:scale-105 transition"
              >
                Sürücü Başvurusu
              </a>

              <a
                href="#about"
                className="border border-white/10 px-10 py-5 rounded-3xl hover:bg-white/5 transition"
              >
                Detaylı İncele
              </a>
            </div>

            <div className="mt-10 flex gap-6 flex-wrap text-zinc-500">
              <div>✓ İstanbul Merkezli</div>
              <div>✓ Sürücü Desteği</div>
              <div>✓ Operasyon Sistemi</div>
            </div>
          </div>

          <div>
            <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/yndpro.png"
                alt="HIGO Operasyon"
                width={1500}
                height={1000}
                priority
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {stats.map(([a, b]) => (
            <div
              key={a}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-5xl font-black text-yellow-400">
                {a}
              </div>

              <div className="mt-4 text-zinc-400">
                {b}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPERATIONS */}
      <section
        id="operations"
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-yellow-400 font-black mb-4">
            OPERASYON YAPISI
          </div>

          <h2 className="text-5xl md:text-6xl font-black max-w-4xl leading-tight">
            İstanbul İçin Yapılandırılmış Operasyon Sistemi
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {operations.map((item) => (
              <div
                key={item.title}
                className="p-10 rounded-[32px] bg-white/5 border border-white/10"
              >
                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-6 text-zinc-400 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-yellow-400 font-black mb-4">
            HAKKIMIZDA
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            İstanbul Merkezli Operasyon Yapısı
          </h2>

          <p className="mt-10 text-zinc-400 text-xl leading-10">
            HIGO, sürücü koordinasyonu, filo yönetimi ve ulaşım operasyonları
            üzerine odaklanan İstanbul merkezli bir operasyondur.
          </p>

          <p className="mt-8 text-zinc-500 text-lg leading-9">
            Taksim gibi yoğun bölgelerde edinilen saha deneyimi ile birlikte,
            büyüyebilir ve düzenli bir operasyon yapısı oluşturmayı hedefler.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black leading-tight">
            Güçlü ve
            <br />
            <span className="text-yellow-400">
              Düzenli Operasyon
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-xl">
            İstanbul'da büyüyebilir sürücü koordinasyonu ve operasyon desteği.
          </p>

          <a
            href={APPLY_URL}
            className="inline-block mt-10 bg-yellow-400 text-black px-14 py-5 rounded-3xl font-black hover:scale-105 transition"
          >
            Operasyon Ekibiyle İletişim
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-yellow-400 font-black mb-4">
            İLETİŞİM
          </div>

          <h2 className="text-5xl font-black">
            Bizimle İletişime Geçin
          </h2>

          <div className="mt-12 space-y-5 text-zinc-400 text-lg">
            <p>İstanbul, Türkiye</p>

            <p>operations@higo.com.tr</p>

            <p>+90 XXX XXX XX XX</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <div className="text-4xl font-black">
            <span className="text-yellow-400">HI</span>GO
          </div>

          <p className="mt-5 text-zinc-500">
            İstanbul Operasyon Yapısı
          </p>

          <p className="mt-8 text-zinc-600">
            © {new Date().getFullYear()} HIGO
          </p>
        </div>
      </footer>
    </main>
  );
}
