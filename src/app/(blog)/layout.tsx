import Footer from "@/components/nav/footer";
import { ServiceRoutes } from "@/components/services/tabs";

const BlogLayout = ({ children }:{children: React.ReactNode}) => {
  return(
<div className="w-full relative top-[48px]  mx-[10px] md:mx-[11px] lg:mx-auto max-w-[68rem] md:top-[98px] lg:top-[106px]">
    <div className="relative mx-[10px] md:mx-[11px] max-w-[68rem] border-x border-t  muted-border mt-5 min-h-dvh">

      {children}
      <Footer/>
    </div>
    </div>
  );
};

export default BlogLayout;
