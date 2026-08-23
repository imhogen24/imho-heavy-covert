import Image from "next/image";

import { cn } from "@/lib/utils";
import { COMPONENT_SPECS, DIMENSION_SPECS, renderSize } from "../../data";

const headCellClassName =
  "px-4 py-3 text-left align-bottom text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground";
const bodyCellClassName = "px-4 py-4 align-top text-sm text-muted-foreground";

const DIMENSION_LEGEND = [
  { key: "A", label: "Length" },
  { key: "B", label: "Width" },
  { key: "C", label: "Height" },
];

export function Specs({ className }: { className?: string }) {
  return (
    <section
      id="specifications"
      aria-label="Technical Specifications"
      className={cn("relative w-full scroll-mt-24", className)}
    >
      <div className="border-b muted-border px-8 py-10 md:px-14 md:py-12">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Reference Data
        </span>
        <h2 className="mt-3 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
          Technical Specifications
        </h2>
      </div>

      {/* Dimensions table + measurement key */}
      <div className="grid grid-cols-1 border-b muted-border lg:grid-cols-[1.4fr_1fr]">
        <div className="hover-scrollbar">
          <table className="w-full min-w-[34rem] border-collapse">
            <caption className="sr-only">
              KAMSMET trailer dimensions and key fleet application by model
            </caption>
            <thead>
              <tr className="border-b muted-border bg-accent/60">
                {DIMENSION_SPECS.columns.map((column) => (
                  <th key={column} scope="col" className={headCellClassName}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DIMENSION_SPECS.rows.map((row, idx) => (
                <tr
                  key={row.model}
                  className={cn(
                    idx < DIMENSION_SPECS.rows.length - 1 &&
                      "border-b muted-border",
                  )}
                >
                  <th
                    scope="row"
                    className={cn(
                      bodyCellClassName,
                      "font-semibold text-foreground",
                    )}
                  >
                    {row.model}
                  </th>
                  {[row.length, row.width, row.height].map(
                    ([metric, imperial]) => (
                      <td key={metric + imperial} className={bodyCellClassName}>
                        <span className="block font-medium text-foreground">
                          {metric}
                        </span>
                        <span className="block text-xs">{imperial}</span>
                      </td>
                    ),
                  )}
                  <td className={bodyCellClassName}>{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measurement key */}
        <div className="flex flex-col justify-center gap-4 border-t muted-border p-8 lg:border-l lg:border-t-0">
          <div className="grid grid-cols-[2fr_1fr] items-center gap-5">
            <Image
              src="/kamsmet/flatbed-side.webp"
              alt="Side elevation of the KAMSMET chassis used for the length measurement"
              {...renderSize("/kamsmet/flatbed-side.webp")}
              sizes="(max-width: 1024px) 66vw, 256px"
              className="h-auto w-full"
            />
            <Image
              src="/kamsmet/full-bucket-rear.webp"
              alt="Rear elevation of the KAMSMET gated bulk carrier used for the width and height measurements"
              {...renderSize("/kamsmet/full-bucket-rear.webp")}
              sizes="(max-width: 1024px) 33vw, 128px"
              className="h-auto w-full"
            />
          </div>
          <dl className="flex flex-wrap gap-x-6 gap-y-2 border-t muted-border pt-4">
            {DIMENSION_LEGEND.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                <dt className="flex size-5 items-center justify-center rounded-sm bg-[#FBC526] text-[11px] font-bold text-black">
                  {item.key}
                </dt>
                <dd className="text-sm text-muted-foreground">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Component table. Closes the page: no bottom rule, since the layout's
          SectionSeparator brings its own and the two would stack. */}
      <div className="hover-scrollbar">
        <table className="w-full min-w-[34rem] border-collapse">
          <caption className="sr-only">
            KAMSMET standardized component specifications
          </caption>
          <thead>
            <tr className="border-b muted-border bg-accent/60">
              {COMPONENT_SPECS.columns.map((column) => (
                <th key={column} scope="col" className={headCellClassName}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPONENT_SPECS.rows.map((row, idx) => (
              <tr
                key={row.component}
                className={cn(
                  idx < COMPONENT_SPECS.rows.length - 1 &&
                    "border-b muted-border",
                )}
              >
                <th
                  scope="row"
                  className={cn(
                    bodyCellClassName,
                    "font-semibold text-foreground",
                  )}
                >
                  {row.component}
                </th>
                <td className={bodyCellClassName}>{row.metric}</td>
                <td className={bodyCellClassName}>{row.imperial}</td>
                <td className={bodyCellClassName}>{row.advantage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
