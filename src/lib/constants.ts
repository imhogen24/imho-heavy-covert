import { NavItemProps, SdgProps } from "./types";



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
  },
  {
    id: 2,
    image: "/sdgs/sdg-8.png",
  },
  {
    id: 3,
    image: "/sdgs/sdg-9.png",
  },
  {
    id: 4,
    image: "/sdgs/agenda-2026.png",
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
