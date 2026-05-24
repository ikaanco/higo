const APPLY_URL = "#";

const APPLY_URL =
"https://forms.fleet.yandex.com/...";

{/* ISTANBUL */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-5xl font-black mb-16">

HiGO İstanbul'da

</h2>

<div
className="
rounded-[40px]
overflow-hidden
border
border-yellow-400/20
bg-gradient-to-r
from-yellow-500/10
to-black
p-10
"
>

<div className="grid md:grid-cols-2 gap-12">

<div>

<div className="text-yellow-400 font-bold">

İSTANBUL

</div>

<h3 className="mt-4 text-5xl font-black">

Yandex Pro ile
İstanbul'da
Daha Fazla Kazan

</h3>

<p className="mt-6 text-zinc-400">

HiGO ile sürücüler için
daha güçlü gelir modeli,
daha hızlı aktivasyon.

</p>

<a
href={APPLY_URL}
className="
inline-block
mt-10
bg-yellow-400
text-black
px-10
py-4
rounded-3xl
font-bold"
>

Başvur

</a>

</div>

<div>

<Image
src="/yndpro.png"
alt="istanbul"
width={1200}
height={900}
className="
rounded-3xl
border
border-white/10"
/>

</div>

</div>

</div>

</div>

</section>


{/* HAKKIMIZDA */}

<section className="py-32">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-5xl font-black mb-10">

Hakkımızda

</h2>

<p
className="
text-zinc-400
text-xl
leading-9
max-w-4xl"
>

HiGO,
Yandex Pro altyapısıyla çalışan
resmi iş ortağı modeliyle
İstanbul'daki sürücüler için
daha adil sistem oluşturmayı hedefler.

Daha fazla yolculuk,
daha yüksek verim,
daha şeffaf gelir.

</p>

</div>

</section>
{/* YORUMLAR */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-5xl font-black mb-16">

Sürücü Yorumları

</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
"Artık boş bekleme sürem azaldı.",

"Destek ekibi hızlı dönüş yapıyor.",

"Kazanç takibi daha net."
].map((x)=>(

<div
key={x}
className="
p-8
rounded-3xl
border
border-white/10
bg-white/5"
>

★★★★★

<p className="mt-6 text-zinc-400">

{x}

</p>

</div>

))}

</div>

</div>

</section>
{/* FINAL CTA */}

<section className="py-32 text-center">

<h2 className="text-6xl font-black">

İstanbul'da

<br />

<span className="text-yellow-400">

Hemen Başla

</span>

</h2>

<a
href={APPLY_URL}
className="
mt-10
inline-block
bg-yellow-400
text-black
px-14
py-5
rounded-3xl
font-black"
>

Başvuru Açıldığında Katıl

</a>

</section>