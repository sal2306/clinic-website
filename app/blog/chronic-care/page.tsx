import Image from 'next/image'

export default function ChronicCare() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose prose-sky">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Managing Chronic Conditions with Homeopathy
      </h1>

      <Image
        src="/images/blog-2.jpg"
        alt="Chronic Care"
        width={800}
        height={400}
        className="rounded-xl mb-6"
      />

      <p>
        Chronic conditions such as arthritis, asthma, eczema, or migraines
        require long-term management. Homeopathy focuses on treating the root
        causes rather than just controlling symptoms, helping patients achieve
        sustained relief and improved quality of life.
      </p>

      <h2>Our Approach</h2>
      <p>
        Every chronic case is unique. We take a detailed history to understand
        your physical, mental, and emotional health, then prescribe remedies
        tailored to your constitution.
      </p>

      <h2>Benefits of Homeopathic Care</h2>
      <ul>
        <li>Gentle remedies with minimal side effects.</li>
        <li>Personalized treatment plans for each patient.</li>
        <li>Support for both physical symptoms and emotional wellbeing.</li>
        <li>Long-term focus on prevention and overall vitality.</li>
      </ul>

      <p className="mt-8">
        With consistent follow-up and adjustments as needed, homeopathy provides
        sustainable relief and empowers you to live a healthier, more balanced
        life.
      </p>
    </article>
  )
}
