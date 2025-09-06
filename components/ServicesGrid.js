import specialities from '../data/specialities';

export default function ServicesGrid(){
  const top = ['gout','sciatica','skin'];
  return (
    <section className="py-6">
      <h2 className="section-title">Our Key Services</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialities.filter(s=> top.includes(s.id)).map(s=> (
          <div key={s.id} className="card text-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-slate-600 mt-2">{s.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
}