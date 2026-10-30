import { NextResponse } from "next/server"
import { z } from "zod"

// Simple rate-limiting store (IP -> array of timestamps)
const rateLimitMap = new Map<string, number[]>()

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  companyName: z.string().trim().max(120).optional().default(""),
  businessEmail: z.string().trim().email("Please provide a valid business email").max(100),
  phone: z.string().trim().min(6, "Please provide a valid phone or WhatsApp number").max(30),
  country: z.string().trim().min(2, "Please provide your country").max(80),
  graniteVariety: z.string().trim().max(100).optional().default("General Granite Enquiry"),
  productType: z.string().trim().max(80).optional().default("Gang Saw Slabs"),
  finish: z.string().trim().max(80).optional().default("Polished"),
  dimensions: z.string().trim().max(100).optional().default("Standard"),
  quantity: z.string().trim().max(80).optional().default("Full Container Load (FCL)"),
  requirements: z.string().trim().max(2000).optional().default(""),
  honeypot: z.string().max(0, "Spam detected").optional().default(""),
})

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000 // 10 minutes
  const maxRequests = 6

  const timestamps = rateLimitMap.get(ip) || []
  const recent = timestamps.filter((time) => now - time < windowMs)

  if (recent.length >= maxRequests) {
    return false
  }

  recent.push(now)
  rateLimitMap.set(ip, recent)
  return true
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1"

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many enquiries submitted from this network. Please wait a few minutes before trying again." },
        { status: 429 }
      )
    }

    const body = await req.json()
    const result = enquirySchema.safeParse(body)

    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Invalid form data"
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const data = result.data

    // If honeypot is filled, silently discard without error to confuse bots
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." })
    }

    const targetEmail = process.env.NOTIFICATION_EMAIL || "info@bariqstone.com"
    const resendApiKey = process.env.RESEND_API_KEY

    const emailContent = `
=============================================
NEW B2B GRANITE EXPORT ENQUIRY - BARIQ STONE
=============================================
Buyer Name:       ${data.fullName}
Company Name:     ${data.companyName || "Not specified"}
Email:            ${data.businessEmail}
Phone / WhatsApp: ${data.phone}
Country:          ${data.country}

PROJECT & MATERIAL SPECIFICATIONS:
Granite Variety:  ${data.graniteVariety}
Product Type:     ${data.productType}
Required Finish:  ${data.finish}
Dimensions:       ${data.dimensions}
Estimated Qty:    ${data.quantity}

ADDITIONAL REQUIREMENTS:
${data.requirements || "None specified"}
=============================================
Submitted from:   ${ip} at ${new Date().toISOString()}
Reply directly to: ${data.businessEmail}
`

    console.log("[Bariq Stone Enquiry]", emailContent)

    // If Resend API Key is configured, dispatch the verified email
    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "Bariq Stone Enquiries <enquiries@bariqstone.com>",
          to: [targetEmail],
          reply_to: data.businessEmail,
          subject: `[B2B Export Enquiry] ${data.graniteVariety} - ${data.companyName || data.fullName} (${data.country})`,
          text: emailContent,
        }),
      })

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text()
        console.error("Resend API delivery error:", errorText)
        // Fallback: don't break user experience if mail provider fails, log securely
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. Our export and supply team will review your specifications and contact you shortly.",
    })
  } catch (error) {
    console.error("Enquiry API error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry. Please reach us directly at info@bariqstone.com" },
      { status: 500 }
    )
  }
}
