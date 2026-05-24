import Image from "next/image";

const APPLY_URL =
  "https://forms.fleet.yandex.com/forms?ref_id=567991945a7049e1ac71452d8c983ffd";

export default function Home() {
  const faq = [
    [
      "Başvuru ne kadar sürer?",
      "Başvurunuz alındıktan sonra ekip sizinle iletişime geçer.",
    ],
    [
      "Ödemeler nasıl yapılır?",
      "Kazançlar sistem üzerinden şeffaf şekilde takip edilir.",
    ],
    [
      "Hangi şehirlerde aktif?",
      "Başvuru sonrası uygun bölgeler paylaşılır.",
    ],
    [
      "Yandex Pro sistemi nasıl çalışır?",
      "Aktivasyon tamamlandıktan sonra sisteme dahil olursunuz.",
    ],
  ];

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">

          <h1 className="text-3xl font-black">
            <span className="text-yellow-400">
              Hi
            </span>
            GO
          </h1>

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-yellow-400
            text-black
            px-6
            py-3
            rounded-2xl
            font-bold
            hover:scale-105
            transition"
          >
            Başvur
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="relative">

        <div className="absolute left-1/2 -translate-x-1/2 top-[-300px] w-[900px] h-[900px] bg-yellow-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 min-h-[92vh] grid md:grid-cols-2 gap-14 items-center">

          <div>

            <div
              className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-yellow-400/10
              border
              border-yellow-400/20
              text-yellow-400
              mb-8"
            >
              Yandex Pro Resmi İş Ortağı
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">

              Daha Fazla

              <br />

              <span className="text-yellow-400">
                Kazanç
              </span>

            </h1>

            <p className="mt-8 text-zinc-400 text-xl max-w-xl">

              Sürücüler ve taksi esnafı için
              daha adil, daha düşük maliyetli
              ve daha güçlü gelir modeli.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                bg-yellow-400
                text-black
                px-10
                py-5
                rounded-3xl
                font-bold
                hover:scale-105
                transition"
              >
                Hemen Başvur
              </a>

              <a
                href="#nasil"
                className="
                px-10
                py-5
                rounded-3xl
                border
                border-white/10
                hover:bg-white/5"
              >
                Nasıl Çalışır
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500">

              <div>✓ Hızlı Aktivasyon</div>

              <div>✓ Düşük Komisyon</div>

              <div>✓ Resmi İş Ortağı</div>

            </div>

          </div>

          <div>

            <div
              className="
              rounded-[40px]
              overflow-hidden
              border
              border-white/10
              shadow-2xl"
            >

              <Image
                src="/yndpro.png"
                alt="HiGO"
                width={1600}
                height={1200}
                priority
                className="w-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            ["%0", "Komisyon"],
            ["Hızlı", "Aktivasyon"],
            ["Şeffaf", "Kazanç"],
          ].map(([title, desc]) => (

            <div
              key={title}
              className="
              rounded-3xl
              p-10
              text-center
              border
              border-white/10
              bg-white/5"
            >

              <div className="text-5xl font-black text-yellow-400">

                {title}

              </div>

              <div className="mt-3 text-zinc-400">

                {desc}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* NASIL */}
      <section
        id="nasil"
        className="py-28"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-20">

            Nasıl Çalışır

          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Başvur",
              "Bilgileri Gönder",
              "Aktivasyon",
              "Kazanmaya Başla",
            ].map((item, i) => (

              <div
                key={item}
                className="
                rounded-3xl
                p-8
                bg-white/5
                border
                border-white/10
                hover:-translate-y-2
                transition"
              >

                <div className="text-4xl text-yellow-400 font-black">

                  0{i + 1}

                </div>

                <div className="mt-6 text-xl font-bold">

                  {item}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-20">

            Neden HiGO

          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Esnaf Dostu Sistem",
              "Yoğun Yolcu Talebi",
              "Şeffaf Gelir Modeli",
            ].map((x) => (

              <div
                key={x}
                className="
                rounded-3xl
                p-8
                border
                border-white/10
                bg-gradient-to-b
                from-white/10
                to-white/5
                hover:-translate-y-2
                transition"
              >

                <h3 className="text-2xl font-bold text-yellow-400">

                  {x}

                </h3>

                <p className="mt-4 text-zinc-400">

                  Daha sürdürülebilir çalışma
                  modeli ve güçlü gelir yapısı.

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-12">

            Sık Sorulan Sorular

          </h2>

          <div className="space-y-4">

            {faq.map(([q, a]) => (

              <details
                key={q}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6"
              >

                <summary className="cursor-pointer font-bold">

                  {q}

                </summary>

                <p className="mt-4 text-zinc-400">

                  {a}

                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 text-center">

        <h2 className="text-6xl font-black">

          Bugün Başvur

          <br />

          <span className="text-yellow-400">

            Kazanmaya Başla

          </span>

        </h2>

        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
          mt-10
          inline-block
          bg-yellow-400
          text-black
          px-14
          py-5
          rounded-3xl
          font-black
          hover:scale-105
          transition"
        >
          Başvuruyu Başlat
        </a>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <div className="text-4xl font-black">

            <span className="text-yellow-400">

              Hi

            </span>

            GO

          </div>

          <p className="mt-4 text-zinc-500">

            Sürücüler için daha adil sistem.

          </p>

          <p className="mt-6 text-zinc-600">

            © {new Date().getFullYear()} HiGO

          </p>

        </div>

      </footer>

    </main>
  );
}