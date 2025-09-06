'use client'

import { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { Activity, Heart, UserCheck } from 'lucide-react' // icons - swap if you prefer others

// Kept your key specialties exactly as requested
const SERVICES = [
  {
    id: 'sciatica',
    title: 'Sciatica',
    desc: 'Targeted care for nerve pain, sciatica & related back issues.',
    icon: Activity,
    cta: 'Learn about sciatica →',
    modal: {
      heading: 'Sciatica Care',
      body: `Our sciatica program focuses on pain relief, functional improvement and long-term strengthening.
We use individualized homeopathic remedies combined with lifestyle guidance and physiotherapy referrals when needed.`,
    },
  },
  {
    id: 'gout-arthritis',
    title: 'Gout & Arthritis',
    desc: 'Effective management plans for gout, arthritis and joint pain.',
    icon: Heart,
    cta: 'Understand our approach →',
    modal: {
      heading: 'Gout & Arthritis Management',
      body: `We provide tailored plans for inflammatory joint conditions including dietary guidance, remedy selection and follow-up monitoring.
The goal is symptomatic relief and reducing flare frequency over time.`,
    },
  },
  {
    id: 'skin',
    title: 'Skin & Dermatology',
    desc: 'Holistic treatment for eczema, acne, psoriasis and other skin concerns.',
    icon: UserCheck,
    cta: 'View dermatology care →',
    modal: {
      heading: 'Skin & Dermatology',
      body: `Individualized treatment for common skin conditions with holistic care and evidence-informed recommendations.
Photo consultations and follow-ups are available for remote patients.`,
    },
  },
]

export default function ServicesKey() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  function openModal(id: string) {
    setOpenId(id)
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
    setTimeout(() => setOpenId(null), 200)
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const active = openId ? SERVICES.find((s) => s.id === openId) ?? null : null
  const ActiveIcon = active?.icon ?? null

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-2">Key Specialities</h2>
        <p className="text-center text-slate-600 mb-8">Focused services we are known for.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} service={svc} onOpen={openModal} />
          ))}
        </div>

        {/* View all services CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="/services"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-lg hover:bg-sky-700 transition-colors"
            aria-label="View all services"
          >
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Modal */}
      {isOpen && active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal} aria-hidden />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Close dialog"
            >
              ×
            </button>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center bg-sky-50 ring-1 ring-sky-100">
                {ActiveIcon ? <ActiveIcon className="w-6 h-6 text-sky-600" /> : null}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800">{active.modal.heading}</h3>
                <p className="mt-3 text-slate-600 whitespace-pre-line">{active.modal.body}</p>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-600 text-white text-sm font-medium shadow-sm hover:bg-sky-700 transition-colors"
                  >
                    Request Appointment
                  </a>
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
