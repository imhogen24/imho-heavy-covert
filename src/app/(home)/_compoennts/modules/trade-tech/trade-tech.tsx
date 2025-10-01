import { Button } from "@/components/ui/button";

export function TradeTech() {
  return (
    <section className="w-full relative overflow-hidden border-t muted-border">
      <div className="relative z-10 max-w-7xl mx-auto p-8 lg:p-16 bg-muted/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-geistSans)] font-bold leading-tight mb-6">
              Introducing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]">
                Trade Tech Gear
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ergonomic, secure, and dignified workwear designed for Africa's
              traders. Built for comfort, safety, and professional excellence.
            </p>
          </div>
          <div className="flex justify-start lg:justify-center items-center">
            <Button asChild variant="primary-outline" size="standard">
              <a href="/trade-tech">Learn more</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
