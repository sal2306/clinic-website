'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export default function Events(){
  const [slides, setSlides] = useState<string[] | null>(null)
  useEffect(()=>{
    let mounted = true
    async function load(){
      try {
        const res = await fetch('/api/events')
        if(!res.ok) throw new Error('failed')
        const data = await res.json()
        if(mounted) setSlides(data)
      } catch (err) {
        console.error(err)
        if(mounted) setSlides([])
      }
    }
    load()
    return ()=> { mounted = false }
  },[])

  if(slides===null){
    return (
      <section className="py-8">
        <h2 className="text-2xl font-semibold text-blue-800 text-center">Community Outreach</h2>
        <div className="mt-6 max-w-6xl mx-auto px-6">
          <div className="h-72 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">Loading events...</div>
        </div>
      </section>
    )
  }

  const active = slides.length>0 ? slides : ['/images/events/placeholder.jpg']

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-blue-800 text-center">Community Outreach</h2>
      <div className="mt-6 max-w-6xl mx-auto px-6">
        <Swiper modules={[Autoplay, Navigation, Pagination]} spaceBetween={20} slidesPerView={1} autoplay={{delay:3500, disableOnInteraction:false}} navigation pagination={{clickable:true}} loop={active.length>1}>
          {active.map((s,i)=>(
            <SwiperSlide key={i}>
              <div className="h-72 rounded-2xl overflow-hidden shadow">
                <img src={s} alt={`slide ${i+1}`} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
