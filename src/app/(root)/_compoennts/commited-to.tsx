import react from 'react'
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MARQUEE } from "@/lib/constants";
import { gradientText } from "./hero/hero-text";


const CommitedTo =()=>{
    return (
        <div className="flex flex-col w-full h-fit dark:bg-[#030E11]  border-y muted-border">
      <h2 className={cn("text-center scroll-m-20 font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl  mt-10 ")}>we are <span className={cn(gradientText)}>commited</span> to</h2>
      <Marquee
          className="z-50 overflow-hidden [--duration:60s] [--gap:1rem] h-[215px]"
          horizontal
        >
          {MARQUEE.map((data, idx) => (
            <react.Fragment key={idx}>
            <Image
              src={data.image}
              alt={data.image}
              width={data.ImageWidth}
              height={data.ImageHeight}
              className="hidden dark:block my-auto mx-10 invert"
            />

            <Image
              src={data.image}
              alt={data.imageLight}
              width={data.ImageWidth}
              height={data.ImageHeight}
              className="block dark:hidden my-auto mx-10"
            />
            </react.Fragment>
          ))}

        </Marquee>
        </div>
    )
}

export default CommitedTo;
