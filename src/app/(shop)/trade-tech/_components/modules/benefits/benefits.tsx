import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award, CloudRain, Quote, Shield, Users } from "lucide-react";

const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Ergonomic Design",
      description: "Distribute weight and reduce fatigue for all-day comfort",
    },
    {
      icon: Shield,
      title: "Secure Compartments",
      description: "Protect cash and phones with lockable, hidden storage",
    },
    {
      icon: CloudRain,
      title: "Weather-Resistant",
      description:
        "Durable against dust and rain, built for African conditions",
    },
    {
      icon: Award,
      title: "Professional Identity",
      description: "A dignified badge that commands respect for traders",
    },
  ];

  return (
    <div className="flex flex-row w-full h-full justify-between border-b muted-border">
      <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>

      <div className="w-full">
        {/* Header matching your typography */}
        <div className="text-center mb-16 px-8 lg:px-16 pt-8 lg:pt-16">
          <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-geistSans)] font-bold mb-4">
            Why Traders Choose{" "}
            <span className={cn(gradientText)}>Trading Gear</span>
          </h2>
        </div>

        {/* Benefits grid using grid-list design pattern */}
        <div className="overflow-hidden rounded-2xl bg-muted shadow-sm grid grid-cols-1 sm:grid-cols-2 sm:gap-0.5 space-y-0.5 sm:space-y-0 p-0.5 mb-16 mx-8 lg:mx-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={cn("rounded-xl border-0 bg-accent p-0")}
            >
              <CardContent className="p-6">
                <div>
                  <span className="inline-flex rounded-xl p-3 border muted-border bg-transparent">
                    <benefit.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-foreground"
                    />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial - clean border treatment */}
        <div className=" mx-8 lg:mx-16 mb-8 lg:mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6 opacity-30">
              <Quote className="w-6 h-6" />
            </div>
            <blockquote className="text-lg font-medium mb-6 max-w-2xl mx-auto">
              "Trading Gear makes me feel safer and more respected in my work."
            </blockquote>
            <cite className="text-muted-foreground text-sm">
              — Market Woman, Accra
            </cite>
          </div>
        </div>
      </div>

      <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
    </div>
  );
};

export default BenefitsSection;
