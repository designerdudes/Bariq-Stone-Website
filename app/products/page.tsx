import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Ruler, Sparkles, ShieldCheck, Package, Layers } from "lucide-react"
import { GRANITE_VARIETIES } from "@/lib/granite-data"

export const metadata = {
  title: "Granite Collection & Specifications | Bariq Stone",
  description:
    "Explore our complete range of premium natural Indian granite varieties: Black Galaxy, Absolute Black, Steel Grey, Viscon White, Tan Brown, Black Pearl, and Cosmic Black. Available in jumbo gang saw slabs, vertical cutter slabs, and tailored project sizes.",
}

export default function ProductsPage() {
  const commonFinishes = [
    {
      name: "Mirror Polished",
      tag: "Highest Reflectivity",
      description: "Automated multi-head diamond polishing producing a brilliant, glass-like finish that enhances the stone's crystalline depth and color intensity.",
      applications: "Kitchen islands, countertops, hotel lobbies, feature walls",
    },
    {
      name: "Honed / Satin Matte",
      tag: "Contemporary Low-Glare",
      description: "Smooth, non-reflective velvety surface with minimal sheen. Accentuates mineral nuances without high reflectivity.",
      applications: "Modern interior floors, bathroom vanities, commercial hallways",
    },
    {
      name: "Leathered / Lapatura",
      tag: "Tactile Textured Grip",
      description: "Brushed with diamond-impregnated filaments to create an organic, textured surface that hides water spots and fingerprints.",
      applications: "Outdoor kitchens, luxury residential countertops, bar surfaces",
    },
    {
      name: "Flamed / Thermal",
      tag: "Maximum Slip Resistance",
      description: "Treated with high-temperature oxy-acetylene torching causing surface quartz to fracture, creating a rough, non-slip textured finish.",
      applications: "Exterior pavers, pool copings, outdoor steps, commercial walkways",
    },
  ]

  const standardDimensions = [
    {
      category: "Gang Saw Jumbo Slabs",
      dimensions: "280–320 cm x 180–205 cm (110–126″ x 70–80″)",
      thicknesses: "20mm (3/4″), 30mm (1-1/4″)",
      primaryUse: "Seamless oversized kitchen islands, commercial cladding, architectural monuments",
    },
    {
      category: "Vertical Cutter Slabs",
      dimensions: "180–270 cm x 60–90 cm (70–106″ x 24–36″)",
      thicknesses: "18mm, 20mm, 30mm",
      primaryUse: "Standard residential kitchen countertops, bathroom vanities, stair treads",
    },
    {
      category: "Calibrated Cut-to-Size Tiles",
      dimensions: "60x60 cm, 60x30 cm, 80x80 cm, 120x60 cm",
      thicknesses: "12mm, 15mm, 20mm",
      primaryUse: "Commercial concourse flooring, exterior rain-screen cladding, plazas",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0e1110]">
      {/* ─── Hero Banner ─── */}
      <section className="relative py-28 bg-gradient-to-b from-[#141b17] via-[#0f1412] to-[#0e1110] border-b border-[#C8A96E]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
              B2B Stone Catalogue
            </span>
            <span className="h-px w-10 bg-[#C8A96E]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            Our Granite <span className="text-[#C8A96E]">Collection</span>
          </h1>
          <p className="text-base sm:text-lg text-[#c0bab0] max-w-3xl mx-auto leading-relaxed">
            Supplying premium Indian natural granite slabs and blocks. From historic Chimakurthy Black Galaxy to dense Absolute Black, durable Steel Grey, and flowing Viscon White—tailored for global importers, distributors, and contractors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-xs px-7 py-3.5 uppercase tracking-wider font-semibold">
              Request Price Quotation
            </Link>
            <a href="#catalogue" className="btn-outline-gold text-xs px-6 py-3.5 uppercase tracking-wider font-semibold">
              Browse Varieties Below
            </a>
          </div>
        </div>
      </section>

      {/* ─── Product Catalogue Section ─── */}
      <section id="catalogue" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C8A96E]" />
              <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                Natural Stone Varieties
              </span>
              <span className="h-px w-8 bg-[#C8A96E]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white mb-4">
              Granite Slabs & Technical Profiles
            </h2>
            <p className="text-[#9e988c] text-sm sm:text-base leading-relaxed">
              Click on any stone variety to inspect mineral composition, technical specifications, and export packaging options.
            </p>
          </div>

          <div className="space-y-16">
            {GRANITE_VARIETIES.map((granite, index) => (
              <div
                key={granite.id}
                id={granite.slug}
                className="card-premium p-6 sm:p-10 border border-[#C8A96E]/25 bg-[#121614] rounded-sm scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left: Granite Image & Badges */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="img-zoom-container rounded-sm border border-[#C8A96E]/30 overflow-hidden relative h-72 sm:h-96 w-full bg-black shadow-xl">
                      <Image
                        src={granite.image}
                        alt={`${granite.name} - Polished Slab Surface Texture`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute top-4 left-4 bg-black/85 border border-[#C8A96E]/40 text-[#C8A96E] text-xs font-semibold px-3 py-1 rounded-xs uppercase tracking-wider">
                        {granite.categoryLabel}
                      </div>
                    </div>

                    <div className="p-4 bg-black/40 border border-[#C8A96E]/15 rounded-sm text-xs text-[#a49e92]">
                      <div className="text-[#C8A96E] font-semibold uppercase tracking-wider mb-1">Quarry Location</div>
                      <div className="text-white font-medium">{granite.origin}</div>
                    </div>
                  </div>

                  {/* Right: Granite Details & Technical Specs */}
                  <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 text-[#C8A96E] text-xs font-semibold uppercase tracking-widest mb-2">
                      <Sparkles size={13} />
                      <span>{granite.tagline}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-4">
                      {granite.name}
                    </h3>

                    <p className="text-[#c8c2b6] text-sm sm:text-base leading-relaxed mb-6">
                      {granite.longDescription}
                    </p>

                    {/* Mineral Pattern */}
                    <div className="mb-6 p-4 bg-black/30 border-l-2 border-[#C8A96E] rounded-r-sm">
                      <div className="text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-1">
                        Mineral & Color Pattern
                      </div>
                      <p className="text-[#a8a296] text-xs sm:text-sm leading-relaxed">
                        {granite.mineralPattern}
                      </p>
                    </div>

                    {/* Technical Specifications Grid */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs uppercase font-semibold text-white tracking-wider">
                          Physical & Mechanical Properties
                        </span>
                        <span className="text-[11px] text-[#8c867a]">
                          {granite.specifications.label}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-xs">
                          <div className="text-[11px] text-[#787266] uppercase">Apparent Density</div>
                          <div className="text-white text-xs font-semibold mt-0.5">{granite.specifications.density}</div>
                        </div>
                        <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-xs">
                          <div className="text-[11px] text-[#787266] uppercase">Water Absorption</div>
                          <div className="text-white text-xs font-semibold mt-0.5">{granite.specifications.waterAbsorption}</div>
                        </div>
                        <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-xs">
                          <div className="text-[11px] text-[#787266] uppercase">Mohs Hardness</div>
                          <div className="text-white text-xs font-semibold mt-0.5">{granite.specifications.mohsHardness}</div>
                        </div>
                        <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-xs">
                          <div className="text-[11px] text-[#787266] uppercase">Compressive Strength</div>
                          <div className="text-white text-xs font-semibold mt-0.5">{granite.specifications.compressiveStrength}</div>
                        </div>
                        <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-xs sm:col-span-2">
                          <div className="text-[11px] text-[#787266] uppercase">Flexural Strength</div>
                          <div className="text-white text-xs font-semibold mt-0.5">{granite.specifications.flexuralStrength}</div>
                        </div>
                      </div>
                    </div>

                    {/* Finishes & Applications */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="p-3.5 bg-black/30 border border-[#C8A96E]/15 rounded-xs">
                        <div className="text-xs uppercase font-semibold text-[#C8A96E] mb-2 flex items-center gap-1.5">
                          <Layers size={13} />
                          <span>Supplied Finishes</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {granite.finishes.map((f) => (
                            <span key={f} className="text-[11px] text-[#d4cec2] bg-black/50 border border-[#C8A96E]/20 px-2 py-0.5 rounded-xs">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 bg-black/30 border border-[#C8A96E]/15 rounded-xs">
                        <div className="text-xs uppercase font-semibold text-[#C8A96E] mb-2 flex items-center gap-1.5">
                          <CheckCircle size={13} />
                          <span>Typical Applications</span>
                        </div>
                        <div className="text-xs text-[#a49e92] space-y-1">
                          {granite.applications.slice(0, 3).map((app) => (
                            <div key={app} className="flex items-center gap-1.5">
                              <span className="text-[#C8A96E]">•</span>
                              <span>{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <Link
                        href={`/contact?variety=${encodeURIComponent(granite.name)}`}
                        className="btn-gold text-xs px-6 py-3 uppercase tracking-wider font-semibold inline-flex items-center gap-2"
                      >
                        <span>Enquire About {granite.name}</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href={`/products/${granite.slug}`}
                        className="btn-outline-gold text-xs px-6 py-3 uppercase tracking-wider font-semibold"
                      >
                        Individual Product Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Standard Dimensions & Finishes Section ─── */}
      <section className="py-20 bg-[#121614] border-y border-[#C8A96E]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C8A96E]" />
              <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                Technical Sizing
              </span>
              <span className="h-px w-8 bg-[#C8A96E]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white mb-3">
              Standard Dimensions & Thicknesses
            </h2>
            <p className="text-[#9e988c] text-sm leading-relaxed">
              We calibrate and cut slabs to international dimensional tolerances to suit maritime container payload requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {standardDimensions.map((dim, i) => (
              <div key={i} className="card-premium p-6 border border-[#C8A96E]/20 bg-[#0e1110]">
                <div className="text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-2">
                  {dim.category}
                </div>
                <div className="text-white font-bold font-playfair text-lg mb-2">
                  {dim.dimensions}
                </div>
                <div className="text-xs text-[#a49e92] mb-3">
                  <span className="text-[#C8A96E] font-medium">Thicknesses:</span> {dim.thicknesses}
                </div>
                <p className="text-xs text-[#8c867a] leading-relaxed">
                  {dim.primaryUse}
                </p>
              </div>
            ))}
          </div>

          {/* Surface Finishes Guide */}
          <div className="pt-10 border-t border-[#C8A96E]/15">
            <h3 className="text-2xl font-bold font-playfair text-white mb-6 text-center">
              Available Surface Finishes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonFinishes.map((f, i) => (
                <div key={i} className="p-5 bg-black/40 border border-[#C8A96E]/20 rounded-sm">
                  <span className="text-[11px] text-[#C8A96E] font-semibold uppercase tracking-wider block mb-1">
                    {f.tag}
                  </span>
                  <h4 className="text-lg font-bold text-white font-playfair mb-2">{f.name}</h4>
                  <p className="text-xs text-[#9e988c] leading-relaxed mb-3">{f.description}</p>
                  <div className="text-[11px] text-[#7c766c]">
                    <span className="text-[#b0a898] font-medium">Common uses:</span> {f.applications}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Export Packaging & Shipping Note ─── */}
      <section className="py-20 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 p-3 bg-[#C8A96E]/10 border border-[#C8A96E]/30 rounded-full mb-6 text-xs text-[#C8A96E] font-semibold uppercase tracking-wider">
            <Package size={15} />
            <span>Export Packaging & Quality Assurance</span>
          </div>
          <h2 className="text-3xl font-bold font-playfair text-white mb-4">
            Custom Project Orders & Mixed Containers
          </h2>
          <p className="text-[#a09a8e] text-sm sm:text-base leading-relaxed mb-8">
            Can’t find the exact stone variety or dimension you need? We support customized procurement across Andhra Pradesh, Telangana, Karnataka, and Rajasthan quarry belts. We can also coordinate mixed-variety container allocations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-xs px-8 py-3.5 uppercase tracking-wider font-semibold">
              Request Custom Container Quote
            </Link>
            <a href="mailto:info@bariqstone.com" className="btn-outline-gold text-xs px-8 py-3.5 uppercase tracking-wider font-semibold">
              Email info@bariqstone.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
