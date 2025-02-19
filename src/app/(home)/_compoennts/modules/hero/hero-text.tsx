import React from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { ScheduleMeetingIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const HeroText = () => {
  return (
    <div className="relative flex flex-col items-center justify-center  md:w-[800px] p-10">
      <div className="w-full h-full flex flex-col items-center justify-center gap-[16px]">
        <h1
          className={cn(
            "text-center text-2xl max-w-lg md:text-3xl lg:text-4xl font-[family-name:var(--font-machina)]",
          )}
        >
          We <span className={cn(gradientText, "leading-tight")}>Design</span>{" "}
          Highly Functional and Robust
          <span className={cn(gradientText)}> Products </span>& Processes
        </h1>

        <p className="text-center text-muted-foreground text-md md:text-xl">
          <Balancer ratio={-1.5} preferNative={false}>
            We are a Research and Development company specialized in engineering
            design. We design and prototype highly robust products and
            processes.
          </Balancer>
        </p>

        <Button
          asChild
          className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
          variant={"secondary"}
        >
          <Link href={`${process.env.SCHEDULE_LINK}`} target="_blank">
            <ScheduleMeetingIcon /> Schedule a meeting
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroText;
