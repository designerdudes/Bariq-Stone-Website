"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Mail, Phone, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Granite Collection", href: "/products" },
    { name: "Manufacturing", href: "/services" },
    { name: "Export & Logistics", href: "/packaging" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top B2B utility bar */}
      <div className="hidden lg:block bg-[#090b0a] border-b border-[#C8A96E]/20 text-xs py-2 text-[#b0a898]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Globe size={13} className="text-[#C8A96E]" />
              <span>International Granite Manufacturer & Bulk Supply Exporter</span>
            </span>
            <span className="h-3 w-px bg-[#C8A96E]/30" />
            <span className="text-[#C8A96E] font-medium tracking-wide">
              Andhra Pradesh & Telangana Granite Belt, India
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@bariqstone.com"
              className="flex items-center gap-2 hover:text-[#C8A96E] transition-colors"
            >
              <Mail size={13} className="text-[#C8A96E]" />
              <span>info@bariqstone.com</span>
            </a>
            <span className="h-3 w-px bg-[#C8A96E]/30" />
            <a
              href="tel:+919381958057"
              className="flex items-center gap-2 hover:text-[#C8A96E] transition-colors font-medium"
            >
              <Phone size={13} className="text-[#C8A96E]" />
              <span>+91 93819 58057</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0d0c]/98 backdrop-blur-md border-b border-[#C8A96E]/25 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3"
            : "bg-[#0e1110]/95 backdrop-blur-sm border-b border-[#C8A96E]/15 py-3.5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group py-1" aria-label="Bariq Stone Homepage">
              <div className="relative h-12 sm:h-14 md:h-16 w-44 sm:w-52 md:w-60 flex items-center">
                <Image
                  src="/images/bariq-logo-trimmed.png"
                  alt="Bariq Stone - Premium Granite Manufacturer & Exporter"
                  fill
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                  sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-7">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-[#d0d0d0] hover:text-[#C8A96E] transition-all duration-200 font-medium text-[13px] tracking-wider uppercase group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8A96E] group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              ))}
            </div>

            {/* Action CTA + Tablet menu */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="btn-gold text-xs px-5 sm:px-6 py-2.5 sm:py-3 inline-flex items-center gap-2 tracking-wider uppercase shadow-[0_2px_12px_rgba(200,169,110,0.2)]"
              >
                <span>Request a Quote</span>
                <ArrowRight size={14} className="hidden sm:inline" />
              </Link>

              {/* Mobile / Tablet menu toggle */}
              <button
                className="xl:hidden text-[#d0d0d0] hover:text-[#C8A96E] transition-colors p-2 rounded-sm border border-[#C8A96E]/20 hover:border-[#C8A96E]/50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          {isMenuOpen && (
            <div className="xl:hidden mt-3 pt-3 pb-6 border-t border-[#C8A96E]/15 bg-[#0b0d0c] rounded-b-md animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2.5 px-3 text-[#d0d0d0] hover:text-[#C8A96E] hover:bg-[#C8A96E]/10 rounded-sm transition-all duration-200 font-medium tracking-wide uppercase text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Quick Links */}
              <div className="mt-5 pt-4 border-t border-[#C8A96E]/15 px-3 space-y-2.5 text-xs text-[#b0a898]">
                <a
                  href="mailto:info@bariqstone.com"
                  className="flex items-center gap-2.5 hover:text-[#C8A96E] transition-colors"
                >
                  <Mail size={14} className="text-[#C8A96E]" />
                  <span>info@bariqstone.com</span>
                </a>
                <a
                  href="tel:+919381958057"
                  className="flex items-center gap-2.5 hover:text-[#C8A96E] transition-colors"
                >
                  <Phone size={14} className="text-[#C8A96E]" />
                  <span>+91 93819 58057 / +91 93447 92957</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
