import Marquee from "@/components/ui/marquee";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { MARQUEE } from "@/lib/constants";
import { gradientText } from "./hero/hero-text";

const CommitedTo =()=>{
    return (
        <div className="flex flex-col w-full h-fit bg-[#030E11]  border-x border-[#555555] border-opacity-25">
      <h1 className={cn(gradientText, "text-center text-[32px] font-[family-name:var(--font-machina)] mt-10 ")}>Commited To</h1>
      <Marquee
          className="z-50 overflow-hidden [--duration:60s] [--gap:1rem] h-[215px]"
          horizontal
        >
          {MARQUEE.map((data, idx) => (
            <Image
              key={idx}
              src={data.image}
              alt={data.image}
              width={data.ImageWidth}
              height={data.ImageHeight}
              className=" my-auto  mx-10"
            />
          ))}
        </Marquee>
        </div>
    )
}

export default CommitedTo;
