"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()
  const nav = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo Left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Dr G Ali Clinic Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Nav Center */}
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-lg font-bold ${
                    pathname === item.href
                      ? "text-accent"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right placeholder (optional button) */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="px-4 py-2 bg-accent text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}
