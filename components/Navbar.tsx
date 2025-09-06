'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/vision', label: 'Vision' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/blog', label: 'Blog' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 shadow">
      {/* top info bar */}
      <div className="bg-blue-300 font-semibold text-black text-sm">
        <div className="max-w-6xl mx-auto flex justify-between px-6 py-2">
          <span>📞 +91 6422 359047</span>
          <span>✉ dr.nikhatali@gmail.com</span>
          <span>🕒 Mon-Sat: 9am–8pm/Sun: 9am–2pm</span>
        </div>
      </div>

      {/* main nav */}
      <div className="bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Dr G Ali Clinic"
              className="h-10 w-auto"
            />
            <span className="font-bold text-blue-500 text-lg">
              Dr G Ali Clinic
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex gap-4 justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  pathname === item.href
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:bg-blue-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(true)}
              className="px-3 py-2 rounded bg-blue-700 text-white"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <aside
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="mb-4 px-3 py-2 bg-slate-100 rounded"
            >
              Close
            </button>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-full font-medium ${
                    pathname === item.href
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
