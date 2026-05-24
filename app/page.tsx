export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-yellow-400">HiGO</h1>

        <a
          href="https://forms.fleet.yandex.com/forms?ref_id=567991945a7049e1ac71452d8c983ffd"
          target="_blank"
          className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
        >
          Başvur
        </a>
      </header>

      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">

        {/* 🔥 ÜST BAŞLIK (AYRI SATIR) */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-400">
            HiGO — Yandex Pro Resmi İş Ortağı
          </h1>
        </div>

        {/* GÖRSEL */}
        <img
          src="/yndpro.png"
          alt="HiGO Partner Platform"
          className="w-full max-w-4xl rounded-2xl border border-white/10 shadow-2xl mb-10"
        />

        {/* BADGE */}
        <div className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-sm mb-6">
          %0 KOMİSYON • EN DÜŞÜK KOMİSYON GARANTİSİ
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold text-yellow-400 leading-tight">
          Kazancın Sende Kalsın
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          HiGO ile sürücüler ve taksi esnafı için daha adil, daha kazançlı bir sistem.
        </p>

        <a
          href="https://forms.fleet.yandex.com/forms?ref_id=567991945a7049e1ac71452d8c983ffd"
          target="_blank"
          className="mt-10 bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-110 transition shadow-lg"
        >
          Hemen Başvur
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-yellow-400 font-bold text-xl mb-2">
            Esnaf Dostu Sistem
          </h3>
          <p className="text-gray-400">
            Sürücüler ve taksi esnafı için adil gelir paylaşımı.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-yellow-400 font-bold text-xl mb-2">
            Şehir İçi Yoğun Talep
          </h3>
          <p className="text-gray-400">
            Sürekli yolcu akışı ile kazanç fırsatı.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-yellow-400 font-bold text-xl mb-2">
            Şeffaf Kazanç Sistemi
          </h3>
          <p className="text-gray-400">
            Gizli kesinti yok, net gelir.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="py-28 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold">
          HiGO ile kazanmaya başla
        </h2>

        <a
          href="https://forms.fleet.yandex.com/forms?ref_id=567991945a7049e1ac71452d8c983ffd"
          target="_blank"
          className="mt-8 inline-block bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold hover:scale-110 transition"
        >
          Başvuruyu Başlat
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} HiGO. Tüm hakları saklıdır.
      </footer>

    </main>
  );
}