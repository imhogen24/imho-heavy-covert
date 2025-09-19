import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const ComingSoonHero = () => {
  return (
    <div className="relative min-h-[90vh] p-8 lg:p-16">
      {/* Hero content centered */}
      <div className="max-w-4xl mx-auto text-center space-y-8 pt-16">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-fit px-4 py-2 text-sm font-semibold rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            Product Showcase
          </span>
        </div>

        <h1
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-machina)] leading-tight"
          )}
        >
          <span className={cn(gradientText)}>Trading Gear</span>
          <br />
          Deep Dive
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          <Balancer>
            Explore the complete story behind Africa's first purpose-built
            trading gear. Images, specifications, and detailed insights coming
            soon.
          </Balancer>
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Q2 2025</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          <span>Product Gallery & Technical Details</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            asChild
            variant="primary-outline"
            size="standard"
            className="border muted-border"
          >
            <Link href="/trade-tech">
              <ArrowLeft className="w-4 h-4" />
              Back to Overview
            </Link>
          </Button>

          <Button asChild variant="primary" size="standard">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonHero;
