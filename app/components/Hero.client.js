
'use client';
import Image from 'next/image';
import Link from 'next/link';
export default function Hero(){
  return (
    <header className="hero-root">
      <div className="site-container hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">Specialized care for your well-being</h1>
          <p className="hero-sub">Trusted homeopathy treatment for chronic and acute ailments. Healing with care and compassion.</p>

          <div className="hero-cta-card card">
            <div className="hero-cta-bold">For booking & enquiries</div>
            <div style={{display:'flex', gap:12, alignItems:'center'}}>
              <a href="tel:+916422359047" className="btn-outline" >
                <svg className="icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.2.37 2.37.73 3.5a2 2 0 0 1-.45 2.11L9.91 10.91a16 16 0 0 0 6 6l1.59-1.59a2 2 0 0 1 2.11-.45c1.13.36 2.3.61 3.5.73A2 2 0 0 1 22 16.92z" /></svg>
                <span>Call Us</span>
              </a>

              <a href="/contact" className="nav-contact">Contact</a>

              <Link href="/contact" className="btn-primary">Book Appointment</Link>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrap">
            <Image
              src="/images/father.png"
              alt="Clinic family"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority
            />
            {/* plus sketch animation (SVG) */}
            <svg className="plus-sketch" viewBox="0 0 120 120" aria-hidden>
              <line className="plus-line" x1="60" y1="20" x2="60" y2="100" />
              <line className="plus-line" x1="20" y1="60" x2="100" y2="60" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
