'use client';
import {useEffect, useState} from 'react';

export default function EventsCarousel(){
  const slides = ['/images/events/slide1.jpg','/images/events/slide2.jpg','/images/events/slide3.jpg'];
  const [idx,setIdx] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setIdx(i=> (i+1)%slides.length), 3500);
    return ()=> clearInterval(t);
  },[]);

  return (
    <section className="py-8">
      <h2 className="section-title">Social Events & Community Outreach</h2>
      <div className="mt-6 card overflow-hidden">
        <div className="relative h-64 md:h-80">
          <img src={slides[idx]} alt={`slide ${idx+1}`} className="absolute inset-0 w-full h-full object-cover" onError={(e)=>{ e.currentTarget.src='/images/events/placeholder.jpg'; }} />
        </div>
        <div className="flex justify-center gap-2 mt-3 pb-3">
          {slides.map((_,i)=> <button key={i} onClick={()=>setIdx(i)} className={`w-2 h-2 rounded-full ${i===idx?'bg-clinicGreen-500':'bg-slate-300'}`}></button>)}
        </div>
      </div>
    </section>
  );
}