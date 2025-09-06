'use client'

import { useEffect, useState } from 'react'
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Professional Doctors',
    desc: 'Experienced practitioners with years of expertise.',
    icon: GlobeAltIcon,
    cta: 'Meet our doctors →',
    href: '/doctors',
    modalContent: {
      heading: 'Meet our Doctors',
      body: `Our team consists of experienced homeopathy practitioners with decades of combined experience.
We focus on patient-first care, evidence-informed homeopathic approaches and personalized treatment plans.
You can view profiles, specialties, and appointment availability here.`,
    },
  },
  {
    title: 'Safe Treatments',
    desc: 'Minimal side effects with carefully chosen remedies.',
    icon: ShieldCheckIcon,
    cta: 'See safety process →',
    href: '/blog',
    modalContent: {
      heading: 'Safety & Treatment Protocols',
      body: `We follow strict protocols to ensure safe and effective care. Each treatment plan is tailored after
a thorough assessment. Read about our safety checks, case studies, and post-treatment follow-ups in this section.`,
    },
  },
  {
    title: 'Online Consultation',
    desc: 'Convenient teleconsultations from home.',
    icon: DevicePhoneMobileIcon,
    cta: 'Book consultation →',
    href: '/contact',
    modalContent: {
      heading: 'Online Consultation',
      body: `Book an online consultation with our specialists — quick form, secure video calls, and easy follow-ups.
We offer flexible timings and teleconsultation packages suitable for remote patients.`,
    },
  },
]

export default function FeatureGrid() {
  const [openFeature, setOpenFeature] = useState<number | null>(null) // index or null
  const [isOpen, setIsOpen] = useState(false)

  function openModal(idx: number) {
    setOpenFeature(idx)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    // keep openFeature for a short time to allow any fade-out (if added)
    setTimeout(() => setOpenFeature(null), 220)
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal()
    }

    if (isOpen) {
      document.addEventListener('keydown', onKey)
      // lock background scroll
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const activeFeature = openFeature !== null ? features[openFeature] : null
  const ActiveIcon = activeFeature ? activeFeature.icon : null

  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group relative rounded-2xl bg-white/80 backdrop-blur-sm p-6
                           shadow-md transition-transform transition-shadow duration-300
                           hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                               bg-sky-50/80 ring-1 ring-sky-100
                               group-hover:bg-sky-600 group-hover:ring-sky-600 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-sky-700 group-hover:text-sky-800 font-semibold text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mt-2 text-sm">{feature.desc}</p>
                  </div>
                </div>

                {/* CTA opens modal */}
                <div className="mt-auto">
                  <button
                    onClick={() => openModal(idx)}
                    className="inline-block mt-4 text-xs font-medium text-sky-600
                               opacity-90 hover:opacity-100 transition-opacity hover:underline"
                    aria-haspopup="dialog"
                    aria-controls={`feature-modal-${idx}`}
                  >
                    {feature.cta}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Modal (rendered in place; fixed overlay) */}
      {isOpen && activeFeature && (
        <div
          role="dialog"
          aria-modal="true"
          id={`feature-modal-${openFeature}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden
          />

          {/* modal panel */}
          <div
            className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl
                       transform transition-all duration-200"
            role="document"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md
                         p-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Close dialog"
            >
              <XMarkIcon className="w-5 h-5 text-slate-600" />
            </button>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center bg-sky-50 ring-1 ring-sky-100">
                {ActiveIcon ? <ActiveIcon className="w-6 h-6 text-sky-600" /> : null}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800">
                  {activeFeature.modalContent.heading}
                </h3>
                <p className="mt-3 text-slate-600 whitespace-pre-line">
                  {activeFeature.modalContent.body}
                </p>

                {/* optional actions area */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={activeFeature.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-600 text-white text-sm font-medium shadow-sm hover:bg-sky-700 transition-colors"
                  >
                    Continue to {activeFeature.title}
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
