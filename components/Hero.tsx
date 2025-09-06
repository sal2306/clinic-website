'use client'
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-hero bg-cover bg-center py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side text */}
        <div>
          <p className="text-blue-700 font-semibold mb-2">
            Trusted Homeopathic Care - Since 1981
          </p>
          <h1 className="text-4xl md:text-5xl text-blue-900 mb-6">
            Specialized Care for your Health & Well-being
          </h1>
          <p className="text-gray-700 mb-6">
            Compassionate, research-aware homeopathy for chronic & acute
            conditions. Personalised plans, gentle remedies, long-term support.
          </p>

          {/* Info grid */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-blue-800 font-semibold mb-2">
              For appointments & enquiries
            </h3>
            <div className="flex gap-3">
              <Link
                href="tel:+919876543210"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm"
              >
                Call Now
              </Link>
              <Link
                href="mailto:info@drgaliclinic.com"
                className="px-4 py-2 rounded-md bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 text-sm"
              >
                Email Us
              </Link>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-center md:justify-end md:ml-2">
          <img
            src="/images/hero.png"
            alt="Dr G Ali speaking"
            className="rounded-2xl shadow-md max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
