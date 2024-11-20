import { useId } from "react";
import { cn } from "@/lib/utils";

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
  x = 0,
  y = 0,
  mainLineColor = "#555555",
  subLineColor = "#555555",
  mainLineOpacity = 1,
  subLineOpacity = 0.4,
  className,
  ...props
}: GridPatternProps) => {
  const id = useId();
  const patternId = `grid-pattern-${id}`;
  const subPatternId = `sub-grid-pattern-${id}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <defs>
        {/* <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
          patternTransform={`translate(${x},${y})`}
        >
          <g opacity={mainLineOpacity}>
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={height}
              stroke={mainLineColor}
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="0"
              y1="0"
              x2={width}
              y2="0"
              stroke={mainLineColor}
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </pattern> */}

        <pattern
          id={subPatternId}
          width={width/5}
          height={height/5}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
          patternTransform={`translate(${x},${y})`}
        >
          <g opacity={subLineOpacity}>
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={height/5}
              stroke={subLineColor}
              strokeWidth="0.25"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="0"
              y1="0"
              x2={width/5}
              y2="0"
              stroke={subLineColor}
              strokeWidth="0.25"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </pattern>
      </defs>

      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${subPatternId})`}
        shapeRendering="crispEdges"
      />
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
        shapeRendering="crispEdges"
      />
    </svg>
  );
};

export default GridPattern;
