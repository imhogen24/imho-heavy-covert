"use client";

import { FeatureRealease } from "@/components/feature-release";
import Footer from "@/components/layout/footer/footer";
import { CrossPositinalIcon } from "@/lib/icons";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FeatureRealease />
      <div className="mt-[50px] mx-[10px] md:mx-[11px] max-w-[68rem] border muted-border lg:mx-auto relative top-[48px] md:top-[98px] lg:top-[106px] min-h-dvh">
        {/* making the top container relative makes the cross positional icon show so we keep it that way*/}
        <CrossPositinalIcon className="hidden lg:block absolute h-8 w-8 -top-4 -left-4 stroke-black" />
        {children}
        <Footer />
      </div>
    </>

  );
};

export default HomeLayout;
