import type { Metadata } from "next";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SectionSeparator } from "@/components/ui/section-separator";
import { Story } from "./_components/modules/story/story";
import { WhoWeAre } from "./_components/modules/who-we-are/who-we-are";
import { VisionMission } from "./_components/modules/vision-mission/vision-mission";
import { Values } from "./_components/modules/values/values";
import { Team } from "./_components/modules/team/team";
import { Commitment } from "./_components/modules/commitment/commitment";

export const metadata: Metadata = {
  title: "About Us — Building the Capability Behind African Industry",
  description:
    "IMHO GEN is an engineering design and R&D firm building capability infrastructure for Africa — strengthening people, enterprises, and institutions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About IMHO GEN",
    description:
      "From a CAD bureau at KNUST to an engineering design and R&D firm building capability infrastructure for Africa.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <ScrollProgress className="top-18" />
      <Story />
      <SectionSeparator />
      <WhoWeAre />
      <VisionMission />
      <SectionSeparator />
      <Values />
      <Team />
      <Commitment />
    </div>
  );
}
