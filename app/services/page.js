import Navbar from "../components/Navbar.client";
import Footer from "../components/Footer.client";
import services from "../../data/services";

export default function ServicesPage(){
  return (
    <>
      <Navbar />
      <main className="container" style={{padding:30}}>
        <h1 className="section-title">Services</h1>
        <div style={{marginTop:12, display:'grid', gap:12}}>
          {services.map(s=>(
            <div key={s.id} className="card">
              <h3 style={{margin:0}}>{s.title}</h3>
              <p className="muted-sm">{s.description || ''}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
