import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import ProjectCard from "./project-card";
import GradientTextHeader from "../gradient-text-header";
import { gradientText } from "../hero/hero-text";

const Projects = () => {
  return (
    <div className="w-full h-full">
      <div className="h-20 md:h-40 flex flex-col items-center jusitfy-center m-auto gap-[16px] p-2">
        <h2
          className={cn(
            "text-center my-auto scroll-m-20 font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl  ",
            gradientText,
          )}
        >
          Some Projects
        </h2>
      </div>

      {PROJECTS.map((item, index) => (
        <div key={item.idx}>
          <ProjectCard {...item} idx={index} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
