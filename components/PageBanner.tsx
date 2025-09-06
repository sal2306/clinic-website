type PageBannerProps = {
  title: string
}

export default function PageBanner({ title }: PageBannerProps) {
  return (
    <section className="relative bg-hero bg-cover bg-center">
      <div className="bg-white/70 backdrop-blur-sm py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-blue-800">{title}</h1>
        </div>
      </div>
    </section>
  )
}
