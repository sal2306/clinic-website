export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t border-blue-100 text-slate-700 py-12 mt-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2"><div className="font-semibold text-blue-800">Dr G Ali Clinic</div></div>
          <div className="text-slate-600 text-sm">Compassionate homeopathic care - family oriented and community focused.</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div>
            <div className="font-semibold text-blue-700">Contact</div>
            <div className="mt-3 flex flex-col gap-3">
              <a href="tel:+916422359047" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-800">Call Now</a>
              <a href="mailto:dr.nikhatali@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-blue-100 text-blue-800">Email Us</a>
            </div>
          </div>

          <div>
            <div className="font-semibold text-blue-700">Explore</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/doctors" className="text-blue-700 hover:underline">Our Doctors</a></li>
              <li><a href="/vision" className="text-blue-700 hover:underline">Our Legacy & Vision</a></li>
              <li><a href="/blog" className="text-blue-700 hover:underline">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 mt-8">© 2025 Dr G Ali Clinic</div>
    </footer>
  )
}
