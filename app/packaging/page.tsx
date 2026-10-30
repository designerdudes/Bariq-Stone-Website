import Image from "next/image"
import Link from "next/link"
import { Package, Shield, Truck, Ship, CheckCircle, Globe, ArrowRight, ShieldCheck, Anchor } from "lucide-react"

export const metadata = {
  title: "Export Packaging & Logistics Coordination | Bariq Stone",
  description:
    "ISPM-15 certified heat-treated seaworthy wooden packaging, container stuffing, and maritime shipping coordination for international granite slab orders.",
}

export default function PackagingPage() {
  const packagingFeatures = [
    {
      icon: <Shield className="text-[#C8A96E]" size={36} />,
      title: "Surface Protection & Anti-Scratch Layering",
      description:
        "Every polished face is shielded with heavy-duty polyethylene plastic film, closed-cell foam sheets, and rigid corner protectors to eliminate face-to-face friction during sea transit.",
      features: [
        "Tear-resistant polyethylene film shielding polished faces",
        "High-density foam corner protectors absorbing impact",
        "Moisture barriers protecting against salt air humidity",
        "Plastic shrink wrap keeping dust and water out",
      ],
    },
    {
      icon: <Package className="text-[#C8A96E]" size={36} />,
      title: "ISPM-15 Certified Seaworthy Crating",
      description:
        "Heavy-gauge wooden bundles and A-frames fabricated exclusively from heat-treated and fumigated pine timber compliant with international phytosanitary export regulations.",
      features: [
        "Fumigation certificates issued for every shipment",
        "Reinforced heavy timber posts with high-tensile steel banding",
        "Individual bundle labeling with variety, batch, and dimensions",
        "Custom A-frame cradles built for oversized gang saw slabs",
      ],
    },
    {
      icon: <Ship className="text-[#C8A96E]" size={36} />,
      title: "Seaport Container Stuffing (20ft FCL)",
      description:
        "Engineered container lashing using heavy timber chocks, diagonal wood bracing, and industrial ratchet belts anchored to container D-rings for zero maritime cargo shifting.",
      features: [
        "Dedicated 20-foot Heavy Duty Container stuffing",
        "Even weight distribution across container floor beams",
        "Timber floor chocks nailed securely to prevent lateral sliding",
        "Full container photographic documentation before customs seal",
      ],
    },
    {
      icon: <Globe className="text-[#C8A96E]" size={36} />,
      title: "Export Documentation & Port Dispatch",
      description:
        "Complete commercial export documentation dispatched promptly for frictionless customs clearance at destination ports worldwide.",
      features: [
        "Certified Commercial Invoice & Detailed Packing List",
        "Original Clean on Board Ocean Bill of Lading (B/L)",
        "Certificate of Origin & Phytosanitary Certificate",
        "Direct transit coordination to Chennai, Krishnapatnam, and Vizag ports",
      ],
    },
  ]

  const packagingProcess = [
    {
      step: "01",
      title: "Final Slab Quality Verification",
      description:
        "Before crating, every slab is laid out and inspected: confirming uniform thickness (+/- 1mm), edge squareness, and defect-free surface polish.",
      image: "/images/factory-2.jpeg",
      alt: "Granite Slab Final Inspection before Packing",
    },
    {
      step: "02",
      title: "Cushioning & Protective Wrapping",
      description:
        "Application of heavy protective film between adjacent slabs, heavy corner buffers, and moisture-barrier wrapping.",
      image: "/images/loading-2.jpeg",
      alt: "Granite Slabs Packed in Protected Wooden Bundles",
    },
    {
      step: "03",
      title: "ISPM-15 Wooden Bundle Assembly",
      description:
        "Securing slabs in heat-treated, fumigated timber frames strapped tightly with heavy steel strapping to prevent any individual slab vibration.",
      image: "/images/loading-2.jpeg",
      alt: "ISPM-15 Certified Seaworthy Wooden Bundles",
    },
    {
      step: "04",
      title: "Container Stuffing & Maritime Lashing",
      description:
        "Carefully loading bundles into 20ft sea containers using heavy forklifts, followed by timber cross-bracing and heavy ratchet strapping.",
      image: "/images/loading-1.jpeg",
      alt: "Container Loading of Granite Bundles for Ocean Freight",
    },
  ]

  const containerCapacities = [
    {
      thickness: "20 mm (3/4″)",
      slabsPerBundle: "6 – 8 Slabs",
      sqmPerContainer: "400 – 450 m² (~4,300 – 4,840 sq.ft)",
      weightCapacity: "~26 – 28 Metric Tons (subject to port payload limits)",
    },
    {
      thickness: "30 mm (1-1/4″)",
      slabsPerBundle: "4 – 6 Slabs",
      sqmPerContainer: "270 – 310 m² (~2,900 – 3,330 sq.ft)",
      weightCapacity: "~26 – 28 Metric Tons (subject to port payload limits)",
    },
    {
      thickness: "Cut-to-Size Tiles (15–20mm)",
      slabsPerBundle: "Packed in Wooden Crates",
      sqmPerContainer: "400 – 550 m² (depending on tile dimensions)",
      weightCapacity: "~26 – 28 Metric Tons (subject to port payload limits)",
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
              Maritime Freight Standards
            </span>
            <span className="h-px w-10 bg-[#C8A96E]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            Export Packaging & <span className="text-[#C8A96E]">Logistics</span>
          </h1>
          <p className="text-base sm:text-lg text-[#c8c2b6] max-w-3xl mx-auto leading-relaxed font-light">
            Engineered seaworthy crating, certified fumigation, and secure container stuffing designed to protect your stone cargo across thousands of nautical miles.
          </p>
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section className="py-24 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C8A96E]" />
              <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
                Damage Prevention
              </span>
              <span className="h-px w-8 bg-[#C8A96E]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white mb-4">
              Comprehensive Cargo Protection
            </h2>
            <p className="text-[#9e988c] text-sm sm:text-base leading-relaxed">
              Every package is constructed to withstand the dynamic forces of international ocean transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packagingFeatures.map((feature, index) => (
              <div
                key={index}
                className="card-premium p-8 border border-[#C8A96E]/25 bg-[#121614] rounded-sm group hover:border-[#C8A96E]/50 transition-colors"
              >
                <div className="mb-5 p-3.5 inline-flex rounded-sm bg-[#C8A96E]/10 border border-[#C8A96E]/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-playfair text-white mb-3 group-hover:text-[#C8A96E] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#a09a8e] mb-6 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
                <ul className="space-y-2.5">
                  {feature.features.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3 text-xs sm:text-sm text-[#c4beaf]">
                      <span className="w-4 h-4 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="text-[#C8A96E]" size={11} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Step-by-Step Packaging Process ─── */}
      <section className="py-24 bg-[#121614] border-y border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white mb-4">
              The Packaging & Loading Workflow
            </h2>
            <p className="text-[#9e988c] text-sm leading-relaxed">
              From individual slab surface inspection to final container sealing and port dispatch.
            </p>
          </div>

          <div className="space-y-20">
            {packagingProcess.map((process, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8A96E] uppercase tracking-widest mb-2">
                    <span>Phase 0{process.step}</span>
                    <span className="h-px w-8 bg-[#C8A96E]/40" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair text-white mb-4">
                    {process.title}
                  </h3>
                  <p className="text-[#b0a89c] text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {process.description}
                  </p>
                </div>

                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="img-zoom-container rounded-sm border border-[#C8A96E]/20 overflow-hidden shadow-xl relative h-72 sm:h-80 w-full bg-black">
                    <Image
                      src={process.image}
                      alt={process.alt}
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

      {/* ─── 20ft Container Payload Guidelines ─── */}
      <section className="py-20 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold text-[#C8A96E] mb-2">
              <Anchor size={14} />
              <span>Container Logistics Planning</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-3">
              Standard 20ft Container Payload Estimations
            </h2>
            <p className="text-xs sm:text-sm text-[#9c968a]">
              Estimated square meter yield per standard 20-foot maritime container. Note: actual payloads depend on road weight regulations at destination countries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {containerCapacities.map((item, i) => (
              <div key={i} className="card-premium p-6 border border-[#C8A96E]/20 bg-[#121614] rounded-sm">
                <span className="text-xs text-[#C8A96E] font-semibold uppercase tracking-wider block mb-1">
                  Thickness
                </span>
                <div className="text-lg font-bold font-playfair text-white mb-4">
                  {item.thickness}
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[#787266] uppercase block text-[10px]">Bundle Capacity</span>
                    <span className="text-[#c8c2b6] font-medium">{item.slabsPerBundle}</span>
                  </div>
                  <div>
                    <span className="text-[#787266] uppercase block text-[10px]">Approx. Container Yield</span>
                    <span className="text-[#C8A96E] font-semibold">{item.sqmPerContainer}</span>
                  </div>
                  <div>
                    <span className="text-[#787266] uppercase block text-[10px]">Gross Cargo Weight</span>
                    <span className="text-[#a09a8e]">{item.weightCapacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-6 bg-black/40 border border-[#C8A96E]/20 rounded-sm">
            <p className="text-xs sm:text-sm text-[#c8c2b6] mb-4">
              Need assistance calculating container loads or mixed stone variety configurations?
            </p>
            <Link href="/contact" className="btn-gold text-xs px-8 py-3.5 uppercase tracking-wider font-semibold inline-flex items-center gap-2">
              <span>Discuss Container Planning</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
