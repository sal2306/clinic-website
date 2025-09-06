'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function EventsCarousel() {
  const [images, setImages] = useState<string[] | null>(null)

  useEffect(() => {
    fetch('/api/events')
      .then((r) => r.json())
      .then((data) => {
        setImages(Array.isArray(data.images) ? data.images : [])
      })
      .catch((err) => {
        console.error('Failed to load events:', err)
        setImages([])
      })
  }, [])

  if (images === null) {
    return (
      <div className="rounded-2xl bg-white/70 p-8 shadow-lg text-center">
        Loading events...
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-12 shadow-inner border border-slate-100 text-center text-slate-400">
        Events carousel placeholder — add images to
        <code className="bg-slate-100 px-1 rounded">/public/images/events</code>
      </div>
    )
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-xl">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-6"
      >
        {images.map((src) => (
          <SwiperSlide key={src} className="flex justify-center px-4">
            <div className="w-full max-w-[520px] rounded-lg overflow-hidden bg-slate-50">
              <div className="relative aspect-[16/9]">
                <Image
                  src={src}
                  alt="Event"
                  fill
                  sizes="(min-width:1024px) 520px, (min-width:640px) 420px, 320px"
                  style={{ objectFit: 'cover' }}
                  className="pointer-events-none"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
