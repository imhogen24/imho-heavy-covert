import { Button } from "@/components/ui/button"
import { ScheduleMeetingIcon } from "@/lib/icons"
import { cn } from "@/lib/utils"

 export const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]"
export const Hero = () => {



    return (
        <div className="w-full border border-[#555555] bg-[#09090B]  border-opacity-25 flex p-[100px] min-h-[400px] flex-col lg:flex-row items-center justify-center gap-[61px]
      ">
        <div className="flex-1 flex items-center max-w-[500px] h-[168px]">
          <h1 className={cn("text-center lg:text-left lg:text-[38px] font-[family-name:var(--font-machina)]")}>
          We
           <span className={cn(gradientText, "leading-tight")}> Design </span>
            Highly Functional and Robust
          <span className={cn(gradientText)}> Products </span>
          & Processes
          </h1>
          </div>
        <div className="flex-1 flex  justify-between max-w-[500px] text-muted-foreground h-[168px] lg:text-[20px] flex-col">
         <p>
             We are a Research and Development company  specialized in engineering design. We design and prototype highly robust products and processes.
          </p>
          <Button className="w-fit text-secondary" variant={"secondary"}>
              <ScheduleMeetingIcon/>  Schedule a meeting
          </Button>
       </div>

        </div>
    )
}
