import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CreditCard, Truck, Smile } from "lucide-react";
import Link from "next/link";

const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: <CreditCard className="w-8 h-8" />,
      title: "Choose your plan",
      description: "Retail or installment options available"
    },
    {
      number: "02",
      icon: <Truck className="w-8 h-8" />,
      title: "Order Trading Gear",
      description: "Delivered through agents or partners"
    },
    {
      number: "03",
      icon: <Smile className="w-8 h-8" />,
      title: "Work with pride",
      description: "Trade with safety, efficiency, and dignity"
    }
  ];

  return (
    <div className="flex flex-row w-full h-full justify-between border-b muted-border">
      <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
      
      <div className="w-full p-8 lg:p-16">
        {/* Header matching your typography */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-machina)] font-bold mb-4">
            How to{" "}
            <span className={cn(gradientText)}>Get Started</span>
          </h2>
          <p className="text-muted-foreground">
            Getting Started is Simple.
          </p>
        </div>

        {/* Process steps using your sharp grid pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16 border muted-border">
          {steps.map((step, index) => (
            <div key={index} className={cn(
              "p-8 bg-white dark:bg-neutral-900 text-center",
              // Create grid borders
              index < 2 ? "border-r muted-border" : "",
              "border-b muted-border"
            )}>
              <div className="text-3xl font-[family-name:var(--font-machina)] text-[#EF7D00]/30 mb-4">
                {step.number}
              </div>
              <div className="w-12 h-12 border muted-border flex items-center justify-center mx-auto mb-6 text-[#EF7D00] opacity-80">
                {step.icon}
              </div>
              <h3 className="font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA using exact button styling from your hero */}
        <div className="text-center">
          <Button
            asChild
            className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
            variant={"secondary"}
          >
            <Link href="#order">
              Order Now
            </Link>
          </Button>
        </div>
      </div>

      <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full">
        {/* Geometric decoration */}
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-dashed muted-border opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;