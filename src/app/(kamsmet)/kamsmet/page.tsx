import type { Metadata } from "next";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SectionSeparator } from "@/components/ui/section-separator";
import { TRAILER_MODELS } from "./_components/data";
import { ChassisMarkers } from "./_components/modules/chassis-markers/chassis-markers";
import { Hero } from "./_components/modules/hero/hero";
import { Lineup } from "./_components/modules/lineup/lineup";
import { ModelSection } from "./_components/modules/model/model-section";
import { Platform } from "./_components/modules/platform/platform";
import { Specs } from "./_components/modules/specs/specs";

export const metadata: Metadata = {
  title: "KAMSMET — Standardized Heavy-Duty Transport Solutions",
  description:
    "KAMSMET builds standardized heavy-duty trailers on a single-chassis platform: the Flatbed Baseline, the Half-Bucket gated cargo variant, and the Full-Bucket gated bulk carrier. Engineering design partner: IMHOGEN.",
  alternates: { canonical: "/kamsmet" },
  openGraph: {
    title: "KAMSMET — Standardized Heavy-Duty Transport Solutions",
    description:
      "Built for the toughest roads. Engineered for maximum payload. Explore the 2026 KAMSMET trailer collection.",
    url: "/kamsmet",
    type: "website",
  },
};

export default function KamsmetPage() {
  return (
    <div className="flex min-h-dvh max-w-screen flex-col overflow-x-hidden">
      <ScrollProgress className="top-18" />
      <Hero />
      <ChassisMarkers />
      <SectionSeparator />
      <Lineup />
      <SectionSeparator />
      {TRAILER_MODELS.map((model, idx) => (
        <ModelSection
          key={model.id}
          model={model}
          reversed={idx % 2 === 1}
          isLast={idx === TRAILER_MODELS.length - 1}
        />
      ))}
      <SectionSeparator />
      <Platform />
      <SectionSeparator />
      <Specs />
    </div>
  );
}
