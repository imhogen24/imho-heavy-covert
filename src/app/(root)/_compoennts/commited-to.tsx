import Marquee from "@/components/ui/marquee";
import { MARQUEE } from "@/lib/constants";
import Image from "next/image";
import GradientTextHeader from "./gradient-text-header";
import { cn } from "@/lib/utils";
import { gradientText } from "./hero";

const CommitedTo =()=>{
    return (
        <div className="flex flex-col w-full h-fit bg-[#030E11]  border-x border-[#555555] border-opacity-25">
      <h1 className={cn(gradientText, "text-center text-[32px] font-[family-name:var(--font-machina)] mt-10 ")}>Commited To</h1>
      <Marquee
          className=" overflow-hidden [--duration:60s] [--gap:1rem] h-[215px]"
          horizontal
        >
          {MARQUEE.map((data, idx) => (
            <Image
              key={idx}
              src={data.image}
              alt={data.image}
              width={data.ImageWidth}
              height={data.ImageHeight}
              className=" my-auto w-fit h-fit mx-10"
            />
          ))}
        </Marquee>
        </div>
    )
}

export default CommitedTo;
