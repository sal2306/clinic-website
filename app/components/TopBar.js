"use client"
import { Phone, Mail } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-2">
        <div className="flex items-center space-x-3 text-xs md:text-sm">
          <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-accent">
            <Phone className="w-4 h-4" /> <span>+91 12345 67890</span>
          </a>
          <a href="mailto:example@clinic.com" className="flex items-center gap-2 hover:text-accent">
            <Mail className="w-4 h-4" /> <span>example@clinic.com</span>
          </a>
        </div>
        <div className="text-xs md:text-sm">Open: Mon–Sat, 9AM–8PM</div>
      </div>
    </div>
  )
}
