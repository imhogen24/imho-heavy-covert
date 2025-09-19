import { ScrollProgress } from "@/components/magicui/scroll-progress";
import ComingSoonHero from "./_components/coming-soon-hero";
import SkeletonSections from "./_components/skeleton-sections";

export default function LearnMorePage() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <ScrollProgress className="top-[72px]" />
      <ComingSoonHero />
      <SkeletonSections />
    </div>
  );
}