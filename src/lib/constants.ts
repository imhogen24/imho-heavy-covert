import {
  FacebookIcon,
  GoldenEyeIcon,
  HeavenEarthIcon,
  InstagramIcon,
  LinkedinIcon,
  ObeliskIcon,
  PyramidIcon,
  SunIcon,
  XIcon,
} from "./icons";
import { BlueprintIcon } from "@phosphor-icons/react/dist/ssr/Blueprint";
import { BookOpenIcon } from "@phosphor-icons/react/dist/ssr/BookOpen";
import { BookOpenTextIcon } from "@phosphor-icons/react/dist/ssr/BookOpenText";
import { BuildingsIcon } from "@phosphor-icons/react/dist/ssr/Buildings";
import { ClipboardTextIcon } from "@phosphor-icons/react/dist/ssr/ClipboardText";
import { FactoryIcon } from "@phosphor-icons/react/dist/ssr/Factory";
import { FlaskIcon } from "@phosphor-icons/react/dist/ssr/Flask";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr/GraduationCap";
import { HammerIcon } from "@phosphor-icons/react/dist/ssr/Hammer";
import { HandCoinsIcon } from "@phosphor-icons/react/dist/ssr/HandCoins";
import { HandHeartIcon } from "@phosphor-icons/react/dist/ssr/HandHeart";
import { HandshakeIcon } from "@phosphor-icons/react/dist/ssr/Handshake";
import { NotePencilIcon } from "@phosphor-icons/react/dist/ssr/NotePencil";
import { SealCheckIcon } from "@phosphor-icons/react/dist/ssr/SealCheck";
import { SquaresFourIcon } from "@phosphor-icons/react/dist/ssr/SquaresFour";
import { StorefrontIcon } from "@phosphor-icons/react/dist/ssr/Storefront";
import { TruckTrailerIcon } from "@phosphor-icons/react/dist/ssr/TruckTrailer";
import {
  HeroIconProps,
  MarqueeProps,
  NavItemChildren,
  ProjectCardProps,
  SdgProps,
  ServiceRouteProps,
  SocialIconProps,
  WorkWithUsProps,
} from "./types";

export const SERVICE_ROUTES: ServiceRouteProps[] = [
  {
    idx: 1,
    label: "Custom Engineering",
    href: "/services/custom-engineering",
  },
  {
    idx: 2,
    label: "Drafting & Digitization",
    href: "/services/drafting-digitization",
  },
  {
    idx: 3,
    label: "IMHO GEN Academy",
    href: "/services/imho-gen-academy",
  },
  {
    idx: 4,
    label: "Capability Assessment",
    href: "/services/capability-assessment",
  },
  {
    idx: 5,
    label: "Design Forge",
    href: "/services/design-forge",
  },
  {
    idx: 6,
    label: "Academy Partnership",
    href: "/services/academy-partnership",
  },
  {
    idx: 7,
    label: "Academy Support",
    href: "/services/academy-support",
  },
  {
    idx: 8,
    label: "Cohort Sponsorship",
    href: "/services/cohort-sponsorship",
  },
];

export const SOCIAL_ICONS: SocialIconProps[] = [
  {
    idx: 1,
    icon: FacebookIcon,
    href: "https://www.facebook.com/theimhogen",
  },
  {
    idx: 2,
    icon: XIcon,
    href: "https://x.com/theimhogen",
  },
  {
    idx: 3,
    icon: InstagramIcon,
    href: "https://www.instagram.com/theimhogen",
  },
  {
    idx: 4,
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/imho-ltd",
  },
];

export const HERO_ICONS: HeroIconProps[] = [
  {
    idx: 1,
    icon: ObeliskIcon,
  },
  {
    idx: 2,
    icon: HeavenEarthIcon,
  },
  {
    idx: 3,
    icon: GoldenEyeIcon,
  },
  {
    idx: 4,
    icon: SunIcon,
  },
  {
    idx: 5,
    icon: PyramidIcon,
  },
];

export const WORK_WITH_US: WorkWithUsProps[] = [
  {
    idx: 0,
    image: "/sun.svg",
    title: "Custom Engineering & Factory Solutions",
    description:
      "Bring us your product or process brief and we will turn it into a manufacturable system. Define the material, energy, and information going in, the transformation required, and the throughput you need out — we cover machine design, industrial design, prototyping, testing, and complete processing lines.",
    footer:
      "Improve efficiency, safety, reduce cost, overall output and quality",
    cta: "Start an Intake",
    route: "/services/custom-engineering",
  },
  {
    idx: 1,
    image: "/obelisk.svg",
    title: "Engineering Drafting & Digitization",
    description:
      "Rely on our drafting team to document your designs through detailed models, engineering drawings, and 3D renderings. Bring us a physical part, legacy 2D drawings, hand sketches, or existing 3D models — for manufacturing, patent filings, presentations, marketing, user manuals, or academic publications.",
    cta: "Start Documentation",
    route: "/services/drafting-digitization",
  },
];

export const PROJECTS: ProjectCardProps[] = [
  {
    idx: 2,
    title: "Enterprise CAD training",
    client: "MiningPro",
    description:
      "looked to IMHO to train their new engineering team in the use of AutoCAD, from beginner to advanced levels. The skills training aimed to balance effective CAD systems with highly skilled experts.",
    service:
      "Beginer level to Advanced level AutoCAD and enterprise CAD management system",
    type: "Skill Development and Training",
    date: "2024",
    Video: "",
  },
  {
    idx: 3,
    title: "Industrial Paper Management System",
    client: "TCC-CIMET",
    description:
      "looked to IMHO to help solve one of the university's oldest problem; a lot of waste papers and an ineffective way of managing. The equipment compacts paper, bloats out the ink, and bails it for reuse in industy.",
    service: "Engineering Design, Prototyping and Testing",
    type: "Industry Equipment",
    date: "2024",
    height: 436.83,
    width: 300,

    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736030531/SC2_heavy_covert.17_transp_jdsmxx.png",
  },
  {
    idx: 4,
    title: "Bitumen Mixer",
    client: "TRECK",
    description:
      "Researchers at the Transport Research and Education Centre Kumasi (TRECK) collaborated with IMHO and TCC-CIMET to design a specialized mixer for Bitumen and additive mixture.",
    service: "Engineering Design Fabrication, Test and Operation",
    type: "Specialized equipment for Researcher",
    date: "2024",
    height: 435.85,
    width: 227.68,

    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736030606/bitmix_custom2.19_transp_ww0wiv.png",
  },
  {
    idx: 5,
    title: "Simple Pyrolysis System",
    client: "Commeph and Associate",
    description:
      "Senior Researcher Michael Commey engaged IMHO to conceptualize and develop engineering design documentation for a simple pyrolysis system for plastic fuel conversation. Read this article of success of the work.",

    service:
      "Conceptual Development, Engineering Design Drawing, and 3D rendering",
    type: "Process based  project",
    date: "2024",
    height: 418.08,
    width: 435.31,

    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736030594/MoonWalk__1.18_transp_cp1wi7.png",
  },
  {
    idx: 6,
    title: "Breserve",
    client: "WellFed",
    description:
      "collaborated with IMHO to design a modular evaporative cooling for vegetable storage, specifically tomatoes storage",

    service: "Engineering Design, Prototyping, and Testing",
    type: "Product Development for Startup",
    date: "2024",
    height: 430,
    width: 257.2,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736030609/natsys_transp_dizq6l.png",
  },
];

export const MARQUEE: MarqueeProps[] = [
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514481/Commeph_dark_o36kna.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514482/Commeph_qr0hat.png",
    ImageWidth: 68.27,
    ImageHeight: 68.95,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514483/COE_dark_jibmwe.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514483/COE_f4u5ec.png",
    ImageWidth: 67.67,
    ImageHeight: 89.13,
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514479/IC_dark_qykuuw.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514480/IC_kx8zmg.png",
    ImageWidth: 191.18,
    ImageHeight: 51.5,
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514474/Mining_Pro_dark_yrg453.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514476/Mining_Pro_gaojxw.png",
    ImageWidth: 186.97,
    ImageHeight: 64,
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514474/SAYeTECH_dark_rfjzyw.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514474/SAYeTECH_cvwf04.png",
    ImageWidth: 58.54,
    ImageHeight: 81.53,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514469/TF_AFRICA_dark_dy07gk.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514469/TF_AFRICA_fscenp.png",
    ImageWidth: 77.7,
    ImageHeight: 93.62,
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514470/TCC_KNUST_dark_dap30r.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514472/TCC_KNUST_hjpknt.png",
    ImageWidth: 158.31,
    ImageHeight: 89.62,
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514468/Treck_dark_oy13xb.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514469/Treck_gtamts.png",
    ImageWidth: 205.86,
    ImageHeight: 58.42,
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514473/SMIDO_dark_v3tj3p.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514473/SMIDO_tpxt5g.png",
    ImageWidth: 95.41,
    ImageHeight: 112.34,
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514477/KBI_dark_hxpkvs.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514478/KBI_mfy19r.png",
    ImageWidth: 99.76,
    ImageHeight: 83.18,
  },

  {
    id: 1,
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514484/ABU_DIYAH_dark_biwhaa.png",
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514484/ABU_DIYAH_yubrha.png",
    ImageWidth: 199.28,
    ImageHeight: 12.34,
  },
];

export const IMPACT_TEXT = [
  {
    idx: 1,
    title: "Improved Products and Processes",
    description:
      "Small and medium-scale enterprises and startups have experienced massive growth in their businesses through improved product solutions, machine design, and process optimization.",
    footer:
      "This is driving a surge in enterprises actively solving problems across the continent.",
  },
  {
    title: "Increased Youth Skilled In Engineering Design Skill",
    description:
      "Over 500 engineering students actively participated in our annual engineering design seminar and webinar. More than 50 students were trained in engineering design and computer-aided design tools, essential skills for developing core technological solutions to build Africa and a sustainable world.",
  },
];

export const SDG_GOALS: SdgProps[] = [
  {
    id: 1,
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514182/4_kn3qlp.png",
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514182/4_d_npq2lj.png",
    ImageWidth: 100.24,
    ImageHeight: 120.61,
  },
  {
    id: 2,
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514182/8_t0mmmj.png",
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514182/8_d_hh8cd5.png",
    ImageWidth: 136.65,
    ImageHeight: 200.65,
  },
  {
    id: 3,
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514182/9_daazu6.png",
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514182/9_d_hl17mq.png",
    ImageWidth: 151.46,
    ImageHeight: 125.65,
  },
  {
    id: 4,
    imageLight:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514182/A_Agenda_ycampk.png",
    image:
      "https://res.cloudinary.com/dstrel8mi/image/upload/v1736514182/agenda_d_gecy4g.png",
    ImageWidth: 113.17,
    ImageHeight: 120.54,
  },
];

/**
 * Nav card copy + iconography for each service intake route. Keyed by href so
 * SERVICE_ROUTES stays the single source of truth for the routes themselves.
 */
const SERVICE_DETAILS = new Map(
  Object.entries({
    "/services/custom-engineering": {
      description:
        "Master intake for custom product design and factory/process systems.",
      icon: FactoryIcon,
    },
    "/services/drafting-digitization": {
      description: "CAD models, fabrication drawings, and 3D renderings.",
      icon: BlueprintIcon,
    },
    "/services/imho-gen-academy": {
      description: "Apply to the engineering design capability programme.",
      icon: GraduationCapIcon,
    },
    "/services/capability-assessment": {
      description: "Benchmark engineering design maturity before you commit.",
      icon: ClipboardTextIcon,
    },
    "/services/design-forge": {
      description: "Join the engineering discussion and mentorship community.",
      icon: HammerIcon,
    },
    "/services/academy-partnership": {
      description: "Collaborate on workforce and ecosystem development.",
      icon: HandshakeIcon,
    },
    "/services/academy-support": {
      description: "Back capability development for the next generation.",
      icon: HandHeartIcon,
    },
    "/services/cohort-sponsorship": {
      description: "Fund a full cohort through the academy programme.",
      icon: HandCoinsIcon,
    },
  }),
);

export const SERVICES_LINKS: NavItemChildren = SERVICE_ROUTES.map(
  ({ label, href }) => {
    const details = SERVICE_DETAILS.get(href);

    if (!details) throw new Error(`Missing SERVICE_DETAILS entry for ${href}`);

    return { title: label, href, ...details };
  },
);

export const DIVISIONS_LINKS: NavItemChildren = [
  {
    title: "Applied R&D & Business Improvement",
    description: "Fixed-fee engineering and locked fabrication budget pathway.",
    href: "/research-and-development-and-business-improvement",
    icon: FlaskIcon,
  },
  {
    title: "Technologies & Industrial Support",
    description:
      "Showcases Trade Tech, Industrial Equipment, and R&D Pipeline.",
    href: "/technologies-and-industrial-support",
    icon: FactoryIcon,
  },
  {
    title: "Trade Technologies",
    description: "Field-ready tools and wearable systems built for traders.",
    href: "/trade-tech",
    icon: StorefrontIcon,
  },
];

export const ACADEMY_LINKS: NavItemChildren = [
  {
    title: "IMHO GEN Academy",
    description: "The full programme: structure, process, outcomes, and proof.",
    href: "/imho-academy",
    icon: GraduationCapIcon,
  },
  {
    title: "Admissions & Programs",
    description:
      "Outputs-based training: transforms learners into capable designers.",
    href: "/services/imho-gen-academy",
    icon: NotePencilIcon,
  },
  {
    title: "Capability Assessment",
    description:
      "Triage step: tracks errors, time, quality, and engineering maturity.",
    href: "/services/capability-assessment",
    icon: ClipboardTextIcon,
  },
  {
    title: "The Design Forge",
    description: "Direct route to engineering discussions and mentorship.",
    href: "/services/design-forge",
    icon: HammerIcon,
  },
  {
    title: "Cohort Sponsorship",
    description: "Fund a cohort and widen access to the programme.",
    href: "/services/cohort-sponsorship",
    icon: HandCoinsIcon,
  },
];

export const COMPANY_LINKS: NavItemChildren = [
  {
    title: "About Us & Narrative",
    description: "Exposes failure of trial-and-error; proves execution.",
    href: "/#about",
    icon: BookOpenTextIcon,
  },
  {
    title: "Proof of Execution",
    description: "Delivered products, processes, and equipment in the field.",
    href: "/#proof-of-execution",
    icon: SealCheckIcon,
  },
  {
    title: "Partnerships & Collaboration",
    description: "Covers workforce development and scaling infrastructure.",
    href: "/services/academy-partnership",
    icon: HandshakeIcon,
  },
  {
    title: "Support the Mission",
    description: "Back engineering capability development directly.",
    href: "/services/academy-support",
    icon: HandHeartIcon,
  },
  {
    title: "KAMSMET Trailers",
    description: "Partner manufacturer of standardized heavy-duty trailers.",
    href: "/kamsmet",
    icon: TruckTrailerIcon,
  },
];

// TODO: no routes exist for these yet — wire up once the portals ship.
export const PORTALS_LINKS: NavItemChildren = [
  {
    title: "Client Workspace",
    description:
      "No unpaid design work; files released against milestone payments.",
    href: "#",
    icon: SquaresFourIcon,
  },
  {
    title: "Academy Student Portal",
    description: "Manages performance outputs, calculations, CAD, and trials.",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    title: "Internal Staff ERP",
    description: "Integrates team communication and execution tracking.",
    href: "#",
    icon: BuildingsIcon,
  },
];
