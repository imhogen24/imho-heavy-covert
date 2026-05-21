"use client";
import React from "react";
import Balancer from "react-wrap-balancer";
import { KanbanIcon } from "@phosphor-icons/react/dist/csr/Kanban";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const HeroText = () => {
  return (
    <div className="relative flex flex-col items-center justify-center  md:w-[800px] p-10">
      <div className="w-full h-full flex flex-col items-center justify-center gap-[16px]">
        <h1
          className={cn(
            "text-center text-2xl max-w-lg md:text-3xl lg:text-4xl font-[family-name:var(--font-machina)]",
          )}
        >
          Engineering{" "}
          <span className={cn(gradientText, "leading-tight")}>Systems</span>{" "}
          That
          <span className={cn(gradientText)}> Produce </span>Industrial
          Capability.
        </h1>

        <p className="text-center text-muted-foreground text-md md:text-lg">
          <Balancer ratio={0.5} preferNative={false}>
            IMHO GEN designs. and deploys engineering systems that eliminate
            trial-and-error and convert capital into working industrial output
            from concept to commissioning
          </Balancer>
        </p>

        <div className="inline-flex justify-center items-center">
          <Button
            asChild
            className="w-fit mx-auto lg:mx-2"
            variant="primary"
            size="standard"
          >
            <Link href={`#`} target="_blank">
              <KanbanIcon size={48} weight="light" /> Start a Project
            </Link>
          </Button>
          <Button
            asChild
            className="w-fit mx-auto lg:mx-2"
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
