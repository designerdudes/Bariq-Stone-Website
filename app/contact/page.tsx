"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Loader2,
  FileText,
  MessageSquare,
} from "lucide-react"
import {
  submitWeb3Forms,
  WEB3FORMS_ACCESS_KEY,
  RECIPIENT_EMAIL,
  isValidEmail,
  isValidPhone,
} from "@/lib/web3forms"

function ContactFormInner() {
  const searchParams = useSearchParams()
  const initialVariety = searchParams.get("variety") || "Black Galaxy Granite"
  const initialType = searchParams.get("type") === "contact" ? "contact" : "quote"

  const [activeTab, setActiveTab] = useState<"quote" | "contact">(initialType)

  // Quotation form state
  const [quoteData, setQuoteData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    country: "",
    graniteVariety: initialVariety,
    productType: "Gang Saw Jumbo Slabs (20mm)",
    finish: "Mirror Polished",
    quantity: "1 x 20ft FCL Container (~400-450 sqm of 20mm)",
    requirements: "",
    botcheck: "", // Web3Forms honeypot
  })

  // General contact form state
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Stone Sourcing Inquiry",
    message: "",
    botcheck: "", // Web3Forms honeypot
  })

  useEffect(() => {
    const paramVariety = searchParams.get("variety")
    if (paramVariety) {
      setQuoteData((prev) => ({ ...prev, graniteVariety: paramVariety }))
      setActiveTab("quote")
    }
    const paramType = searchParams.get("type")
    if (paramType === "contact") {
      setActiveTab("contact")
    } else if (paramType === "quote") {
      setActiveTab("quote")
    }
  }, [searchParams])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error"
    message?: string
  }>({ type: "idle" })

  // Quotation form submit handler
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "idle" })

    // Client-side validations
    if (!quoteData.fullName.trim() || quoteData.fullName.trim().length < 2) {
      setStatus({ type: "error", message: "Please provide your full name (minimum 2 characters)." })
      return
    }
    if (!isValidEmail(quoteData.businessEmail)) {
      setStatus({ type: "error", message: "Please enter a valid business email address." })
      return
    }
    if (!isValidPhone(quoteData.phone)) {
      setStatus({ type: "error", message: "Please provide a valid phone or WhatsApp number (minimum 6 digits)." })
      return
    }
    if (!quoteData.country.trim() || quoteData.country.trim().length < 2) {
      setStatus({ type: "error", message: "Please specify your destination country or port of discharge." })
      return
    }

    setIsSubmitting(true)

    try {
      const subjectLine = `Bariq Stone – Granite Quotation Request [${quoteData.graniteVariety}]${
        quoteData.companyName.trim() ? ` - ${quoteData.companyName.trim()}` : ` - ${quoteData.fullName.trim()}`
      }`

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: subjectLine,
        from_name: "Bariq Stone Quotation Desk",
        to_email: RECIPIENT_EMAIL,
        replyto: quoteData.businessEmail.trim(),
        name: quoteData.fullName.trim(),
        email: quoteData.businessEmail.trim(),
        phone: quoteData.phone.trim(),
        company: quoteData.companyName.trim() || "Not specified",
        country: quoteData.country.trim(),
        granite_variety: quoteData.graniteVariety,
        product_format: quoteData.productType,
        preferred_finish: quoteData.finish,
        required_quantity: quoteData.quantity,
        project_requirements: quoteData.requirements.trim() || "No additional requirements specified",
        form_type: "Granite Quotation Request",
        botcheck: quoteData.botcheck,
      }

      const result = await submitWeb3Forms(payload)

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Thank you for contacting Bariq Stone. Your enquiry has been submitted successfully. Our team will get back to you shortly.",
        })
        // Reset only on confirmed success
        setQuoteData((prev) => ({
          ...prev,
          fullName: "",
          companyName: "",
          businessEmail: "",
          phone: "",
          country: "",
          requirements: "",
          botcheck: "",
        }))
      } else {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Failed to submit enquiry. Please verify your information or email our export desk directly at info@bariqstone.com.",
        })
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Network communication error. Please try again or email info@bariqstone.com directly."
      setStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // General contact form submit handler
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "idle" })

    // Client-side validations
    if (!contactData.fullName.trim() || contactData.fullName.trim().length < 2) {
      setStatus({ type: "error", message: "Please provide your full name (minimum 2 characters)." })
      return
    }
    if (!isValidEmail(contactData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." })
      return
    }
    if (!isValidPhone(contactData.phone)) {
      setStatus({ type: "error", message: "Please provide a valid contact phone number (minimum 6 digits)." })
      return
    }
    if (!contactData.subject.trim()) {
      setStatus({ type: "error", message: "Please enter or select an enquiry subject." })
      return
    }
    if (!contactData.message.trim() || contactData.message.trim().length < 5) {
      setStatus({ type: "error", message: "Please provide your message (minimum 5 characters)." })
      return
    }

    setIsSubmitting(true)

    try {
      const subjectLine = `Bariq Stone – Website Contact Enquiry: ${contactData.subject.trim()} - ${contactData.fullName.trim()}`

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: subjectLine,
        from_name: "Bariq Stone Contact Desk",
        to_email: RECIPIENT_EMAIL,
        replyto: contactData.email.trim(),
        name: contactData.fullName.trim(),
        email: contactData.email.trim(),
        phone: contactData.phone.trim(),
        enquiry_subject: contactData.subject.trim(),
        message: contactData.message.trim(),
        form_type: "Website Contact Enquiry",
        botcheck: contactData.botcheck,
      }

      const result = await submitWeb3Forms(payload)

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Thank you for contacting Bariq Stone. Your enquiry has been submitted successfully. Our team will get back to you shortly.",
        })
        // Reset only on confirmed success
        setContactData({
          fullName: "",
          email: "",
          phone: "",
          subject: "General Stone Sourcing Inquiry",
          message: "",
          botcheck: "",
        })
      } else {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Failed to submit message. Please verify your information or email us directly at info@bariqstone.com.",
        })
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Network communication error. Please try again or reach our desk directly at info@bariqstone.com."
      setStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setQuoteData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setContactData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="space-y-6">
      {/* Form Mode Selector Tabs */}
      <div className="flex border-b border-[#C8A96E]/20 pb-4 gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => {
            setActiveTab("quote")
            setStatus({ type: "idle" })
          }}
          className={`flex-1 py-3 px-3 sm:px-4 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border ${
            activeTab === "quote"
              ? "bg-[#C8A96E] text-black border-[#C8A96E] shadow-[0_2px_12px_rgba(200,169,110,0.3)]"
              : "bg-black/40 text-[#c8c2b6] border-[#C8A96E]/20 hover:border-[#C8A96E]/50 hover:text-white"
          }`}
        >
          <FileText size={15} />
          <span>Request a Quote</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("contact")
            setStatus({ type: "idle" })
          }}
          className={`flex-1 py-3 px-3 sm:px-4 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border ${
            activeTab === "contact"
              ? "bg-[#C8A96E] text-black border-[#C8A96E] shadow-[0_2px_12px_rgba(200,169,110,0.3)]"
              : "bg-black/40 text-[#c8c2b6] border-[#C8A96E]/20 hover:border-[#C8A96E]/50 hover:text-white"
          }`}
        >
          <MessageSquare size={15} />
          <span>General Contact</span>
        </button>
      </div>

      {/* Dynamic Form Description */}
      <div className="text-xs text-[#a09a8e] leading-relaxed">
        {activeTab === "quote" ? (
          <p>
            Please provide your project specifications below. Our export desk will calculate container weight allocations, verify quarry block availability, and reply with competitive FOB or CIF pricing.
          </p>
        ) : (
          <p>
            Have a question regarding sample shipments, stone specifications, quarry visits, or distributor partnerships? Send us your message and our team will get back to you promptly.
          </p>
        )}
      </div>

      {/* Success Notification Banner */}
      {status.type === "success" && (
        <div className="p-4 bg-emerald-950/70 border border-emerald-500/50 rounded-xs text-emerald-200 text-sm flex items-start gap-3 animate-in fade-in">
          <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
          <div>
            <div className="font-semibold text-emerald-300">Enquiry Confirmed</div>
            <div className="text-xs text-emerald-200/90 mt-1 leading-relaxed">{status.message}</div>
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {status.type === "error" && (
        <div className="p-4 bg-red-950/70 border border-red-500/50 rounded-xs text-red-200 text-sm flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
          <div>
            <div className="font-semibold text-red-300">Notice</div>
            <div className="text-xs text-red-200/90 mt-1 leading-relaxed">{status.message}</div>
          </div>
        </div>
      )}

      {/* ─── TAB 1: GRANITE QUOTATION FORM ─── */}
      {activeTab === "quote" && (
        <form onSubmit={handleQuoteSubmit} className="space-y-6">
          {/* Honeypot field for Web3Forms anti-spam */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="quote-botcheck">Do not fill this field</label>
            <input
              type="text"
              id="quote-botcheck"
              name="botcheck"
              value={quoteData.botcheck}
              onChange={handleQuoteChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Buyer & Company Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={quoteData.fullName}
                onChange={handleQuoteChange}
                placeholder="e.g. David Miller"
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Company Name <span className="text-xs font-normal text-[#8c867a]">(Optional)</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={quoteData.companyName}
                onChange={handleQuoteChange}
                placeholder="e.g. Apex Stone Wholesalers Ltd"
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Business Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="businessEmail"
                required
                value={quoteData.businessEmail}
                onChange={handleQuoteChange}
                placeholder="buyer@company.com"
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Phone / WhatsApp Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={quoteData.phone}
                onChange={handleQuoteChange}
                placeholder="+1 555 0192 / +44 ..."
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Destination Country / Port of Discharge <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="country"
                required
                value={quoteData.country}
                onChange={handleQuoteChange}
                placeholder="e.g. United States (Port of Houston) / UK (Felixstowe) / UAE (Jebel Ali)"
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>
          </div>

          {/* Granite Specifications */}
          <div className="pt-4 border-t border-[#C8A96E]/20">
            <h4 className="text-sm font-playfair font-bold text-white mb-4">
              Material & Supply Specifications
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase font-semibold text-[#c8c2b6] tracking-wider mb-2">
                  Granite Variety / Product <span className="text-red-400">*</span>
                </label>
                <select
                  name="graniteVariety"
                  value={quoteData.graniteVariety}
                  onChange={handleQuoteChange}
                  className="w-full bg-black/80 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors"
                >
                  <option value="Black Galaxy Granite">Black Galaxy Granite (Chimakurthy)</option>
                  <option value="Absolute Black Granite">Absolute Black Granite</option>
                  <option value="Steel Grey Granite">Steel Grey Granite</option>
                  <option value="Viscon White Granite">Viscon White Granite</option>
                  <option value="Tan Brown Granite">Tan Brown Granite</option>
                  <option value="Black Pearl Granite">Black Pearl Granite</option>
                  <option value="Cosmic Black Granite">Cosmic Black Granite</option>
                  <option value="River Black Granite">River Black Granite</option>
                  <option value="Mixed Container Requirements">Mixed Container Requirements</option>
                  <option value="Other / Custom Granite Sourcing">Other / Custom Granite Sourcing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#c8c2b6] tracking-wider mb-2">
                  Product Format
                </label>
                <select
                  name="productType"
                  value={quoteData.productType}
                  onChange={handleQuoteChange}
                  className="w-full bg-black/80 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors"
                >
                  <option value="Gang Saw Jumbo Slabs (20mm)">Gang Saw Jumbo Slabs (20mm)</option>
                  <option value="Gang Saw Jumbo Slabs (30mm)">Gang Saw Jumbo Slabs (30mm)</option>
                  <option value="Vertical Cutter Countertop Slabs (20mm)">Vertical Cutter Countertop Slabs (20mm)</option>
                  <option value="Vertical Cutter Countertop Slabs (30mm)">Vertical Cutter Countertop Slabs (30mm)</option>
                  <option value="Cut-to-Size Project Tiles">Cut-to-Size Project Tiles</option>
                  <option value="Rough Granite Quarry Blocks">Rough Granite Quarry Blocks</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#c8c2b6] tracking-wider mb-2">
                  Preferred Finish <span className="text-xs font-normal text-[#8c867a]">(Optional)</span>
                </label>
                <select
                  name="finish"
                  value={quoteData.finish}
                  onChange={handleQuoteChange}
                  className="w-full bg-black/80 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors"
                >
                  <option value="Mirror Polished">Mirror Polished (High Gloss)</option>
                  <option value="Honed / Satin Matte">Honed / Satin Matte</option>
                  <option value="Leathered / Lapatura">Leathered / Lapatura</option>
                  <option value="Flamed / Thermal">Flamed / Thermal</option>
                  <option value="Bush Hammered">Bush Hammered</option>
                  <option value="Multiple Finishes">Multiple Finishes</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#c8c2b6] tracking-wider mb-2">
                  Required Quantity <span className="text-xs font-normal text-[#8c867a]">(Optional)</span>
                </label>
                <select
                  name="quantity"
                  value={quoteData.quantity}
                  onChange={handleQuoteChange}
                  className="w-full bg-black/80 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors"
                >
                  <option value="1 x 20ft FCL Container (~400-450 sqm of 20mm)">1 x 20ft FCL Container (~400-450 sqm of 20mm)</option>
                  <option value="2 to 5 Containers (Monthly / Bulk Contract)">2 to 5 Containers (Monthly / Bulk Contract)</option>
                  <option value="5+ Containers (Wholesale Program)">5+ Containers (Wholesale Program)</option>
                  <option value="LCL / Trial Order / Sample Batch">LCL / Trial Order / Sample Batch</option>
                  <option value="Project Specific Dimensions">Project Specific Dimensions</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-xs uppercase font-semibold text-[#c8c2b6] tracking-wider mb-2">
                Message / Project Requirements <span className="text-xs font-normal text-[#8c867a]">(Optional)</span>
              </label>
              <textarea
                name="requirements"
                rows={4}
                value={quoteData.requirements}
                onChange={handleQuoteChange}
                placeholder="Include custom slab dimensions, thickness tolerance requirements, delivery timeframe, or allowable variation..."
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full text-xs sm:text-sm py-4 uppercase tracking-wider font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(200,169,110,0.25)]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Transmitting Quotation Request...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Submit Formal Quotation Request</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-[#787266] text-center mt-3">
              Your quotation enquiry is transmitted securely via Web3Forms to info@bariqstone.com. We maintain commercial non-disclosure agreements for all client orders.
            </p>
          </div>
        </form>
      )}

      {/* ─── TAB 2: GENERAL CONTACT FORM ─── */}
      {activeTab === "contact" && (
        <form onSubmit={handleContactSubmit} className="space-y-6">
          {/* Honeypot field for Web3Forms anti-spam */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-botcheck">Do not fill this field</label>
            <input
              type="text"
              id="contact-botcheck"
              name="botcheck"
              value={contactData.botcheck}
              onChange={handleContactChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={contactData.fullName}
                onChange={handleContactChange}
                placeholder="e.g. John Doe"
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={contactData.email}
                onChange={handleContactChange}
                placeholder="name@example.com"
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={contactData.phone}
                onChange={handleContactChange}
                placeholder="+1 555 0192 / +91 ..."
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Subject <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                value={contactData.subject}
                onChange={handleContactChange}
                placeholder="e.g. Factory Visit / Partnership Inquiry"
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase font-semibold text-[#C8A96E] tracking-wider mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={contactData.message}
                onChange={handleContactChange}
                placeholder="Write your enquiry, question, or details here..."
                className="w-full bg-black/60 border border-[#C8A96E]/25 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#5e584c]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full text-xs sm:text-sm py-4 uppercase tracking-wider font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(200,169,110,0.25)]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Contact Message</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-[#787266] text-center mt-3">
              Submissions are delivered directly to info@bariqstone.com. We respond to all verified business inquiries within 24 business hours.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0e1110]">
      {/* ─── Hero ─── */}
      <section className="relative py-24 sm:py-28 bg-gradient-to-b from-[#141b17] via-[#0f1412] to-[#0e1110] border-b border-[#C8A96E]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-xs font-semibold tracking-[0.25em] uppercase">
              B2B Granite Procurement
            </span>
            <span className="h-px w-10 bg-[#C8A96E]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            Contact & <span className="text-[#C8A96E]">Quotation Desk</span>
          </h1>
          <p className="text-base sm:text-lg text-[#c0bab0] max-w-3xl mx-auto leading-relaxed">
            Connect with our sales and logistics team for container allocations, custom cutting specifications, sample requests, and FOB/CIF price quotations.
          </p>
        </div>
      </section>

      {/* ─── Direct Contact Strip ─── */}
      <section className="py-12 bg-[#121614] border-b border-[#C8A96E]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-premium p-6 text-center border border-[#C8A96E]/20 bg-[#0e1110]">
              <div className="flex justify-center mb-4 p-3 rounded-full bg-[#C8A96E]/10 mx-auto w-fit">
                <Mail size={22} className="text-[#C8A96E]" />
              </div>
              <h3 className="text-[#C8A96E] font-semibold text-xs tracking-wider uppercase mb-1">
                Official Email
              </h3>
              <a
                href="mailto:info@bariqstone.com"
                className="text-white hover:text-[#C8A96E] transition-colors text-sm font-medium block"
              >
                info@bariqstone.com
              </a>
              <span className="text-[11px] text-[#787266] mt-1 block">
                Direct export inbox (24h response)
              </span>
            </div>

            <div className="card-premium p-6 text-center border border-[#C8A96E]/20 bg-[#0e1110]">
              <div className="flex justify-center mb-4 p-3 rounded-full bg-[#C8A96E]/10 mx-auto w-fit">
                <Phone size={22} className="text-[#C8A96E]" />
              </div>
              <h3 className="text-[#C8A96E] font-semibold text-xs tracking-wider uppercase mb-1">
                Phone & WhatsApp
              </h3>
              <a
                href="tel:+919381958057"
                className="text-white hover:text-[#C8A96E] transition-colors text-sm font-medium block"
              >
                +91 93819 58057
              </a>
              <a
                href="tel:+919344792957"
                className="text-[#a8a296] hover:text-[#C8A96E] transition-colors text-xs block mt-0.5"
              >
                +91 93447 92957
              </a>
            </div>

            <div className="card-premium p-6 text-center border border-[#C8A96E]/20 bg-[#0e1110]">
              <div className="flex justify-center mb-4 p-3 rounded-full bg-[#C8A96E]/10 mx-auto w-fit">
                <MapPin size={22} className="text-[#C8A96E]" />
              </div>
              <h3 className="text-[#C8A96E] font-semibold text-xs tracking-wider uppercase mb-1">
                Quarry Hub Location
              </h3>
              <p className="text-white text-sm font-medium">Chimakurthy, Prakasam</p>
              <span className="text-[11px] text-[#787266] mt-0.5 block">
                Andhra Pradesh 523226, India
              </span>
            </div>

            <div className="card-premium p-6 text-center border border-[#C8A96E]/20 bg-[#0e1110]">
              <div className="flex justify-center mb-4 p-3 rounded-full bg-[#C8A96E]/10 mx-auto w-fit">
                <Clock size={22} className="text-[#C8A96E]" />
              </div>
              <h3 className="text-[#C8A96E] font-semibold text-xs tracking-wider uppercase mb-1">
                Working Hours
              </h3>
              <p className="text-white text-sm font-medium">Mon – Sat: 9 AM – 6:30 PM</p>
              <span className="text-[11px] text-[#787266] mt-0.5 block">
                Indian Standard Time (IST)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quotation Form + Trust Panel ─── */}
      <section className="py-20 bg-[#0e1110]" id="enquiry-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="card-premium p-6 sm:p-10 border border-[#C8A96E]/25 bg-[#121614] rounded-sm shadow-2xl">
                <div className="mb-6">
                  <span className="text-[#C8A96E] text-xs font-semibold uppercase tracking-widest block mb-2">
                    Online Procurement Desk
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-white">
                    Submit Requirements & Inquiries
                  </h2>
                </div>

                <Suspense fallback={<div className="text-center py-10 text-[#C8A96E]">Loading form...</div>}>
                  <ContactFormInner />
                </Suspense>
              </div>
            </div>

            {/* Side B2B Trust Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-premium p-6 sm:p-8 border border-[#C8A96E]/25 bg-[#121614] rounded-sm">
                <h3 className="text-xl font-bold font-playfair text-white mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#C8A96E]" />
                  <span>The Bariq Stone Assurance</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#a49e92] leading-relaxed mb-6">
                  We supply wholesale importers, distributors, and major construction projects with transparent quality inspection and guaranteed packing integrity.
                </p>

                <div className="space-y-4 text-xs text-[#c4beaf]">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Pre-Shipment Inspection Photos</span>
                      <span className="text-[#8c867a]">High-resolution photographs of actual dry-laid slabs and bundle labels prior to container stuffing.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Calibrated Export Thickness</span>
                      <span className="text-[#8c867a]">Strict +/- 1mm thickness tolerance checked across all 4 corners of every processed slab.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Fumigated Seaworthy Packaging</span>
                      <span className="text-[#8c867a]">ISPM-15 compliant wooden bundles engineered to resist maritime dynamic motion.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Transparent Freight Terms</span>
                      <span className="text-[#8c867a]">We quote FOB (Indian Port) or CIF (Destination Port) based on your logistics preference.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Communication Prompt */}
              <div className="p-6 bg-[#161c18] border border-[#C8A96E]/25 rounded-sm text-center">
                <h4 className="text-base font-bold font-playfair text-white mb-2">
                  Prefer Direct Email or Phone Discussion?
                </h4>
                <p className="text-xs text-[#9e988c] mb-5">
                  Send architectural blueprints, cut-lists, or custom stone schedules directly to our engineering desk.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:info@bariqstone.com"
                    className="btn-gold text-xs py-3 uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                  >
                    <Mail size={15} />
                    <span>Email info@bariqstone.com</span>
                  </a>
                  <a
                    href="tel:+919381958057"
                    className="btn-outline-gold text-xs py-3 uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                  >
                    <Phone size={15} />
                    <span>Call +91 93819 58057</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
