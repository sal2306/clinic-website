"use client"
import { useState, useEffect } from "react"

export default function Carousel() {
  const [images, setImages] = useState([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/events')
        const data = await res.json()
        setImages(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  useEffect(() => {
    if (!images.length) return
    const t = setInterval(() => setCurrent(prev => (prev + 1) % images.length), 4000)
    return () => clearInterval(t)
  }, [images])

  if (!images.length) return <div className="text-center text-gray-500">No event photos yet.</div>

  return (
    <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
      {images.map((src, i) => (
        <img key={i}
          src={src}
          alt={`event ${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-accent' : 'bg-white/80'}`}
            onClick={() => setCurrent(idx)} />
        ))}
      </div>
    </div>
  )
}
