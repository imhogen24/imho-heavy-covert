import { cn } from "@/lib/utils";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

interface SectionSeparatorProps {
  className?: string;
}

export function SectionSeparator({ className }: SectionSeparatorProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full h-10 border-t border-b muted-border overflow-hidden",
        className,
      )}
    >
      <FlickeringGrid
        className="absolute inset-0 size-full"
        squareSize={3}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.3}
        flickerChance={0.15}
      />
    </div>
  );
}
