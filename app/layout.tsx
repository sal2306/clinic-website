import './globals.css'

export const metadata = {
  title: 'Dr G Ali Clinic',
  description: 'Compassionate homeopathic care'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-slate-900">
        {children}
      </body>
    </html>
  )
}
