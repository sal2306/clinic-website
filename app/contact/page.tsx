import Navbar from '../../components/Navbar'
import PageBanner from '../../components/PageBanner'
import Footer from '../../components/Footer'

export default function ContactPage(){
  return (
    <div>
      <Navbar />
      <main className="page-bg-white">
        <div className="page-overlay min-h-screen">
          <PageBanner title="Contact" />
          <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-lg font-semibold text-blue-800">Visit / Contact</h3>
              <address className="not-italic mt-3 text-slate-700">
                Dr G Ali Clinic<br/>
                Gulzarbag<br/>
                Godda, Jharkhand, PIN - 814133<br/>
                India
              </address>

              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:+916422359047" className="inline-flex items-center btn-soft btn-primary">Call Now</a>
                <a href="mailto:dr.nikhatali@gmail.com" className="inline-flex items-center btn-soft btn-ghost">Email Us</a>
              </div>
            </div>

        <div className="flex-1 h-80 lg:h-[520px]">
          <iframe
            title="Dr G Ali Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.906256022779!2d87.21358597570045!3d24.832879277947363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0f50008dbd3e5%3A0xe47217a47a5756a6!2sDr%20G%20Ali%20Clinic!5e0!3m2!1sen!2sin!4v1756833217710!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
