'use client'
import Link from 'next/link'
import Image from 'next/image'
import FeatureGrid from './FeatureGrid'

export default function Hero() {
  return (
    <header className="page-bg-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* left text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 leading-tight mb-4">
            Trusted homeopathy clinic serving generations with care
          </h1>

          <p className="text-slate-700 font-bold mb-6 max-w-prose">
            Specialized treatment for acute and chronic ailments – personalized plans and long-term support.
          </p>

          <p className="text-slate-700 font-semibold mb-6 max-w-prose">
            For appointments & enquiries:
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="tel:+916422359047"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-500 text-white font-semibold shadow-sm hover:scale-[1.02] transition-transform"
            >
              Call Us
            </a>

            <a
              href="mailto:dr.nikhatali@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-blue-500 font-semibold shadow-sm hover:scale-[1.02] transition-transform"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Doctor photo floating on right, transparent background */}
      <div className="absolute right-40 bottom-0 md:bottom-[-20px] w-[380px] md:w-[500px] z-0">
        <Image
          src="/images/hero.png"
          alt="Dr G Ali"
          width={500}
          height={700}
          className="object-contain pointer-events-none"
          priority
        />
      </div>


      {/* FeatureGrid - keep only one */}
      <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-6 md:px-0">
        <FeatureGrid />
      </div>

      {/* curved SVG divider */}
      <div className="pointer-events-none relative z-10">
        <svg viewBox="0 0 1440 100" className="w-full block" preserveAspectRatio="none">
          <path d="M0,100 C320,0 1120,0 1440,100 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>
    </header>
  )
}
