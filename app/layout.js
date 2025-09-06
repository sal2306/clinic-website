import "./globals.css"
import TopBar from "./components/TopBar"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const metadata = {
  title: "Dr G Ali Clinic",
  description: "Trusted Homeopathy Treatments",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
