"use client";
import React from "react";
import { KanbanIcon } from "@phosphor-icons/react/dist/csr/Kanban";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const HeroText = () => {
  return (
    <div className="relative flex w-full flex-col px-6 py-10 sm:px-8 md:y-12 md:pl-12 lg:py-16 lg:pl-16 md:pr-0">
      <div className="flex h-full w-full flex-col gap-4 md:gap-[16px]">
        <h1
          className={cn(
            "text-balance font-[family-name:var(--font-machina)] text-2xl md:text-3xl lg:text-4xl",
          )}
        >
          Engineering{" "}
          <span className={cn(gradientText, "leading-tight")}>Systems</span>{" "}
          That
          <span className={cn(gradientText)}> Produce </span>Industrial
          Capability.
        </h1>

        <p className="max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          IMHO GEN designs. and deploys engineering systems that eliminate
          trial-and-error and convert capital into working industrial output
          from concept to commissioning
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <Button
            asChild
            className="w-fit"
            variant="primary"
            size="standard"
          >
            <Link href={`#`} target="_blank">
              <KanbanIcon size={48} weight="light" /> Start a Project
            </Link>
          </Button>
          <Button
            asChild
            className="w-fit"
            variant="primary-outline"
            size="standard"
          >
            <Link href={`#`} target="_blank">
              Explore Our System
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
