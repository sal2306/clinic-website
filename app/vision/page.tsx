'use client'
import Navbar from '../../components/Navbar'
import PageBanner from '../../components/PageBanner'
import Footer from '../../components/Footer'
import { CheckCircle } from 'lucide-react'

export default function VisionPage() {
  return (
    <div>
      <Navbar />
      <main className="page-bg-white">
        <div className="bg-white/90 min-h-screen">
          <PageBanner title="Our Legacy & Vision" />

          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="bg-white rounded-2xl shadow-lg p-10 text-slate-700">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
                40+ Years of Trust and Generational Care
              </h2>
              <p className="mb-6 leading-relaxed">
                For over four decades, <span className="font-semibold text-blue-700">Dr G Ali Clinic </span> 
                has been a trusted name in homeopathy. From grandparents to the youngest family members, 
                generations of patients have placed their faith in us. Our legacy is not only about 
                compassionate treatment but also about being a pillar of trust, empathy, and 
                community connection.
              </p>
              <p className="mb-6 leading-relaxed">
                Our vision is to continue blending the wisdom of traditional homeopathy with modern 
                research, ensuring that our care is <span className="font-semibold text-blue-700">
                safe, accessible, and future-ready</span>. We are committed to supporting individuals 
                and families in their journey toward lifelong wellness.
              </p>

              {/* Tick pointers */}
              <ul className="space-y-4">
                {[
                  "Personalized treatment plans designed after thorough case-taking",
                  "Safe remedies with minimal side effects, suitable for all ages",
                  "Building strong community trust with outreach and education",
                  "Commitment to ongoing clinical development and research-backed methods",
                  "Trusted by generations — a true people’s clinic"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Optional Trust Image */}
              <div className="mt-10 flex justify-center">
                <img
                  src="/images/trust.jpg"
                  alt="Generations of Trust"
                  className="rounded-2xl shadow-md max-h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
