'use client'
import FlipCard from './FlipCard'
import { Zap, Waves, Heart } from 'lucide-react'

export default function ServicesKey(){
  const items = [
    { id:'gout', title:'Gout Arthritis', tagline:'Holistic remedies for joint pain and gout symptoms.', Icon:Zap },
    { id:'sciatica', title:'Sciatica', tagline:'Targeted homeopathy to relieve nerve pain & improve mobility.', Icon:Waves },
    { id:'skin', title:'Skin Disorders', tagline:'Safe, natural care for eczema, psoriasis and rashes.', Icon:Heart }
  ]

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-blue-800 text-center">Key Specialities</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(i=> <FlipCard key={i.id} Icon={i.Icon} title={i.title} summary={i.tagline} points={['Personalized plans','Care continuity','Follow-up']} />)}
      </div>
    </section>
  )
}
