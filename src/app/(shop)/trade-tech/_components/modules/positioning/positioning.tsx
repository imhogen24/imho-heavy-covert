import { Button } from "@/components/ui/button";
import {
  BadgeCent,
  Building,
  CreditCard,
  Plus,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

interface PricingOption {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

const pricingOptions: PricingOption[] = [
  {
    icon: BadgeCent,
    title: "Retail Price",
    description: "GHS 330–380.",
  },
  {
    icon: CreditCard,
    title: "Flexible Pay-As-You-Wear",
    description: "Installments via mobile money.",
  },
  {
    icon: Building,
    title: "Bulk Discounts",
    description: "For NGOs, trade associations, and CSR sponsors.",
    isLast: true,
  },
];

const PricingCard = ({
  icon: Icon,
  title,
  description,
  isLast,
}: PricingOption) => (
  <div
    className={`group relative p-8 hover:bg-muted/50 transition-all duration-300 ${!isLast ? "border-b lg:border-b-0 lg:border-r muted-border" : ""}`}
  >
    <div className="flex items-start justify-between mb-6">
      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const PositioningSection = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto p-8 lg:p-16 bg-muted/50">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <WalletCards className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Pricing & Access
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-[family-name:var(--font-geistSans)] font-bold leading-tight">
              <span className={gradientText}>Affordable</span> and flexible.
            </h1>
          </div>
          <div className="flex justify-start lg:justify-center items-center">
            <Button asChild className="w-fit" variant="primary" size="standard">
              <Link href="#order">
                <BadgeCent className=" w-4 h-4" />
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Pricing Options Grid - Full Width */}
      <div className="w-full mb-16 border-t border-b muted-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default PositioningSection;
