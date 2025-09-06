import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import ServicesKey from '../components/ServicesKey'
import Events from '../components/Events'
import DoctorsPreview from '../components/DoctorsPreview'
import BlogTeaser from '../components/BlogTeaser'
import Footer from '../components/Footer'
export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="page-bg-hero flex-grow">
        <div className="bg-hero/90 flex-grow">
          <Hero />
          <div className="max-w-6xl mx-auto px-6">
            <FeatureGrid />
            <ServicesKey />
            <div className="text-center mt-6">
              <a href="/services" className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition">View All</a>
            </div>
            <Events />
            <DoctorsPreview />
            <BlogTeaser />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
