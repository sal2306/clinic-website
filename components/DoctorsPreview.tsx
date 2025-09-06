'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const DOCTORS = [
  {
    id: 'dr-g-ali',
    name: 'Dr G Ali',
    qualifications: 'B.Sc, D.H.M.S (BU) & MD (Patna) — Reg. No. 21723',
    desc: 'Respected practitioner with decades of experience and strong community connect.',
    photo: '/images/dr-g-ali.jpg', // update if your actual filename differs
  },
  {
    id: 'dr-nikhat-ali',
    name: 'Dr Nikhat Ali',
    qualifications: 'BHMS — GD Memorial Homeopathic College, Patna — Medical Officer (Govt. of Jharkhand)',
    desc: 'Research-informed practice with special focus on women & child health.',
    photo: '/images/dr-nikhat-ali.jpg', // update if your actual filename differs
  },
]

export default function DoctorsPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-center relative mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center w-full">
          Meet Our Doctors
        </h2>

        <Link href="/doctors" className="absolute right-0 text-sky-600 hover:underline text-sm md:text-base">
          See all doctors
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DOCTORS.map((doc) => (
          <article
            key={doc.id}
            className="flex items-start gap-6 rounded-2xl bg-white/90 p-6 shadow-md hover:shadow-2xl transition-shadow duration-200"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
              <Image
                src={doc.photo}
                alt={doc.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
                // if these images are large, consider using `priority` for the first one only
              />
            </div>

            <div className="flex-1">
              <h3 className="text-sky-700 font-semibold text-lg md:text-xl mb-1">{doc.name}</h3>
              <p className="text-sm text-slate-600 mb-3">{doc.qualifications}</p>
              <p className="text-slate-600">{doc.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
