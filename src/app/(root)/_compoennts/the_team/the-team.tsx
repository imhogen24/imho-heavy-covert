import { cn } from "@/lib/utils";
import { gradientText } from "../hero/hero-text";
import Image from "next/image";

const TheTeam = () => {
  return (
    <div
      className="bg-background w-full h-full border-t muted-border"
      id="team"
    >
      <div className="h-20 md:h-40 flex flex-col items-center border-b muted-border jusitfy-center m-auto gap-[16px] p-2">
        <h2
          className={cn(
            "text-center my-auto scroll-m-20 font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl  ",
            gradientText,
          )}
        >
          Work With Us
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
        {/* Left Column */}
        <div className="flex flex-col justify-around">
          <h3 className="text-2xl font-bold leading-tight">
            Creating exceptional products requires a high-performance team.
          </h3>
          <div className="relative w-full h-[300px]">
            <Image
              src="/team2.png"
              alt="Team meeting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-around gap-6">
          <div className="relative w-full h-[300px]">
            <Image
              src="/team1.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h3 className="text-2xl font-bold leading-tight text-center">
            "With IMHO, you're partnering with problem solvers who are fully
            committed to your success at every stage"
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
