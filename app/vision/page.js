import Navbar from "../components/Navbar.client";
import Footer from "../components/Footer.client";

export default function Vision(){
  return (
    <>
      <Navbar />
      <main className="container" style={{paddingTop:30, paddingBottom:40}}>
        <h2 className="section-title">Our Legacy & Vision</h2>

        <div style={{maxWidth:900, margin:"0 auto", padding:8, fontSize:16, color:"#334155"}}>
          <p><strong>Our Legacy:</strong> Dr G Ali Clinic has served the community for decades, building trust through consistent, compassionate care. Our founders prioritised patient dignity, careful case-taking and long-term wellbeing — values that continue to shape our practice today.</p>

          <p style={{marginTop:12}}><strong>Our Vision:</strong> To deliver compassionate, accessible, modern homeopathic care to our community — focusing on safety, trust and long-term wellbeing.</p>

          <ul style={{marginTop:12, lineHeight:1.8}} className="clean-list">
            <li>Individualized treatment plans based on thorough case-taking</li>
            <li>Safe, low-side-effect remedies suitable for all ages</li>
            <li>Community outreach and education for preventive health</li>
            <li>Continuing clinical development and adoption of research-backed methods</li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
