export default function Footer(){
  return (
    <footer className="mt-12">
      <div className="site-footer-contrast py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="logo" className="w-12 h-12 rounded bg-white p-2 ring-1 ring-clinicGreen-100" />
            <div>
              <div className="font-semibold text-clinicGreen-800">Dr G Ali Clinic</div>
              <div className="text-slate-600 text-sm">Compassionate homeopathic care — family oriented and community focused.</div>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <div className="font-semibold text-slate-700">Explore</div>
              <ul className="mt-3 space-y-2">
                <li><a href="/doctors" className="text-clinicGreen-700 hover:underline">Our Doctors</a></li>
                <li><a href="/vision" className="text-clinicGreen-700 hover:underline">Our Legacy & Vision</a></li>
                <li><a href="/blog" className="text-clinicGreen-700 hover:underline">Blog</a></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-slate-700">Contact</div>
              <div className="text-slate-600 mt-3">Phone: +91 6422359047<br/>Email: <a href="mailto:dr.nikhatali@gmail.com" className="text-clinicGreen-700">dr.nikhatali@gmail.com</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-600">&copy; {new Date().getFullYear()} Dr G Ali Clinic — All rights reserved.</div>
      </div>
    </footer>
  );
}