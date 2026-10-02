import { cn } from "@/lib/utils";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

const CHASSIS_MARKERS = [
  "Standardized ISO corner container locks.",
  "Highly durable structural steel main beams.",
  "High-visibility safety yellow side guards.",
];

export function ChassisMarkers({ className }: { className?: string }) {
  return (
    <section
      aria-label="Standardized chassis features"
      className={cn("relative w-full", className)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {CHASSIS_MARKERS.map((marker, idx) => (
          <div
            key={marker}
            className={cn(
              "flex items-start gap-3 p-6 md:p-8",
              idx < CHASSIS_MARKERS.length - 1 &&
                "border-b muted-border sm:border-b-0 sm:border-r",
            )}
          >
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FBC526] text-black">
              <CheckIcon size={12} weight="bold" />
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {marker}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
