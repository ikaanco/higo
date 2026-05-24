import Image from "next/image";

const APPLY_URL =
  "https://forms.fleet.yandex.com/forms?ref_id=567991945a7049e1ac71452d8c983ffd";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-3xl font-black tracking-tight">
            <span className="text-yellow-400">Hi</span>GO
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
      <section className="relative overflow-hidden">

        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 min-h-[90vh] grid md:grid-cols-2 items-center gap-14">

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
              font-semibold
              mb-8"
            >
              Yandex Pro Resmi İş Ortağı
            </div>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-black
              leading-[0.95]"
            >
              Daha Fazla
              <br />

              <span className="text-yellow-400">
                Kazanç
              </span>

              <br />

              Daha Şeffaf Sistem
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl">

              HiGO ile sürücüler ve taksi esnafı için
              düşük komisyon, hızlı aktivasyon ve
              daha adil gelir modeli.

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
                py-4
                rounded-2xl
                font-bold
                hover:scale-105
                transition"
              >
                Hemen Başvur
              </a>

              <a
                href="#nasil"
                className="
                border
                border-white/10
                px-10
                py-4
                rounded-2xl
                hover:bg-white/5"
              >
                Nasıl Çalışır
              </a>

            </div>

          </div>

          <div>

            <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">

              <Image
                src="/yndpro.png"
                alt="HiGO"
                width={1400}
                height={900}
                priority
                className="w-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-20 border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            ["%0", "Komisyon"],
            ["24/7", "Destek"],
            ["Şeffaf", "Kazanç Sistemi"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="
              text-center
              p-8
              rounded-3xl
              bg-white/5
              border
              border-white/10"
            >
              <div className="text-5xl font-black text-yellow-400">
                {title}
              </div>

              <div className="text-zinc-400 mt-3">
                {text}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* NASIL ÇALIŞIR */}
      <section
        id="nasil"
        className="py-28"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl font-black mb-16">
            Nasıl Çalışır?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Başvur",
              "Bilgileri Gönder",
              "Aktivasyonu Tamamla",
              "Kazanmaya Başla",
            ].map((item, i) => (
              <div
                key={item}
                className="
                p-8
                rounded-3xl
                bg-white/5
                border
                border-white/10"
              >

                <div className="text-yellow-400 text-4xl font-black mb-5">
                  0{i + 1}
                </div>

                <div className="text-xl font-semibold">
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

          <h2 className="text-center text-4xl font-black mb-16">
            Neden HiGO?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Esnaf Dostu Sistem",
              "Yoğun Yolcu Talebi",
              "Şeffaf Gelir Modeli",
            ].map((title) => (
              <div
                key={title}
                className="
                rounded-3xl
                p-8
                bg-gradient-to-b
                from-white/8
                to-white/4
                border
                border-white/10"
              >

                <h3 className="text-2xl font-bold text-yellow-400 mb-5">
                  {title}
                </h3>

                <p className="text-zinc-400">
                  Daha güçlü gelir yapısı ve
                  sürdürülebilir çalışma modeli.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SSS */}
      <section className="py-24 border-t border-white/10">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-center text-4xl font-black mb-12">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-4">

            {[
              "Başvuru ne kadar sürer?",
              "Ödemeler nasıl yapılır?",
              "Hangi şehirlerde aktif?",
              "Yandex Pro sistemi nasıl çalışır?",
            ].map((q) => (
              <div
                key={q}
                className="
                p-6
                rounded-2xl
                border
                border-white/10
                bg-white/5"
              >
                {q}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 text-center">

        <h2 className="text-5xl font-black">

          HiGO ile
          <span className="text-yellow-400">
            {" "}hemen başla
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
          px-12
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

        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-zinc-500">

          © {new Date().getFullYear()} HiGO

        </div>

      </footer>

    </main>
  );
}