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
    <div className="relative flex w-full flex-col items-center justify-center px-4 py-8 sm:px-6 md:w-[800px] md:p-10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:gap-[16px]">
        <h1
          className={cn(
            "max-w-none text-center font-[family-name:var(--font-machina)] text-2xl sm:max-w-lg md:text-3xl lg:text-4xl",
          )}
        >
          Engineering{" "}
          <span className={cn(gradientText, "leading-tight")}>Systems</span>{" "}
          That
          <span className={cn(gradientText)}> Produce </span>Industrial
          Capability.
        </h1>

        <p className="w-full max-w-none text-center text-base leading-relaxed text-muted-foreground sm:max-w-xl md:max-w-2xl md:text-balance md:text-lg lg:max-w-3xl">
          IMHO GEN designs. and deploys engineering systems that eliminate
          trial-and-error and convert capital into working industrial output
          from concept to commissioning
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
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
