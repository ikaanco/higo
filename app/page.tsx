import Image from "next/image";

const APPLY_URL = "#";

export default function Home() {
  const stats = [
    ["Istanbul", "Operational Focus"],
    ["Taksim", "Field Experience"],
    ["Daily", "Driver Coordination"],
    ["Growing", "Fleet Network"],
  ];

  const operations = [
    {
      title: "Fleet Coordination",
      desc: "Structured vehicle and driver coordination for scalable operations.",
    },
    {
      title: "Driver Onboarding",
      desc: "Organized onboarding and support process for drivers.",
    },
    {
      title: "Operational Support",
      desc: "Daily operational management focused on Istanbul mobility.",
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
              Operations
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <a
            href={APPLY_URL}
            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Contact Operations
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center">
        <div className="absolute w-[900px] h-[900px] bg-yellow-500/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-[-450px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-yellow-400/10 text-yellow-400 mb-8">
              Fleet Operations in Istanbul
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              Fleet
              <br />
              Operations
              <br />
              <span className="text-yellow-400">
                for Istanbul Mobility
              </span>
            </h1>

            <p className="mt-8 text-zinc-400 text-xl max-w-xl leading-9">
              Operational support, driver coordination, and scalable fleet
              management focused on Istanbul transportation operations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={APPLY_URL}
                className="bg-yellow-400 text-black px-10 py-5 rounded-3xl font-black hover:scale-105 transition"
              >
                Driver Applications
              </a>

              <a
                href="#about"
                className="border border-white/10 px-10 py-5 rounded-3xl hover:bg-white/5 transition"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 flex gap-6 flex-wrap text-zinc-500">
              <div>✓ Istanbul Based</div>
              <div>✓ Driver Support</div>
              <div>✓ Operational Structure</div>
            </div>
          </div>

          <div>
            <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/yndpro.png"
                alt="HIGO Fleet Operations"
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
            OPERATIONAL STRUCTURE
          </div>

          <h2 className="text-5xl md:text-6xl font-black max-w-4xl leading-tight">
            Structured Transportation Operations for Istanbul
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
            ABOUT HIGO
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Istanbul-Based Mobility Operations
          </h2>

          <p className="mt-10 text-zinc-400 text-xl leading-10">
            HIGO is an Istanbul-based operational initiative focused on fleet
            coordination, driver onboarding, and transportation support systems.
          </p>

          <p className="mt-8 text-zinc-500 text-lg leading-9">
            With direct field experience in high-demand transportation areas
            such as Taksim, HIGO aims to build scalable and structured
            operational solutions within the urban mobility ecosystem.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black leading-tight">
            Building Structured
            <br />
            <span className="text-yellow-400">
              Fleet Operations
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-xl">
            Focused on scalable driver coordination and operational support in
            Istanbul.
          </p>

          <a
            href={APPLY_URL}
            className="inline-block mt-10 bg-yellow-400 text-black px-14 py-5 rounded-3xl font-black hover:scale-105 transition"
          >
            Contact Operations
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
            CONTACT
          </div>

          <h2 className="text-5xl font-black">
            Let’s Connect
          </h2>

          <div className="mt-12 space-y-5 text-zinc-400 text-lg">
            <p>Istanbul, Türkiye</p>

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
            Istanbul Fleet Operations
          </p>

          <p className="mt-8 text-zinc-600">
            © {new Date().getFullYear()} HIGO
          </p>
        </div>
      </footer>
    </main>
  );
}
