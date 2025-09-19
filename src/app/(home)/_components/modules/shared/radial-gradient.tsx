import { memo } from "react";
import { cn } from "@/lib/utils";

interface RadialGradientProps {
  /** Background className (e.g., "bg-blue-500") */
  bg: string;
  /** Dimension for width and height (e.g., "400px", "20rem") */
  dimension: string;
  /** Additional className for container */
  className?: string;
}

const RadialGradient = memo(function RadialGradient({ bg, dimension, className }: RadialGradientProps) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <div
        className={cn("rounded-full", bg)}
        style={{
          width: dimension,
          height: dimension,
          opacity: 0.15,
          filter: 'blur(100px)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
});

export default RadialGradient;
