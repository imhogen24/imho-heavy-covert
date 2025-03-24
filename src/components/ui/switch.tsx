"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import { CircleCheckBig, CircleX } from "lucide-react"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-14 shrink-0 cursor-pointer items-center rounded-full border-1 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input relative",
      className
    )}
    {...props}
    ref={ref}
  >
    <CircleCheckBig className=" absolute left-1.5 h-4 w-4 transition-opacity data-[state=checked]:opacity-0 data-[state=unchecked]:opacity-100" aria-hidden="true" />
    <CircleX className="absolute right-1.5 h-4 w-4 transition-opacity data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-0" aria-hidden="true" />
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-6 w-6 rounded-full bg-accent-foreground shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
