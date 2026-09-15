import { cn } from "@/lib/utils";
import { CompassIcon } from "@phosphor-icons/react/dist/ssr/Compass";
import { FactoryIcon } from "@phosphor-icons/react/dist/ssr/Factory";
import { PencilRulerIcon } from "@phosphor-icons/react/dist/ssr/PencilRuler";
import type { Icon } from "@phosphor-icons/react";

type Service = {
  Icon: Icon;
  tier: string;
  title: string;
  body: string;
  note?: string;
  idealFor: string;
};

const SERVICES: Service[] = [
  {
    Icon: CompassIcon,
    tier: "Tier 1",
    title: "Custom Product Development",
    body: "Turn complex problems into robust physical realities. We design, simulate, and fabricate bespoke industrial machinery from scratch. By defining your exact inputs (materials, energy) and desired outputs, we engineer a system that delivers maximum throughput with minimum downtime.",
    idealFor: "startups and enterprises needing proprietary equipment.",
  },
  {
    Icon: FactoryIcon,
    tier: "Tier 1",
    title: "Turnkey Process & Factory Infrastructure",
    body: "Scale up with mathematical predictability. We design complete processing lines and factory infrastructures. From material handling conveyors to automated sorting, we deliver systems ready for immediate, profitable operation.",
    note: "Packages range from standard lines at GHS 150K to fully automated, high-throughput facilities.",
    idealFor: "agro-processing, mining, and large-scale manufacturing.",
  },
  {
    Icon: PencilRulerIcon,
    tier: "Tier 3 Fast-Track",
    title: "Engineering Drafting & Reverse Engineering",
    body: "Digitize, standardize, and optimize existing assets. Have an existing machine or a physical prototype that needs to be mass-produced? We use precision metrology to reverse-engineer physical parts into highly accurate, ISO/ASME standard 3D models and 2D fabrication drawings.",
    idealFor: "fabricators, maintenance teams, and patent filings.",
  },
];

export function Services({ className }: { className?: string }) {
  return (
    <section
      aria-label="Our Engineering Solutions"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Our Engineering Solutions
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {SERVICES.map((service, idx) => (
          <div
            key={service.title}
            className={cn(
              "flex flex-col gap-6 p-8 lg:p-10",
              idx < SERVICES.length - 1 &&
                "border-b md:border-b-0 muted-border",
              idx < SERVICES.length - 1 && "md:border-r",
            )}
          >
            <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border">
              <service.Icon size={20} weight="thin" />
            </span>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {service.tier}
              </span>
              <h3 className="text-lg font-semibold leading-snug">
                {service.title}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.body}
            </p>

            {service.note && (
              <p className="text-sm text-foreground leading-relaxed">
                {service.note}
              </p>
            )}

            <div className="mt-auto -mx-8 border-t muted-border px-8 pt-4 lg:-mx-10 lg:px-10">
              <p className="text-sm">
                <span className="text-muted-foreground">Ideal for </span>
                <span className="font-medium">{service.idealFor}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
