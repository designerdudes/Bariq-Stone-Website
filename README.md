# Bariq Stone — Premium Granite Manufacturer & Exporter

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Web3Forms](https://img.shields.io/badge/Web3Forms-Integrated-0ea5e9)](https://web3forms.com/)

Official international B2B digital platform for **Bariq Stone**, an established natural stone manufacturer, processor, and bulk exporter based in Chimakurthy, Andhra Pradesh, India. The website showcases premium Indian granite varieties, processing infrastructure, ocean freight packaging standards, and provides an integrated procurement and quotation desk for global importers, distributors, and construction contractors.

---

## Key Features

- **Responsive Header & Navigation**:
  - Engineered for flawless display across desktop viewports (`1280px` to `1535px`, `1536px+`), tablets (`768px`, `1024px`), and mobile screens (`375px–430px`).
  - No text wrapping on multi-word navigation items (*About Us*, *Granite Collection*, *Export & Logistics*).
  - Prominent and visually distinct *Request a Quote* gold CTA button with dedicated spacing from navigation items.
  - Smooth mobile navigation drawer with quick-contact shortcuts (direct email & phone calling).

- **Integrated Procurement & Quotation Desk**:
  - **Granite Quotation Request Form**: Captures destination country/port, stone variety, product format (Gang Saw jumbo slabs, vertical cutter slabs, cut-to-size tiles), surface finish, container volume, and custom project cut-lists.
  - **General Contact Enquiry Form**: Dedicated mode for general business queries, quarry inspections, and distributor partnerships.
  - **URL Parameter Prefilling**: Dedicated product pages automatically pass stone varieties into the quotation form (e.g. `/contact?variety=Black+Galaxy+Granite`).

- **Web3Forms API Integration**:
  - Submissions dispatched directly to the official inbox: `info@bariqstone.com`.
  - Automatic `Reply-To` set to the verified visitor email.
  - Built-in anti-spam honeypot protection (`botcheck`).
  - Client-side validation for RFC 5322 emails, phone numbers, and required fields.
  - Loading states, duplicate submission prevention, and preservation of form inputs upon transmission errors.

- **Granite Variety Portfolio**:
  - Comprehensive technical specifications (compressive strength, flexural strength, water absorption, bulk density).
  - Featured varieties:
    - Black Galaxy Granite *(Chimakurthy Star Galaxy)*
    - Absolute Black Granite *(Premium Indian Jet Black)*
    - Steel Grey Granite
    - Viscon White Granite
    - Tan Brown Granite
    - Black Pearl Granite
    - Cosmic Black Granite
    - River Black Granite

- **Manufacturing & Seaport Logistics Showcase**:
  - Gang-saw slicing (20mm & 30mm) and automated abrasive line polishing.
  - Export packaging details: ISPM-15 certified heat-treated wooden crates/bundles, polyethylene waterproofing, corner buffers, and heavy-duty steel strapping for 20ft FCL container loads.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/), PostCSS, `tailwindcss-animate` |
| **Icons & UI** | [Lucide React](https://lucide.dev/), Radix UI Primitives, Embla Carousel |
| **Form Backend** | [Web3Forms API](https://web3forms.com/) |

---

## Project Structure

```text
├── app/
│   ├── about/              # Company history, quarry heritage & manufacturing values
│   ├── api/
│   │   └── quote/          # API route for quotation forwarding with rate limiting
│   ├── contact/            # Interactive Quotation & General Contact Desk
│   ├── gallery/            # Factory operations, slab stacks & raw block gallery
│   ├── packaging/          # ISPM-15 export crating, sea freight & logistics guide
│   ├── products/           # Full granite variety catalog
│   │   └── [slug]/         # Dynamic product detail & technical specification pages
│   ├── services/           # Slicing, surface finishing & quality calibration details
│   ├── globals.css         # Custom typography, gold accents & dark theme variables
│   ├── layout.tsx          # Root layout with metadata and sticky Header/Footer
│   └── page.tsx            # High-conversion B2B export homepage
├── components/
│   ├── header.tsx          # Fully responsive top bar, desktop nav & mobile drawer
│   ├── footer.tsx          # B2B footer with variety catalog links & company contacts
│   └── ui/                 # Radix UI and utility component library
├── lib/
│   ├── granite-data.ts     # Master data for stone varieties, applications & specs
│   ├── utils.ts            # ClassName merging and formatting helpers
│   └── web3forms.ts        # Web3Forms API client, keys, and validation routines
├── public/
│   ├── images/             # High-resolution slab photographs, quarry assets & logo
│   ├── favicon.ico
│   ├── icon.png
│   └── apple-icon.png
├── .env.example            # Environment variable template
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### 1. Prerequisites

- **Node.js**: v18.18+ or v20+
- **Package Manager**: `npm` or `pnpm`

### 2. Clone Repository

```bash
git clone https://github.com/designerdudes/Bariq-Stone-Website.git
cd Bariq-Stone-Website
```

### 3. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 4. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your Web3Forms access key:

```env
# Web3Forms Access Key (https://web3forms.com)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here

# Notification recipient email
NOTIFICATION_EMAIL=info@bariqstone.com
```

> **Note:** If generating a new access key on Web3Forms for `info@bariqstone.com`, check the inbox for the initial activation email from Web3Forms and click **Activate Form**.

### 5. Run Local Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Production Build

```bash
# Type check and build optimized bundle
npm run build

# Start production server
npm run start
```

---

## Web3Forms Configuration

The website utilizes Web3Forms for zero-backend, secure form transmissions:
- **API Endpoint**: `POST https://api.web3forms.com/submit`
- **Recipient**: `info@bariqstone.com`
- **Subject Lines**:
  - Quotations: `Bariq Stone – Granite Quotation Request [Variety] - Company/Name`
  - Contact: `Bariq Stone – Website Contact Enquiry: Subject - Name`
- **Honeypot**: Hidden `botcheck` input to trap automated spam bots without CAPTCHA friction for real buyers.

---

## Company Contact & Location

- **Company**: Bariq Stone
- **Email**: [info@bariqstone.com](mailto:info@bariqstone.com)
- **Phone / WhatsApp**:
  - `+91 93819 58057`
  - `+91 93447 92957`
- **Quarry & Processing Hub**: Chimakurthy, Prakasam District, Andhra Pradesh 523226, India
- **Operating Hours**: Monday – Saturday: 9:00 AM – 6:30 PM (IST)

---

## License

This project is proprietary and confidential to **Bariq Stone**. All rights reserved.
