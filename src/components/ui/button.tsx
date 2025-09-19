import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary:
          "bg-[#FAFAFA] text-secondary-foreground shadow-sm hover:bg-white rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline rounded-md",
        close: "rounded-[0.5rem] border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        download: "rounded-[0.5rem] bg-primary text-primary-foreground hover:bg-primary/90",
        // Standardized button variants
        primary: "text-secondary bg-black dark:bg-white hover:bg-black/95 dark:hover:bg-white/85 rounded-md p-[14px] h-[42px] md:h-[48px]",
        "primary-outline": "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md p-[14px] h-[42px] md:h-[48px]",
        "primary-orange": "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md p-[14px] h-[42px] md:h-[48px]",
      },
      size: {
        nav: "h-[32px] w-[87px]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        standard: "", // Empty because height is handled in variants now
      },
    },
    defaultVariants: {
      variant: "default",
      size: "nav",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
