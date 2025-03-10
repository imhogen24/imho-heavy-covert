import { HeroVideoDialog } from "@/components/ui/video-dialogue";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dstrel8mi/video/upload/v1737337135/lv_0_20241008153156_p4rdyp.mp4"
        thumbnailSrc="https://res.cloudinary.com/dstrel8mi/image/upload/v1741607713/Hero_Video_Thumbnail_e1cb2g.webp"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dstrel8mi/video/upload/v1737337135/lv_0_20241008153156_p4rdyp.mp4"
        thumbnailSrc="https://res.cloudinary.com/dstrel8mi/image/upload/v1741607975/Hero_Video_Thumbnail--dark_t5a0ib.webp"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
