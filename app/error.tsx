"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RefreshCw, ArrowLeft } from "lucide-react"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Automatically perform a hard reload if a chunk failed to load due to stale cache / HMR recompilation
    if (
      error.name === "ChunkLoadError" ||
      error.message?.includes("Loading chunk") ||
      error.message?.includes("ChunkLoadError")
    ) {
      window.location.reload()
    }
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#141414] px-4 py-16">
      <div className="card-premium p-8 max-w-md w-full text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-xs font-semibold tracking-widest uppercase">Notice</span>
          <span className="h-px w-8 bg-[#C8A96E]" />
        </div>
        <h2 className="text-2xl font-bold font-playfair text-[#C8A96E] mb-3">
          Temporary Loading Issue
        </h2>
        <p className="text-[#c0c0c0] text-sm mb-6 leading-relaxed">
          The page content was being updated. Click below to reload the latest version.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="btn-gold text-xs px-6 py-3 flex items-center gap-2"
          >
            <RefreshCw size={14} /> Refresh Page
          </button>
          <Link
            href="/"
            className="btn-outline-gold text-xs px-6 py-3 flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
