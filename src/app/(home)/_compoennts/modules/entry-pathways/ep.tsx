"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { KanbanIcon } from "@phosphor-icons/react/dist/csr/Kanban";
import { CompassToolIcon } from "@phosphor-icons/react/dist/csr/CompassTool";
import { HandshakeIcon } from "@phosphor-icons/react/dist/csr/Handshake";
import type { Icon } from "@phosphor-icons/react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const TABS = [
  { id: "industry", label: "Industry" },
  { id: "individual", label: "Individual" },
  { id: "partners", label: "Partners" },
] as const;

type TabId = (typeof TABS)[number]["id"];

type Pathway = {
  cta: { label: string; href: string; Icon: Icon };
} & (
  | { kind: "flow"; steps: string[] }
  | { kind: "prose"; description: string }
);

const PATHWAYS: Record<TabId, Pathway> = {
  industry: {
    kind: "flow",
    steps: [
      "Submit project scope and budget range",
      "Diagnostic",
      "System design",
      "Deployment",
    ],
    cta: { label: "Start a Project", href: "#", Icon: KanbanIcon },
  },
  individual: {
    kind: "flow",
    steps: [
      "Enter IMHO Academy",
      "Capability development",
      "Engineering output",
    ],
    cta: { label: "Apply to Academy", href: "#", Icon: CompassToolIcon },
  },
  partners: {
    kind: "prose",
    description:
      "Collaborate on infrastructure, deployment, or scaling systems under defined financial and operational structures.",
    cta: { label: "Partner with IMHOGEN", href: "#", Icon: HandshakeIcon },
  },
};

// POE-style cell border logic for a full-width grid (no outer left/right borders).
function cellBorder(idx: number, count: number): string {
  if (count === 4) {
    return cn(
      idx < 3 && "border-b",
      idx === 0 && "sm:border-r sm:border-b",
      idx === 1 && "sm:border-r-0 sm:border-b",
      idx === 2 && "sm:border-r sm:border-b-0",
      idx === 3 && "sm:border-r-0 sm:border-b-0",
      idx < 3 && "lg:border-b-0 lg:border-r",
      idx === 3 && "lg:border-r-0",
    );
  }
  // count === 3
  return cn(
    idx < 2 && "border-b",
    idx <= 1 && "sm:border-r sm:border-b-0",
    idx === 2 && "sm:border-r-0 sm:border-b-0",
  );
}

const partnersPathway = PATHWAYS.partners;
const PARTNERS_DESC =
  partnersPathway.kind === "prose" ? partnersPathway.description : "";

export function Ep({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<TabId>("industry");
  // Remember the last flow tab so the grid keeps its content while collapsing.
  const [lastFlow, setLastFlow] = useState<TabId>("industry");

  const pathway = PATHWAYS[activeTab];
  const isPartners = activeTab === "partners";

  const lastFlowPathway = PATHWAYS[lastFlow];
  const gridSteps =
    lastFlowPathway.kind === "flow" ? lastFlowPathway.steps : [];

  const selectTab = (id: TabId) => {
    setActiveTab(id);
    if (PATHWAYS[id].kind === "flow") setLastFlow(id);
  };

  return (
    <section
      className={cn("relative w-full border-t muted-border", className)}
      aria-label="Entry Pathways"
    >
      {/* Label band */}
      <div className="flex items-center justify-center h-10 border-b muted-border">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Entry Pathways
        </span>
      </div>

      {/* Centered content: tabs → header → (prose) → CTA */}
      <div className="flex flex-col items-center gap-8 px-6 py-14 md:py-20">
        {/* Tabs */}
        <div
          className="border muted-border bg-accent h-14 w-full max-w-md inline-flex gap-1 p-1 rounded-full"
          role="tablist"
          aria-label="Entry pathway audience"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`ep-tab-${tab.id}`}
                onClick={() => selectTab(tab.id)}
                className={cn(
                  "relative flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-secondary" : "text-muted-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="ep-tab-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Enter Through a Structured Path
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Projects without allocated development budget are not onboarded.
          </p>
        </div>

        {/* Prose (partners) + CTA — prose height animates so nothing snaps */}
        <div className="flex flex-col items-center w-full">
          <motion.div
            initial={false}
            animate={{ height: isPartners ? "auto" : 0, opacity: isPartners ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden w-full flex justify-center"
          >
            <p className="text-base md:text-lg text-muted-foreground text-center max-w-xl leading-relaxed pb-8">
              {PARTNERS_DESC}
            </p>
          </motion.div>

          <Button asChild variant="primary" size="standard" className="w-fit">
            <Link href={pathway.cta.href}>
              <pathway.cta.Icon size={20} weight="light" />
              {pathway.cta.label}
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom full-width grid — collapses smoothly for Partners */}
      <motion.div
        initial={false}
        animate={{ height: isPartners ? 0 : "auto", opacity: isPartners ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden w-full"
      >
        <div
          className={cn(
            "grid border-t border-b muted-border",
            gridSteps.length === 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-3",
          )}
        >
          {gridSteps.map((step, i) => (
            <div
              key={step}
              className={cn(
                "flex flex-col gap-4 p-8 md:p-10 muted-border",
                cellBorder(i, gridSteps.length),
              )}
            >
              <span className="text-2xl font-semibold tabular-nums text-[#EF7D00] leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm md:text-base font-medium leading-relaxed">
                {step}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
