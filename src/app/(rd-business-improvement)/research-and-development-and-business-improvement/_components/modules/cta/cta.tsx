import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileTextIcon } from "@phosphor-icons/react/dist/ssr/FileText";
import { ClockCountdownIcon } from "@phosphor-icons/react/dist/ssr/ClockCountdown";
import { CalendarCheckIcon } from "@phosphor-icons/react/dist/ssr/CalendarCheck";
import type { Icon } from "@phosphor-icons/react";

type Step = {
  Icon: Icon;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    Icon: FileTextIcon,
    title: "Submit your Data",
    body: "Fill out our structured Engineering Request Form.",
  },
  {
    Icon: ClockCountdownIcon,
    title: "24-Hour Review",
    body: "Our Lead Engineers triage your request to ensure it aligns with our capabilities.",
  },
  {
    Icon: CalendarCheckIcon,
    title: "Technical Discovery",
    body: "You will receive a calendar invite for a focused 30-minute alignment meeting to lock in your exact specifications.",
  },
];

export function Cta({ className }: { className?: string }) {
  return (
    <section
      aria-label="Ready to Build the Future of African Industry?"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Ready to Build the Future of African Industry?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Skip the meeting scheduling hassle. Our digitized onboarding system
            makes initiating a highly complex engineering project effortless and
            organized.
          </p>
        </div>
      </div>

      {/* High-contrast block — steps + CTA */}
      <div className="bg-accent/60 flex flex-col items-center gap-10 px-6 py-14 md:py-20">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          What Happens When You Click Start
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl w-full">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col items-center gap-4 text-center"
            >
              <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border bg-background">
                <step.Icon size={20} weight="thin" />
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs font-semibold tabular-nums text-[#EF7D00]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button asChild variant="primary" size="standard" className="w-fit">
          <Link href="/services/custom-engineering">
            Initiate a Project Request Now
          </Link>
        </Button>
      </div>
    </section>
  );
}
