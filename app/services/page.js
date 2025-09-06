import * as Icons from "lucide-react"
import { services } from "../data/services"

export default function ServicesPage() {
  return (
    <section className="py-20" style={{ backgroundImage: "url('/images/backgrounds/bg-middle.jpg')" }}>
      <div className="max-w-6xl mx-auto px-6 bg-white/90 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-primary mb-6">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = Icons[s.icon]
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                <div className="mb-4">{Icon ? <Icon className="w-12 h-12 text-accent" /> : null}</div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
