import GridPattern from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

const HeroGrid = () => {
  return (
    <>
    <div className="relative h-full max-w-[1200px] mx-auto">
                <GridPattern
                width={100}
                height={100}
                x={-1}
                y={-1}
                className={cn(
                  "hidden lg:block absolute inset-0  mx-auto lg:mt-0",
                  "overflow-x-hidden",
                  " -z-50"
                )}
              />
        </div>
</>
  )
}

export default HeroGrid
