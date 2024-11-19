import { cn } from '@/lib/utils'
import GridPattern from '../ui/grid-pattern'

const Pattern = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className="relative min-h-screen w-full">
      
      <div className="absolute inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <GridPattern
            width={100}
            height={100}
            x={-1}
            y={-1}
            className={cn(
              "w-full h-full",
              "opacity-30 dark:opacity-90",
              "border border-[#555555] border-opacity-25",
              "max-w-[1200px]",
              "absolute left-1/2 -translate-x-1/2" // Centers the grid
            )}
          />
        </div>
      </div>


      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}

export default Pattern
