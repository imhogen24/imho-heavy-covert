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
import {
  HeroIconProps,
  MarqueeProps,
  NavItemProps,
  ProjectCardProps,
  SdgProps,
  ServiceRouteProps,
  SocialIconProps,
  WorkWithUsProps,
} from "./types";

export const SERVICE_ROUTES: ServiceRouteProps[] = [
  {
    idx: 1,
    label: "Product",
    href: "/services/product",
  },
  {
    idx: 2,
    label: "Engineering Support",
    href: "/services/engineering-support",
  },
  {
    idx: 3,
    label: "Process",
    href: "/services/process",
  },
  {
    idx: 4,
    label: "Draftwork",
    href: "/services/draftwork",
  },
];

export const SOCIAL_ICONS: SocialIconProps[] = [
  {
    idx: 1,
    icon: FacebookIcon,
    href: "https://www.facebook.com/",
  },
  {
    idx: 2,
    icon: XIcon,
    href: "https://twitter.com/",
  },
  {
    idx: 3,
    icon: InstagramIcon,
    href: "https://www.instagram.com/",
  },
  {
    idx: 4,
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/",
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
    title: "Product",
    description:
      "Bring us on board to transform your ideas, requirements, and constraints into a physical product. From the engineering design phase, where exceptional function and form are seamlessly blended to create a robust product, we cover all aspects, including machine design, industrial design, prototyping, and testing.",
    cta: "Develop a Product",
    route: "/services/product",
  },
  {
    idx: 1,
    image: "/pyramid.svg",
    title: "Engineering Support",
    description:
      "Expand the skills of your engineering team, whether in engineering design, project management, the engineering design process, computer-aided design (CAD), or statics and dynamics analytical tools. ",
    footer:
      "Are project timelines tight? Expand your engineering team by bringing us on board to help with the heavy lifting.",
    cta: "Launch Support",
    route: "/services/engineering-support",
  },
  {
    idx: 2,
    image: "/heaven-and-earth.svg",
    title: "Process",
    description:
      "Our engineering team well vested in systems design can help optimize your processes be it manufacturing, materials, and various forms of production systems.",
    footer:
      "Improve efficiency, safety, reduce cost, overall output and quality",
    cta: "Develop a process",
    route: "/services/process",
  },
  {
    idx: 3,
    image: "/obelisk.svg",
    title: "Draftwork",
    description:
      "Rely on our drafting team to document your designs and prototypes through detailed models, engineering drawings, and 3D renderings—whether for manufacturing, patent filings, presentations, marketing, user manuals, or academic publications.",
    cta: "Start Documentation",
    route: "/services/draftwork",
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
      "Wellfed collaborated with IMHO to design a modular evaporative cooling for vegetable storage, specifically tomatoes storage",

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

export const NAV_ITEMS: NavItemProps[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Projects",
    href: "/#projects",
  },
  {
    id: 4,
    label: "Services",
    href: "/#services",
  },
  {
    id: 3,
    label: "Our team",
    href: "/#team",
  },

  {
    id: 5,
    label: "Blog",
    href: "/blog",
  },
];
