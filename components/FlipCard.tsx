// components/FlipCard.tsx (minimal compatible version)
'use client'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function FlipCard({ Icon, title, summary, points }){
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="relative w-full cursor-pointer" onClick={()=>setFlipped(s=>!s)} tabIndex={0} onKeyDown={(e)=> e.key==='Enter' && setFlipped(s=>!s)}>
      <div className={`relative transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="rounded-xl bg-gray-50 border border-gray-200 shadow-sm p-6 [backface-visibility:hidden]">
          {Icon && <Icon className="w-8 h-8 text-blue-600 mb-3" />}
          <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
          {summary && <p className="text-gray-700 mt-2">{summary}</p>}
        </div>

        <div className="absolute inset-0 rounded-xl bg-gray-100 border border-gray-200 shadow-sm p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">{title}</h3>
          <div className="overflow-auto max-h-[52vh]">
            <ul className="space-y-3">
              {points.map((p,i)=>(
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
