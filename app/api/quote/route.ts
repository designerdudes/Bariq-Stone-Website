import { NextResponse } from "next/server"
import { z } from "zod"
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT, RECIPIENT_EMAIL } from "@/lib/web3forms"

// Simple rate-limiting store (IP -> array of timestamps)
const rateLimitMap = new Map<string, number[]>()

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  companyName: z.string().trim().max(120).optional().default(""),
  businessEmail: z.string().trim().email("Please provide a valid business email").max(100),
  phone: z.string().trim().min(6, "Please provide a valid phone or WhatsApp number").max(30),
  country: z.string().trim().min(2, "Please provide your destination country or port").max(80),
  graniteVariety: z.string().trim().max(100).optional().default("General Granite Enquiry"),
  productType: z.string().trim().max(80).optional().default("Gang Saw Slabs"),
  finish: z.string().trim().max(80).optional().default("Mirror Polished"),
  quantity: z.string().trim().max(80).optional().default("Full Container Load (FCL)"),
  requirements: z.string().trim().max(2000).optional().default(""),
  botcheck: z.string().max(0, "Spam detected").optional().default(""),
})

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000 // 10 minutes
  const maxRequests = 10

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

    // If bot honeypot is filled, silently discard without error
    if (data.botcheck && data.botcheck.length > 0) {
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." })
    }

    const subjectLine = `Bariq Stone – Granite Quotation Request [${data.graniteVariety}]${
      data.companyName ? ` - ${data.companyName}` : ` - ${data.fullName}`
    }`

    // Dispatch directly to Web3Forms API
    const web3Response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: subjectLine,
        from_name: "Bariq Stone Quotation Desk",
        to_email: RECIPIENT_EMAIL,
        replyto: data.businessEmail,
        name: data.fullName,
        email: data.businessEmail,
        phone: data.phone,
        company: data.companyName || "Not specified",
        country: data.country,
        granite_variety: data.graniteVariety,
        product_format: data.productType,
        preferred_finish: data.finish,
        required_quantity: data.quantity,
        project_requirements: data.requirements || "None specified",
        form_type: "Granite Quotation Request",
        botcheck: data.botcheck,
      }),
    })

    const web3Result = await web3Response.json().catch(() => null)

    if (!web3Response.ok || !web3Result?.success) {
      return NextResponse.json(
        {
          error:
            web3Result?.message ||
            "Unable to submit enquiry via mail gateway. Please reach our export desk directly at info@bariqstone.com.",
        },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Bariq Stone. Your enquiry has been submitted successfully. Our team will get back to you shortly.",
    })
  } catch (error) {
    console.error("Enquiry API error:", error)
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your enquiry. Please reach us directly at info@bariqstone.com",
      },
      { status: 500 }
    )
  }
}
