import Navbar from "../components/Navbar.client";
import Footer from "../components/Footer.client";

export default function ContactPage(){
  return (
    <>
      <Navbar />
      <main className="container" style={{padding:30}}>
        <h1 className="section-title">Contact & Booking</h1>
        <div style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:20}}>
          <div>
            <p className="muted-sm">Phone: <strong>+91-6422359047</strong></p>
            <p className="muted-sm">Email: <strong>dr.nikhatali@gmail.com</strong></p>
            <p className="muted-sm">Address: 123 Clinic Road, City, State</p>
            <div style={{marginTop:16}}>
              <a href="tel:+916422359047" className="btn-primary" style={{marginRight:10}}>Call to Book</a>
              <a href="mailto:dr.nikhatali@gmail.com" className="btn-outline">Email</a>
            </div>
          </div>

          <aside className="card">
            <h4 style={{marginTop:0}}>Book Appointment</h4>
            <p className="muted-sm">Drop a message or call us to schedule your appointment.</p>
            <a href="tel:+916422359047" className="btn-primary" style={{display:'inline-block', marginTop:12}}>Book Now</a>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
