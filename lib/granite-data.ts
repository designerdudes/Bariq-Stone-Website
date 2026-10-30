export interface GraniteVariety {
  id: string
  slug: string
  name: string
  tagline: string
  category: "black" | "grey-white" | "exotic"
  categoryLabel: string
  origin: string
  image: string
  shortDescription: string
  longDescription: string
  mineralPattern: string
  finishes: string[]
  sizes: {
    type: string
    dimensions: string
    thickness: string
    usage: string
  }[]
  specifications: {
    density: string
    waterAbsorption: string
    compressiveStrength: string
    flexuralStrength: string
    mohsHardness: string
    label: string // e.g. "Typical industry reference values"
  }
  applications: string[]
  exportPackaging: string
}

export const GRANITE_VARIETIES: GraniteVariety[] = [
  {
    id: "black-galaxy",
    slug: "black-galaxy",
    name: "Black Galaxy Granite",
    tagline: "Deep Black Base with Golden & Bronze Starry Speckles",
    category: "black",
    categoryLabel: "Black Granites",
    origin: "Chimakurthy, Andhra Pradesh, India",
    image: "/images/Black-galaxy-1.png",
    shortDescription:
      "World-famous black granite adorned with reflective golden and bronze bronzite speckles, reminiscent of a starry night sky.",
    longDescription:
      "Black Galaxy is one of the world's most recognizable and prestigious natural stones. Quarried in Chimakurthy, Andhra Pradesh, it features a deep black gabbroic background studded with naturally occurring golden and copper metallic flecks. Sourced directly and processed with precision gang saw and line polishing technology.",
    mineralPattern:
      "Deep black to dark grey gabbro matrix with brilliant golden, copper, and bronze bronzite (enstatite) metallic crystal flakes uniformly distributed throughout the stone.",
    finishes: ["Mirror Polished", "Honed (Matte)", "Leather / Lapato", "Flamed", "Shot Blasted"],
    sizes: [
      {
        type: "Gang Saw Jumbo Slabs",
        dimensions: "280–320 cm x 180–205 cm",
        thickness: "20mm, 30mm (Custom on request)",
        usage: "Kitchen islands, seamless cladding, large commercial foyers",
      },
      {
        type: "Cutter / Vertical Slabs",
        dimensions: "180–270 cm x 60–90 cm",
        thickness: "18mm, 20mm, 30mm",
        usage: "Countertops, stair treads, vanity tops",
      },
      {
        type: "Cut-to-Size Project Tiles",
        dimensions: "60x60 cm, 60x30 cm, 80x80 cm",
        thickness: "15mm, 20mm",
        usage: "High-traffic flooring, wall cladding",
      },
    ],
    specifications: {
      density: "2.65 – 2.75 g/cm³",
      waterAbsorption: "0.08% – 0.15%",
      compressiveStrength: "190 – 220 MPa",
      flexuralStrength: "18 – 22 MPa",
      mohsHardness: "6 – 7",
      label: "Typical industry reference values for Chimakurthy material",
    },
    applications: [
      "Kitchen Countertops & Waterfall Islands",
      "Commercial Lobbies & High-Traffic Flooring",
      "Architectural Wall Cladding",
      "Staircases & Riser Sets",
      "Luxury Vanity Tops",
    ],
    exportPackaging:
      "Heavy-duty ISPM-15 heat-treated seaworthy wooden bundles with waterproof polyethylene wrapping, corner protectors, and heavy steel strapping for containerized maritime shipping.",
  },
  {
    id: "absolute-black",
    slug: "absolute-black",
    name: "Absolute Black Granite",
    tagline: "Ultra-Dense, Uniform Jet-Black Natural Granite",
    category: "black",
    categoryLabel: "Black Granites",
    origin: "Khammam & Warangal, Telangana / AP, India",
    image: "/images/granite-absolute-black.jpg",
    shortDescription:
      "Deep, uniform jet-black granite with exceptionally fine grain structure and minimal variation. The global standard for sleek modern architecture.",
    longDescription:
      "Absolute Black is renowned across international stone markets for its consistent pitch-black appearance and incredible mineral density. Unlike dyed stones, authentic Indian Absolute Black retains its deep color and brilliant polish across decades of indoor and outdoor use.",
    mineralPattern:
      "Consistent, ultra-fine-grained dark basaltic/diabase composition with homogenous dark minerals, virtually devoid of visible veining or fissures.",
    finishes: ["High Gloss Polished", "Honed / Satin Matte", "Leather / Brushed", "Flamed", "Bush Hammered"],
    sizes: [
      {
        type: "Gang Saw Slabs",
        dimensions: "280–310 cm x 170–195 cm",
        thickness: "20mm, 30mm, 40mm",
        usage: "Prestige kitchen countertops, architectural facades",
      },
      {
        type: "Cutter Slabs",
        dimensions: "180–260 cm x 60–90 cm",
        thickness: "18mm, 20mm, 30mm",
        usage: "Countertops, thresholds, window sills",
      },
      {
        type: "Calibrated Tiles & Cut-to-Size",
        dimensions: "30x30 cm, 60x30 cm, 60x60 cm",
        thickness: "10mm, 15mm, 20mm",
        usage: "Interior flooring, monument crafting, exterior pavers",
      },
    ],
    specifications: {
      density: "2.95 – 3.05 g/cm³",
      waterAbsorption: "0.03% – 0.08%",
      compressiveStrength: "240 – 280 MPa",
      flexuralStrength: "22 – 26 MPa",
      mohsHardness: "6.5 – 7",
      label: "Typical industry reference values for Khammam/Warangal material",
    },
    applications: [
      "Modern Minimalist Countertops",
      "Executive Commercial Flooring",
      "Exterior Facades & Rain-screens",
      "Monuments & Precision Surface Plates",
      "Bathroom Vanities & Feature Surfaces",
    ],
    exportPackaging:
      "Fumigated ISPM-15 certified wooden A-frames and closed wooden crates with shock-absorbent cushioning and plastic film to prevent abrasion during sea transit.",
  },
  {
    id: "steel-grey",
    slug: "steel-grey",
    name: "Steel Grey Granite",
    tagline: "Sophisticated Medium-to-Dark Graphite Grey with Silver Clusters",
    category: "grey-white",
    categoryLabel: "Grey & White Granites",
    origin: "Prakasam District, Andhra Pradesh, India",
    image: "/images/granite-steel-grey.jpg",
    shortDescription:
      "A versatile graphite-grey granite speckled with silver, charcoal, and translucent quartz flecks. Highly resistant to stains and temperature swings.",
    longDescription:
      "Steel Grey (also known as Silver Pearl or Steel Gray) is quarried in Andhra Pradesh and has become one of the most popular stones globally due to its balanced neutral tone. It harmonizes effortlessly with light and dark cabinetry, making it a primary choice for volume residential and hospitality developments.",
    mineralPattern:
      "Graphite grey to dark pewter matrix with crystalline clusters of silver mica, light grey feldspar, and darker charcoal accents.",
    finishes: ["Polished", "Lapatura / Leather", "Honed", "Flamed", "Waterjet"],
    sizes: [
      {
        type: "Gang Saw Jumbo Slabs",
        dimensions: "290–320 cm x 180–200 cm",
        thickness: "20mm, 30mm",
        usage: "Large kitchen countertops, commercial wall panels",
      },
      {
        type: "Countertop Cutter Slabs",
        dimensions: "200–280 cm x 65–95 cm",
        thickness: "20mm, 30mm",
        usage: "Fabricator standard countertops, vanities",
      },
      {
        type: "Modular Floor Tiles",
        dimensions: "60x60 cm, 60x30 cm, 40x40 cm",
        thickness: "15mm, 18mm, 20mm",
        usage: "Airport concourses, shopping malls, terraces",
      },
    ],
    specifications: {
      density: "2.70 – 2.80 g/cm³",
      waterAbsorption: "0.10% – 0.18%",
      compressiveStrength: "185 – 215 MPa",
      flexuralStrength: "16 – 20 MPa",
      mohsHardness: "6 – 6.5",
      label: "Typical industry reference values for Prakasam material",
    },
    applications: [
      "Residential & Multi-Unit Countertops",
      "High-Footfall Commercial Flooring",
      "Exterior Cladding & Entrance Portals",
      "Outdoor Patios (Flamed Finish)",
      "Bathroom Vanity Tops",
    ],
    exportPackaging:
      "ISPM-15 treated seaworthy wooden bundles loaded securely in 20ft heavy-duty sea containers with nylon straps, timber chocks, and humidity-control desiccant packs.",
  },
  {
    id: "viscon-white",
    slug: "viscon-white",
    name: "Viscon White Granite",
    tagline: "Fine-Grained Off-White with Dynamic Flowing Charcoal Waves",
    category: "grey-white",
    categoryLabel: "Grey & White Granites",
    origin: "Madanapalle, Andhra Pradesh, India",
    image: "/images/granite-viscon-white.jpg",
    shortDescription:
      "Bright, graceful off-white natural granite with fluid waves and veins of smoky grey and charcoal. Brings light and movement to any interior space.",
    longDescription:
      "Viscon White (also known as Viscount White or Madanapalle White) is one of India's most celebrated white granites. Its fluid veining rivals luxury Italian marble while offering the superior hardness, heat resistance, and low porosity of natural granite.",
    mineralPattern:
      "White and creamy-ivory feldspar base characterized by organic flowing striations, swirls, and waves of soft grey, charcoal, and translucent quartz crystals.",
    finishes: ["Polished", "Honed", "Leather / Brushed", "Flamed"],
    sizes: [
      {
        type: "Gang Saw Slabs (Bookmatched Available)",
        dimensions: "280–320 cm x 175–195 cm",
        thickness: "20mm, 30mm",
        usage: "Feature waterfall islands, bookmatched accent walls",
      },
      {
        type: "Cutter Slabs",
        dimensions: "180–250 cm x 60–85 cm",
        thickness: "20mm, 30mm",
        usage: "Standard kitchen counters, bathroom vanities",
      },
    ],
    specifications: {
      density: "2.60 – 2.68 g/cm³",
      waterAbsorption: "0.15% – 0.25%",
      compressiveStrength: "175 – 200 MPa",
      flexuralStrength: "15 – 19 MPa",
      mohsHardness: "6 – 6.5",
      label: "Typical industry reference values for Madanapalle material",
    },
    applications: [
      "Bright Contemporary Kitchen Islands",
      "Bookmatched Feature Walls & Foyers",
      "Luxury Master Bathroom Cladding",
      "Hospitality Reception Desks",
      "Architectural Staircases",
    ],
    exportPackaging:
      "Sturdy ISPM-15 export wooden crates with foam interleaving to safeguard delicate veined face surfaces during international ocean transit.",
  },
  {
    id: "tan-brown",
    slug: "tan-brown",
    name: "Tan Brown Granite",
    tagline: "Rich Chocolate & Black Matrix with Reddish-Brown Garnet Crystals",
    category: "exotic",
    categoryLabel: "Exotic & Colored Granites",
    origin: "Karimnagar, Telangana, India",
    image: "/images/granite-tan-brown.jpg",
    shortDescription:
      "A warm, rich granite with large copper-brown, burnt-amber, and reddish crystalline minerals nestled in a dark charcoal background.",
    longDescription:
      "Tan Brown is one of the world's most enduring granite varieties. Quarried in Karimnagar, it provides high impact resistance, exceptional depth of color, and warm earthy tones that complement wood finishes and warm architectural palettes.",
    mineralPattern:
      "Dark brown to black background embedded with large crystalline formations of copper-tan, burgundy, and dark chocolate feldspar minerals.",
    finishes: ["Mirror Polished", "Honed", "Leather / Brushed", "Flamed"],
    sizes: [
      {
        type: "Gang Saw Slabs",
        dimensions: "280–310 cm x 170–190 cm",
        thickness: "20mm, 30mm",
        usage: "Kitchen countertops, commercial bar tops, cladding",
      },
      {
        type: "Cutter Slabs",
        dimensions: "180–260 cm x 60–90 cm",
        thickness: "18mm, 20mm, 30mm",
        usage: "Worktops, vanities, window ledges",
      },
      {
        type: "Flooring Tiles",
        dimensions: "60x60 cm, 60x30 cm",
        thickness: "15mm, 20mm",
        usage: "Commercial interior and exterior flooring",
      },
    ],
    specifications: {
      density: "2.68 – 2.76 g/cm³",
      waterAbsorption: "0.10% – 0.18%",
      compressiveStrength: "180 – 210 MPa",
      flexuralStrength: "16 – 20 MPa",
      mohsHardness: "6 – 6.5",
      label: "Typical industry reference values for Karimnagar material",
    },
    applications: [
      "Warm Earthy Kitchen Countertops",
      "Hotel Bar Tops & Restaurant Tables",
      "Exterior Cladding & Plinths",
      "Commercial Building Foyers",
      "Outdoor Patios & Steps",
    ],
    exportPackaging:
      "Heat-treated ISPM-15 wooden bundles securely anchored inside 20ft shipping containers with timber bracing and heavy-duty strapping.",
  },
  {
    id: "black-pearl",
    slug: "black-pearl",
    name: "Black Pearl Granite",
    tagline: "Semi-Solid Black with Metallic Silver & Smoky Quartz Crystals",
    category: "black",
    categoryLabel: "Black Granites",
    origin: "Ongole Region, Andhra Pradesh, India",
    image: "/images/granite-black-pearl.jpg",
    shortDescription:
      "Semi-solid black stone with subtle, glistening flecks of silver, gold, and smoky green crystals. Subtle, refined, and durable.",
    longDescription:
      "Black Pearl (also known as Silver Pearl Black) offers a softer, more textured alternative to Absolute Black. Sourced from Andhra Pradesh, its subtle metallic specks catch natural and ambient light, hiding minor dust and fingerprints while providing maximum durability.",
    mineralPattern:
      "Uniform dark black matrix packed with micro-specks of silver mica, green-gold tint, and smoky grey crystals that give a pearl-like shimmer.",
    finishes: ["Polished", "Leather / Brushed", "Honed", "Flamed"],
    sizes: [
      {
        type: "Gang Saw Slabs",
        dimensions: "280–310 cm x 175–195 cm",
        thickness: "20mm, 30mm",
        usage: "Kitchen worktops, islands, vanities",
      },
      {
        type: "Cutter Slabs",
        dimensions: "180–270 cm x 60–90 cm",
        thickness: "18mm, 20mm, 30mm",
        usage: "Residential counters, threshold pieces",
      },
    ],
    specifications: {
      density: "2.72 – 2.80 g/cm³",
      waterAbsorption: "0.08% – 0.16%",
      compressiveStrength: "195 – 225 MPa",
      flexuralStrength: "17 – 21 MPa",
      mohsHardness: "6 – 7",
      label: "Typical industry reference values for Ongole region material",
    },
    applications: [
      "Modern & Transitional Kitchen Countertops",
      "Bathroom Vanity Tops",
      "Commercial Flooring",
      "Outdoor Kitchen Worktops",
      "Wall Cladding Panels",
    ],
    exportPackaging:
      "Export-grade fumigated wooden bundles with corner guards, moisture barriers, and maritime strapping.",
  },
  {
    id: "cosmic-black",
    slug: "cosmic-black",
    name: "Cosmic Black Granite",
    tagline: "Dramatic Black with Flowing Ribbons of Gold & Amber Quartz",
    category: "exotic",
    categoryLabel: "Exotic & Colored Granites",
    origin: "India",
    image: "/images/granite-cosmic-black.jpg",
    shortDescription:
      "A high-impact statement granite featuring swirling rivers of gold, amber, and milky-white quartz crystals over a deep black background.",
    longDescription:
      "Cosmic Black is an exotic natural stone celebrated for its dramatic motion and luxurious aesthetic. Each slab is a unique piece of geological art, making it the premier choice for luxury kitchen islands, signature feature walls, and bespoke hospitality spaces.",
    mineralPattern:
      "Intense jet-black crystalline background with dynamic linear and swirling rivers of gold, ivory, amber, and translucent quartz crystal deposits.",
    finishes: ["Polished", "Leathered / Satin", "Honed"],
    sizes: [
      {
        type: "Bookmatched Jumbo Gang Saw Slabs",
        dimensions: "280–320 cm x 180–200 cm",
        thickness: "20mm, 30mm",
        usage: "Bookmatched statement walls, luxury waterfall islands",
      },
    ],
    specifications: {
      density: "2.70 – 2.78 g/cm³",
      waterAbsorption: "0.10% – 0.18%",
      compressiveStrength: "180 – 210 MPa",
      flexuralStrength: "16 – 20 MPa",
      mohsHardness: "6 – 6.5",
      label: "Typical industry reference values for Indian exotic quarry block material",
    },
    applications: [
      "Luxury Kitchen Waterfall Islands",
      "Signature Commercial Lobbies & Reception Desks",
      "Bookmatched Accent & Fireplace Surrounds",
      "Executive Boardroom Tables",
      "Boutique Hotel Bathrooms",
    ],
    exportPackaging:
      "Reinforced ISPM-15 wooden bundles with extra face-to-face protective wrapping to protect high-value exotic bookmatched pairs.",
  },
  {
    id: "river-black",
    slug: "river-black",
    name: "River Black Granite",
    tagline: "Charcoal Black with Fluid Veining of Meandering Silver Streams",
    category: "black",
    categoryLabel: "Black Granites",
    origin: "Andhra Pradesh, India",
    image: "/images/granite-river-black.jpg",
    shortDescription:
      "Deep charcoal-black stone accented by flowing, organic waves and veins of white and silver quartz, offering natural linear movement.",
    longDescription:
      "River Black (also known as Black Waves) brings fluidity and character to black granite. Quarried in Andhra Pradesh, its linear veining creates visual length in countertops and hallways while maintaining the superior hardness of Indian granite.",
    mineralPattern:
      "Charcoal-black gabbroic base cut diagonally across gentle, flowing veins of silver-white quartz and grey mica.",
    finishes: ["Polished", "Leather / Brushed", "Honed"],
    sizes: [
      {
        type: "Gang Saw Slabs",
        dimensions: "280–310 cm x 175–195 cm",
        thickness: "20mm, 30mm",
        usage: "Countertops, wide islands, wall cladding",
      },
      {
        type: "Cutter Slabs",
        dimensions: "180–260 cm x 60–90 cm",
        thickness: "20mm, 30mm",
        usage: "Worktops, vanity tops, stair treads",
      },
    ],
    specifications: {
      density: "2.68 – 2.75 g/cm³",
      waterAbsorption: "0.10% – 0.16%",
      compressiveStrength: "185 – 215 MPa",
      flexuralStrength: "17 – 21 MPa",
      mohsHardness: "6 – 6.5",
      label: "Typical industry reference values for Andhra Pradesh material",
    },
    applications: [
      "Modern Kitchen Countertops",
      "Long Linear Hallway Flooring",
      "Commercial Feature Walls",
      "Stair Treads & Risers",
      "Vanity Tops",
    ],
    exportPackaging:
      "Export wooden bundles fumigated to ISPM-15 specifications, packed with corner protectors and heavy-duty steel bands.",
  },
]
