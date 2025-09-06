'use client'
import FlipCard from './FlipCard'
import specialities from '../data/specialities'
import { Zap, Waves, Heart, Baby, Stethoscope, Users, Pill } from 'lucide-react'

const iconMap = { zap: Zap, wave: Waves, heart: Heart, baby: Baby, stethoscope: Stethoscope, users: Users, pill: Pill }

export default function ServicesGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-8">Our Specialities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {specialities.map((s) => {
            const Icon = iconMap[s.icon] ?? Zap
            return <FlipCard key={s.id} Icon={Icon} title={s.title} summary={s.tagline} points={s.details} />
          })}
        </div>
      </div>
    </section>
  )
}
