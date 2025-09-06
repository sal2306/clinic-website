
'use client';
import React, {useEffect, useState} from 'react';

export default function Carousel({images=[]}){
  const [idx, setIdx] = useState(0);
  const len = images.length;
  useEffect(()=>{
    if(len<=1) return;
    const t = setInterval(()=> setIdx(i=> (i+1)%len), 3500);
    return ()=> clearInterval(t);
  },[len]);

  return (
    <div className="carousel-root card" style={{padding:0}}>
      <div className="carousel-slider" style={{transform:`translateX(-${idx*100}%)`}}>
        {images.map((src,i)=>(
          <div className="carousel-item" key={i}>
            <img src={src} alt={`slide ${i+1}`} style={{width:'100%', height:380, objectFit:'cover', display:'block'}} />
          </div>
        ))}
      </div>
    </div>
  );
}
