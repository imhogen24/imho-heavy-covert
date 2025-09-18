import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const BuyersKitSection = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto p-8 lg:p-16 bg-muted/50">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Resources
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-[family-name:var(--font-geistSans)] font-bold leading-tight mb-6">
              Free <span className={gradientText}>Buyer's Kit</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Specs, use-cases, financing options, and ROI benefits.
            </p>
          </div>
          <div className="flex justify-start lg:justify-center items-center">
            <Button asChild className="w-fit" variant="primary" size="standard">
              <Link href="#download">
                <Download className="w-4 h-4" />
                Download the Kit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersKitSection;