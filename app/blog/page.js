import Navbar from "../components/Navbar.client";
import Footer from "../components/Footer.client";

export default function Blog(){
  return (
    <>
      <Navbar />
      <main className="container" style={{paddingTop:30, paddingBottom:40}}>
        <h1 style={{fontSize:28, marginBottom:12}}>Homeopathy Awareness</h1>

        <article className="card" style={{lineHeight:1.75}}>
          <h2>What is Homeopathy?</h2>
          <p>Homeopathy is a system of medicine founded by Samuel Hahnemann in the late 18th century. It focuses on individualized remedies and careful case-taking. Remedies are selected to match the patient's full symptom picture rather than just the disease label.</p>

          <h3 style={{marginTop:16}}>Founder & Philosophy</h3>
          <p>Samuel Hahnemann introduced the law of similars — the idea that 'like cures like'. Modern practice combines classical thinking with an evidence-aware approach to case management and safety.</p>

          <h3 style={{marginTop:16}}>Therapy Techniques</h3>
          <p>Therapy typically involves detailed consultation, individualized prescription of remedies, dosage adjustment and follow-up. Treatment aims for long-term improvement with minimal side-effects.</p>

          <h3 style={{marginTop:16}}>Effectiveness & Safety</h3>
          <p>Many patients report benefit; outcomes vary. Remedies, when prescribed correctly, are usually low risk. If you have questions about interactions or conventional treatments, discuss them with your practitioner.</p>
        </article>
      </main>

      <Footer />
    </>
  );
}
