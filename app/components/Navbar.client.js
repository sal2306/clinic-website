
'use client';
import React, {useState} from 'react';
import Link from 'next/link';

export default function Navbar(){ 
  const [open, setOpen] = useState(false);
  return (
    <header style={{position:'sticky', top:0, zIndex:60, backdropFilter:'saturate(120%) blur(6px)', background:'linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.5))'}}>
      <nav className="site-container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:12, paddingBottom:12}}>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <Link href="/" aria-label="Home" style={{display:'flex', alignItems:'center', textDecoration:'none', color:'inherit'}}>
            <img src="/images/logo.png" alt="Clinic logo" width="40" height="40" style={{borderRadius:8}}/>
            <span style={{marginLeft:10, fontWeight:800, color:'#074b2b'}}>Dr G Ali Clinic</span>
          </Link>
        </div>

        <div className="desktop-nav" style={{display:'flex', alignItems:'center', gap:18}}>
          <Link href="/">Home</Link>
          <Link href="/vision">Vision</Link>
          <Link href="/doctors">Doctors</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact" className="nav-contact">Contact</Link>
          <Link href="/contact" className="btn-primary" style={{padding:'8px 12px', marginLeft:6}}>Book Appointment</Link>
        </div>

        <button aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(v=>!v)} className="mobile-toggle" style={{background:'transparent', border:'none', display:'none'}}>
          <span className="sr-only">Toggle navigation</span>
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0f1720" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>
      </nav>

      <div id="mobile-nav" style={{display:'none', padding:'8px 24px', borderTop:'1px solid rgba(0,0,0,0.04)'}}>
        <Link href="/" style={{display:'block', padding:12}}>Home</Link>
        <Link href="/doctors" style={{display:'block', padding:12}}>Doctors</Link>
        <Link href="/blog" style={{display:'block', padding:12}}>Blog</Link>
        <Link href="/vision" style={{display:'block', padding:12}}>Vision</Link>
        <Link href="/services" style={{display:'block', padding:12}}>Services</Link>
        <Link href="/contact" style={{display:'block', padding:12}}>Contact</Link>
      </div>
    </header>
  );
}
