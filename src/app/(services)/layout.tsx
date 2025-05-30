import { CrossPositinalIcon } from "@/lib/icons";
import Footer from "@/components/layout/footer/footer";
import { ServiceRoutes } from "@/components/layout/services/sub-routes";

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden relative top-[96px]  mx-[10px] md:mx-[11px] lg:mx-auto lg:max-w-[68rem] md:top-[98px] lg:top-[106px]">
      <ServiceRoutes />
      <div className="relative mx-[10px] md:mx-[11px] border muted-border mt-5 min-h-dvh">
        <CrossPositinalIcon className="hidden lg:block absolute h-8 w-8 -top-4 -left-4 stroke-black" />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default ServiceLayout;
