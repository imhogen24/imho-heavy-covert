'use client';
import { useResponsiveGrid } from "@/hooks/use-media-query";

const HomeLayout = ({ children }:{children: React.ReactNode}) => {
  const { totalGridItems } = useResponsiveGrid();

  return(
    <div>
      <div className="hidden lg:grid grid-cols-4 md:grid-cols-7 lg:grid-cols-12 max-w-[1200px] border-r border-[#555555] border-opacity-25">
          {
            [...Array(totalGridItems)].map((_, index) => (
              <div key={index} className="relative aspect-square border-l border-b border-[#555555] border-opacity-40">

              </div>
            ))
          }
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;
