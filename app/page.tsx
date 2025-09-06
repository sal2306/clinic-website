import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import ServicesKey from '../components/ServicesKey'
import CommunityOutreach from '../components/CommunityOutreach'
import DoctorsPreview from '../components/DoctorsPreview'
import BlogPreview from '../components/BlogPreview'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero (unchanged) */}
        <Hero />

        {/* Floating feature grid - negative margin to overlap hero curve */}
        {/* <div className="max-w-7xl mx-auto px-6">
          <div className="-mt-20 relative z-30">
            <FeatureGrid />
          </div>
        </div> */}

        {/* rest of page on white background */}
        <div className="bg-white">
          <ServicesKey />
          <DoctorsPreview />
          <CommunityOutreach />
          <BlogPreview />
        </div>
      </main>

      <Footer />
    </div>
  )
}
