export default function BlogTeaser(){
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-blue-800 text-center">Latest from our Blog</h2>
      <div className="mt-6 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <article className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-xl">What is Homeopathy?</h3>
          <p className="text-slate-600 mt-2">A short primer on principles, safety and what to expect from a consultation.</p>
          <a href="/blog" className="mt-3 inline-block text-blue-700 hover:underline">Read more →</a>
        </article>
      </div>
    </section>
  )
}
