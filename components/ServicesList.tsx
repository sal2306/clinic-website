'use client'
import FlipCard from './FlipCard'
import { Zap, Waves, Heart, Baby, Stethoscope, Users, Coffee } from 'lucide-react'

export default function ServicesList(){
  const services = [
    { id: 'gout', title: 'Gout Arthritis', tagline: 'Holistic remedies for joint pain and gout symptoms.', Icon:Zap },
    { id: 'sciatica', title: 'Sciatica', tagline: 'Targeted homeopathy to relieve nerve pain & improve mobility.', Icon:Waves },
    { id: 'skin', title: 'Skin Disorders', tagline: 'Safe, natural care for eczema, psoriasis and rashes.', Icon:Heart },
    { id: 'infertility', title: 'Infertility Support', tagline: 'Gentle, holistic treatments for male and female infertility.', Icon:Baby },
    { id: 'kidney', title: 'Kidney Care', tagline: 'Personalized homeopathy solutions for kidney health.', Icon:Stethoscope },
    { id: 'women-child', title: 'Women & Child Health', tagline: 'Safe care during pregnancy, childhood illnesses, and beyond.', Icon:Users },
    { id: 'acidity', title: 'Acidity & Indigestion', tagline: 'Support for acid reflux, bloating and digestive discomfort.', Icon:Coffee }
  ]

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(s=> (
          <div key={s.id}>
            <FlipCard Icon={s.Icon} title={s.title} summary={s.tagline} points={['Personalized plans','Diet & lifestyle guidance','Follow-up care']} />
          </div>
        ))}
      </div>
    </section>
  )
}
