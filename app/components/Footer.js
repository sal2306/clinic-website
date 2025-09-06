import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('/images/backgrounds/bg-footer.jpg')" }}>
      <div className="max-w-7xl mx-auto text-center bg-black/60 p-6 rounded-lg">
        <p>&copy; {new Date().getFullYear()} Dr G Ali Clinic. All rights reserved.</p>
        <div className="mt-3 flex justify-center gap-6">
          <Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-accent">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
