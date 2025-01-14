import { IMPACT_TEXT, SDG_GOALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

import RadialGradient from "./radial-gradient";
import { gradientText } from "./hero/hero-text";

const ImpactSection = () => {
  return (
    <div className="flex flex-col justify-center border-t muted-border overflow-x-hidden items-center relative h-full w-full">

<div className="flex w-full h-52 border-b muted-border border-gradient-to-r from-gray-950 via-gray-500 to-gray-950 dark:from-white/5 dark:via-white/20 dark:to-white/5">

            {/*  Header section */}
        <div className="flex flex-col items-center  m-auto gap-[16px] p-2">
          <h4 className={cn("text-center scroll-m-20 font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl", gradientText)}>
            Our Impact
          </h4>
          <p className="text-center text-muted-foreground md:text-2xl max-w-sm md:max-w-2xl">IMHO&apos;s Distinct Impact: Advancing the UN SDGs and  African Union&apos;s Agenda 2063 Goals</p>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full relative">
        { IMPACT_TEXT.map((impact,index) => (
        <div  key={index}  className={cn("relative ", impact.footer && " md:border-r muted-border")}>
          <div className="flex border-b muted-border md:border-none flex-col gap-5
           p-[32px] lg:p-[64px]">
            <h4 className="scroll-m-20 font-semibold tracking-tight text-2xl md:text-3xl">{impact.title}</h4>
            <p className="leading-7 [&:not(:first-child)] body-text text-muted-foreground">{impact.description}</p>
            {impact.footer &&
            <p className="leading-7 [&:not(:first-child)] body-text text-muted-foreground">
              {impact.footer}
            </p>

          }

        </div>
        </div>
      ))}
      </div>

      {/* sdg goal logos here */}
      <div className=" relative flex flex-row items-center justify-center border-t muted-border w-full h-full">
       {
        SDG_GOALS.map((goal) => (
          <div key={goal.id} className="flex flex-row justify-evenly items-center w-full h-[199px] ">
            {/* TODO: FIX ISSUE WITH NAMING OF THE ALTERNATIVE TEXT */}
            <Image width={goal.ImageWidth} height={goal.ImageHeight} src={goal.image} alt={`SDG ${goal.id}`} className="size-[80px] dark:hidden block  lg:size-[120px]"/>

            <Image width={goal.ImageWidth} height={goal.ImageHeight} src={goal.imageLight} alt={`SDG ${goal.id}`} className="size-[80px] hidden dark:block lg:size-[120px]"/>
          </div>
        ))
       }
      </div>

      <RadialGradient bg="bg-white" dimension="500px"/>

    </div>
  );
};

export default ImpactSection;
