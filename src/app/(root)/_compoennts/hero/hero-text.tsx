import React from 'react'

import { cn } from '@/lib/utils'
import { ScheduleMeetingIcon } from '@/lib/icons'
import { Button } from '@/components/ui/button'
export const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]"
const HeroText = () => {
  return (

         <div className="relative flex flex-col items-center justify-center  md:w-[800px] px-5 lg:px-[100px] gap-[16px]">
          {/* text size for small screens is actually 24px */}
          <h1 className={cn("text-center  text-2xl md:text-[38px] lg:text-[38px] font-[family-name:var(--font-machina)]")}>
              We{" "}
            <span className={cn(gradientText, "leading-tight")}>
              Design
            </span>
              {" "}Highly Functional and Robust
            <span className={cn(gradientText)}> Products </span>
              & Processes
          </h1>
          <p className="text-center text-muted-foreground text-[15px] md:text-[16px] lg:text-[20px]">
             We are a Research and Development company  specialized in engineering design. We design and prototype highly robust products and processes.
          </p>
          <Button className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] md:h-[48px]" variant={"secondary"}>
              <ScheduleMeetingIcon/>  Schedule a meeting
          </Button>
         </div>


  )
}

export default HeroText
