import { HeavenEarthIcon, ObeliskIcon, PyramidIcon, SunIcon } from "./icons";
import { MarqueeProps, NavItemProps, ProjectCardProps, SdgProps, WorkWithUsProps } from "./types";

export const WORK_WITH_US: WorkWithUsProps[] = [
  {
    idx: 0,
    icon: SunIcon,
    title: "Design and Develop a Physical Product",
    description: "Bring us on board to transform your ideas, requirements, and constraints into a physical product. From the engineering design phase, where exceptional function and form are seamlessly blended to create a robust product, we cover all aspects, including machine design, industrial design, prototyping, and testing."

  },
  {
    idx: 1,
    icon: PyramidIcon,
    title: "Training and Engineering Team Support",
    description: "Expand the skills of your engineering team, whether in engineering design, project management, the engineering design process, computer-aided design (CAD), or statics and dynamics analytical tools. ",
    footer: "Are project timelines tight? Expand your engineering team by bringing us on board to help with the heavy lifting."
  },
  {
    idx: 2,
    icon: HeavenEarthIcon,
    title: "Design and Develop a Process",
    description: "Our engineering team well vested in systems design can help optimize your processes be it manufacturing, materials, and various forms of production systems.",
    footer: "Improve efficiency, safety, reduce cost, overall output and quality"
  },
  {
    idx: 3,
    icon: ObeliskIcon,
    title: "Engineering Drawing and Draftwork",
    description: "Rely on our drafting team to document your designs and prototypes through detailed models, engineering drawings, and 3D renderings—whether for manufacturing, patent filings, presentations, marketing, user manuals, or academic publications.",

  }
]


export const PROJECTS: ProjectCardProps[]=[
  {
    idx: 2,
    title: "Enterprise CAD training",
    customer: "MiningPro",
    description: "looked to IMHO to train their new engineering team in the use of AutoCAD, from beginner to advanced levels. The skills training aimed to balance effective CAD systems with highly skilled experts.",
    service: "Beginer level to Advanced level AutoCAD and enterprise CAD management system",
    type: "Skill Development and Training",
    date:"2024",
    image:"",
    Video:""
  },
  {
    idx: 3,
    title: "Enterprise CAD training",
    customer: "MiningPro",
    description: "looked to IMHO to train their new engineering team in the use of AutoCAD, from beginner to advanced levels. The skills training aimed to balance effective CAD systems with highly skilled experts.",
    service: "Beginer level to Advanced level AutoCAD and enterprise CAD management system",
    type: "Skill Development and Training",
    date:"2024",
    image:"",
    Video:""
  }
]

export const MARQUEE: MarqueeProps[] = [
  {
    id: 4,
    image: "/logos/commeph-logo.png",
    ImageWidth: 68.27,
    ImageHeight: 68.95,
  },
  {
    id: 3,
    image: "/logos/coe-logo.png",
    ImageWidth: 67.67,
    ImageHeight:89.13
  },
  {
    id: 5,
    image: "/logos/ic-logo.png",
    ImageWidth: 191.18,
    ImageHeight: 51.5,
  },
  {
    id: 7,
    image: "/logos/mining-pro.png",
    ImageWidth:186.97,
    ImageHeight: 64
  },
  {
    id: 8,
    image: "/logos/sayetech-logo.png",
    ImageWidth: 58.54,
    ImageHeight: 81.53
  },
  {
    id: 2,
    image: "/logos/africa-logo.png",
    ImageWidth: 77.7,
    ImageHeight: 93.62
  },
  {
    id: 10,
    image: "/logos/tcc-logo.png",
    ImageWidth: 158.31,
    ImageHeight: 89.62
  },
  {
    id: 11,
    image: "/logos/treck-logo.png",
    ImageWidth: 205.86,
    ImageHeight: 58.42
  },
  {
    id: 9,
    image: "/logos/smido-logo.png",
    ImageWidth: 95.41,
    ImageHeight: 112.34
  },
  {
    id: 6,
    image: "/logos/kbi-logo.png",
    ImageWidth: 99.76,
    ImageHeight: 83.18
  },

  {
    id: 1,
    image: "/logos/abu-diya.png",
    ImageWidth: 199.28,
    ImageHeight: 12.34
  }
]
export const IMPACT_TEXT = [
  {
    title: "Improved Products and Processes",
    description: "Small and medium-scale enterprises and startups have experienced massive growth in their businesses through improved product solutions, machine design, and process optimization.",
    footer: "This is driving a surge in enterprises actively solving problems across the continent.",
  },
  {
    title: "Increased Youth Skilled In Engineering Design Skill",
    description: "Over 500 engineering students actively participated in our annual engineering design seminar and webinar. More than 50 students were trained in engineering design and computer-aided design tools, essential skills for developing core technological solutions to build Africa and a sustainable world."
  },

]

export const SDG_GOALS: SdgProps[] = [
  {
    id: 1,
    image: "/sdgs/sdg-4.png",
    ImageWidth: 100.24,
    ImageHeight: 120.61,
  },
  {
    id: 2,
    image: "/sdgs/sdg-8.png",
    ImageWidth: 136.65,
    ImageHeight: 200.65,
  },
  {
    id: 3,
    image: "/sdgs/sdg-9.png",
    ImageWidth: 151.46,
    ImageHeight: 125.65,
  },
  {
    id: 4,
    image: "/sdgs/agenda-2026.png",
    ImageWidth: 113.17,
    ImageHeight: 120.54,
  },

]


export const NAV_ITEMS: NavItemProps[] = [
    {
        id: 1,
        label: "Home",
        href: "/",
    },
    {
        id: 2,
        label: "Projects",
        href: "/#about",
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
    }
]
