import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Globe, ArrowRight, Factory, ShieldCheck, Layers, Package } from "lucide-react"

export const metadata = {
  title: "About Us | Bariq Stone - Natural Granite Manufacturer & Exporter",
  description:
    "Learn about Bariq Stone - a premier natural stone manufacturer and exporter based in Chimakurthy, Andhra Pradesh. Committed to consistent quality, multiple granite varieties, and international export standards.",
}

export default function AboutPage() {
  const operations = [
    {
      title: "Direct Quarry Block Sourcing",
      description:
        "Strategically located in Chimakurthy, Andhra Pradesh—the world capital of Black Galaxy granite—with direct sourcing relationships across the Andhra Pradesh, Telangana, Karnataka, and Rajasthan granite quarry belts.",
      features: [
        "Rigorous on-site block selection assessing color consistency and structural density",
        "Continuous supply of rough granite blocks for domestic buyers and international sawmills",
        "Direct procurement minimizing intermediate handling and overheads",
      ],
      img: "/images/Quarry.png",
    },
    {
      title: "Sawing & Dimensional Calibration",
      description:
        "Utilizing advanced diamond wire rope cutters, heavy-duty gang saws, and vertical multi-blade cutters to dress rough blocks and slice uniform slabs with tight thickness tolerances.",
      features: [
        "Precision slicing to export standard 20mm, 30mm, and custom project gauges",
        "Square-edged cutting maximizing usable surface yield for international fabricators",
        "Strict +/- 1mm dimensional calibration checked across all slab corners",
      ],
      img: "/images/factory-1.jpeg",
    },
    {
      title: "Automated Line Polishing",
      description:
        "Multi-head continuous automated line polishing machines fitted with progressive diamond abrasives to produce high-gloss mirror finishes, contemporary honed satin surfaces, or tactile leather textures.",
      features: [
        "High-depth gloss reflection bringing out natural bronzite and quartz crystals",
        "Specialized texturing heads for honed, leathered, and flamed architectural finishes",
        "Uniform face polishing across the entire jumbo slab area without wave distortions",
      ],
      img: "/images/factory-3.jpeg",
    },
    {
      title: "Export Crating & Container Loading",
      description:
        "Specialized packaging infrastructure engineered for ocean freight. Every bundle is constructed with fumigated ISPM-15 pine timber, weather-tight plastic barriers, and reinforced steel banding.",
      features: [
        "Seaworthy wooden bundles and A-frame crates preventing face-to-face transit abrasion",
        "Direct container stuffing with heavy timber bracing and nylon ratchet tie-downs",
        "Prompt dispatch to Chennai, Krishnapatnam, and Vizag container terminals",
      ],
      img: "/images/loading-2.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0e1110]">
      {/* ─── Hero Section ─── */}
      <section className="relative py-28 bg-gradient-to-b from-[#141b17] via-[#0f1412] to-[#0e1110] border-b border-[#C8A96E]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
              Our Heritage & Operations
            </span>
            <span className="h-px w-10 bg-[#C8A96E]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            About <span className="text-[#C8A96E]">Bariq Stone</span>
          </h1>
          <p className="text-base sm:text-lg text-[#c8c2b6] max-w-3xl mx-auto leading-relaxed font-light">
            An established natural granite manufacturer, supplier, and exporter rooted in the heart of India&apos;s granite quarrying belt. Supplying premium slabs and blocks to international B2B partners.
          </p>
        </div>
      </section>

      {/* ─── Company Overview ─── */}
      <section className="py-24 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#C8A96E]" />
                <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white mb-6">
                From the Heart of South India&apos;s Natural Stone Belt
              </h2>
              <p className="text-[#c8c2b6] mb-5 text-base leading-relaxed">
                Bariq Stone is situated in Chimakurthy, Prakasam District, Andhra Pradesh. This region is internationally acclaimed as the exclusive geological birthplace of Black Galaxy granite and a primary processing hub for South Indian stone varieties.
              </p>
              <p className="text-[#a49e92] mb-6 text-sm sm:text-base leading-relaxed">
                Over years of dedicated natural stone processing, we have expanded our supply network beyond Black Galaxy to include Absolute Black, Steel Grey, Viscon White, Tan Brown, and exotic granites. We bridge the gap between regional quarry extraction and strict international export standards, providing commercial buyers with consistent slab selection, verified thickness calibration, and seaworthy container logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-black/40 border border-[#C8A96E]/20 rounded-xs">
                  <div className="text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-1">
                    Direct Sourcing
                  </div>
                  <div className="text-white text-sm font-medium">Multiple Granite Varieties</div>
                  <p className="text-[#787266] text-xs mt-1">Direct access to select quarry blocks</p>
                </div>
                <div className="p-4 bg-black/40 border border-[#C8A96E]/20 rounded-xs">
                  <div className="text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-1">
                    Export Ready
                  </div>
                  <div className="text-white text-sm font-medium">Global Container Freight</div>
                  <p className="text-[#787266] text-xs mt-1">ISPM-15 certified crating & documentation</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-gold text-xs px-7 py-3.5 uppercase tracking-wider font-semibold inline-flex items-center gap-2">
                  <span>Explore Granite Varieties</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="btn-outline-gold text-xs px-7 py-3.5 uppercase tracking-wider font-semibold">
                  Contact Our Team
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="img-zoom-container rounded-sm border border-[#C8A96E]/25 overflow-hidden shadow-2xl relative h-80 sm:h-96 w-full bg-black">
                <Image
                  src="/images/granite-warehouse-hero.jpg"
                  alt="Bariq Stone Granite Showroom Warehouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-xs text-[#E8DCC8]">
                  Bariq Stone Slab Inventory & Export Sizing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Pillars ─── */}
      <section className="py-20 bg-[#121614] border-y border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair text-white mb-3">
              Our Operating Principles
            </h2>
            <p className="text-[#9e988c] text-sm leading-relaxed">
              Built on transparency, technical precision, and dependable client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-premium p-8 border border-[#C8A96E]/20 bg-[#0e1110]">
              <div className="p-3 rounded-full bg-[#C8A96E]/10 w-fit mb-5">
                <Layers size={24} className="text-[#C8A96E]" />
              </div>
              <h3 className="text-xl font-bold font-playfair text-white mb-3">Material Authenticity</h3>
              <p className="text-xs sm:text-sm text-[#9c968a] leading-relaxed">
                We supply genuine, untreated natural granite. Every slab represents authentic geological crystalline structure—no chemical dye masks or artificial resin coatings that fade under sunlight.
              </p>
            </div>

            <div className="card-premium p-8 border border-[#C8A96E]/20 bg-[#0e1110]">
              <div className="p-3 rounded-full bg-[#C8A96E]/10 w-fit mb-5">
                <ShieldCheck size={24} className="text-[#C8A96E]" />
              </div>
              <h3 className="text-xl font-bold font-playfair text-white mb-3">Dimensional Precision</h3>
              <p className="text-xs sm:text-sm text-[#9c968a] leading-relaxed">
                Our saws and line polishers operate under tight tolerances, ensuring square corners, planar flat surfaces, and consistent thicknesses that facilitate hassle-free edge profiling and installation for overseas fabricators.
              </p>
            </div>

            <div className="card-premium p-8 border border-[#C8A96E]/20 bg-[#0e1110]">
              <div className="p-3 rounded-full bg-[#C8A96E]/10 w-fit mb-5">
                <Package size={24} className="text-[#C8A96E]" />
              </div>
              <h3 className="text-xl font-bold font-playfair text-white mb-3">Export Integrity</h3>
              <p className="text-xs sm:text-sm text-[#9c968a] leading-relaxed">
                From heat-treated fumigated wooden bundles to maritime container lashing and port coordination, our logistics team treats safety and damage prevention as an essential manufacturing phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── End-to-End Operational Workflow ─── */}
      <section className="py-24 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C8A96E]" />
              <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                Step-by-Step Operations
              </span>
              <span className="h-px w-8 bg-[#C8A96E]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white mb-4">
              Manufacturing & Processing Workflow
            </h2>
            <p className="text-[#9e988c] text-sm sm:text-base leading-relaxed">
              How we transform raw quarry blocks into export-ready polished granite slabs.
            </p>
          </div>

          <div className="space-y-20">
            {operations.map((op, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8A96E] uppercase tracking-widest mb-3">
                    <span>Phase 0{index + 1}</span>
                    <span className="h-px w-8 bg-[#C8A96E]/40" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-4">
                    {op.title}
                  </h3>
                  <p className="text-[#b0a89c] text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {op.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {op.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-xs sm:text-sm text-[#c4beaf]">
                        <span className="w-5 h-5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-[#C8A96E]" size={12} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="img-zoom-container rounded-sm border border-[#C8A96E]/20 overflow-hidden shadow-xl relative h-72 sm:h-96 w-full bg-black">
                    <Image
                      src={op.img}
                      alt={op.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-[#141b17] via-[#0f1412] to-[#141b17] border-t border-[#C8A96E]/20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold font-playfair text-white mb-4">
            Partner with a Dedicated Indian Granite Supplier
          </h2>
          <p className="text-[#a49e92] text-sm sm:text-base leading-relaxed mb-8">
            Contact our export desk to discuss container schedules, stone variety samples, and custom architectural cut-lists.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-xs px-8 py-3.5 uppercase tracking-wider font-semibold">
              Request a Quote
            </Link>
            <Link href="/products" className="btn-outline-gold text-xs px-8 py-3.5 uppercase tracking-wider font-semibold">
              View Product Catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
