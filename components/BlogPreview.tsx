'use client'

import Link from 'next/link'
import Image from 'next/image'

const POSTS = [
  {
    id: 'healthy-living',
    title: 'Healthy Living with Homeopathy',
    excerpt:
      'Explore lifestyle tips and simple remedies to boost your immunity and overall health.',
    image: '/images/blog-1.jpg',
    href: '/blog/healthy-living',
  },
  {
    id: 'chronic-care',
    title: 'Managing Chronic Conditions',
    excerpt:
      'Understand how homeopathy supports long-term management of chronic conditions effectively.',
    image: '/images/blog-2.jpg',
    href: '/blog/chronic-care',
  },
]

export default function BlogPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading centered with link on right */}
      <div className="flex items-center justify-center relative mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center w-full">
          From Our Blog
        </h2>

        <Link href="/blog" className="absolute right-0 text-sky-600 hover:underline text-sm md:text-base">
          See all posts
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {POSTS.map((post) => (
          <article
            key={post.id}
            className="group rounded-2xl bg-white/90 p-6 shadow-md hover:shadow-2xl transition-shadow duration-200"
          >
            <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden bg-slate-100 mb-4">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform"
              />
            </div>

            <h3 className="text-sky-700 font-semibold text-lg md:text-xl mb-2">{post.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>

            <Link
              href={post.href}
              className="text-sky-600 text-sm font-medium hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
