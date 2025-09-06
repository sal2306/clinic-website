import Image from "next/image"

export default function About() {
  return (
    <section className="relative min-h-screen" style={{ backgroundImage: "url('/images/backgrounds/bg-middle.jpg')" }}>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img src="/images/father.jpg" alt="Dr G Ali" className="w-64 h-64 rounded-2xl object-cover border-4 border-accent shadow-xl" />
        </div>
        <div className="bg-white/90 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-primary mb-4">About Dr G Ali</h1>
          <p className="text-gray-700 mb-4">
            Dr. G Ali has been serving patients with dedication and compassion for over 40 years...
          </p>
          <p className="text-gray-700">
            His vision is to make homeopathy accessible to everyone, combining modern knowledge with traditional wisdom.
          </p>
        </div>
      </div>
    </section>
  )
}
