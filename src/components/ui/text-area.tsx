import * as React from "react"

import { cn } from "@/lib/utils"
import { CustomUploadButton } from "../uploadthing/upload-button"


const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <div className="flex flex-col min-h-[80px] rounded-xl w-full border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">

    <textarea
      className={cn(
        "w-full px-3 py-2 text-base bg-transparent placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        className
      )}
      ref={ref} 
      {...props}
    />
   <CustomUploadButton/>
    </div>
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
