import { useId } from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  mainLineColor?: string;
  subLineColor?: string;
  mainLineOpacity?: number;
  subLineOpacity?: number;
  mainLineWidth?: number;
  subLineWidth?: number;
  gridSize?: number;
  subGridDivisions?: number;
}

export const ResponsiveGrid = ({
  className,
  mainLineColor = "#555555",
  subLineColor = "#555555",
  mainLineOpacity = 0.6,
  subLineOpacity = 0.4,
  mainLineWidth = 0.5,
  subLineWidth = 0.25,
  gridSize = 100,
  subGridDivisions = 5,
  ...props
}: GridProps) => {
  const id = useId();
  const patternId = `grid-pattern-${id}`;
  const subPatternId = `sub-grid-pattern-${id}`;
  const clipId = `clip-path-${id}`;

  return (
    <svg
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
      {...props}
    >
      <defs>
        {/* Main grid pattern
        <pattern
          id={patternId}
          width={gridSize}
          height={gridSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${gridSize} 0 L ${gridSize} ${gridSize} M 0 ${gridSize} L ${gridSize} ${gridSize}`}
            stroke={mainLineColor}
            strokeWidth={mainLineWidth}
            opacity={mainLineOpacity}
          />
        </pattern> */}

        {/* Sub grid pattern */}
        <pattern
          id={subPatternId}
          width={gridSize / subGridDivisions}
          height={gridSize / subGridDivisions}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${gridSize / subGridDivisions} 0 L ${gridSize / subGridDivisions} ${gridSize / subGridDivisions} M 0 ${gridSize / subGridDivisions} L ${gridSize / subGridDivisions} ${gridSize / subGridDivisions}`}
            stroke={subLineColor}
            strokeWidth={subLineWidth}
            opacity={subLineOpacity}
          />
        </pattern>

        <clipPath id={clipId}>
          <rect width="1200" height="1200" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {/* Sub grid */}
        <rect
          width="100%"
          height="100%"
          fill={`url(#${subPatternId})`}
        />

        {/* Main grid */}
        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </g>
    </svg>
  );
};

export default ResponsiveGrid;
