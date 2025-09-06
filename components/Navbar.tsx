'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-grey/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo without background box */}
          <img
            src="/images/logo.png"
            alt="Dr G Ali Clinic Logo"
            className="h-20 w-auto"
          />
          <span className="text-lg font-semibold text-blue-800">
            Dr G Ali Clinic
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/vision" className="nav-link">Vision</Link>
          <Link href="/doctors" className="nav-link">Doctors</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/services" className="nav-link">Specialities</Link>

          {/* Contact as main CTA */}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center btn-soft btn-primary"
          >
            Contact
          </Link>
        </nav>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="p-2 rounded-md bg-white shadow-sm ring-1 ring-blue-100"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>

      {/* mobile drawer (slides in from right) */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <aside
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-6"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="mb-4 p-2 rounded-md bg-slate-50"
            >
              Close
            </button>
            <nav className="flex flex-col gap-3">
              <Link href="/" onClick={() => setOpen(false)} className="nav-link">
                Home
              </Link>
              <Link href="/vision" onClick={() => setOpen(false)} className="nav-link">
                Vision
              </Link>
              <Link href="/doctors" onClick={() => setOpen(false)} className="nav-link">
                Doctors
              </Link>
              <Link href="/blog" onClick={() => setOpen(false)} className="nav-link">
                Blog
              </Link>
              <Link href="/services" onClick={() => setOpen(false)} className="nav-link">
                Specialities
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center btn-soft btn-primary"
              >
                Contact
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
