'use client'
import { useState } from 'react'

export default function FlipCard({ Icon, title, summary, points }:{Icon:any, title:string, summary:string, points:string[]}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flip-wrapper">
      <div
        role="button"
        tabIndex={0}
        className={`card ${flipped? 'flipped':''}`}
        onClick={()=>setFlipped(s=>!s)}
        onKeyDown={(e)=> { if(e.key === 'Enter') setFlipped(s=>!s) }}
        aria-pressed={flipped}
      >
        {/* front */}
        <div className="absolute inset-0 flex flex-col justify-center items-center rounded-xl bg-gray-50 shadow-md border border-gray-200 hover:border-blue-600 transition-colors backface-hidden p-6">
          {Icon && <Icon className="w-10 h-10 text-blue-600 mb-3" />}
          <h3 className="text-lg font-semibold text-blue-800 text-center">{title}</h3>
          <p className="text-slate-600 mt-2 text-center">{summary}</p>
        </div>

        {/* back */}
        <div className="card-face card-back">
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {points.map((p,i)=><li key={i}>{p}</li>)}
          </ul>
          <div className="mt-4 text-sm text-blue-700">Tap/click to flip back</div>
        </div>
      </div>
    </div>
  )
}
