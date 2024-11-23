import React from 'react'
import HeroGrid from '../layout/hero-grid'
import GridPattern from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

const MobileHero = () => {
  return (
    <div className="grid grid-cols-4 lg:hidden max-w-[1200px] border-r border-[#555555] border-opacity-25">
    {/* GRID FOR SMALL SCREENS */}
         {
           [...Array(4)].map((_, index) => (
             <div key={index} className="relative w-full aspect-square  border-y border-l  border-[#555555] border-opacity-40 md:hidden">
                 <GridPattern
                width={100}
                height={100}
                x={-1}
                y={-1}
                className={cn(
                  "absolute inset-0  mx-auto lg:mt-0",
                  "overflow-x-hidden",
                  " -z-50"
                )}
              />
             </div>
           ))
         }
   </div>
  )
}

export default MobileHero
