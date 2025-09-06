export default function DoctorsPreview(){
  const docs = [
    {name:'Dr G Ali', title:'B.Sc, D.H.M.S, MD (Patna)', img:'/images/dr-g-ali.jpg'},
    {name:'Dr Nikhat Ali', title:'BHMS — GD Memorial Homeopathic College', img:'/images/dr-nikhat-ali.jpg'}
  ];
  return (
    <section className="py-8">
      <h2 className="section-title">Meet Our Doctors</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map(d=> (
          <article key={d.name} className="card flex gap-4 items-center">
            <img src={d.img} alt={d.name} className="w-32 h-32 object-cover rounded-md" />
            <div>
              <h3 className="font-semibold text-lg">{d.name}</h3>
              <div className="text-sm text-slate-600 mt-1">{d.title}</div>
              <p className="text-slate-600 mt-3">Compassionate clinician with strong community roots and long experience in family medicine.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}