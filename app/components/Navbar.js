"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const nav = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo Left */}
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/images/logo.png"
              alt="Dr G Ali Clinic Logo"
              width={66}
              height={66}
              className="object-contain"
            />
          </Link>

          {/* Nav Center (desktop) */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex justify-center space-x-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-lg font-bold ${
                      pathname === item.href ? "text-accent" : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: CTA / mobile menu button */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden md:inline-block px-4 py-2 bg-accent text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition"
            >
              Book Now
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button onClick={() => setOpen(false)} className="p-2 bg-white rounded-full">
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex items-center justify-center h-full">
            <ul className="bg-white w-11/12 max-w-sm rounded-xl p-8 space-y-6 text-center">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block text-xl font-bold ${
                      pathname === item.href ? "text-accent" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
