import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative flex w-full items-center justify-center p-6 sm:p-8 lg:p-10">
      <div
        aria-hidden
        className="absolute h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,_#FEB667_0%,_#EF7D00_45%,_transparent_72%)] opacity-15 blur-[70px] sm:h-[320px] sm:w-[320px] dark:opacity-35 lg:h-[380px] lg:w-[380px]"
      />
      <Image
        src="/hero.webp"
        alt="IMHO GEN engineering systems"
        width={640}
        height={1070}
        priority
        className="relative z-10 h-[340px] w-auto object-contain sm:h-[400px] lg:h-[480px]"
      />
    </div>
  );
};

export default HeroImage;
