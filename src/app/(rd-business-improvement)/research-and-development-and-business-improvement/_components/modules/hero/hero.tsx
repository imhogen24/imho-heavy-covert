import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { KanbanIcon } from "@phosphor-icons/react/dist/ssr/Kanban";

export function Hero({ className }: { className?: string }) {
  return (
    <section
      aria-label="R&D and Business Improvement Hero"
      className={cn("relative w-full", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-6 px-6 py-16 md:py-24 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Engineering Ideas into Impact.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            From Concept to Commissioning. We provide the complete industrial
            pathway for medium to large-scale enterprises. You bring the vision
            and the capital; we engineer the thrust.
          </p>
          <Button asChild variant="primary" size="standard" className="w-fit">
            <Link href="/services/custom-engineering">
              <KanbanIcon size={20} weight="light" />
              Start Your Project
            </Link>
          </Button>
        </div>
      </div>

      {/* Split visual — CAD render vs real machine */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b muted-border">
        <div className="border-b lg:border-b-0 lg:border-r muted-border p-6 md:p-10">
          <div
            aria-hidden
            className="flex min-h-[280px] md:min-h-[360px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed muted-border bg-accent/40"
          >
            <span className="text-sm font-medium text-muted-foreground">
              CAD Render
            </span>
            <span className="text-xs text-muted-foreground/70">
              Engineering design
            </span>
          </div>
        </div>
        <div className="p-6 md:p-10">
          <div
            aria-hidden
            className="flex min-h-[280px] md:min-h-[360px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed muted-border bg-accent/40"
          >
            <span className="text-sm font-medium text-muted-foreground">
              Real Machine
            </span>
            <span className="text-xs text-muted-foreground/70">
              Commissioned system
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
