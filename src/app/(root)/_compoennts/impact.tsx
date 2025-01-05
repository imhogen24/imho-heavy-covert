import { IMPACT_TEXT, SDG_GOALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

import RadialGradient from "./radial-gradient";
import { gradientText } from "./hero/hero-text";

const ImpactSection = () => {
  return (
    <div className="flex flex-col justify-center border-t muted-border overflow-x-hidden items-center relative h-full w-full">

      <div className="flex w-full h-[215px]"
             style={{
             borderBottom: '1px solid',
              borderImage: 'linear-gradient(to right, #09090B 0%, #555555 50%, #09090B 100%) 1',
             }}
          >
            {/*  Header section */}
        <div className="flex flex-col items-center md:w-[446px] m-auto gap-[16px] p-2">
          <h4 className={cn("text-center scroll-m-20 font-semibold tracking-tight text-2xl font-[family-name:var(--font-machina)]", gradientText)}>
            Our Impact
          </h4>
          <p className="text-center leading-7 [&:not(:first-child)] text-muted-foreground">IMHO&apos;s Distinct Impact: Advancing the UN SDGs and  African Union&apos;s Agenda 2063 Goals</p>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full relative">
        { IMPACT_TEXT.map((impact) => (
        <div className={cn("relative ", impact.footer && " md:border-r muted-border")}>
          <div key={impact.idx} className="flex border-b muted-border md:border-none flex-col gap-5 p-[32px] lg:p-[54px]">
            <h4 className="scroll-m-20 font-semibold tracking-tight text-2xl font-[family-name:var(--font-machina)]">{impact.title}</h4>
            <p className="leading-7 [&:not(:first-child)] text-muted-foreground">{impact.description}</p>
            {impact.footer &&
            <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
              {impact.footer}
            </p>

          }

        </div>
        </div>
      ))}
      </div>

      {/* sdg goal logos here */}
      <div className=" relative flex flex-row items-center justify-center w-full h-full">
       {
        SDG_GOALS.map((goal) => (
          <div key={goal.id} className="flex flex-row justify-evenly items-center w-full h-[199px] ">
            {/* TODO: FIX ISSUE WITH NAMING OF THE ALTERNATIVE TEXT */}
            <Image width={goal.ImageWidth} height={goal.ImageHeight} src={goal.image} alt={`SDG ${goal.id}`} className="size-[80px] lg:size-[120px]"/>
          </div>
        ))
       }
      </div>

      <RadialGradient bg="bg-white" dimension="500px"/>

    </div>
  );
};

export default ImpactSection;
