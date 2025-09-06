export default function FeatureCards(){
  const items = [
    {title:'Professional Doctors', desc:'Experienced practitioners with years of expertise.', icon:'stethoscope'},
    {title:'Zero Side Effects', desc:'Safe, natural treatments with no harmful effects.', icon:'shield'},
    {title:'Online Consultation', desc:'Get expert advice from the comfort of your home.', icon:'laptop'},
  ];
  const renderIcon = (name) => {
    if(name==='stethoscope') return (<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M9 2v6" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 14a2 2 0 1 1-4 0v-2" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 8c-1 0-3 1-3 4v3a3 3 0 0 0 6 0v-3" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
    if(name==='shield') return (<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2l6 3v5c0 5-3 9-6 11-3-2-6-6-6-11V5l6-3z" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
    return (<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="12" rx="2" stroke="#059669" strokeWidth="1.5"/><path d="M7 8h10M7 12h6" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/></svg>);
  };
  return (
    <section className="relative -mt-12 mb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it)=> (
          <div key={it.title} className="card transform -translate-y-6 hover:translate-y-0 transition">
            <div className="mb-2">{renderIcon(it.icon)}</div>
            <h3 className="font-semibold text-lg">{it.title}</h3>
            <p className="text-slate-600 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}