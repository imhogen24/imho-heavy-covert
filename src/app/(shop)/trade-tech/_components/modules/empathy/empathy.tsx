import { Button } from "@/components/ui/button";
import { PackageCheck, Shirt, Sparkles } from "lucide-react";
import Link from "next/link";
import { ContactCTALink } from "../../ui/contact-cta-link";

const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const EmpathySection = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between ">
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-b muted-border">
        {/* Header Section */}
        <div className="w-full lg:w-1/3 flex items-start justify-center border-b lg:border-b-0 lg:border-r muted-border">
          <div className="max-w-md px-8 lg:px-10 py-12 lg:mt-36">
            <h1 className="text-2xl lg:text-4xl font-[family-name:var(--font-geistSans)] font-bold leading-tight">
              We Understand Your
              <span className={gradientText}> Struggles</span>.
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 px-8 lg:px-16 py-12 lg:py-0 space-y-12 lg:space-y-16 lg:mt-36">
          {/* We Understand Your Struggles */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-foreground leading-relaxed">
              We know how exhausting it is to carry money in plastic bags, loose
              aprons, risk theft daily, and finish every day with back pain.
            </p>
            <p className="text-lg font-semibold text-muted-foreground">
              IMHO has designed practical solutions with market traders, built
              locally in Ghana to empower the informal economy.
            </p>
          </div>

          {/* How to Get Started */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                How to Get Started
              </span>
            </div>
            <h3 className="text-lg font-semibold">
              Getting Started is Simple.
            </h3>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  1
                </div>
                <div>
                  <p className="text-sm">
                    Choose your plan — retail or installment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  2
                </div>
                <div>
                  <p className="text-sm">
                    Order Trading Gear — delivered through agents or partners.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  3
                </div>
                <div>
                  <p className="text-sm">
                    Work with pride — trade with safety, efficiency, and
                    dignity.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="w-fit" variant="primary" size="standard">
              <ContactCTALink href="#contact">
                <PackageCheck className=" w-4 h-4" />
                Order Now
              </ContactCTALink>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full border-b muted-border ">
        <div className="p-8 lg:p-16">
          <div className="inline-flex mb-6 gap-2 text-center ">
            <Shirt className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              More Than Just Clothing
            </span>
          </div>
          <p className="text-lg font-semibold text-muted-foreground leading-relaxed">
            <span className="text-foreground">
              Trading Gear isn’t just clothing
            </span>{" "}
            — it’s a tool. Designed in Kumasi with traders, for traders, it
            combines ergonomic design, security, and durability to protect your
            money, reduce strain, and give you the dignity of a professional
            identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmpathySection;
