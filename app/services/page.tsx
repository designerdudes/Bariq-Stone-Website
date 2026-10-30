import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Ruler, Truck, Factory, CheckCircle, ShieldCheck, Layers, Gauge } from "lucide-react"

export const metadata = {
  title: "Manufacturing & Quality Control | Bariq Stone",
  description:
    "Explore Bariq Stone's industrial granite manufacturing operations: diamond wire block shaping, gang saw slab slicing, multi-head line polishing, and strict dimensional quality control for international exports.",
}

export default function ServicesPage() {
  const capabilities = [
    {
      icon: <Factory className="text-[#C8A96E]" size={36} />,
      title: "Quarry Block Shaping & Wire Dressing",
      description:
        "Rough quarry blocks are squared and calibrated using high-speed diamond wire rope cutters. This minimizes internal stress fractures and ensures rectangular geometric accuracy before the primary sawing phase.",
      features: [
        "Diamond wire rope cutting technology for clean planar faces",
        "Rectangular block dressing ensuring maximum usable slab yield",
        "Ultrasonic density & structural soundness check prior to sawing",
        "Rough block supply available for domestic and international mills",
      ],
      image: "/images/Raw-Blocks.png",
      alt: "Granite Raw Blocks Dressed with Diamond Wire Technology",
    },
    {
      icon: <Gauge className="text-[#C8A96E]" size={36} />,
      title: "Gang Saw & Multi-Blade Slab Slicing",
      description:
        "Equipped with modern gang saws and vertical multi-blade circular cutters capable of slicing jumbo gang saw slabs and cutter strips with strict thickness consistency.",
      features: [
        "Jumbo Gang Saw Slabs up to 320 cm length x 200 cm height",
        "Standard export thicknesses of 20mm and 30mm with +/- 1mm tolerance",
        "High-volume multi-cutter lines for standard countertop blanks",
        "Uniform slab surface without deep saw blade gouges or thickness tapering",
      ],
      image: "/images/factory-1.jpeg",
      alt: "Bariq Stone Factory Gang Saw Slab Slicing",
    },
    {
      icon: <Sparkles className="text-[#C8A96E]" size={36} />,
      title: "Multi-Head Automated Line Polishing",
      description:
        "State-of-the-art continuous line polishers utilize progressive diamond abrasive heads to deliver mirror gloss surfaces that accentuate the deep optical depth and natural crystals of Indian granites.",
      features: [
        "Automated abrasive pressure control for uniform planar reflectivity",
        "Specialized heads for Honed, Leather / Lapato, and Brushed finishes",
        "Thermal flaming setup for outdoor anti-slip flamed granite pavers",
        "Surface sealant application available upon buyer export specification",
      ],
      image: "/images/factory-3.jpeg",
      alt: "Multi-Head Continuous Granite Line Polishing Line",
    },
    {
      icon: <ShieldCheck className="text-[#C8A96E]" size={36} />,
      title: "Quality Control & Thickness Calibration",
      description:
        "Every batch undergoes multi-point inspection prior to packing. We inspect corner thicknesses, diagonal squareness, surface gloss levels, and color homogeneity.",
      features: [
        "Digital vernier caliper measurement across all 4 slab corners",
        "90-degree corner squareness and edge straightness inspection",
        "Natural vein matching and bookmatched numbering for exotic slabs",
        "Pre-shipment photo documentation sent to buyer prior to container stuffing",
      ],
      image: "/images/factory-2.jpeg",
      alt: "Granite Slab Inspection and Factory Calibration",
    },
    {
      icon: <Truck className="text-[#C8A96E]" size={36} />,
      title: "Export Packing & Port Logistics",
      description:
        "Full-container-load (FCL) packing in heavy-duty ISPM-15 treated wooden bundles, secured inside 20-foot shipping containers with marine lashing and protective moisture barriers.",
      features: [
        "Heat-treated ISPM-15 fumigated timber bundles with phytosanitary compliance",
        "Heavy polyethylene plastic sheets and corner foam edge protectors",
        "Direct container dispatch to Chennai, Krishnapatnam, and Vizag ports",
        "Complete export documentation: Packing lists, commercial invoices, and B/L",
      ],
      image: "/images/loading-1.jpeg",
      alt: "Containerized Seaport Dispatch of Granite Bundles",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0e1110]">
      {/* ─── Hero ─── */}
      <section className="relative py-28 bg-gradient-to-b from-[#141b17] via-[#0f1412] to-[#0e1110] border-b border-[#C8A96E]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
              Industrial Stone Processing
            </span>
            <span className="h-px w-10 bg-[#C8A96E]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            Manufacturing & <span className="text-[#C8A96E]">Quality Control</span>
          </h1>
          <p className="text-base sm:text-lg text-[#c8c2b6] max-w-3xl mx-auto leading-relaxed font-light">
            Precision machinery, strict dimensional tolerances, and dedicated quality inspection at every stage—delivering export-grade granite slabs to global commercial standards.
          </p>
        </div>
      </section>

      {/* ─── Processing Capabilities ─── */}
      <section className="py-24 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {capabilities.map((cap, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="mb-4 p-3.5 inline-flex rounded-sm bg-[#C8A96E]/10 border border-[#C8A96E]/20">
                    {cap.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-4">
                    {cap.title}
                  </h2>
                  <p className="text-[#b0a89c] mb-6 text-sm sm:text-base leading-relaxed font-light">
                    {cap.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {cap.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-xs sm:text-sm text-[#c4beaf]">
                        <span className="w-5 h-5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-[#C8A96E]" size={12} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="btn-gold text-xs px-6 py-3.5 uppercase tracking-wider font-semibold inline-flex items-center gap-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="img-zoom-container rounded-sm border border-[#C8A96E]/25 overflow-hidden shadow-2xl relative h-72 sm:h-96 w-full bg-black">
                    <Image
                      src={cap.image}
                      alt={cap.alt}
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

      {/* ─── Quality Standards Table ─── */}
      <section className="py-20 bg-[#121614] border-y border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-3">
              Standard Processing Tolerances
            </h2>
            <p className="text-xs sm:text-sm text-[#9c968a]">
              Parameters maintained across our export-calibrated granite production.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-[#c0bab0] border border-[#C8A96E]/20 bg-[#0e1110]">
              <thead className="bg-black/60 text-[#C8A96E] uppercase tracking-wider text-[11px] border-b border-[#C8A96E]/20">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Parameter</th>
                  <th className="py-3.5 px-4 font-semibold">Our Export Tolerance</th>
                  <th className="py-3.5 px-4 font-semibold">Standard Industry Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C8A96E]/15">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Slab Thickness Tolerance</td>
                  <td className="py-3 px-4 text-[#C8A96E]">± 1.0 mm</td>
                  <td className="py-3 px-4 text-[#888274]">± 1.5 – 2.0 mm</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Diagonal Squareness</td>
                  <td className="py-3 px-4 text-[#C8A96E]">± 1.5 mm across diagonal</td>
                  <td className="py-3 px-4 text-[#888274]">± 2.5 mm</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Surface Gloss Level (Polished)</td>
                  <td className="py-3 px-4 text-[#C8A96E]">85 – 95+ Gloss Units (GU)</td>
                  <td className="py-3 px-4 text-[#888274]">75 – 85 GU</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Wooden Bundle Fumigation</td>
                  <td className="py-3 px-4 text-[#C8A96E]">ISPM-15 Certified Heat-Treated</td>
                  <td className="py-3 px-4 text-[#888274]">Standard crating</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#0e1110] text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold font-playfair text-white mb-4">
            Need Custom Dimensions or Specific Cut-Lists?
          </h2>
          <p className="text-[#9c968a] text-sm leading-relaxed mb-8">
            Our engineering desk reviews architectural drawings, cut-to-size tile requirements, and edge profiling requests.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-xs px-8 py-3.5 uppercase tracking-wider font-semibold">
              Submit Technical Cut-List
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
