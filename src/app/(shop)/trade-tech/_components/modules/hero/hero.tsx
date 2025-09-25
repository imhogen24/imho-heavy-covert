"use client";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { ContactCTALink } from "../../ui/contact-cta-link";

export const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const Hero = () => {
  // Array of TradeTech gear images
  const gearImages = [
    "/trade-tech/Mwiaa_Gear2.1.png", // Workwear Vest - Front View
    "/trade-tech/Mwiaa_Gear2.2.png", // Workwear Vest - Side View
    "/trade-tech/Mwiaa_Gear2.9.png", // Workwear Jacket - Front View
    "/trade-tech/Mwiaa_Gear2.4.png", // Workwear Pants - Front View
    "/trade-tech/Mwiaa_Gear2.5.png", // Workwear Pants - Side View
    "/trade-tech/Mwiaa_Gear2.6.png", // Workwear Jacket - Side View
    "/trade-tech/Mwiaa_Gear2.7.png", // Workwear Vest - Back View
    "/trade-tech/Mwiaa_Gear2.8.png", // Workwear Jacket - Back View
    "/trade-tech/Mwiaa_Gear2.1.png", // Workwear Vest - Detail View
  ];

  return (
    <div className="relative min-h-[80vh] border-b muted-border">
      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        squares={[
          [6, 0],
          [4, 0],
          [5, 1],
          [6, 2],
        ]}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-50"
        )}
      />

      {/* Two-column grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left Grid - Hero Text Section */}
        <div className="flex flex-col justify-center p-8 lg:p-16 border-r-0 lg:border-r muted-border">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row lg:items-center gap-2 mb-3">
              <span className="w-fit my-auto px-3 md:py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                TradeTech
              </span>
              <span className="text-xs text-muted-foreground">
                Empowering Africa's traders through innovative design
              </span>
            </div>

            <h1
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-machina)] leading-tight"
              )}
            >
              <span className={cn(gradientText)}>Wear Your Craft</span> with
              Pride
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              <Balancer ratio={-1.5} preferNative={false}>
                Ergonomic, secure, and dignified workwear designed for Africa's
                traders. Built for comfort, safety, and professional excellence.
              </Balancer>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <Button
                asChild
                className="w-full sm:w-auto"
                variant="primary"
                size="standard"
              >
                <ContactCTALink href="#contact">Order Now</ContactCTALink>
              </Button>

              <Button
                asChild
                variant="primary-outline"
                size="standard"
                className="w-full sm:w-auto border muted-border"
              >
                <ContactCTALink href="#contact">Partner With Us</ContactCTALink>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Grid - Image Section with Responsive Sub-grid */}
        <div>
          {/* Mobile & Tablet: 1x9 horizontal scroll */}
          <div className="flex lg:hidden overflow-x-auto h-full border-t border-b muted-border">
            {gearImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-48 h-48 border-r muted-border last:border-r-0"
              >
                <Image
                  src={image}
                  alt={`TradeTech Workwear ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop: 3x3 grid */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-3 h-full gap-0">
            {/* Grid 1 - Top Left */}
            <div className="relative col-span-1 row-span-1 border-r border-b muted-border">
              <Image
                src={gearImages[0]}
                alt="TradeTech Workwear 1"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Grid 2 - Top Center */}
            <div className="relative col-span-1 row-span-1 border-r border-b muted-border">
              <Image
                src={gearImages[1]}
                alt="TradeTech Workwear 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid 3 - Top Right */}
            <div className="relative col-span-1 row-span-1 border-b muted-border">
              <Image
                src={gearImages[2]}
                alt="TradeTech Workwear 3"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid 4 - Middle Left */}
            <div className="relative col-span-1 row-span-1 border-r border-b muted-border">
              <Image
                src={gearImages[3]}
                alt="TradeTech Workwear 4"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid 5 - Middle Center */}
            <div className="relative col-span-1 row-span-1 border-r border-b muted-border">
              <Image
                src={gearImages[4]}
                alt="TradeTech Workwear 5"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid 6 - Middle Right */}
            <div className="relative col-span-1 row-span-1 border-b muted-border">
              <Image
                src={gearImages[5]}
                alt="TradeTech Workwear 6"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid 7 - Bottom Left */}
            <div className="relative col-span-1 row-span-1 border-r muted-border">
              <Image
                src={gearImages[6]}
                alt="TradeTech Workwear 7"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid 8 - Bottom Center */}
            <div className="relative col-span-1 row-span-1 border-r muted-border">
              <Image
                src={gearImages[7]}
                alt="TradeTech Workwear 8"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid 9 - Bottom Right */}
            <div className="relative col-span-1 row-span-1">
              <Image
                src={gearImages[8]}
                alt="TradeTech Workwear 9"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
