'use client'
import FlipCard from './FlipCard'
import { Stethoscope, ShieldCheck, MonitorSmartphone } from 'lucide-react'

export default function FeatureGrid(){
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-8 pb-12 grid md:grid-cols-3 gap-8">
      <FlipCard Icon={Stethoscope} title="Professional Doctors" summary="Experienced practitioners with years of expertise." points={['Decades of clinical experience','Patient-first approach','Community trust']} />
      <FlipCard Icon={ShieldCheck} title="Zero Side Effects" summary="Safe, natural treatments with minimal adverse effects." points={['Natural remedies','Evidence-aware','Family safe']} />
      <FlipCard Icon={MonitorSmartphone} title="Online Consultation" summary="Consult from the comfort of your home." points={['Video consults','Follow-up plans','Secure records']} />
    </section>
  )
}
