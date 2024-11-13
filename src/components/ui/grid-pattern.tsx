import { cn } from "@/lib/utils";
import { useId } from "react";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  mainLineColor?: string;
  subLineColor?: string;
  mainLineOpacity?: number;
  subLineOpacity?: number;
  className?: string;
}

export const GridPattern = ({
  width = 100,
  height = 100,
  x = -1,
  y = -1,
  mainLineColor = "#555555",
  subLineColor = "#555555",
  mainLineOpacity = 0.6,
  subLineOpacity = 0.4,
  className,
  ...props
}: GridPatternProps) => {
  const id = useId();
  const patternId = `grid-pattern-${id}`;
  const subPatternId = `sub-grid-pattern-${id}`;
  const clipId = `clip-path-${id}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full opacity-80 dark:opacity-100 -z-50",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <g opacity={mainLineOpacity}>
            <path
              d={`M ${width} 0 V ${height}`}
              stroke={mainLineColor}
              strokeWidth="0.5"
            />
            <path
              d={`M 0 ${height} H ${width}`}
              stroke={mainLineColor}
              strokeWidth="0.5"
            />
          </g>
        </pattern>

        <pattern
          id={subPatternId}
          width={width/5}
          height={height/5}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <g opacity={subLineOpacity}>
            <path
              d={`M ${width/5} 0 V ${height/5}`}
              stroke={subLineColor}
              strokeWidth="0.25"
            />
            <path
              d={`M 0 ${height/5} H ${width/5}`}
              stroke={subLineColor}
              strokeWidth="0.25"
            />
          </g>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${subPatternId})`} />
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export default GridPattern;
