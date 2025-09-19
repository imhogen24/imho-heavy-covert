import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  HandHeart,
  Heart,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { ContactCTALink } from "../../ui/contact-cta-link";

const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]";

const AboutSection = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto border-t muted-border">
        <div className="text-center p-8 lg:p-16 bg-muted/30">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              About IMHO TradeTech
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-geistSans)] font-bold leading-tight mb-6">
            Designing Tools for Africa's{" "}
            <em className="text-foreground not-italic font-black">
              Informal Economy
            </em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            At IMHO, we create human-centered technologies that enhance
            productivity, safety, and dignity for traders and workers across
            Africa.
          </p>
        </div>
      </div>

      {/* Our Edge Section */}
      <div className="w-full border-t muted-border">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 lg:p-12 text-center border-b muted-border">
            <h3 className="text-2xl font-[family-name:var(--font-geistSans)] font-bold text-foreground">
              Our Edge:
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            <div className="p-8 border-b lg:border-b-0 lg:border-r muted-border group hover:bg-muted/20 transition-colors">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground block mb-2">
                Co-created
              </span>
              <p className="text-foreground font-medium">with traders.</p>
            </div>
            <div className="p-8 border-b lg:border-b-0 lg:border-r muted-border group hover:bg-muted/20 transition-colors">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground block mb-2">
                Built in Ghana
              </span>
              <p className="text-foreground font-medium">with local talent.</p>
            </div>
            <div className="p-8 group hover:bg-muted/20 transition-colors">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HandHeart className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground block mb-2">
                Distributed & Affordable
              </span>
              <p className="text-foreground font-medium">
                through agents and partners, via inclusive financing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flagship Product Section */}
      <div className="w-full border-t muted-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-8 border-b lg:border-b-0 lg:border-r muted-border">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Flagship Product
              </span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Trading Gear
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The first purpose-built wearable for Africa's traders.
            </p>
          </div>
          <div className="p-8 flex justify-start lg:justify-center items-center">
            <Button asChild className="w-fit" variant="primary" size="standard">
              <Link href="/trade-tech/learn-more">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Movement Section */}
      <div className="w-full border-t muted-border">
        <div className="p-8 lg:p-16 text-center bg-muted/30">
          <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-geistSans)] font-bold leading-tight mb-6">
            From One Product to a{" "}
            <span className="relative">
              Movement
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground"></div>
            </span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            IMHO TradeTech is building a portfolio of innovations: smarter
            trader tools, improved stalls, and financial integration. Starting
            in Ghana, scaling to Africa.
          </p>
        </div>
      </div>

      {/* Join the Movement Section */}
      <div className="w-full border-t muted-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="p-8 border-b lg:border-b-0 lg:border-r muted-border text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  For Traders
                </span>
              </div>
              <Button
                asChild
                className="w-fit px-6 py-3"
                variant="outline"
                size="standard"
              >
                <ContactCTALink href="#contact">Order Now</ContactCTALink>
              </Button>
            </div>
            <div className="p-8 border-b lg:border-b-0 lg:border-r muted-border text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  For Institutions
                </span>
              </div>
              <Button
                asChild
                className="w-fit px-6 py-3"
                variant="outline"
                size="standard"
              >
                <ContactCTALink href="#contact">Partner With Us</ContactCTALink>
              </Button>
            </div>
            <div className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  For Investors
                </span>
              </div>
              <Button
                asChild
                className="w-fit px-6 py-3"
                variant="outline"
                size="standard"
              >
                <ContactCTALink href="#contact">Invest to Scale</ContactCTALink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
