"use client";

import { cn } from "@/lib/utils";
import { GearFineIcon } from "@phosphor-icons/react/dist/csr/GearFine";
import { EngineIcon } from "@phosphor-icons/react/dist/csr/Engine";
import { PixelBackground } from "@/components/ui/pixel-background";
import { BackpackIcon } from "@phosphor-icons/react/dist/csr/Backpack";
import { LightbulbIcon } from "@phosphor-icons/react/dist/csr/Lightbulb";
import { CraneTowerIcon } from "@phosphor-icons/react/dist/csr/CraneTower";
import { CertificateIcon } from "@phosphor-icons/react/dist/csr/Certificate";
import { CreditCardIcon } from "@phosphor-icons/react/dist/csr/CreditCard";
import { StampIcon } from "@phosphor-icons/react/dist/csr/Stamp";

export function Services({ className }: { className?: string }) {
  return (
    <section
      aria-label="Organizations we collaborate with"
      className={cn("relative w-full border-t muted-border", className)}
    >
      <div className="muted-border w-full flex min-h-20 px-4 py-6 md:px-8 justify-center items-center">
        <h2 className="text-base sm:text-xl font-semibold inline-flex items-center flex-wrap justify-center gap-x-1 gap-y-2 text-center">
          One{" "}
          <span className="inline-flex p-3 justify-center mx-2 items-center gap-2  text-sm border muted-border rounded-full bg-accent ">
            <GearFineIcon size={20} weight="thin" /> System
          </span>
          , Three Engines of{" "}
          <span className="inline-flex p-3 justify-center mx-2 items-center gap-2  text-sm border muted-border rounded-full bg-accent ">
            <EngineIcon size={20} weight="thin" /> Execution
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 border-t muted-border lg:min-h-96">
        <div className="border-b lg:border-b-0 lg:border-r muted-border lg:col-span-2 lg:relative lg:min-h-96">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:grid lg:grid-cols-2"
          >
            <div className="border-r muted-border" />
            <div />
          </div>

          <div className="relative z-10 flex flex-col gap-10 p-8 lg:p-16">
            <h3 className="text-2xl font-semibold">
              These are not separate services.{" "}
              <span className="text-muted-foreground">
                They operate as a closed-loop system that continuously produces
                capability and industrial output
              </span>
            </h3>
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-2">
                <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border p-2">
                  <CertificateIcon size={20} weight="thin" />
                </span>
                <h4 className="text-muted-foreground">
                  All work is{" "}
                  <span className="text-black dark:text-white">
                    milestone-based{" "}
                  </span>
                  and <span className="text-black dark:text-white">funded</span>
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border p-2">
                  <CreditCardIcon size={20} weight="thin" />
                </span>
                <h4 className="text-muted-foreground">
                  Design outputs are controlled and released against payment
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border p-2">
                  <StampIcon size={20} weight="thin" />
                </span>
                <h4 className="text-muted-foreground">
                  Prototype execution follows approved engineering plans only
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 lg:grid-rows-3">
          <div className="border-b muted-border min-h-48 md:min-h-64 flex justify-center items-center w-full">
            <PixelBackground
              className="w-full h-full"
              speed={1.5}
              maxOpacity={0.3}
              flickerChance={0.1}
              gridGap={2}
              color="#ef7d00"
            >
              <div className="p-8 md:p-10 w-full h-full gap-5 flex justify-center flex-col">
                <LightbulbIcon size={28} weight="thin" />
                <h2 className="text-xl font-semibold">
                  Engineering Design <br /> & R&D
                </h2>
                <p className="text-muted-foreground">
                  Convert industrial problems into engineered solutions through
                  structured design, simulation, and prototyping.
                </p>
              </div>
            </PixelBackground>
          </div>
          <div className="border-b muted-border min-h-48 md:min-h-64 flex justify-center items-center w-full">
            <PixelBackground
              className="w-full h-full"
              speed={1.5}
              maxOpacity={0.3}
              flickerChance={0.1}
              gridGap={2}
              color="#ef7d00"
            >
              <div className="p-8 md:p-10 w-full h-full gap-5 flex justify-center flex-col">
                <BackpackIcon size={28} weight="thin" />
                <h2 className="text-xl font-semibold">
                  Capability Development <br /> (IMHO GEN Academy)
                </h2>
                <p className="text-muted-foreground">
                  Build engineers who can design, analyze, and produce real
                  systems - not just operate tools.
                </p>
              </div>
            </PixelBackground>
          </div>
          <div className="min-h-48 md:min-h-64 flex justify-center items-center w-full">
            <PixelBackground
              className="w-full h-full"
              speed={1.5}
              maxOpacity={0.3}
              flickerChance={0.1}
              gridGap={2}
              color="#ef7d00"
            >
              <div className="p-8 md:p-10 w-full h-full gap-5 flex justify-center flex-col">
                <CraneTowerIcon size={28} weight="thin" />
                <h2 className="text-xl font-semibold">
                  Industrial Deployment <br /> & Support
                </h2>
                <p className="text-muted-foreground">
                  Fabricate, install, and optimize machines, factories, and
                  production systems for real-world operation.
                </p>
              </div>
            </PixelBackground>
          </div>
        </div>
      </div>
    </section>
  );
}
