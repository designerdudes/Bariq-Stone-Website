import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, Layers, ShieldCheck, Package, Phone, Mail } from "lucide-react"
import { GRANITE_VARIETIES, GraniteVariety } from "@/lib/granite-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return GRANITE_VARIETIES.map((v) => ({
    slug: v.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const granite = GRANITE_VARIETIES.find((v) => v.slug === slug)

  if (!granite) {
    return {
      title: "Granite Variety Not Found | Bariq Stone",
    }
  }

  return {
    title: `${granite.name} Slabs & Blocks | Bariq Stone Exporter`,
    description: granite.shortDescription,
    openGraph: {
      title: `${granite.name} - Premium Indian Natural Granite`,
      description: granite.shortDescription,
      images: [
        {
          url: granite.image,
          width: 1000,
          height: 750,
          alt: `${granite.name} Natural Granite Slab`,
        },
      ],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const granite = GRANITE_VARIETIES.find((v) => v.slug === slug)

  if (!granite) {
    notFound()
  }

  const otherVarieties = GRANITE_VARIETIES.filter((v) => v.slug !== granite.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0e1110]">
      {/* ─── Breadcrumb & Navigation Header ─── */}
      <section className="py-6 bg-[#090c0a] border-b border-[#C8A96E]/15 text-xs text-[#a09a8e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#C8A96E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#C8A96E] transition-colors">
              Granite Collection
            </Link>
            <span>/</span>
            <span className="text-[#C8A96E] font-medium">{granite.name}</span>
          </div>

          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 text-[#C8A96E] hover:underline"
          >
            <ArrowLeft size={13} />
            <span>All Granite Varieties</span>
          </Link>
        </div>
      </section>

      {/* ─── Product Overview Section ─── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#141b17] to-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Image */}
            <div className="lg:col-span-6 space-y-4">
              <div className="img-zoom-container rounded-sm border border-[#C8A96E]/30 overflow-hidden relative h-80 sm:h-[480px] w-full bg-black shadow-2xl">
                <Image
                  src={granite.image}
                  alt={`${granite.name} Slab Surface Texture`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-black/85 border border-[#C8A96E]/40 text-[#C8A96E] text-xs font-semibold px-3 py-1 rounded-xs uppercase tracking-wider">
                  {granite.categoryLabel}
                </div>
              </div>

              {/* Origin card */}
              <div className="p-4 bg-black/40 border border-[#C8A96E]/20 rounded-sm flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#7c766c] uppercase block">Quarry Location</span>
                  <span className="text-white font-medium text-sm">{granite.origin}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#7c766c] uppercase block">Export Grade</span>
                  <span className="text-[#C8A96E] font-medium text-sm">Commercial & Premium Grade</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Information & Overview */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[#C8A96E] text-xs font-semibold uppercase tracking-widest mb-3">
                <Sparkles size={14} />
                <span>{granite.tagline}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold font-playfair text-white mb-6">
                {granite.name}
              </h1>

              <p className="text-[#c8c2b6] text-base leading-relaxed mb-6 font-light">
                {granite.longDescription}
              </p>

              {/* Mineral Pattern */}
              <div className="p-4 bg-black/40 border-l-3 border-[#C8A96E] rounded-r-sm mb-6">
                <div className="text-xs font-semibold uppercase text-[#C8A96E] tracking-wider mb-1">
                  Color & Mineral Composition
                </div>
                <p className="text-[#a49e92] text-xs sm:text-sm leading-relaxed">
                  {granite.mineralPattern}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xs uppercase font-semibold text-white tracking-wider">
                    Physical & Mechanical Characteristics
                  </h3>
                  <span className="text-[11px] text-[#8c867a]">
                    {granite.specifications.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 bg-black/30 border border-[#C8A96E]/15 rounded-xs">
                    <span className="text-[11px] text-[#787266] uppercase block">Density</span>
                    <span className="text-white font-semibold text-xs mt-0.5 block">{granite.specifications.density}</span>
                  </div>
                  <div className="p-3 bg-black/30 border border-[#C8A96E]/15 rounded-xs">
                    <span className="text-[11px] text-[#787266] uppercase block">Water Absorption</span>
                    <span className="text-white font-semibold text-xs mt-0.5 block">{granite.specifications.waterAbsorption}</span>
                  </div>
                  <div className="p-3 bg-black/30 border border-[#C8A96E]/15 rounded-xs">
                    <span className="text-[11px] text-[#787266] uppercase block">Mohs Hardness</span>
                    <span className="text-white font-semibold text-xs mt-0.5 block">{granite.specifications.mohsHardness}</span>
                  </div>
                  <div className="p-3 bg-black/30 border border-[#C8A96E]/15 rounded-xs">
                    <span className="text-[11px] text-[#787266] uppercase block">Compressive Strength</span>
                    <span className="text-white font-semibold text-xs mt-0.5 block">{granite.specifications.compressiveStrength}</span>
                  </div>
                  <div className="p-3 bg-black/30 border border-[#C8A96E]/15 rounded-xs sm:col-span-2">
                    <span className="text-[11px] text-[#787266] uppercase block">Flexural Strength</span>
                    <span className="text-white font-semibold text-xs mt-0.5 block">{granite.specifications.flexuralStrength}</span>
                  </div>
                </div>
              </div>

              {/* Available Finishes */}
              <div className="mb-8">
                <h3 className="text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers size={14} />
                  <span>Available Surface Finishes</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {granite.finishes.map((f) => (
                    <span key={f} className="text-xs text-[#d0cac0] bg-black/40 border border-[#C8A96E]/20 px-3 py-1 rounded-xs">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href={`/contact?variety=${encodeURIComponent(granite.name)}`}
                  className="btn-gold text-xs px-8 py-4 uppercase tracking-wider font-semibold inline-flex items-center gap-2 justify-center"
                >
                  <span>Request Quote for {granite.name}</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="mailto:info@bariqstone.com"
                  className="btn-outline-gold text-xs px-6 py-4 uppercase tracking-wider font-semibold inline-flex items-center gap-2 justify-center"
                >
                  <Mail size={15} />
                  <span>Email Export Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dimensions & Applications ─── */}
      <section className="py-20 bg-[#121614] border-y border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Dimensions */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold text-[#C8A96E] mb-3">
                <Package size={14} />
                <span>Available Dimensions & Slicing</span>
              </div>
              <h2 className="text-2xl font-bold font-playfair text-white mb-6">
                Standard Supply Formats
              </h2>
              <div className="space-y-4">
                {granite.sizes.map((s, i) => (
                  <div key={i} className="p-4 bg-black/40 border border-[#C8A96E]/20 rounded-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-white">{s.type}</span>
                      <span className="text-xs text-[#C8A96E] font-medium">{s.thickness}</span>
                    </div>
                    <div className="text-xs text-[#a09a8e] mb-1">{s.dimensions}</div>
                    <div className="text-[11px] text-[#787266]">{s.usage}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Packaging */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold text-[#C8A96E] mb-3">
                <ShieldCheck size={14} />
                <span>Applications & Export Crating</span>
              </div>
              <h2 className="text-2xl font-bold font-playfair text-white mb-6">
                Suitability & Protection
              </h2>

              <div className="mb-6">
                <div className="text-xs uppercase font-semibold text-[#c0bab0] mb-3">
                  Typical Project Applications:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {granite.applications.map((app) => (
                    <div key={app} className="flex items-center gap-2 text-xs text-[#a09a8e] p-2 bg-black/25 rounded-xs">
                      <CheckCircle size={13} className="text-[#C8A96E] flex-shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-black/40 border border-[#C8A96E]/20 rounded-sm">
                <div className="text-xs uppercase font-semibold text-[#C8A96E] mb-2 flex items-center gap-2">
                  <Package size={14} />
                  <span>Export Packing Standard</span>
                </div>
                <p className="text-xs text-[#a49e92] leading-relaxed">
                  {granite.exportPackaging}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cross-link Other Varieties ─── */}
      <section className="py-20 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold font-playfair text-white">
              Explore Other Granite Varieties
            </h2>
            <Link href="/products" className="text-xs text-[#C8A96E] hover:underline flex items-center gap-1 uppercase tracking-wider">
              <span>View All Varieties</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherVarieties.map((v) => (
              <Link
                key={v.id}
                href={`/products/${v.slug}`}
                className="card-premium group border border-[#C8A96E]/20 hover:border-[#C8A96E]/50 overflow-hidden bg-[#121614] rounded-sm transition-all"
              >
                <div className="relative h-48 w-full bg-black">
                  <Image src={v.image} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] text-[#C8A96E] uppercase tracking-wider block mb-1">{v.categoryLabel}</span>
                  <h3 className="text-lg font-bold font-playfair text-white group-hover:text-[#C8A96E] transition-colors">{v.name}</h3>
                  <p className="text-xs text-[#9c968a] mt-2 line-clamp-2">{v.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
