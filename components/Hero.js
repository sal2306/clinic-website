import Link from 'next/link';

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="hero-pattern absolute inset-0 opacity-60"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
        <div className="space-y-6 z-10">
          <p className="inline-flex items-center gap-3 text-sm text-clinicGreen-700 font-medium">
            <span className="w-8 h-8 rounded-md bg-white shadow flex items-center justify-center ring-1 ring-clinicGreen-100">🏥</span>
            Trusted Homeopathic Care — Since 1990
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-clinicGreen-900">Healing with Care and Compassion</h1>

          <p className="text-slate-700 max-w-prose">Compassionate, research-aware homeopathy for chronic & acute conditions. Personalised plans, gentle remedies, long-term support.</p>

          <div className="flex flex-wrap gap-3 items-center">
            <a href="tel:+916422359047" className="bg-clinicGreen-500 text-white px-4 py-3 rounded-lg inline-flex items-center gap-3 shadow hover:scale-[1.02]">📞 Call Now</a>
            <Link href="/contact" className="bg-slate-800 text-white px-4 py-3 rounded-lg inline-flex items-center gap-2 shadow">Book Appointment</Link>
          </div>

          <div className="mt-6 bg-white/90 rounded-lg p-4 shadow-sm inline-flex items-start gap-4">
            <div className="text-clinicGreen-800 font-semibold">For booking & enquiries</div>
            <div className="text-slate-600">Call <strong>+91 6422359047</strong> or email <a href="mailto:dr.nikhatali@gmail.com" className="text-clinicGreen-700 underline">dr.nikhatali@gmail.com</a></div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Use img with responsive sizing. On narrow screens, image behaves contain to avoid cropping. */}
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/father.png" />
              <img src="/images/father.png" alt="Dr G Ali" className="w-full h-96 object-cover sm:object-contain" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}