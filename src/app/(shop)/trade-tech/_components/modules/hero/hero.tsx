import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center min-h-[80vh] border-b  muted-border p-8 lg:p-16">
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

      <div className="flex-1 flex flex-col justify-center space-y-6 lg:pr-12">
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
          <span className={cn(gradientText)}>Wear Your Craft</span> with Pride
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl">
          <Balancer ratio={-1.5} preferNative={false}>
            Ergonomic, secure, and dignified workwear designed for Africa's
            traders.
          </Balancer>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
          <Button asChild className="w-full sm:w-auto" variant="primary" size="standard">
            <Link href="#order">Order Now</Link>
          </Button>

          <Button
            asChild
            variant="primary-outline"
            size="standard"
            className="w-full sm:w-auto border muted-border"
          >
            <Link href="#partner">Partner With Us</Link>
          </Button>
        </div>
      </div>

      {/* Right side - Stacked Cards */}
      <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
        <div className="relative">
          {/* Left stack card */}
          <div className="absolute -left-16 top-20 w-96 h-60 bg-accent border muted-border rounded-2xl shadow-sm transform -rotate-45 overflow-hidden">
            <Image
              src="/trade-tech.png"
              alt="TradeTech Workwear"
              fill
              className="object-cover"
            />
          </div>

          {/* Right stack card */}
          {/* <div className="absolute -right-8 top-10 w-96 h-60 bg-accent border muted-border rounded-2xl shadow-sm transform rotate-12"></div> */}

          {/* Front main card */}
          <div className="relative w-72 h-[28rem] bg-accent rounded-2xl shadow-lg mx-auto overflow-hidden">
            <Image
              src="/trade-tech.png"
              alt="TradeTech Workwear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
