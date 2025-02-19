import { HeroVideoDialog } from "@/components/ui/video-dialogue";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dstrel8mi/video/upload/v1737337135/lv_0_20241008153156_p4rdyp.mp4"
        thumbnailSrc="https://res.cloudinary.com/dstrel8mi/image/upload/v1735661003/Hero_Video_Thumbnail_e1cb2g.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dstrel8mi/video/upload/v1737337135/lv_0_20241008153156_p4rdyp.mp4"
        thumbnailSrc="https://res.cloudinary.com/dstrel8mi/image/upload/v1735660830/Hero_Video_Thumbnail--dark_t5a0ib.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
