import Footer from "@/components/layout/footer/footer";
import { CrossPositinalIcon } from "@/lib/icons";
import { SectionSeparator } from "@/components/ui/section-separator";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[50px] mx-[10px] md:mx-[11px] max-w-[68rem] border muted-border lg:mx-auto relative top-[48px] md:top-[98px] lg:top-[106px] min-h-dvh">
      <CrossPositinalIcon className="hidden lg:block absolute h-8 w-8 -top-4 -left-4 stroke-black" />
      {children}
      <SectionSeparator />
      <Footer />
    </div>
  );
};

export default AboutLayout;
