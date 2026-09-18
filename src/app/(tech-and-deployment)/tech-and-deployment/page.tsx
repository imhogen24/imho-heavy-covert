import type { Metadata } from "next";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SectionSeparator } from "@/components/ui/section-separator";
import { Hero } from "./_components/modules/hero/hero";
import { Pathway } from "./_components/modules/pathway/pathway";
import { Portfolio } from "./_components/modules/portfolio/portfolio";
import { Pipeline } from "./_components/modules/pipeline/pipeline";
import { Partners } from "./_components/modules/partners/partners";
import { Ambition } from "./_components/modules/ambition/ambition";

export const metadata: Metadata = {
  title:
    "Technology & Deployment — Turning Local Problems into Engineered Solutions",
  description:
    "Practical technologies designed around real problems faced by SMEs, informal-sector operators, and underserved productive communities—from CAD to prototype, field testing, and deployment.",
  alternates: { canonical: "/tech-and-deployment" },
  openGraph: {
    title: "Technology & Deployment — IMHO GEN",
    description:
      "Seven technologies for the people who keep markets moving, each open for partners.",
    url: "/tech-and-deployment",
    type: "website",
  },
};

export default function TechAndDeploymentPage() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <ScrollProgress className="top-18" />
      <Hero />
      <Pathway />
      <SectionSeparator />
      <Portfolio />
      <Pipeline />
      <Partners />
      <Ambition />
    </div>
  );
}
