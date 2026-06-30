import { WordRotate } from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";
import { Steps } from "./steps";

export function Em({ className }: { className?: string }) {
  return (
    <section
      aria-label="Engagement Model"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Label band */}
      <div className="flex items-center justify-center h-10 border-b muted-border">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Engagement Model
        </span>
      </div>

      {/* Centered content */}
      <div className="flex flex-col items-center gap-6 px-6 py-16 md:py-20 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Structured Engineering Engagement
        </h2>
        <WordRotate
          className="text-muted-foreground text-base md:text-lg leading-relaxed min-h-14"
          words={[
            "No unpaid design work.",
            "No open-ended partnerships without defined capital or equity structure.",
            "No fabrication without an approved budget.",
          ]}
        />
      </div>

      {/* Steps */}
      <Steps />
    </section>
  );
}
