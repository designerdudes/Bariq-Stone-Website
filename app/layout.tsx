import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://bariqstone.com"),
  title: {
    default: "Bariq Stone | Premium Granite Manufacturer, Supplier & Exporter",
    template: "%s | Bariq Stone",
  },
  description:
    "Bariq Stone is a premier Indian manufacturer, supplier, and exporter of natural granite slabs and blocks. Supplying Black Galaxy, Absolute Black, Steel Grey, Viscon White, and custom B2B orders worldwide.",
  keywords: [
    "granite manufacturer",
    "granite supplier",
    "granite exporter",
    "bulk granite sourcing",
    "natural stone slabs",
    "Indian granite export",
    "Black Galaxy granite",
    "Absolute Black granite",
    "Steel Grey granite",
    "Viscon White granite",
    "Tan Brown granite",
    "gang saw slabs",
    "B2B stone supply",
  ],
  authors: [{ name: "Bariq Stone" }],
  creator: "Bariq Stone",
  publisher: "Bariq Stone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bariqstone.com",
    title: "Bariq Stone | Premium Granite Manufacturing, Supply & Export",
    description:
      "From carefully selected granite varieties to quality-controlled processing and export-ready shipments, Bariq Stone supports international buyers with dependable granite sourcing and supply.",
    siteName: "Bariq Stone",
    images: [
      {
        url: "/images/granite-warehouse-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bariq Stone - International Granite Manufacturing and Export Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bariq Stone | Premium Granite Manufacturer & Exporter",
    description:
      "Granite Solutions for Global Markets. Supplying premium Indian granite varieties with export-ready packaging worldwide.",
    images: ["/images/granite-warehouse-hero.jpg"],
  },
  alternates: {
    canonical: "https://bariqstone.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bariq Stone",
    url: "https://bariqstone.com",
    logo: "https://bariqstone.com/images/bariq-logo-trimmed.png",
    description:
      "Premier manufacturer, supplier, and exporter of high-grade natural granite slabs and blocks from India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chimakurthy",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 93819 58057",
        contactType: "sales and export",
        email: "info@bariqstone.com",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 93447 92957",
        contactType: "customer service",
        email: "info@bariqstone.com",
      },
    ],
    sameAs: [],
  }

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#0e0e0e] text-[#f0f0f0] antialiased selection:bg-[#C8A96E]/30 selection:text-[#E8DCC8]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
