import { WORK_WITH_US } from "@/lib/constants";
import GradientTextHeader from "../gradient-text-header";
import WorkCard from "./work-card";
import { cn } from "@/lib/utils";
import { gradientText } from "../hero/hero-text";

const WorkWithUs = () => {
  return (
    <div className="flex justify-center items-center flex-col border-t muted-border">
      <div className="h-20 md:h-40 flex flex-col items-center jusitfy-center m-auto gap-[16px] p-2">
        <h2
          className={cn(
            "text-center my-auto scroll-m-20 font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl  ",
            gradientText,
          )}
        >
          Work With Us
        </h2>
      </div>

      <div className="flex flex-row w-full h-full justify-between border-t muted-border">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border min-h-full"></div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
          {WORK_WITH_US.map((item, index) => (
            <WorkCard key={index} {...item} />
          ))}
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border min-h-full"></div>
      </div>
    </div>
  );
};

export default WorkWithUs;
