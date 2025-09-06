'use client'

import EventsCarousel from './EventsCarousel'

export default function CommunityOutreach() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold text-blue-700 mb-2">
        Community Outreach & Events
      </h2>

      {/* Subheading / description */}
      <p className="text-center text-slate-600 mb-8">
        We organise health camps and awareness sessions regularly. Join us to
        stay informed and healthy!
      </p>

      {/* Carousel */}
      <EventsCarousel />
    </section>
  )
}
