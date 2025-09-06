import Navbar from "../components/Navbar.client";
import Footer from "../components/Footer.client";

export default function Doctors(){
  return (
    <>
      <Navbar />
      <main className="container" style={{paddingTop:30, paddingBottom:40}}>
        <h2 className="section-title">Meet Our Doctors</h2>

        <div style={{display:"grid", gap:20, marginTop:12}}>
          <div className="doctor-row">
            <img src="/images/dr-g-ali.jpg" alt="Dr G Ali" className="doctor-img" />
            <div>
              <h3 style={{margin:0}}>Dr G Ali</h3>
              <div style={{fontWeight:600, marginTop:6}}>Qualifications: B.Sc, D.H.M.S (BU) & MD (Patna) — Registration No: 21723</div>
              <p style={{marginTop:10, color:'#334155'}}>Dr G Ali is a respected practitioner with decades of clinical experience and a deep rapport with the local community. Known for a patient-first approach, he brings an evidence-aware homeopathic practice to family medicine.</p>
              <ul className="clean-list">
                <li>Decades of clinical experience</li>
                <li>Trusted community physician</li>
                <li>Patient-first approach and careful follow-ups</li>
              </ul>
            </div>
          </div>

          <div className="doctor-row">
            <img src="/images/dr-nikhat-ali.jpg" alt="Dr Nikhat Ali" className="doctor-img" />
            <div>
              <h3 style={{margin:0}}>Dr Nikhat Ali</h3>
              <div style={{fontWeight:600, marginTop:6}}>Qualifications: BHMS — GD Memorial Homeopathic College, Patna (Batch of 2007). Medical Officer (Govt. of Jharkhand)</div>
              <p style={{marginTop:10, color:'#334155'}}>Dr Nikhat continues the family legacy with research-informed homeopathic practice and a focused interest in women & child health. Active in community health initiatives, she provides compassionate care across ages.</p>
              <ul className="clean-list">
                <li>Research-informed homeopathic practice</li>
                <li>Focus on maternal, pediatric and family health</li>
                <li>Active in community health & awareness programs</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
