/**
 * Web3Forms Client and Configuration for Bariq Stone Website
 * Docs: https://docs.web3forms.com/
 */

export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "c905a51c-06fd-4c89-8d98-ee22fe056f94"

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"
export const RECIPIENT_EMAIL = "info@bariqstone.com"

export interface Web3FormsResponse {
  success: boolean
  message: string
  data?: Record<string, unknown>
}

/**
 * Validates basic email syntax
 */
export function isValidEmail(email: string): boolean {
  const trimmed = email.trim()
  if (!trimmed) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(trimmed)
}

/**
 * Validates phone / WhatsApp number (minimum 6 digits or valid telephone characters)
 */
export function isValidPhone(phone: string): boolean {
  const trimmed = phone.trim()
  if (!trimmed || trimmed.length < 6) return false
  // Allow numbers, spaces, plus, dashes, parentheses
  return /^[\d\s+\-()]{6,30}$/.test(trimmed)
}

/**
 * Dispatches form data directly to the Web3Forms API
 */
export async function submitWeb3Forms(
  payload: Record<string, string | number | boolean | undefined>
): Promise<Web3FormsResponse> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })

  let resultData: Web3FormsResponse
  try {
    resultData = await response.json()
  } catch {
    throw new Error("Unable to parse submission response from server.")
  }

  if (!response.ok || !resultData.success) {
    throw new Error(
      resultData.message ||
        "Submission was not accepted by the mail gateway. Please verify your details or email info@bariqstone.com."
    )
  }

  return resultData
}

