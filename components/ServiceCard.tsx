'use client'

import React from 'react'

type Service = {
  id: string
  title: string
  desc: string
  icon: React.ComponentType<any>
  cta?: string
}

export default function ServiceCard({
  service,
  onOpen,
}: {
  service: Service
  onOpen: (id: string) => void
}) {
  const Icon = service.icon
  return (
    <article
      className="group relative rounded-2xl bg-white/90 backdrop-blur-sm p-6
                 shadow-md transition-transform transition-shadow duration-300
                 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl"
      aria-labelledby={`svc-${service.id}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                        bg-sky-50/80 ring-1 ring-sky-100 group-hover:bg-sky-600 transition-colors">
          {Icon ? <Icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" /> : null}
        </div>

        <div className="flex-1">
          <h3 id={`svc-${service.id}`} className="text-sky-700 group-hover:text-sky-800 font-semibold text-lg">
            {service.title}
          </h3>
          <p className="text-slate-600 mt-2 text-sm">{service.desc}</p>

          <div className="mt-4">
            <button
              onClick={() => onOpen(service.id)}
              className="inline-block text-xs font-medium text-sky-600 opacity-90 hover:opacity-100 hover:underline"
              aria-haspopup="dialog"
            >
              {service.cta ?? 'Learn more →'}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
