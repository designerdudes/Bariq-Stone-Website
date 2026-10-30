import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  Factory,
  Layers,
  ShieldCheck,
  Package,
  Sparkles,
  HelpCircle,
  Truck,
  Mail,
  Phone,
} from "lucide-react"
import { GRANITE_VARIETIES } from "@/lib/granite-data"

export const metadata = {
  title: "Bariq Stone | Premium Granite Manufacturing, Supply & Export",
  description:
    "Granite Solutions for Global Markets. Premier manufacturer, supplier, and exporter of Black Galaxy, Absolute Black, Steel Grey, Viscon White, and Tan Brown granite slabs and blocks.",
}

export default function HomePage() {
  const faqs = [
    {
      question: "Which granite varieties can Bariq Stone supply?",
      answer:
        "Bariq Stone supplies multiple premium Indian granite varieties including Black Galaxy, Absolute Black, Steel Grey, Viscon White, Tan Brown, Black Pearl, Cosmic Black, and River Black. We also coordinate custom sourcing for other South and North Indian natural stones upon buyer specification.",
    },
    {
      question: "What slab dimensions and thicknesses are available?",
      answer:
        "We supply Gang Saw jumbo slabs (typically 280–320 cm x 180–205 cm) and vertical cutter slabs (180–270 cm x 60–90 cm). Standard export thicknesses are 20mm and 30mm, with custom thicknesses (15mm, 40mm) and cut-to-size project tiles available on enquiry.",
    },
    {
      question: "Can I request specific surface finishes?",
      answer:
        "Yes. Depending on the stone variety and application, we supply mirror polished, honed (matte), leather / lapato, flamed, shot-blasted, and bush-hammered finishes suitable for interior and exterior architectural requirements.",
    },
    {
      question: "How are granite slabs packaged for international ocean freight?",
      answer:
        "Slabs are secured inside heavy-duty, fumigated ISPM-15 certified wooden bundles and crates. We use polyethylene waterproof wrapping, protective corner guards, and high-tensile steel strapping to ensure zero surface abrasion and damage during sea transit.",
    },
    {
      question: "What is your typical order quantity and shipping arrangement?",
      answer:
        "We primarily cater to B2B container-load orders (20-foot Full Container Loads, usually 400–450 sq. meters of 20mm slabs, subject to destination port weight limits). We assist with customs clearance documentation and port dispatch.",
    },
    {
      question: "How can I request a formal price quotation or stone samples?",
      answer:
        "You can submit your required specifications through our online quote form or email our export desk directly at info@bariqstone.com. Please indicate the stone variety, desired finish, thickness, and estimated container quantity for prompt pricing.",
    },
  ]

  return (
    <>
      {/* ─── SECTION B: HERO BANNER ─── */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Layered overlays for visual depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-black/40 z-10" />

        {/* Hero Background Image: Professional Granite Warehouse with Multiple Varieties */}
        <Image
          src="/images/granite-warehouse-hero.jpg"
          alt="Bariq Stone - International Granite Slab Warehouse and Manufacturing Facility"
          fill
          className="object-cover object-center scale-105 transition-transform duration-10000"
          priority
          sizes="100vw"
        />

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-20">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-3 mb-6 bg-black/50 border border-[#C8A96E]/30 rounded-full px-5 py-1.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C8A96E] animate-pulse" />
            <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
              Premium Granite Manufacturing, Supply & Export
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-playfair text-white mb-6 leading-[1.15] tracking-tight">
            Granite Solutions for{" "}
            <span className="shimmer-gold">Global Markets</span>
          </h1>

          <p className="text-base sm:text-xl text-[#e0d8cc] mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            From carefully selected granite varieties to quality-controlled processing and export-ready shipments, Bariq Stone supports international buyers with dependable granite sourcing and supply.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="btn-gold text-xs sm:text-sm px-8 py-4 flex items-center gap-2 uppercase tracking-wider font-semibold w-full sm:w-auto justify-center"
            >
              <span>Explore Our Granite</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-gold text-xs sm:text-sm px-8 py-4 uppercase tracking-wider font-semibold w-full sm:w-auto justify-center"
            >
              Request a Quote
            </Link>
          </div>

          {/* Core B2B Value Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-[#C8A96E]/20 text-left">
            <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-sm backdrop-blur-xs">
              <div className="text-[#C8A96E] text-xs uppercase tracking-widest font-semibold mb-1">Portfolio</div>
              <div className="text-white text-sm font-medium">Multiple Granite Varieties</div>
            </div>
            <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-sm backdrop-blur-xs">
              <div className="text-[#C8A96E] text-xs uppercase tracking-widest font-semibold mb-1">Processing</div>
              <div className="text-white text-sm font-medium">Gang Saw & Line Polished</div>
            </div>
            <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-sm backdrop-blur-xs">
              <div className="text-[#C8A96E] text-xs uppercase tracking-widest font-semibold mb-1">Packaging</div>
              <div className="text-white text-sm font-medium">ISPM-15 Seaworthy Crates</div>
            </div>
            <div className="p-3 bg-black/40 border border-[#C8A96E]/15 rounded-sm backdrop-blur-xs">
              <div className="text-[#C8A96E] text-xs uppercase tracking-widest font-semibold mb-1">Logistics</div>
              <div className="text-white text-sm font-medium">Global Container Supply</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION C: COMPANY INTRODUCTION ─── */}
      <section className="py-24 bg-[#121614] border-b border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#C8A96E]" />
                <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                  B2B Natural Stone Partner
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-white mb-6 leading-tight">
                A Wide Range of Granite. <br />
                <span className="text-[#C8A96E]">One Reliable Supply Partner.</span>
              </h2>
              <p className="text-[#c8c2b6] mb-5 text-base sm:text-lg leading-relaxed">
                Headquartered in Chimakurthy, Andhra Pradesh—the historic epicenter of Indian black granite quarrying—Bariq Stone operates as a dedicated manufacturer, supplier, and exporter serving commercial stone importers, wholesalers, fabricators, and architectural contractors.
              </p>
              <p className="text-[#a8a296] mb-8 text-sm sm:text-base leading-relaxed">
                While world-renowned Black Galaxy granite remains one of our cornerstone materials, our sourcing and processing operations encompass a diverse catalogue of popular Indian granites, including Absolute Black, Steel Grey, Viscon White, Tan Brown, and Black Pearl. Every block is calibrated and inspected to meet international dimensional and surface tolerances.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3 bg-black/30 border border-[#C8A96E]/20 rounded-sm">
                  <CheckCircle className="text-[#C8A96E] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="text-white text-sm font-semibold">Direct Quarry Alliances</h3>
                    <p className="text-[#9e988c] text-xs mt-0.5">Continuous block selection for steady batch uniformity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-black/30 border border-[#C8A96E]/20 rounded-sm">
                  <CheckCircle className="text-[#C8A96E] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="text-white text-sm font-semibold">Specification-Driven Orders</h3>
                    <p className="text-[#9e988c] text-xs mt-0.5">Custom thicknesses, finishes, and cut-to-size project support</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-gold text-xs px-6 py-3.5 inline-flex items-center gap-2 uppercase tracking-wider">
                  <span>Learn About Our Operations</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/services" className="btn-outline-gold text-xs px-6 py-3.5 uppercase tracking-wider">
                  View Processing Standards
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom-container rounded-sm border border-[#C8A96E]/20 overflow-hidden shadow-2xl h-64 sm:h-80 relative">
                  <Image
                    src="/images/Quarry.png"
                    alt="Natural Granite Quarry Block Extraction"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-xs text-white font-medium">
                    Quarry Block Selection
                  </div>
                </div>
                <div className="img-zoom-container rounded-sm border border-[#C8A96E]/20 overflow-hidden shadow-2xl h-64 sm:h-80 relative mt-6">
                  <Image
                    src="/images/factory-1.jpeg"
                    alt="Precision Granite Gang Saw Processing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-xs text-white font-medium">
                    Modern Saw Cutting & Calibration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION D: GRANITE COLLECTION ─── */}
      <section className="py-24 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C8A96E]" />
                <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                  Comprehensive Catalogue
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-white">
                Our Granite <span className="text-[#C8A96E]">Collection</span>
              </h2>
              <p className="text-[#a09a8e] mt-3 text-base sm:text-lg max-w-2xl leading-relaxed">
                Explore our core range of natural granite varieties. Each stone is available in jumbo gang saw slabs, vertical cutter slabs, and tailored project dimensions.
              </p>
            </div>
            <Link
              href="/products"
              className="btn-outline-gold text-xs px-6 py-3.5 inline-flex items-center gap-2 uppercase tracking-wider flex-shrink-0"
            >
              <span>View Full Technical Catalogue</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GRANITE_VARIETIES.map((granite) => (
              <div
                key={granite.id}
                className="card-premium group flex flex-col justify-between overflow-hidden border border-[#C8A96E]/20 hover:border-[#C8A96E]/60 transition-all duration-300 bg-[#121614]"
              >
                <div>
                  {/* Granite Image Preview */}
                  <div className="img-zoom-container relative h-56 w-full overflow-hidden border-b border-[#C8A96E]/20 bg-black">
                    <Image
                      src={granite.image}
                      alt={`${granite.name} - Natural Indian Granite Slab`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 border border-[#C8A96E]/30 text-[#C8A96E] text-[11px] font-semibold px-2.5 py-0.5 rounded-xs uppercase tracking-wider">
                      {granite.categoryLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="text-[#C8A96E] text-xs font-medium tracking-wide mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]" />
                      <span>{granite.origin}</span>
                    </div>
                    <h3 className="text-xl font-bold font-playfair text-white mb-2 group-hover:text-[#C8A96E] transition-colors">
                      {granite.name}
                    </h3>
                    <p className="text-[#a49e92] text-xs leading-relaxed line-clamp-3 mb-4">
                      {granite.shortDescription}
                    </p>

                    {/* Finishes */}
                    <div className="border-t border-[#C8A96E]/15 pt-3 mb-4">
                      <div className="text-[#7c766c] text-[11px] uppercase tracking-wider font-semibold mb-1.5">
                        Available Finishes:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {granite.finishes.slice(0, 3).map((f) => (
                          <span
                            key={f}
                            className="text-[11px] text-[#c4beaf] bg-black/40 border border-[#C8A96E]/15 px-2 py-0.5 rounded-xs"
                          >
                            {f}
                          </span>
                        ))}
                        {granite.finishes.length > 3 && (
                          <span className="text-[11px] text-[#C8A96E] bg-black/40 border border-[#C8A96E]/15 px-1.5 py-0.5 rounded-xs">
                            +{granite.finishes.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/products#${granite.slug}`}
                      className="text-center py-2 px-3 text-xs text-[#d0cac0] border border-[#C8A96E]/30 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors rounded-xs"
                    >
                      Specifications
                    </Link>
                    <Link
                      href={`/contact?variety=${encodeURIComponent(granite.name)}`}
                      className="text-center py-2 px-3 text-xs bg-[#C8A96E]/15 hover:bg-[#C8A96E] text-[#C8A96E] hover:text-black font-semibold transition-all rounded-xs"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION E: WHY CHOOSE BARIQ STONE? ─── */}
      <section className="py-24 bg-[#141916] border-y border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C8A96E]" />
              <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                Reliable B2B Supply
              </span>
              <span className="h-px w-8 bg-[#C8A96E]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-white mb-5">
              Why Partner with <span className="text-[#C8A96E]">Bariq Stone</span>?
            </h2>
            <p className="text-[#a49e92] text-base sm:text-lg leading-relaxed">
              We focus on dependable execution—delivering verified stone quality, transparent communication, and container-ready packaging to importers across global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multiple Granite Varieties",
                description:
                  "Consolidate your sourcing requirements with one partner. From Chimakurthy Black Galaxy to Absolute Black, Steel Grey, and Viscon White, we supply full and mixed container requirements.",
                icon: <Layers className="text-[#C8A96E]" size={32} />,
              },
              {
                title: "Rigorous Quality Inspection",
                description:
                  "Every slab undergoes visual and dimensional inspection: verifying uniform thickness (+/- 1mm), surface flatness, diagonal squareness, and structural soundness before packing.",
                icon: <ShieldCheck className="text-[#C8A96E]" size={32} />,
              },
              {
                title: "Advanced Saw & Polish Processing",
                description:
                  "Equipped with modern rope cutters, vertical single/multi-cutters, and multi-head line polishing machines to achieve high-reflectivity mirror finishes and consistent edge profiles.",
                icon: <Factory className="text-[#C8A96E]" size={32} />,
              },
              {
                title: "ISPM-15 Certified Export Packaging",
                description:
                  "Slabs are packed in heat-treated, fumigated seaworthy wooden bundles with foam sheets, plastic moisture barriers, and heavy-duty steel strapping engineered for heavy container freight.",
                icon: <Package className="text-[#C8A96E]" size={32} />,
              },
              {
                title: "Port Logistics Coordination",
                description:
                  "Direct coordination with major Indian seaports (Chennai, Krishnapatnam, Vizag) for smooth container stuffing, custom clearance documentation, and ocean freight logistics.",
                icon: <Truck className="text-[#C8A96E]" size={32} />,
              },
              {
                title: "Dedicated B2B Enquiry Support",
                description:
                  "Direct access to our export team. We provide rapid pricing estimates, slab layout photographs, and progress updates throughout the manufacturing and shipping cycle.",
                icon: <Globe className="text-[#C8A96E]" size={32} />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-premium p-8 group border border-[#C8A96E]/20 hover:border-[#C8A96E]/50 transition-all duration-300 bg-[#0f1311]"
              >
                <div className="mb-5 p-3.5 inline-flex rounded-sm bg-[#C8A96E]/10 group-hover:bg-[#C8A96E]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-playfair group-hover:text-[#C8A96E] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#9e988c] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION F: MANUFACTURING PROCESS ─── */}
      <section className="py-24 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C8A96E]" />
              <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                From Quarry to Container
              </span>
              <span className="h-px w-8 bg-[#C8A96E]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-white mb-5">
              Manufacturing & Quality Workflow
            </h2>
            <p className="text-[#a49e92] text-base sm:text-lg leading-relaxed">
              Step-by-step stone processing executed with modern technology and strict quality checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Block Sourcing & Selection",
                description: "Carefully inspecting raw granite blocks at the quarry for color consistency, grain density, and absence of micro-fissures.",
                img: "/images/Quarry Sourcing.jpg",
              },
              {
                step: "02",
                title: "Block Squaring & Sizing",
                description: "Dressing raw blocks with high-tensile diamond rope wire cutters to exact rectangular geometry prior to sawing.",
                img: "/images/Raw-Blocks.png",
              },
              {
                step: "03",
                title: "Gang Saw & Cutter Slicing",
                description: "Precision gang saw and multi-blade vertical cutters calibrated to deliver exact 20mm, 30mm, or custom project thicknesses.",
                img: "/images/factory-1.jpeg",
              },
              {
                step: "04",
                title: "Line Polishing & Finishing",
                description: "Multi-head automated line polishers with graduated diamond abrasives for flawless gloss or textured lapato/flamed finishes.",
                img: "/images/factory-3.jpeg",
              },
            ].map((p, index) => (
              <div key={index} className="text-center group">
                <div className="step-number mx-auto mb-4 group-hover:scale-105 transition-transform">
                  {p.step}
                </div>
                <div className="img-zoom-container mb-4 rounded-sm overflow-hidden border border-[#C8A96E]/20 h-44 relative bg-black">
                  <Image
                    src={p.img}
                    alt={`${p.title} - Bariq Stone Granite Processing`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#C8A96E] mb-2 font-playfair">{p.title}</h3>
                <p className="text-[#969084] text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline-gold text-xs px-8 py-3.5 uppercase tracking-wider inline-flex items-center gap-2">
              <span>View Full Processing Machinery & Tolerances</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION G: EXPORT & LOGISTICS HIGHLIGHT ─── */}
      <section className="py-20 bg-[#121614] border-t border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#C8A96E]" />
                <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                  Global Freight Readiness
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white mb-6">
                Export Packaging & Container Logistics
              </h2>
              <p className="text-[#b0a89c] text-base leading-relaxed mb-6">
                International natural stone transit demands zero room for error. We construct heavy-duty seaworthy wooden bundles utilizing ISPM-15 treated pine timber, waterproof wrapping, and shock-absorbing foam interleaves.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Fumigated ISPM-15 export wooden crates and A-frame bundles",
                  "Heavy polyethylene sheeting protecting polished slab faces from moisture",
                  "20-foot Heavy-Duty Shipping Containers with timber bracing and nylon ratchets",
                  "Complete export documentation: Packing lists, commercial invoices, and bill of lading coordination",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#c0bab0]">
                    <span className="w-5 h-5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-[#C8A96E]" size={12} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/packaging" className="btn-gold text-xs px-7 py-3.5 inline-flex items-center gap-2 uppercase tracking-wider">
                <span>Inspect Packaging Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom-container rounded-sm border border-[#C8A96E]/20 overflow-hidden h-64 relative bg-black">
                <Image
                  src="/images/loading-2.jpeg"
                  alt="Export Granite Wooden Bundles Ready for Container Stuffing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 inset-x-0 p-2.5 bg-black/85 text-[11px] text-[#C8A96E]">
                  ISPM-15 Wooden Bundles
                </div>
              </div>
              <div className="img-zoom-container rounded-sm border border-[#C8A96E]/20 overflow-hidden h-64 relative bg-black mt-6">
                <Image
                  src="/images/loading-1.jpeg"
                  alt="Seaport Container Loading of Granite Slabs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 inset-x-0 p-2.5 bg-black/85 text-[11px] text-[#C8A96E]">
                  Containerized Seaport Dispatch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION H: GALLERY PREVIEW ─── */}
      <section className="py-24 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C8A96E]" />
                <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                  Visual Tour
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white">
                Factory & Material Gallery
              </h2>
            </div>
            <Link href="/gallery" className="btn-outline-gold text-xs px-6 py-3 flex items-center gap-2 uppercase tracking-wider">
              <span>View Full Gallery</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/granite-warehouse-hero.jpg", alt: "Slab Showroom Warehouse", tall: true },
              { src: "/images/Black-galaxy-1.png", alt: "Black Galaxy Polished Slab", tall: false },
              { src: "/images/factory-2.jpeg", alt: "Multi-Cutter Slab Processing", tall: false },
              { src: "/images/granite-steel-grey.jpg", alt: "Steel Grey Granite Sample", tall: true },
              { src: "/images/dxn-factory-1.jpeg", alt: "Factory Slicing Line", tall: false },
              { src: "/images/granite-viscon-white.jpg", alt: "Viscon White Slab Waves", tall: false },
              { src: "/images/loading-1.jpeg", alt: "Container Loading", tall: false },
              { src: "/images/granite-tan-brown.jpg", alt: "Tan Brown Granite Detail", tall: false },
            ].map((img, i) => (
              <Link
                key={i}
                href="/gallery"
                className={`img-zoom-container relative overflow-hidden border border-[#C8A96E]/20 hover:border-[#C8A96E]/70 transition-all ${
                  img.tall ? "row-span-2 min-h-[300px]" : "min-h-[140px]"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                  <span className="text-[11px] text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION I: FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="py-24 bg-[#121614] border-t border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C8A96E]" />
              <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                Buyer Inquiries
              </span>
              <span className="h-px w-8 bg-[#C8A96E]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#a09a8e] text-base leading-relaxed">
              Common questions from international stone buyers, importers, and contractors.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-premium p-6 border border-[#C8A96E]/20 hover:border-[#C8A96E]/40 transition-colors bg-[#0e1110]"
              >
                <h3 className="text-lg font-bold font-playfair text-[#E8DCC8] mb-3 flex items-start gap-3">
                  <HelpCircle size={19} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-[#a49e92] text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-6 bg-black/40 border border-[#C8A96E]/20 rounded-sm">
            <p className="text-[#c0bab0] text-sm mb-4">
              Have specific dimensional requirements, finish inquiries, or custom stone requests?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-xs px-6 py-3 uppercase tracking-wider font-semibold">
                Submit Technical Enquiry
              </Link>
              <a
                href="mailto:info@bariqstone.com"
                className="btn-outline-gold text-xs px-6 py-3 uppercase tracking-wider font-semibold flex items-center gap-2"
              >
                <Mail size={14} />
                <span>info@bariqstone.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION J: FINAL ENQUIRY CTA ─── */}
      <section className="relative py-24 overflow-hidden border-t border-[#C8A96E]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#17211b] via-[#0d120f] to-[#17211b]" />
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/granite-warehouse-hero.jpg" alt="" fill className="object-cover" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.3em] uppercase">
              Start Sourcing Today
            </span>
            <span className="h-px w-10 bg-[#C8A96E]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-white mb-6 leading-tight">
            Ready to Source <span className="text-[#C8A96E]">Quality Granite</span> for Your Market?
          </h2>

          <p className="text-[#c8c2b6] mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Contact Bariq Stone today to discuss variety availability, container allocations, custom cutting specifications, and direct export pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-gold text-xs sm:text-sm px-10 py-4 flex items-center gap-2 justify-center uppercase tracking-wider font-semibold w-full sm:w-auto"
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:info@bariqstone.com"
              className="btn-outline-gold text-xs sm:text-sm px-8 py-4 justify-center uppercase tracking-wider font-semibold flex items-center gap-2 w-full sm:w-auto"
            >
              <Mail size={16} />
              <span>info@bariqstone.com</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-[#989284]">
            <span className="flex items-center gap-2">
              <Phone size={13} className="text-[#C8A96E]" />
              <span>+91 93819 58057</span>
            </span>
            <span className="h-3 w-px bg-[#C8A96E]/30" />
            <span className="flex items-center gap-2">
              <Phone size={13} className="text-[#C8A96E]" />
              <span>+91 93447 92957</span>
            </span>
            <span className="h-3 w-px bg-[#C8A96E]/30" />
            <span>Chimakurthy, Andhra Pradesh, India</span>
          </div>
        </div>
      </section>
    </>
  )
}
