import { Button } from "@/components/ui/button"
import { ScheduleMeetingIcon } from "@/lib/icons"
import { cn } from "@/lib/utils"

 export const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]"
export const Hero = () => {



    return (
    <div className="w-full  bg-background border-[#555555] mx-[10px] lg:mx-0 border-opacity-25 flex bg-white h-[400px] lg:p-[100px] min-h-[400px] flex-col lg:flex-row items-center justify-center lg:gap-[61px]
      ">
        <div className="lg:flex-1 flex items-center  lg:max-w-[500px] lg:h-[168px]">
          {/* text size for small screens is actually 24 on small screens */}
          <h1 className={cn("text-center lg:text-left  text-[28px] md:text-[38px] lg:text-[38px] font-[family-name:var(--font-machina)]")}>
              We{" "}
            <span className={cn(gradientText, "leading-tight")}>
              Design
            </span>
              {" "}Highly  <br className="lg:hidden"/> Functional and Robust
            <span className={cn(gradientText)}><br className="lg:hidden"/> Products </span>
              & Processes
          </h1>
         </div>
      <div className="lg:flex-1 flex gap-3 lg:gap-0 justify-between max-w-[500px] text-muted-foreground lg:h-[168px] lg:text-[20px] flex-col">
         <p className="text-center lg:text-left">
             We are a Research and Development company  specialized in engineering design. We design and prototype highly robust products and processes.
          </p>
          <Button className="w-fit text-secondary mx-auto lg:mx-0" variant={"secondary"}>
              <ScheduleMeetingIcon/>  Schedule a meeting
          </Button>
       </div>

        </div>
    )
}
