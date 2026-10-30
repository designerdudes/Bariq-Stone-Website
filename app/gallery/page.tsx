"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string; categoryName: string } | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Works" },
    { id: "granite-varieties", name: "Granite Varieties" },
    { id: "quarry-blocks", name: "Quarry & Blocks" },
    { id: "processing", name: "Sawing & Polishing" },
    { id: "export-loading", name: "Packaging & Export" },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/images/granite-warehouse-hero.jpg",
      alt: "Granite Slab Showroom & Inventory Warehouse",
      category: "granite-varieties",
      title: "Granite Slab Warehouse & Sizing Inventory",
      categoryName: "Granite Varieties",
    },
    {
      id: 2,
      src: "/images/Black-galaxy-1.png",
      alt: "Polished Black Galaxy Granite Jumbo Slab",
      category: "granite-varieties",
      title: "Black Galaxy Polished Jumbo Slab",
      categoryName: "Granite Varieties",
    },
    {
      id: 3,
      src: "/images/granite-absolute-black.jpg",
      alt: "Polished Absolute Black Granite Slab",
      category: "granite-varieties",
      title: "Absolute Black High-Density Granite",
      categoryName: "Granite Varieties",
    },
    {
      id: 4,
      src: "/images/granite-steel-grey.jpg",
      alt: "Steel Grey Granite Polished Surface Sample",
      category: "granite-varieties",
      title: "Steel Grey Natural Granite",
      categoryName: "Granite Varieties",
    },
    {
      id: 5,
      src: "/images/granite-viscon-white.jpg",
      alt: "Viscon White Granite Dynamic Veining",
      category: "granite-varieties",
      title: "Viscon White Wave Movement Slab",
      categoryName: "Granite Varieties",
    },
    {
      id: 6,
      src: "/images/granite-tan-brown.jpg",
      alt: "Tan Brown Granite Garnet Mineral Crystals",
      category: "granite-varieties",
      title: "Tan Brown Crystalline Granite",
      categoryName: "Granite Varieties",
    },
    {
      id: 7,
      src: "/images/granite-black-pearl.jpg",
      alt: "Black Pearl Granite Metallic Flecks",
      category: "granite-varieties",
      title: "Black Pearl Granite Texture",
      categoryName: "Granite Varieties",
    },
    {
      id: 8,
      src: "/images/granite-cosmic-black.jpg",
      alt: "Cosmic Black Exotic Granite Swirls",
      category: "granite-varieties",
      title: "Cosmic Black Exotic Slab",
      categoryName: "Granite Varieties",
    },
    {
      id: 9,
      src: "/images/granite-river-black.jpg",
      alt: "River Black Linear Veined Granite",
      category: "granite-varieties",
      title: "River Black Veined Granite",
      categoryName: "Granite Varieties",
    },
    {
      id: 10,
      src: "/images/Quarry.png",
      alt: "Granite Quarry Block Extraction",
      category: "quarry-blocks",
      title: "Chimakurthy Quarry Extraction",
      categoryName: "Quarry & Blocks",
    },
    {
      id: 11,
      src: "/images/Quarry Sourcing.jpg",
      alt: "Raw Block Selection at Quarry Pit",
      category: "quarry-blocks",
      title: "Quarry Sourcing & Inspection",
      categoryName: "Quarry & Blocks",
    },
    {
      id: 12,
      src: "/images/Raw-Blocks.png",
      alt: "Diamond Wire Dressed Raw Granite Blocks",
      category: "quarry-blocks",
      title: "Wire-Dressed Rectangular Blocks",
      categoryName: "Quarry & Blocks",
    },
    {
      id: 13,
      src: "/images/Black-galaxy-granite-block.jpg",
      alt: "Black Galaxy Heavy Quarry Block",
      category: "quarry-blocks",
      title: "Selected Black Galaxy Block",
      categoryName: "Quarry & Blocks",
    },
    {
      id: 14,
      src: "/images/factory-1.jpeg",
      alt: "Gang Saw Primary Slab Slicing Machine",
      category: "processing",
      title: "Precision Gang Saw Slab Slicing",
      categoryName: "Sawing & Polishing",
    },
    {
      id: 15,
      src: "/images/factory-3.jpeg",
      alt: "Automated Multi-Head Line Polishing Machine",
      category: "processing",
      title: "Continuous Multi-Head Line Polisher",
      categoryName: "Sawing & Polishing",
    },
    {
      id: 16,
      src: "/images/factory-2.jpeg",
      alt: "Multi-Blade Slicing & Quality Sizing",
      category: "processing",
      title: "Vertical Multi-Cutter Line",
      categoryName: "Sawing & Polishing",
    },
    {
      id: 17,
      src: "/images/dxn-factory-1.jpeg",
      alt: "Factory Cutting Line and Calibration Bay",
      category: "processing",
      title: "Factory Calibration Facility",
      categoryName: "Sawing & Polishing",
    },
    {
      id: 18,
      src: "/images/loading-2.jpeg",
      alt: "ISPM-15 Certified Wooden Bundles Prepared for Export",
      category: "export-loading",
      title: "ISPM-15 Export Wooden Bundles",
      categoryName: "Packaging & Export",
    },
    {
      id: 19,
      src: "/images/loading-1.jpeg",
      alt: "Ocean Shipping Container Stuffing at Seaport",
      category: "export-loading",
      title: "Seaport Container Loading (20ft FCL)",
      categoryName: "Packaging & Export",
    },
    {
      id: 20,
      src: "/images/application-1.jpeg",
      alt: "Black Galaxy Kitchen Island & Countertop Application",
      category: "granite-varieties",
      title: "Countertop Application Showcase",
      categoryName: "Granite Varieties",
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#0e1110]">
      {/* ─── Hero ─── */}
      <section className="relative py-28 bg-gradient-to-b from-[#141b17] via-[#0f1412] to-[#0e1110] border-b border-[#C8A96E]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
              Factory & Stone Inventory
            </span>
            <span className="h-px w-10 bg-[#C8A96E]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            Our <span className="text-[#C8A96E]">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg text-[#c8c2b6] max-w-3xl mx-auto leading-relaxed font-light">
            An authentic photographic overview of Bariq Stone&apos;s quarry sourcing, modern saw processing, line polishing, multi-variety slab inventory, and seaworthy container shipping.
          </p>
        </div>
      </section>

      {/* ─── Category Filter Tabs ─── */}
      <section className="py-8 bg-[#121614] border-b border-[#C8A96E]/15 sticky top-16 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-[#C8A96E] text-black shadow-[0_2px_12px_rgba(200,169,110,0.3)]"
                    : "text-[#c0bab0] bg-black/40 border border-[#C8A96E]/20 hover:border-[#C8A96E]/50 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Grid ─── */}
      <section className="py-16 sm:py-20 bg-[#0e1110]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="card-premium group relative overflow-hidden border border-[#C8A96E]/20 hover:border-[#C8A96E]/60 rounded-xs cursor-pointer bg-[#121614] transition-all duration-300"
              >
                <div className="relative h-64 w-full bg-black">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-black/80 border border-[#C8A96E]/30 text-[#C8A96E] text-[10px] font-semibold px-2 py-0.5 rounded-xs uppercase tracking-wider">
                    {image.categoryName}
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 border border-[#C8A96E]/30 text-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} />
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-3 inset-x-3">
                    <h3 className="text-white text-sm font-semibold font-playfair group-hover:text-[#C8A96E] transition-colors line-clamp-1">
                      {image.title}
                    </h3>
                    <p className="text-[#a49e92] text-[11px] mt-0.5 line-clamp-1">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lightbox Modal ─── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#121614] border border-[#C8A96E]/40 rounded-sm overflow-hidden p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-white hover:text-[#C8A96E] border border-[#C8A96E]/30 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="relative h-[65vh] sm:h-[75vh] w-full bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="p-4 bg-[#0e1110] border-t border-[#C8A96E]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-[11px] text-[#C8A96E] uppercase tracking-wider block font-semibold">
                  {selectedImage.categoryName}
                </span>
                <h4 className="text-lg font-bold font-playfair text-white">
                  {selectedImage.title}
                </h4>
                <p className="text-xs text-[#a49e92] mt-0.5">{selectedImage.alt}</p>
              </div>

              <Link
                href="/contact"
                className="btn-gold text-xs px-5 py-2.5 uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Enquire About Material</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ─── Bottom CTA ─── */}
      <section className="py-20 bg-[#121614] border-t border-[#C8A96E]/20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold font-playfair text-white mb-4">
            Need Live Slab Inspection Photos?
          </h2>
          <p className="text-[#a49e92] text-sm leading-relaxed mb-8">
            Prior to container stuffing, we provide high-resolution dry-laid slab photos and bundle inspection reports for buyer verification.
          </p>
          <Link href="/contact" className="btn-gold text-xs px-8 py-3.5 uppercase tracking-wider font-semibold inline-flex items-center gap-2">
            <span>Request Slab Photos & Quotation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
