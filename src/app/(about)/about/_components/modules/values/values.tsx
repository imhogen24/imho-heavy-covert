import { cn } from "@/lib/utils";
import { HeartIcon } from "@phosphor-icons/react/dist/ssr/Heart";
import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { BriefcaseIcon } from "@phosphor-icons/react/dist/ssr/Briefcase";
import { TargetIcon } from "@phosphor-icons/react/dist/ssr/Target";
import { HandshakeIcon } from "@phosphor-icons/react/dist/ssr/Handshake";
import { MedalIcon } from "@phosphor-icons/react/dist/ssr/Medal";
import { LightbulbIcon } from "@phosphor-icons/react/dist/ssr/Lightbulb";
import { UsersThreeIcon } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { ProhibitIcon } from "@phosphor-icons/react/dist/ssr/Prohibit";
import { CoinsIcon } from "@phosphor-icons/react/dist/ssr/Coins";
import { ArrowsClockwiseIcon } from "@phosphor-icons/react/dist/ssr/ArrowsClockwise";
import { GlobeHemisphereEastIcon } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereEast";

const VALUES = [
  { name: "Empathy", line: "Understand before acting", icon: HeartIcon },
  { name: "Integrity", line: "Do what is right", icon: ShieldCheckIcon },
  {
    name: "Professionalism",
    line: "Do the work properly",
    icon: BriefcaseIcon,
  },
  { name: "Accountability", line: "Own the outcome", icon: TargetIcon },
  { name: "Respect", line: "Treat people with dignity", icon: HandshakeIcon },
  {
    name: "Excellence",
    line: "Never settle for mediocrity",
    icon: MedalIcon,
  },
  {
    name: "Creativity & Innovation",
    line: "Explore what could be possible",
    icon: LightbulbIcon,
  },
  {
    name: "Teamwork & Collaboration",
    line: "Build together",
    icon: UsersThreeIcon,
  },
];

const PRINCIPLES = [
  { name: "No Mediocrity", icon: ProhibitIcon },
  { name: "Create Value", icon: CoinsIcon },
  { name: "Improve Continuously", icon: ArrowsClockwiseIcon },
  {
    name: "Built for the World. Tailored for Africa.",
    icon: GlobeHemisphereEastIcon,
  },
];

export function Values({ className }: { className?: string }) {
  return (
    <section
      id="values"
      aria-label="Core Values"
      className={cn("relative w-full", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            04 — Core Values
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            What We Hold Ourselves To
          </h2>
        </div>
      </div>

      {/* 8 values — hairline grid via gap-px on a border-coloured backdrop */}
      <ul className="grid grid-cols-1 gap-px bg-border dark:bg-muted sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v) => (
          <li
            key={v.name}
            className="group flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-accent/60"
          >
            <span className="flex size-11 items-center justify-center rounded-full border muted-border transition-colors group-hover:border-[#EF7D00] group-hover:text-[#EF7D00]">
              <v.icon size={22} weight="light" />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-semibold leading-snug">{v.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.line}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* 4 deeper principles */}
      <div className="border-t muted-border bg-accent">
        <p className="px-8 pt-10 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Deeper principles
        </p>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-6 px-8 pt-6 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <li key={p.name} className="flex items-start gap-4">
              <p.icon
                size={22}
                weight="light"
                className="mt-0.5 shrink-0 text-[#EF7D00]"
              />
              <p className="text-base font-semibold leading-snug">{p.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
