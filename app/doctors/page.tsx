import Navbar from '../../components/Navbar'
import PageBanner from '../../components/PageBanner'
import Footer from '../../components/Footer'
import { CheckCircle, BadgeCheck } from 'lucide-react'

export default function DoctorsPage() {
  return (
    <div>
      <Navbar />
      <main className="page-bg-white">
        <div className="bg-white/90 min-h-screen">
          <PageBanner title="Meet Our Doctors" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
            
            {/* Dr G Ali */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <img
                src="/images/dr-g-ali.jpg"
                alt="Dr G Ali"
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Dr G Ali</h3>
                <div className="flex items-center gap-2 font-medium text-slate-700">
                  <BadgeCheck className="w-4 h-4 text-blue-600" />
                  <span>
                    Qualifications:{" "}
                    <span className="font-semibold">
                      B.Sc, D.H.M.S (BU) & MD (Patna)
                    </span>{" "}
                    — Reg. No. 21723 (Bihar Council of Homoeopathy)
                  </span>
                </div>
                <p className="mt-3 text-slate-700">
                  Respected practitioner with decades of experience and strong
                  community connect.
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Decades of clinical experience</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Strong rapport with local communities</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Patient-first approach</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dr Nikhat Ali */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <img
                src="/images/dr-nikhat-ali.jpg"
                alt="Dr Nikhat Ali"
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Dr Nikhat Ali</h3>
                <div className="flex items-center gap-2 font-medium text-slate-700">
                  <BadgeCheck className="w-4 h-4 text-blue-600" />
                  <span>
                    Qualifications:{" "}
                    <span className="font-semibold">
                      BHMS — GD Memorial Homeopathic College, Patna (Batch of 2007).
                      Medical Officer (Govt. of Jharkhand)
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-slate-700">
                  Research-informed practice with focus on women & child health.
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Contemporary, research-informed practice</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Focus on maternal, pediatric and family health</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Active in community health & awareness programs</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
