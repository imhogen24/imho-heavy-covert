import { IMPACT_TEXT, SDG_GOALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { gradientText } from "./hero";
import RadialGradient from "./radial-gradient";

const ImpactSection = () => {
  return (
    <div className="bg-background flex flex-col justify-center items-center relative h-full w-full border border-[#555555]  border-opacity-25">

      <div className="flex w-full h-[215px]"
             style={{
             borderBottom: '1px solid',
              borderImage: 'linear-gradient(to right, #09090B 0%, #555555 50%, #09090B 100%) 1',
             }}
          >
            {/*  Header section */}
        <div className="flex flex-col items-center w-[446px] m-auto gap-[16px]">
          <h2 className={cn("text-center text-[32px] font-[family-name:var(--font-machina)]", gradientText)}>
            Our Impact
          </h2>
          <p className="text-center text-[20px] text-muted-foreground">IMHO&apos;s Distinct Impact: Advancing the UN SDGs and  African Union&apos;s Agenda 2063 Goals</p>
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-row w-full h-full relative">
        { IMPACT_TEXT.map((impact) => (
        <div className={cn("flex-1  relative ", impact.footer && "border-r border-[#555555] border-opacity-25")}>
          <div key={impact.idx} className="flex flex-col gap-5 py-[54px] px-[54px]">
            <h1 className=" text-[32px] font-[family-name:var(--font-machina)]">{impact.title}</h1>
            <p className="text-[20px] text-muted-foreground">{impact.description}</p>
            {impact.footer &&
            <p className="text-[20px] text-muted-foreground">
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
          <div key={goal.id} className="flex flex-row justify-evenly items-center w-full h-[199px]">
            {/* TODO: FIX ISSUE WITH NAMING OF THE ALTERNATIVE TEXT */}
            <Image width={goal.ImageWidth} height={goal.ImageHeight} src={goal.image} alt={`SDG ${goal.id}`} className="h-[120px]"/>
          </div>
        ))
       }
      </div>
      <RadialGradient bg="bg-white" dimension="500px"/>

    </div>
  );
};

export default ImpactSection;
