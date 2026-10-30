import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Globe, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Granite Collection", href: "/products" },
    { name: "Manufacturing & Quality", href: "/services" },
    { name: "Export & Logistics", href: "/packaging" },
    { name: "Factory & Slab Gallery", href: "/gallery" },
    { name: "Request Quotation", href: "/contact" },
  ]

  const graniteVarieties = [
    { name: "Black Galaxy Granite", href: "/products#black-galaxy" },
    { name: "Absolute Black Granite", href: "/products#absolute-black" },
    { name: "Steel Grey Granite", href: "/products#steel-grey" },
    { name: "Viscon White Granite", href: "/products#viscon-white" },
    { name: "Tan Brown Granite", href: "/products#tan-brown" },
    { name: "Black Pearl Granite", href: "/products#black-pearl" },
    { name: "Cosmic Black Granite", href: "/products#cosmic-black" },
    { name: "River Black Granite", href: "/products#river-black" },
  ]

  const manufacturingCapabilities = [
    "Gang Saw Jumbo Slabs (20mm & 30mm)",
    "Vertical Cutter & Countertop Slabs",
    "Line Polish & Lapatura / Leather Finishes",
    "Flamed & Bush-Hammered Exterior Finishes",
    "ISPM-15 Certified Wooden Crate Packaging",
    "Direct Seaport Container Stuffing (20ft FCL)",
  ]

  return (
    <footer className="bg-[#080a09] border-t border-[#C8A96E]/20 text-[#c0c0c0]">
      {/* Top B2B CTA Strip */}
      <div className="bg-gradient-to-r from-[#121915] via-[#1c2621] to-[#121915] py-8 border-b border-[#C8A96E]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase block mb-1">
              B2B Granite Sourcing & Export
            </span>
            <p className="text-white font-playfair text-xl sm:text-2xl font-bold">
              Looking for a Dependable Indian Granite Supply Partner?
            </p>
            <p className="text-[#b0a898] text-sm mt-1">
              Supplying importers, wholesalers, fabricators, and commercial contractors worldwide.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="btn-gold text-xs px-7 py-3.5 inline-flex items-center gap-2 uppercase tracking-wider font-semibold"
            >
              <span>Request Container Quote</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href="mailto:info@bariqstone.com"
              className="btn-outline-gold text-xs px-6 py-3.5 inline-flex items-center gap-2 uppercase tracking-wider"
            >
              <Mail size={14} />
              <span>Email Specifications</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative h-14 sm:h-16 w-52 sm:w-60">
                <Image
                  src="/images/bariq-logo-trimmed.png"
                  alt="Bariq Stone - Natural Granite Manufacturer & Exporter"
                  fill
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 208px, 240px"
                />
              </div>
            </Link>
            <p className="text-[#a09c94] text-sm leading-relaxed mb-6">
              Bariq Stone is an established natural stone manufacturer, supplier, and exporter based in Chimakurthy, Andhra Pradesh. We process and export multiple Indian granite varieties—including Black Galaxy, Absolute Black, Steel Grey, Viscon White, and Tan Brown—to global distributors and construction partners.
            </p>

            <div className="space-y-2 text-xs text-[#b8b0a2] border-l-2 border-[#C8A96E]/40 pl-3 py-1">
              <div className="flex items-center gap-2">
                <Globe size={13} className="text-[#C8A96E]" />
                <span>Global Container Shipping Coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-[#C8A96E]" />
                <span>Rigorous Slab Quality & Thickness Inspection</span>
              </div>
            </div>
          </div>

          {/* Column 2: Granite Varieties */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-playfair font-semibold text-base mb-5 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A96E]" />
              <span>Granite Varieties</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {graniteVarieties.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#a8a49c] hover:text-[#C8A96E] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Processing & Capabilities */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-playfair font-semibold text-base mb-5 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A96E]" />
              <span>Supply Capabilities</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-[#a8a49c] leading-relaxed">
              {manufacturingCapabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2">
                  <span className="text-[#C8A96E] mt-0.5">•</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Export Desk */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-playfair font-semibold text-base mb-5 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A96E]" />
              <span>Contact & Export Desk</span>
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                <span className="text-[#b0aba0] text-xs leading-relaxed">
                  Chimakurthy, Prakasam District, Andhra Pradesh 523226, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[#C8A96E] flex-shrink-0" />
                <a
                  href="mailto:info@bariqstone.com"
                  className="text-white hover:text-[#C8A96E] transition-colors text-xs font-medium"
                >
                  info@bariqstone.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={17} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <a
                    href="tel:+919381958057"
                    className="text-white hover:text-[#C8A96E] transition-colors block"
                  >
                    +91 93819 58057 (Sales & Exports)
                  </a>
                  <a
                    href="tel:+919344792957"
                    className="text-[#b0aba0] hover:text-[#C8A96E] transition-colors block"
                  >
                    +91 93447 92957 (Operations)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#9c968c] pt-2 border-t border-[#C8A96E]/15">
                <Clock size={15} className="text-[#C8A96E] flex-shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:30 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#C8A96E]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#807a70]">
          <div>
            © {new Date().getFullYear()} Bariq Stone. All rights reserved. Premium Granite Manufacturer, Supplier & Exporter.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#C8A96E] transition-colors">
              Company Overview
            </Link>
            <Link href="/products" className="hover:text-[#C8A96E] transition-colors">
              Product Catalogue
            </Link>
            <Link href="/packaging" className="hover:text-[#C8A96E] transition-colors">
              Export Packaging
            </Link>
            <Link href="/contact" className="hover:text-[#C8A96E] transition-colors">
              Inquire Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
