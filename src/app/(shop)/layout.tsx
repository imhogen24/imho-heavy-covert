import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Footer from "@/components/layout/footer/footer";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-[50px] mx-[10px] md:mx-[11px] max-w-[68rem] border muted-border lg:mx-auto relative top-[48px] md:top-[98px] lg:top-[106px] min-h-dvh">
      <ScrollProgress className="top-[72px]" />
      {children}
      <Footer />
    </div>
  );
}
