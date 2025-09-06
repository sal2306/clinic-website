import Image from 'next/image'

export default function HealthyLiving() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose prose-sky">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Healthy Living with Homeopathy
      </h1>

      <Image
        src="/images/blog-1.jpg"
        alt="Healthy Living"
        width={800}
        height={400}
        className="rounded-xl mb-6"
      />

      <p>
        Homeopathy is not just about treating illness, but also about helping
        you live a balanced and healthy life. By addressing both body and mind,
        homeopathy can support your natural healing ability and promote
        long-term wellness.
      </p>

      <h2>Daily Lifestyle Tips</h2>
      <ul>
        <li>Maintain a balanced diet rich in whole foods.</li>
        <li>Stay hydrated — water supports natural detoxification.</li>
        <li>Prioritize adequate sleep and rest.</li>
        <li>Practice mindfulness or meditation to reduce stress.</li>
      </ul>

      <h2>Role of Homeopathy</h2>
      <p>
        Homeopathic remedies can be used to strengthen immunity, improve energy
        levels, and reduce susceptibility to common ailments like colds, flu,
        and allergies. Remedies are selected individually based on your overall
        constitution and symptoms.
      </p>

      <p className="mt-8">
        By combining lifestyle adjustments with individualized remedies,
        homeopathy offers a safe, gentle, and holistic path toward healthy
        living.
      </p>
    </article>
  )
}
