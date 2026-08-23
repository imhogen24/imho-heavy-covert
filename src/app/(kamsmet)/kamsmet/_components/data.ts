/**
 * Content transcribed from "KAMSMET PRODUCTS BROCHURE v1.5" (2026 Collection).
 * Copy is kept verbatim so the page stays in sync with the printed brochure.
 */

export type ModelImage = {
  src: string;
  alt: string;
};

/**
 * Intrinsic pixel size of every render. Feature panels size themselves from
 * these so the artwork fills its cell at its own aspect ratio — no letterboxing
 * and nothing stretched — and Next/Image can reserve the space up front.
 */
const RENDER_SIZES: Record<string, { width: number; height: number }> = {
  "/kamsmet/flatbed-hero.webp": { width: 1600, height: 828 },
  "/kamsmet/flatbed-side.webp": { width: 1600, height: 346 },
  "/kamsmet/flatbed-rear-quarter.webp": { width: 1600, height: 700 },
  "/kamsmet/flatbed-deck.webp": { width: 1600, height: 899 },
  "/kamsmet/flatbed-rear.webp": { width: 1600, height: 695 },
  "/kamsmet/axle-array.webp": { width: 1600, height: 899 },
  "/kamsmet/landing-gear.webp": { width: 1600, height: 784 },
  "/kamsmet/full-bucket-hero.webp": { width: 1600, height: 745 },
  "/kamsmet/full-bucket-rear.webp": { width: 1084, height: 1600 },
  "/kamsmet/full-bucket-front.webp": { width: 1083, height: 1600 },
  "/kamsmet/full-bucket-quarter.webp": { width: 1600, height: 698 },
  "/kamsmet/full-bucket-side.webp": { width: 1600, height: 448 },
  "/kamsmet/half-bucket-hero.webp": { width: 1600, height: 699 },
  "/kamsmet/half-bucket-side.webp": { width: 1600, height: 633 },
  "/kamsmet/half-bucket-rear.webp": { width: 1600, height: 805 },
  "/kamsmet/half-bucket-front.webp": { width: 1600, height: 825 },
};

export function renderSize(src: string) {
  return RENDER_SIZES[src] ?? { width: 1600, height: 900 };
}

export type ModelFeature = {
  /** Rendered bold ahead of the description. Omitted for plain bullets. */
  label?: string;
  text: string;
};

export type TrailerModel = {
  id: string;
  index: string;
  eyebrow: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  features: ModelFeature[];
  hero: ModelImage;
  views: ModelImage[];
};

export const TRAILER_MODELS: TrailerModel[] = [
  {
    id: "flatbed",
    index: "01",
    eyebrow: "The Flatbed",
    name: "Baseline",
    tagline: "Maximum Versatility. Seamless Logistics.",
    summary: "ISO containers & general flat cargo.",
    description:
      "Designed for seamless container freight and general cargo haulage. Equipped with premium quick-lock twist bodies and a reinforced front headboard to protect your cabin and secure your load under any highway condition.",
    features: [
      { text: "Standardized ISO corner container locks." },
      { text: "Highly durable structural steel main beams." },
      { text: "High-visibility safety yellow side guards." },
    ],
    hero: {
      src: "/kamsmet/flatbed-hero.webp",
      alt: "KAMSMET standard flatbed trailer with raised front headboard, three-quarter view",
    },
    // The bare side elevation is too flat to hold a square cell; it carries the
    // measurement key in the specs table instead.
    views: [
      {
        src: "/kamsmet/flatbed-deck.webp",
        alt: "Elevated view of the KAMSMET flatbed trailer deck",
      },
      {
        src: "/kamsmet/flatbed-rear-quarter.webp",
        alt: "KAMSMET flatbed trailer rear three-quarter view",
      },
      {
        src: "/kamsmet/flatbed-rear.webp",
        alt: "KAMSMET flatbed trailer rear view showing lighting cluster and mudguards",
      },
    ],
  },
  {
    id: "half-bucket",
    index: "02",
    eyebrow: "The Half-Bucket",
    name: "Variant",
    tagline: "Agility Meets Volume.",
    summary: "Ventilated high-volume packaged cargo.",
    description:
      "Engineered specifically for agricultural logistics, livestock, and high-volume packaged goods. This dual-hybrid design features a solid, high-walled lower metal bucket to shield cargo from road spray, paired with a heavy-duty slatted cage upper superstructure that ensures maximum ventilation. Complete with a rear swing-door assembly and an arched overhead cage built to secure protective all-weather tarps, the Gated Cargo trailer offers unparalleled adaptability for transit across diverse terrains.",
    features: [
      { text: "Solid-walled lower steel bucket for maximum road-spray protection." },
      {
        text: "Well-spaced structural steel ventilation slats for temperature-sensitive cargo.",
      },
      {
        text: "Heavy-duty rear double-door swing gate with robust security latching.",
      },
      {
        text: "Integrated arched roof rack framework for fast tarp/canvas rigging.",
      },
    ],
    hero: {
      src: "/kamsmet/half-bucket-hero.webp",
      alt: "KAMSMET half-bucket gated cargo trailer, rear three-quarter view",
    },
    views: [
      {
        src: "/kamsmet/half-bucket-side.webp",
        alt: "KAMSMET half-bucket trailer side profile showing solid lower bucket and slatted upper cage",
      },
      {
        src: "/kamsmet/half-bucket-front.webp",
        alt: "KAMSMET half-bucket trailer front view",
      },
      {
        src: "/kamsmet/half-bucket-rear.webp",
        alt: "KAMSMET half-bucket trailer rear view with double swing gate",
      },
    ],
  },
  {
    id: "full-bucket",
    index: "03",
    eyebrow: "The Full-Bucket",
    name: "Monster",
    tagline: "Agility Meets Volume.",
    summary: "Max-depth loose dry cargo.",
    description:
      "When payload volume and cargo safety are your highest priorities, the KAMSMET Gated Bulk Carrier delivers. This specialized trailer features an extra-deep, fully enclosed sheet metal lower bucket designed to completely shield large-volume payloads from road debris, mud, and water. Integrated with a rugged, slatted steel upper cage for continuous airflow, and topped with an arched overhead roof rack for fast, reliable all-weather tarp rigging, it is the ultimate transport solution for high-value agricultural harvests, bulk grain haulage, and packaged industrial dry goods.",
    features: [
      {
        label: "Full-Length Deep Steel Bucket:",
        text: "Completely seals the lower half of the trailer to block moisture, dirt, and road spray.",
      },
      {
        label: "Heavy-Duty Slatted Steel Upper Cage:",
        text: "Promotes passive ventilation to keep organic or dry cargo cool and dry during transit.",
      },
      {
        label: "Arched Overhead Weather-Tarp Rails:",
        text: "Built-in structural supports for securing protective canvas tarps against wind and rain.",
      },
      {
        label: "Standardized Triple-Axle Setup:",
        text: "Shares the same heavy-duty suspension baseline as the flatbed for simplified fleet maintenance.",
      },
    ],
    hero: {
      src: "/kamsmet/full-bucket-hero.webp",
      alt: "KAMSMET full-bucket gated bulk carrier, rear three-quarter view",
    },
    views: [
      {
        src: "/kamsmet/full-bucket-side.webp",
        alt: "KAMSMET full-bucket trailer side profile",
      },
      {
        src: "/kamsmet/full-bucket-quarter.webp",
        alt: "KAMSMET full-bucket trailer front three-quarter view",
      },
      {
        src: "/kamsmet/full-bucket-front.webp",
        alt: "KAMSMET full-bucket trailer front view",
      },
      {
        src: "/kamsmet/full-bucket-rear.webp",
        alt: "KAMSMET full-bucket trailer rear view",
      },
    ],
  },
];

export const PLATFORM_GROUPS = [
  {
    title: "Core Performance Features",
    image: {
      src: "/kamsmet/axle-array.webp",
      alt: "KAMSMET standardized triple-axle bogie with 16-wheel dual-hub array",
    },
    features: [
      {
        label: "Severe-Duty Suspension:",
        text: "Engineered with 12-leaf spring packs to absorb extreme structural stress over rough terrain.",
      },
      {
        label: "High-Capacity 16-Wheel Array:",
        text: "Dual-wheel layouts on heavy-duty rims maximize stability, road grip, and braking under load.",
      },
      {
        label: "100% Interchangeable Fleet Parts:",
        text: "Axles, hubs, and brake drums match perfectly across all KAMSMET models to minimize maintenance downtime.",
      },
    ],
  },
  {
    title: "Landing Gear",
    image: {
      src: "/kamsmet/landing-gear.webp",
      alt: "KAMSMET dual-speed landing gear assembly with pivoting sand-shoes",
    },
    features: [
      {
        label: "Dual-Speed Lift System:",
        text: "Heavy-duty internal gear crank handles rapid positioning or high-torque lifting with ease.",
      },
      {
        label: "Pivoting Sand-Shoes:",
        text: "Wide footing plates ensure rigid stability on uncoupled asphalt, gravel, or soft yard ground.",
      },
      {
        label: "Anti-Twist Framework:",
        text: "Reinforced cross-braces eliminate structural deflection when loaded trailers stand uncoupled.",
      },
    ],
  },
];

export const DIMENSION_SPECS = {
  columns: [
    "Trailer Model",
    "Length [A]",
    "Width [B]",
    "Height [C]",
    "Key Fleet Application",
  ],
  rows: [
    {
      model: "Standard Flatbed",
      length: ["13.80 m", "543.15 in"],
      width: ["2.49 m", "98.19 in"],
      height: ["1.35 m", "53.15 in"],
      application: "ISO Containers & General Flat",
    },
    {
      model: "Gated Cargo (Half-Bucket)",
      length: ["13.80 m", "543.15 in"],
      width: ["2.49 m", "98.19 in"],
      height: ["3.85 m", "151.61 in"],
      application: "Ventilated High-Volume Packaged",
    },
    {
      model: "Gated Bulk Carrier (Full-Bucket)",
      length: ["13.80 m", "543.15 in"],
      width: ["2.49 m", "98.19 in"],
      height: ["3.85 m", "151.61 in"],
      application: "Max-Depth Loose Dry Cargo",
    },
  ],
};

export const COMPONENT_SPECS = {
  columns: [
    "Technical Component",
    "Metric / Spec",
    "Imperial / Spec",
    "Structural Advantage",
  ],
  rows: [
    {
      component: "Standardized Triple Axle",
      metric: "3 Axle Units",
      imperial: "3 Axle Units",
      advantage: "100% parts interchangeability across the fleet",
    },
    {
      component: "Dual-Wheel Hub Array",
      metric: "16 Total Wheels",
      imperial: "16 Total Wheels",
      advantage: "Maximum traction, loading stability, and braking grip",
    },
    {
      component: "Heavy-Duty Suspension",
      metric: "12-Leaf Spring Packs",
      imperial: "12-Leaf Spring Packs",
      advantage: "Engineered to absorb severe road vibration and stress",
    },
  ],
};
