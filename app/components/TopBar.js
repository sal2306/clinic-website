"use client"
import { Phone, Mail } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          <a href="tel:+911234567890" className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> <span>+91 12345 67890</span>
          </a>
          <a href="mailto:example@clinic.com" className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> <span>example@clinic.com</span>
          </a>
        </div>
        <div>Open: Mon–Sat, 9AM–8PM. Sun: 9AM-3PM</div>
      </div>
    </div>
  )
}
