"use client";

import { cn } from "@/lib/utils";
import { GearFineIcon } from "@phosphor-icons/react/dist/csr/GearFine";
import { EngineIcon } from "@phosphor-icons/react/dist/csr/Engine";

export function Services({ className }: { className?: string }) {
  return (
    <section
      aria-label="Organizations we collaborate with"
      className={cn("relative w-full border-t muted-border", className)}
    >
      <div className=" muted-border w-full flex h-20 justify-center items-center">
        <h2 className="text-xl font-semibold inline-flex items-center flex-wrap justify-center gap-y-2">
          One{" "}
          <span className="inline-flex p-3 justify-center mx-2 items-center gap-2  text-sm border muted-border rounded-full bg-accent ">
            <GearFineIcon size={20} weight="light" /> System
          </span>
          , Three Engines of{" "}
          <span className="inline-flex p-3 justify-center mx-2 items-center gap-2  text-sm border muted-border rounded-full bg-accent ">
            <EngineIcon size={20} weight="light" /> Execution
          </span>
        </h2>
      </div>
      <div></div>
    </section>
  );
}
