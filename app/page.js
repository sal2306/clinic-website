import * as Icons from "lucide-react"
import { services } from "./data/services"
import Carousel from "./components/Carousel"

export default function Home() {
  const features = [
    {
      title: "Professional Doctors",
      desc: "Experienced practitioners with years of expertise.",
      icon: "Stethoscope",
    },
    {
      title: "Zero Side Effects",
      desc: "Safe, natural treatments with no harmful effects.",
      icon: "HeartPulse",
    },
    {
      title: "Online Consultation",
      desc: "Get expert advice from the comfort of your home.",
      icon: "Users",
    },
  ]

  const preview = services.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[50vh] md:h-[65vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/backgrounds/bg-hero.jpg')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Healing with Care and Compassion
          </h1>
          <p className="text-sm md:text-lg mb-5 text-white/90">
            Trusted Homeopathy Treatments for Chronic & Acute Conditions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+911234567890"
              className="w-full sm:w-auto text-center px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
            >
              📞 +91 12345 67890
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mt-8 md:mt-0 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:relative md:-mt-14">
          {features.map((f, i) => {
            const Icon = Icons[f.icon]
            return (
              <div
                key={i}
                className="bg-white w-full p-6 rounded-2xl shadow-2xl text-center transform hover:-translate-y-2 transition"
              >
                <div className="flex justify-center mb-4">
                  {Icon ? <Icon className="w-10 h-10 text-accent" /> : null}
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Events Carousel */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
            Social Events & Community Outreach
          </h2>
          <Carousel />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-16 bg-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
            Our Key Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {preview.map((s, idx) => {
              const Icon = Icons[s.icon]
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {Icon ? <Icon className="w-10 h-10 text-accent" /> : null}
                  </div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-6">
            <a
              href="/services"
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
