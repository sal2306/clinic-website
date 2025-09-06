'use client';
import Link from 'next/link';

export default function Navbar(){ 
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Dr G Ali Clinic" className="w-10 h-10 rounded-md ring-1 ring-clinicGreen-100 bg-white p-1" />
          <span className="text-lg font-semibold text-clinicGreen-800">Dr G Ali Clinic</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-clinicGreen-700">
          <Link href="/" className="hover:text-clinicGreen-900 transition">Home</Link>
          <Link href="/vision" className="hover:text-clinicGreen-900 transition">Vision</Link>
          <Link href="/doctors" className="hover:text-clinicGreen-900 transition">Doctors</Link>
          <Link href="/blog" className="hover:text-clinicGreen-900 transition">Blog</Link>
          <Link href="/services" className="hover:text-clinicGreen-900 transition">Services</Link>
          <Link href="/contact" className="px-3 py-2 rounded-lg border border-clinicGreen-200 text-clinicGreen-800 hover:bg-clinicGreen-700 hover:text-white transition">Contact</Link>
          <Link href="/contact" className="ml-2 inline-flex items-center bg-clinicGreen-700 text-white px-4 py-2 rounded-lg shadow hover:scale-[1.02] transition">Book Appointment</Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md bg-white shadow-sm ring-1 ring-clinicGreen-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#065f46" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}