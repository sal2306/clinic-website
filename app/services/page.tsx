import Navbar from '../../components/Navbar'
import PageBanner from '../../components/PageBanner'
import Footer from '../../components/Footer'
import ServicesList from '../../components/ServicesList'

export default function servicesPage(){
  return (
    <div>
      <Navbar />
      <main className="page-bg-white">
        <div className="bg-white/90 min-h-screen">
          <PageBanner title="Our Specialities" />
          <div className="max-w-6xl mx-auto px-6 py-12">
            <ServicesList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
