import type { Product } from "@/types/product";

function img(text: string, bg = "1A1A1A", fg = "F5A623") {
  return `https://placehold.co/600x600/${bg}/${fg}?text=${encodeURIComponent(text)}`;
}

export const products: Product[] = [
  // Power Tools
  {
    id: "20v-cordless-drill",
    name: "20V Cordless Drill/Driver Kit",
    category: "Power Tools",
    price: 129.99,
    shortDescription: "Compact brushless drill with two batteries and charger.",
    description:
      "A compact, brushless 20V drill/driver built for all-day jobsite use. Includes two batteries, a fast charger, and a heavy-duty carrying case. 2-speed gearbox with 15+1 clutch settings for precise torque control.",
    image: img("Cordless Drill"),
    sku: "PT-1001",
    stock: 24,
    featured: true,
  },
  {
    id: "7-1-4-circular-saw",
    name: "7-1/4\" Circular Saw",
    category: "Power Tools",
    price: 99.0,
    shortDescription: "15-amp motor with laser-guided cutting.",
    description:
      "A 15-amp circular saw with a laser guide for straight, accurate cuts through framing lumber, plywood, and sheet goods. Bevel capacity to 56 degrees.",
    image: img("Circular Saw"),
    sku: "PT-1002",
    stock: 18,
  },
  {
    id: "random-orbit-sander",
    name: "5\" Random Orbit Sander",
    category: "Power Tools",
    price: 59.99,
    shortDescription: "Variable speed with dust collection canister.",
    description:
      "Variable-speed random orbit sander for swirl-free finishing on wood and metal. Includes a dust collection canister and hook-and-loop sanding pad.",
    image: img("Orbit Sander"),
    sku: "PT-1003",
    stock: 31,
  },

  // Hand Tools
  {
    id: "16oz-framing-hammer",
    name: "16 oz. Steel Framing Hammer",
    category: "Hand Tools",
    price: 24.99,
    shortDescription: "Forged steel head with a milled face for grip.",
    description:
      "One-piece forged steel framing hammer with a milled face for secure nail strikes and a magnetic nail starter. Shock-absorbing rubber grip.",
    image: img("Framing Hammer", "3A3F44", "F4F1EC"),
    sku: "HT-2001",
    stock: 45,
    featured: true,
  },
  {
    id: "10pc-screwdriver-set",
    name: "10-Piece Screwdriver Set",
    category: "Hand Tools",
    price: 34.5,
    shortDescription: "Phillips, flathead, and Torx tips with a storage rack.",
    description:
      "A 10-piece set covering Phillips, flathead, and Torx tips. Chrome-vanadium steel shafts and cushioned grips, with a wall-mountable storage rack.",
    image: img("Screwdriver Set", "3A3F44", "F4F1EC"),
    sku: "HT-2002",
    stock: 40,
  },
  {
    id: "25ft-tape-measure",
    name: "25 ft. Tape Measure",
    category: "Hand Tools",
    price: 14.99,
    shortDescription: "Fractional read-out with a 10 ft. standout.",
    description:
      "Heavy-duty 25 ft. tape measure with an easy-to-read fractional scale, 10-foot standout, and a rubberized case for jobsite drops.",
    image: img("Tape Measure", "3A3F44", "F4F1EC"),
    sku: "HT-2003",
    stock: 60,
  },

  // Fasteners & Hardware
  {
    id: "wood-screw-assortment",
    name: "Wood Screw Assortment (500 pc.)",
    category: "Fasteners & Hardware",
    price: 19.99,
    shortDescription: "Coarse-thread screws in six common sizes.",
    description:
      "A 500-piece assortment of coarse-thread wood screws in six of the most common sizes, organized in a divided storage box.",
    image: img("Wood Screws", "C1502E", "F4F1EC"),
    sku: "FH-3001",
    stock: 50,
  },
  {
    id: "door-hinge-3pack",
    name: "4\" Door Hinges (3-Pack)",
    category: "Fasteners & Hardware",
    price: 12.99,
    shortDescription: "Steel hinges with a satin nickel finish.",
    description:
      "Standard 4-inch steel door hinges with a satin nickel finish, removable pins, and mounting screws included. Sold in packs of three.",
    image: img("Door Hinges", "C1502E", "F4F1EC"),
    sku: "FH-3002",
    stock: 35,
  },
  {
    id: "carriage-bolt-kit",
    name: "Carriage Bolt Kit (100 pc.)",
    category: "Fasteners & Hardware",
    price: 22.0,
    shortDescription: "Zinc-plated bolts, nuts, and washers.",
    description:
      "A 100-piece kit of zinc-plated carriage bolts with matching nuts and washers, spanning the most-used sizes for deck and furniture builds.",
    image: img("Carriage Bolts", "C1502E", "F4F1EC"),
    sku: "FH-3003",
    stock: 28,
  },

  // Lumber & Building Materials
  {
    id: "2x4x8-stud",
    name: "2x4x8 Framing Stud",
    category: "Lumber & Building Materials",
    price: 5.49,
    shortDescription: "Kiln-dried spruce-pine-fir, straight and true.",
    description:
      "Standard kiln-dried spruce-pine-fir framing stud, graded for structural use in wall framing and general construction.",
    image: img("2x4 Stud", "1A1A1A", "F4F1EC"),
    sku: "LB-4001",
    stock: 200,
    featured: true,
  },
  {
    id: "3-4-plywood-sheet",
    name: "3/4\" Plywood Sheet (4x8)",
    category: "Lumber & Building Materials",
    price: 54.0,
    shortDescription: "Sanded pine plywood for shelving and subfloors.",
    description:
      "A 4x8 sheet of sanded 3/4-inch pine plywood, suitable for shelving, subflooring, and general shop projects.",
    image: img("Plywood Sheet", "1A1A1A", "F4F1EC"),
    sku: "LB-4002",
    stock: 60,
  },
  {
    id: "construction-adhesive",
    name: "Construction Adhesive (10 oz.)",
    category: "Lumber & Building Materials",
    price: 6.49,
    shortDescription: "All-weather bonding for wood, masonry, and metal.",
    description:
      "High-strength, all-weather construction adhesive for bonding wood, masonry, drywall, and metal. Fits standard caulking guns.",
    image: img("Adhesive", "1A1A1A", "F4F1EC"),
    sku: "LB-4003",
    stock: 75,
  },

  // Safety Gear
  {
    id: "safety-glasses-3pack",
    name: "Safety Glasses (3-Pack)",
    category: "Safety Gear",
    price: 11.99,
    shortDescription: "Anti-fog, scratch-resistant lenses.",
    description:
      "Anti-fog, scratch-resistant safety glasses meeting ANSI Z87.1 standards. Sold in a 3-pack with clear, amber, and smoke lenses.",
    image: img("Safety Glasses", "2E7D32", "F4F1EC"),
    sku: "SG-5001",
    stock: 55,
  },
  {
    id: "work-gloves",
    name: "Reinforced Work Gloves",
    category: "Safety Gear",
    price: 16.99,
    shortDescription: "Synthetic leather palms with knuckle protection.",
    description:
      "Durable work gloves with synthetic leather palms, reinforced fingertips, and knuckle protection. Breathable spandex back panel.",
    image: img("Work Gloves", "2E7D32", "F4F1EC"),
    sku: "SG-5002",
    stock: 42,
    featured: true,
  },
  {
    id: "hard-hat",
    name: "Vented Hard Hat",
    category: "Safety Gear",
    price: 21.99,
    shortDescription: "ANSI-rated with a ratchet suspension.",
    description:
      "Lightweight, vented hard hat with a 4-point ratchet suspension for a secure, adjustable fit. Meets ANSI Z89.1 Type I standards.",
    image: img("Hard Hat", "2E7D32", "F4F1EC"),
    sku: "SG-5003",
    stock: 30,
  },

  // Paint & Finishing
  {
    id: "interior-paint-gallon",
    name: "Interior Paint - Eggshell (1 Gal.)",
    category: "Paint & Finishing",
    price: 38.99,
    shortDescription: "One-coat coverage, low-VOC formula.",
    description:
      "Premium low-VOC interior paint with a durable eggshell finish and one-coat coverage on most surfaces. Available tintable base.",
    image: img("Interior Paint", "F5A623", "1A1A1A"),
    sku: "PF-6001",
    stock: 40,
  },
  {
    id: "paint-brush-set",
    name: "Angled Paint Brush Set (3 pc.)",
    category: "Paint & Finishing",
    price: 17.49,
    shortDescription: "Synthetic bristles for latex and oil-based paints.",
    description:
      "A 3-piece set of angled synthetic-bristle brushes in common trim sizes, built for clean lines with latex and oil-based paints.",
    image: img("Paint Brushes", "F5A623", "1A1A1A"),
    sku: "PF-6002",
    stock: 38,
  },
  {
    id: "wood-stain-quart",
    name: "Penetrating Wood Stain (1 Qt.)",
    category: "Paint & Finishing",
    price: 15.99,
    shortDescription: "Deep-penetrating oil-based stain.",
    description:
      "Oil-based penetrating wood stain that enhances natural grain while protecting against moisture. Covers up to 150 sq. ft. per quart.",
    image: img("Wood Stain", "F5A623", "1A1A1A"),
    sku: "PF-6003",
    stock: 33,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
