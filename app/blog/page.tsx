import Navbar from '../../components/Navbar'
import PageBanner from '../../components/PageBanner'
import Footer from '../../components/Footer'
export default function BlogPage(){
  return (
    <div>
      <Navbar />
      <main className="page-bg-white">
        <div className="bg-white/90 min-h-screen">
          <PageBanner title="Homeopathy Awareness" />
          <div className="max-w-4xl mx-auto px-6 py-12 grid gap-8">
            <article className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold text-blue-800">What is Homeopathy?</h2>
              <p className="mt-3 text-slate-700">Homeopathy is a system of medicine that uses highly diluted substances to stimulate the body's natural healing processes. It is based on the principle of 'like cures like'.</p>
            </article>
            <article className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold text-blue-800">Founder & Philosophy</h2>
              <p className="mt-3 text-slate-700">Samuel Hahnemann founded homeopathy in the late 18th century with a philosophy of individualized treatment.</p>
            </article>
            <article className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold text-blue-800">Therapy Techniques</h2>
              <p className="mt-3 text-slate-700">Detailed case-taking, individualized remedies, follow-up and dose adjustment.</p>
            </article>
            <article className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold text-blue-800">Effectiveness & Safety</h2>
              <p className="mt-3 text-slate-700">Remedies are typically highly diluted and have low risk of side effects when used correctly.</p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
