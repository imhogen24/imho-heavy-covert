export const PARTNER_PROFILES = [
  { id: "fabrication", label: "Fabrication" },
  { id: "industry", label: "Industry & Pilot" },
  { id: "research", label: "Research" },
  { id: "development", label: "Development & NGOs" },
  { id: "investors", label: "Investors" },
  { id: "market", label: "Market & Distribution" },
] as const;

export type PartnerProfileId = (typeof PARTNER_PROFILES)[number]["id"];

export const STAGES = [
  "Concept",
  "CAD",
  "Prototype",
  "Field test",
  "Deploy",
] as const;

export type Product = {
  slug: string;
  name: string;
  focus: string;
  goals: string[];
  /** Index into STAGES. */
  stage: number;
  lookingFor: { label: string; profile: PartnerProfileId }[];
  /** CAD render under /public; omitted until one exists. */
  render?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "trading-gear",
    name: "Trading Gear",
    focus: "Engineering better tools for everyday trading.",
    goals: [
      "Improved organization",
      "Easier handling",
      "Storage & display",
      "Optimal use of space",
    ],
    stage: 1,
    lookingFor: [
      { label: "Prototype partners", profile: "fabrication" },
      { label: "Market associations", profile: "market" },
      { label: "Fabricators", profile: "fabrication" },
      { label: "Impact investors", profile: "investors" },
    ],
    render: "/trade-tech/Mwiaa_Gear2.2.png",
  },
  {
    slug: "trading-shade",
    name: "Trading Shade",
    focus: "A better working environment for open-market traders.",
    goals: [
      "Environmental protection",
      "Adaptable structures",
      "Easy assembly",
      "Modular space",
    ],
    stage: 1,
    lookingFor: [
      { label: "Fabrication partners", profile: "fabrication" },
      { label: "Market operators", profile: "industry" },
      { label: "Local authorities", profile: "development" },
      { label: "Investors", profile: "investors" },
    ],
  },
  {
    slug: "load-carrier-tool",
    name: "Load Carrier Tool",
    focus: "Reducing the physical burden of moving goods.",
    goals: [
      "Load handling",
      "Reduced physical strain",
      "Durable construction",
      "Ergonomics",
    ],
    stage: 1,
    lookingFor: [
      { label: "Prototype manufacturers", profile: "fabrication" },
      { label: "Safety partners", profile: "research" },
      { label: "Trader associations", profile: "market" },
    ],
  },
  {
    slug: "hawking-bowl",
    name: "Hawking Bowl",
    focus: "Reimagining a familiar tool for mobile commerce.",
    goals: [
      "Load distribution",
      "Ergonomic use",
      "Product organization",
      "Durability",
    ],
    stage: 1,
    lookingFor: [
      { label: "Prototype partners", profile: "fabrication" },
      { label: "Hawkers & vendors", profile: "market" },
      { label: "Material specialists", profile: "research" },
    ],
  },
  {
    slug: "traders-stand",
    name: "Traders Stand",
    focus: "Designing the informal trading workspace.",
    goals: [
      "Modular workspace",
      "Storage",
      "Efficient footprint",
      "Product display",
    ],
    stage: 1,
    lookingFor: [
      { label: "Fabrication partners", profile: "fabrication" },
      { label: "Local authorities", profile: "development" },
      { label: "Pilot markets", profile: "industry" },
    ],
  },
  {
    slug: "meat-slicer",
    name: "Meat Slicer",
    focus: "Engineering consistency into meat processing.",
    goals: [
      "Consistent cutting",
      "Processing efficiency",
      "Reduced manual effort",
      "Maintainability",
    ],
    stage: 1,
    lookingFor: [
      { label: "Food-processing partners", profile: "industry" },
      { label: "Butchers", profile: "industry" },
      { label: "Cold stores", profile: "industry" },
      { label: "Food-tech fabricators", profile: "fabrication" },
    ],
  },
  {
    slug: "potters-wheel",
    name: "Potters Wheel",
    focus: "Engineering traditional craft for contemporary production.",
    goals: [
      "Rotational control",
      "Ease of operation",
      "Durability",
      "Local maintainability",
    ],
    stage: 1,
    lookingFor: [
      { label: "Pottery communities", profile: "market" },
      { label: "Craft organisations", profile: "development" },
      { label: "Research institutions", profile: "research" },
    ],
  },
];
