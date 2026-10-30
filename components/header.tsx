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
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-5 2xl:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 xl:gap-6 whitespace-nowrap">
            <span className="flex items-center gap-2">
              <Globe size={13} className="text-[#C8A96E] flex-shrink-0" />
              <span>International Granite Manufacturer & Bulk Supply Exporter</span>
            </span>
            <span className="hidden xl:inline-block h-3 w-px bg-[#C8A96E]/30" />
            <span className="hidden xl:inline text-[#C8A96E] font-medium tracking-wide">
              Andhra Pradesh & Telangana Granite Belt, India
            </span>
          </div>
          <div className="flex items-center gap-4 xl:gap-6 whitespace-nowrap flex-shrink-0">
            <a
              href="mailto:info@bariqstone.com"
              className="flex items-center gap-2 hover:text-[#C8A96E] transition-colors"
            >
              <Mail size={13} className="text-[#C8A96E] flex-shrink-0" />
              <span>info@bariqstone.com</span>
            </a>
            <span className="h-3 w-px bg-[#C8A96E]/30" />
            <a
              href="tel:+919381958057"
              className="flex items-center gap-2 hover:text-[#C8A96E] transition-colors font-medium"
            >
              <Phone size={13} className="text-[#C8A96E] flex-shrink-0" />
              <span>+91 93819 58057</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0d0c]/98 backdrop-blur-md border-b border-[#C8A96E]/25 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-2.5 lg:py-3"
            : "bg-[#0e1110]/95 backdrop-blur-sm border-b border-[#C8A96E]/15 py-3 lg:py-3.5"
        }`}
      >
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-5 2xl:px-8">
          <div className="flex justify-between items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0 group py-1"
              aria-label="Bariq Stone Homepage"
            >
              <div className="relative h-11 sm:h-12 md:h-14 xl:h-12 2xl:h-14 w-36 sm:w-44 md:w-52 xl:w-44 2xl:w-56 flex items-center">
                <Image
                  src="/images/bariq-logo-trimmed.png"
                  alt="Bariq Stone - Premium Granite Manufacturer & Exporter"
                  fill
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1280px) 208px, (max-width: 1536px) 176px, 224px"
                />
              </div>
            </Link>

            {/* Desktop Navigation (1280px+) */}
            <div className="hidden xl:flex items-center justify-center flex-shrink-0 gap-3 2xl:gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative whitespace-nowrap text-[#d0d0d0] hover:text-[#C8A96E] transition-all duration-200 font-medium text-[12px] 2xl:text-[13px] tracking-wide 2xl:tracking-wider uppercase group py-1 px-1 flex-shrink-0"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8A96E] group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              ))}
            </div>

            {/* Action CTA + Tablet/Mobile menu toggle */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 ml-2 xl:ml-4">
              <Link
                href="/contact?type=quote"
                className="btn-gold text-[11px] xl:text-xs 2xl:text-xs px-3.5 sm:px-5 xl:px-4 2xl:px-6 py-2 sm:py-2.5 xl:py-2.5 2xl:py-3 inline-flex items-center gap-2 tracking-wider uppercase shadow-[0_2px_12px_rgba(200,169,110,0.2)] whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight size={14} className="hidden sm:inline" />
              </Link>

              {/* Mobile / Tablet menu toggle (below 1280px) */}
              <button
                className="xl:hidden text-[#d0d0d0] hover:text-[#C8A96E] transition-colors p-2 rounded-sm border border-[#C8A96E]/20 hover:border-[#C8A96E]/50 focus:outline-none focus:ring-1 focus:ring-[#C8A96E]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile drawer (below 1280px) */}
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
