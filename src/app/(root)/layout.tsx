'use client';

import { CrossPositinalIcon } from "@/lib/icons";

const HomeLayout = ({ children }:{children: React.ReactNode}) => {
  return(

    <div className=" max-w-screen mx-[10px] md:mx-[11px] lg:max-w-[1200.5px] border border-muted lg:mx-auto relative top-[48px] md:top-[98px] lg:top-[106px] min-h-dvh">
        {/* making the top container relative makes the cross positional icon show so we keep it that way*/}
        <CrossPositinalIcon className="hidden lg:block absolute h-6 w-6 -top-3 -left-3" />
      {children}
    </div>
  );
};

export default HomeLayout;
