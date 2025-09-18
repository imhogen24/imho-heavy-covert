import { Quote, Target, TrendingUp } from "lucide-react";

const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const ResultsSection = () => {
  return (
    <div className="w-full relative overflow-hidden ">
      <div className="relative z-10 max-w-7xl mx-auto border-t muted-border ">
        {/* Header */}
        <div className="text-center p-8 lg:p-16 bg-muted/30">
          <div className="flex items-center justify-center gap-2 mb-6">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              Impact & Results
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-geistSans)] font-bold leading-tight">
            See the <span className={gradientText}>Results</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="w-full border-t muted-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Impact Goal */}
            <div className="p-8 border-r muted-border">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Impact Goal
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">
                  20,000 traders
                </span>{" "}
                equipped in{" "}
                <span className="text-foreground font-semibold">24 months</span>
                , starting in Ghana and expanding across ECOWAS.
              </p>
            </div>

            {/* Right Column - Quote */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Quote className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Testimonial
                </span>
              </div>
              <blockquote className="text-xl text-foreground leading-relaxed mb-4">
                "I no longer worry about theft, and I get home less tired."
              </blockquote>
              <cite className="text-muted-foreground text-sm not-italic">
                — Trader, Kumasi
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
