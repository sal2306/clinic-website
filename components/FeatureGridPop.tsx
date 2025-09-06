// components/FeatureGridPop.tsx
'use client'
import React from 'react'
import { GlobeAltIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Professional Doctors',
    desc: 'Experienced practitioners with years of expertise.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Safe Treatments',
    desc: 'Minimal side effects with carefully chosen remedies.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Online Consultation',
    desc: 'Convenient teleconsultations from home.',
    icon: DevicePhoneMobileIcon,
  },
  // add more items if required
]

export default function FeatureGridPop() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <article
            key={f.title}
            className={`
              group relative rounded-2xl bg-white/80 backdrop-blur-sm
              p-6 min-h-[130px] flex flex-col gap-3
              shadow-md hover:shadow-2xl transition-transform transition-shadow duration-300
              transform will-change-transform hover:-translate-y-3 hover:scale-[1.03]
            `}
            aria-labelledby={`feat-${i}`}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-sky-50/80 ring-1 ring-sky-100
                           group-hover:bg-sky-600 group-hover:ring-sky-600 transition-colors duration-300"
              >
                {/* Icon changes color on hover */}
                <f.icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
              </div>

              <div>
                <h3 id={`feat-${i}`} className="text-sky-700 group-hover:text-sky-800 font-semibold text-lg">
                  {f.title}
                </h3>
                <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
              </div>
            </div>

            {/* small CTA or arrow that fades in on hover */}
            <div className="mt-auto">
              <span
                className="inline-block mt-2 text-xs font-medium text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              >
                Learn more →
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
