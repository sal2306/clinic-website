'use client'
import FlipCard from './FlipCard'
import { Zap, Waves, Heart } from 'lucide-react'

export default function ServicesGrid(){
  const services = [
    {id:'gout', title:'Gout Arthritis', desc:'Holistic remedies for joint pain and gout symptoms.', Icon:Zap},
    {id:'sciatica', title:'Sciatica', desc:'Targeted homeopathy to relieve nerve pain & improve mobility.', Icon:Waves},
    {id:'skin', title:'Skin Disorders', desc:'Safe, natural care for eczema, psoriasis and rashes.', Icon:Heart},
  ]
  return (
    <section className="py-6">
      <h2 className="text-2xl font-semibold text-blue-800 text-center">Our Key Specialities</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.map(s=> <FlipCard key={s.id} Icon={s.Icon} title={s.title} summary={s.desc} points={['Personalized plans','Care continuity','Follow up']} />)}
      </div>
    </section>
  )
}
