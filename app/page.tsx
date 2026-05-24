import Image from "next/image";

const APPLY_URL = "#";

export default function Home() {
  const stats = [
    ["2000+", "Aktif Sürücü"],
    ["150.000+", "Tamamlanan Yolculuk"],
    ["09:00–00:00", "Gerçek Destek"],
    ["Her Gün", "Ödeme"],
  ];

  const reviews = [
    "Destek ekibi ulaşılabilir ve süreç hızlı ilerliyor.",
    "Daha düzenli çalışma ve daha net kazanç takibi.",
    "Başvuru süreci kolay ve yönetimi rahat.",
  ];

  const faq = [
    [
      "Yandex Pro nedir?",
      "Sürücülerin platform üzerinden yolculuk almasını sağlayan sistemdir.",
    ],
    [
      "Nasıl kayıt olabilirim?",
      "Başvuru formu aktif olduğunda bilgilerinizi göndererek başlayabilirsiniz.",
    ],
    [
      "Aktivasyon ne kadar sürer?",
      "Belgeler ve süreç tamamlandıktan sonra aktivasyon yapılır.",
    ],
    [
      "İstanbul dışında hizmet var mı?",
      "Şimdilik İstanbul odaklı ilerlenmektedir.",
    ],
  ];

  return (
    <main className="bg-black text-white">

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div className="text-3xl font-black">

            <span className="text-yellow-400">
              Hi
            </span>

            GO

          </div>

          <nav className="hidden md:flex gap-8 text-zinc-300">

            <a href="#istanbul">İstanbul</a>

            <a href="#hakkimizda">Hakkımızda</a>

            <a href="#yorumlar">Yorumlar</a>

            <a href="#sss">SSS</a>

          </nav>

          <a
            href={APPLY_URL}
            className="
            bg-yellow-400
            text-black
            px-6
            py-3
            rounded-2xl
            font-bold"
          >
            Başvur
          </a>

        </div>

      </header>

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="absolute w-[900px] h-[900px] bg-yellow-500/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-[-400px]" />

        <div className="relative max-w-7xl mx-auto px-6 min-h-[92vh] grid md:grid-cols-2 items-center gap-14">

          <div>

            <div
              className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-yellow-400/10
              text-yellow-400
              mb-8"
            >
              Yandex GO Resmi İş Ortağı
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">

              İstanbul'da

              <br />

              Daha Fazla

              <br />

              <span className="text-yellow-400">

                Kazan

              </span>

            </h1>

            <p className="mt-8 text-zinc-400 text-xl max-w-xl">

              HiGO ile daha güçlü gelir,
              daha düzenli sistem,
              daha iyi sürücü deneyimi.

            </p>

            <div className="mt-10 flex gap-4 flex-wrap">

              <a
                href={APPLY_URL}
                className="
                bg-yellow-400
                text-black
                px-10
                py-5
                rounded-3xl
                font-black"
              >
                Başvuru Yakında
              </a>

              <a
                href="#hakkimizda"
                className="
                border
                border-white/10
                px-10
                py-5
                rounded-3xl"
              >
                İncele
              </a>

            </div>

            <div className="mt-8 flex gap-6 flex-wrap text-zinc-500">

              <div>✓ Resmi İş Ortağı</div>

              <div>✓ Şeffaf Sistem</div>

              <div>✓ İstanbul</div>

            </div>

          </div>

          <div>

            <div
              className="
              rounded-[40px]
              overflow-hidden
              border
              border-white/10"
            >

              <Image
                src="/yndpro.png"
                alt="HiGO"
                width={1500}
                height={1000}
                priority
                className="w-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ISTANBUL */}

      <section
        id="istanbul"
        className="py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
            rounded-[40px]
            bg-gradient-to-r
            from-yellow-500/10
            to-black
            border
            border-yellow-400/20
            p-10"
          >

            <div className="text-yellow-400 font-black">

              HIGO İSTANBUL

            </div>

            <h2 className="text-5xl font-black mt-6">

              İstanbul'da
              Sürücüler İçin
              Yeni Nesil Sistem

            </h2>

            <a
              href={APPLY_URL}
              className="
              inline-block
              mt-10
              bg-yellow-400
              text-black
              px-10
              py-4
              rounded-3xl"
            >
              Başvur
            </a>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {stats.map(([a, b]) => (

            <div
              key={a}
              className="
              p-10
              rounded-3xl
              bg-white/5
              border
              border-white/10
              text-center"
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

      {/* HAKKIMIZDA */}

      <section
        id="hakkimizda"
        className="py-32"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-black mb-10">

            Hakkımızda

          </h2>

          <p className="text-zinc-400 text-xl leading-10">

            HiGO, İstanbul'da sürücüler için
            daha verimli çalışma deneyimi sunmayı
            hedefleyen resmi iş ortağı modelidir.

            Daha şeffaf yapı,
            daha iyi gelir yönetimi
            ve daha güçlü destek anlayışıyla
            ilerler.

          </p>

        </div>

      </section>

      {/* YORUMLAR */}

      <section
        id="yorumlar"
        className="py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-16">

            Sürücü Yorumları

          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {reviews.map((r) => (

              <div
                key={r}
                className="
                p-8
                rounded-3xl
                bg-white/5
                border
                border-white/10"
              >

                <div className="text-yellow-400">

                  ★★★★★

                </div>

                <p className="mt-6 text-zinc-400">

                  {r}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SSS */}

      <section
        id="sss"
        className="py-24"
      >

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-12">

            Sık Sorulan Sorular

          </h2>

          <div className="space-y-4">

            {faq.map(([q, a]) => (

              <details
                key={q}
                className="
                p-6
                rounded-3xl
                border
                border-white/10
                bg-white/5"
              >

                <summary className="cursor-pointer font-bold">

                  {q}

                </summary>

                <p className="mt-5 text-zinc-400">

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

          İstanbul'da

          <br />

          <span className="text-yellow-400">

            Başlamaya Hazır Mısın?

          </span>

        </h2>

        <a
          href={APPLY_URL}
          className="
          inline-block
          mt-10
          bg-yellow-400
          text-black
          px-14
          py-5
          rounded-3xl
          font-black"
        >
          Başvuru Yakında

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

          <p className="mt-5 text-zinc-500">

            İstanbul • Yakında

          </p>

          <p className="mt-8 text-zinc-600">

            © {new Date().getFullYear()} HiGO

          </p>

        </div>

      </footer>

<div
style={{
display:"none"
}}
>

7b4rtc9451ente15

</div>
    </main>
  );
}