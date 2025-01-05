import { ProjectCardProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { gradientText } from '../hero/hero-text'
import { HeroVideoDialog } from '@/components/ui/video-dialogue'
import Image from 'next/image'

const ProjectCard = ({ idx, title, client, description, service, type, date, Video, image,width,height }: ProjectCardProps) => {
  const hasVideo = Video !== undefined

  if (hasVideo) {
    return (
      <div className="flex w-full h-full border-t muted-border flex-col lg:flex-row">
        {/* heading div - 1/3 width for video layout */}
        <div className="w-full lg:w-1/3 lg:flex-2">
          <h4 className="py-6 px-6 lg:py-14 lg:px-14 scroll-m-20 font-semibold tracking-tight text-2xl text-left">
            {title}
          </h4>
        </div>

        {/* content div - 2/3 width for video layout */}
        <div className="flex flex-col flex-1 gap-6 lg:gap-10 muted-border py-6 px-6 lg:py-14 lg:px-14 justify-between lg:border-t-0 lg:border-l">
          <div className="flex flex-col gap-6 lg:gap-8">
            <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
              <span className={cn(gradientText)}>{client}</span> {description}
            </p>

            <p className="leading-7 [&:not(:first-child)]  text-muted-foreground">
              <span className="text-white">Service Provided:</span> <br />
              {service}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
                <span className="text-white">Type:</span> <br />
                {type}
              </p>
              <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
                <span className="text-white">Date:</span> <br />
                {date}
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden bg-neutral-800">
            <HeroVideoDialog
                   className="dark:hidden block"
                   animationStyle="from-center"
                   videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                   thumbnailSrc="https://res.cloudinary.com/dstrel8mi/image/upload/v1736030615/Enterprise_CAD_Tag__owggrm.png"
                   thumbnailAlt="Hero Video"
                 />
                 <HeroVideoDialog
                   className="hidden dark:block"
                   animationStyle="from-center"
                   videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                   thumbnailSrc="https://res.cloudinary.com/dstrel8mi/image/upload/v1736030616/Enterprise_CAD_Tag--dark_s0ffky.png"
                   thumbnailAlt="Hero Video"
                 />
          </div>
        </div>
      </div>
    )
  }

  // Image-based layout for all other projects
  return (
    <div className={cn(
      "flex w-full h-full lg:border-y muted-border",
      "flex-col lg:flex-row",
      idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
    )}>


      {/* Content div - 1/2 width */}
      <div className={cn(
        "flex flex-col flex-1 gap-6 lg:gap-10 muted-border",
        "py-6 px-6 lg:py-14 lg:px-14",

        idx % 2 === 0 ? 'lg:border-r' : 'lg:border-l',
        "border-t lg:border-t-0"
      )}>
        <div className="flex flex-col gap-6 lg:gap-8">
          <h4 className="scroll-m-20 font-semibold tracking-tight text-2xl">
            {title}
          </h4>

          <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
            <span className={cn(gradientText)}>{client}</span> {description}
          </p>

          <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
            <span className="text-white">Service Provided:</span> <br />
            {service}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
              <span className="text-white">Type:</span> <br />
              {type}
            </p>
            <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
              <span className="text-white">Date:</span> <br />
              {date}
            </p>
          </div>
        </div>
      </div>

      {/* Image div - 1/2 width */}
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center items-center pb-10 lg:p-28">
        <div>
            <Image
            src={image || '/api/placeholder/800/450'}
            alt={title}
            height={height}
            width={width}
            className="mx-auto object-cover"
          />
        </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard
