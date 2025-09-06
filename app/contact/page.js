export default function ContactPage() {
  return (
    <section className="relative min-h-screen" style={{ backgroundImage: "url('/images/backgrounds/bg-middle.jpg')" }}>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-10 bg-white/10 rounded-2xl">
        <div className="flex-1 h-80 lg:h-[520px]">
          <iframe
            title="Dr G Ali Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.906256022779!2d87.21358597570045!3d24.832879277947363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0f50008dbd3e5%3A0xe47217a47a5756a6!2sDr%20G%20Ali%20Clinic!5e0!3m2!1sen!2sin!4v1756833217710!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-3"><strong>Phone:</strong> 06422 359047</p>
          <p className="mb-3"><strong>Email:</strong> dr.nikhatali@gmail.com</p>
          <p className="mb-3"><strong>Address:</strong> Dr G Ali Clinic, Godda, Jharkhand, India</p>
          <div className="mt-6 flex gap-3">
            <a href="tel:06422359047" className="px-4 py-2 bg-accent text-white rounded">Call Now</a>
            <a href="mailto:dr.nikhatali@gmail.com" className="px-4 py-2 bg-primary text-white rounded">Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
