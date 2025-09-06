"use client"
import { useEffect, useState } from "react"

export default function Gallery() {
  const [images, setImages] = useState([])

  useEffect(() => {
    async function fetchImgs() {
      const res = await fetch('/api/events')
      const data = await res.json()
      setImages(data)
    }
    fetchImgs()
  }, [])

  if (!images.length) return null

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img src={src} alt={`gallery ${idx}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}
