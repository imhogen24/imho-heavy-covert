import { ProjectCardProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { gradientText } from '../hero'


const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className={cn(" bg-background flex w-full h-full border-y border-[#555555] border-opacity-25",
                   (props.idx % 2 === 0) ?
                    'flex-row'
                    :'flex-row-reverse')}>

      {/* heading div */}
      <div className='flex-2  h-full w-1/3'>
      <h1 className={cn( "py-[54px] px-[54px] text-[32px] font-[family-name:var(--font-machina)]",
                        (props.idx % 2 === 0) ?
                        'text-left'
                        :'text-right'
      )}>
        {props.title}
      </h1>
      </div>

      {/* descriptive div */}
      <div className={cn( "flex flex-col flex-1 gap-10  border-[#555555] border-opacity-25 py-[54px] px-[54px] text-[20px]  justify-between",
                    (props.idx % 2 === 0) ?
                      'border-l'
                      :'border-r'
      )}>
         <div className='flex flex-col gap-8'>
        <h1 className='text-muted-foreground'>
       <span className={cn(gradientText)}>{props.customer}</span> {props.description}</h1>

       <h1 className='text-muted-foreground'>
       <span className='text-white'>Service Provided:</span> <br/>
        {props.service}</h1>

        <span className='w-full inline-flex gap-10'>
        <h1 className='text-muted-foreground'>
       <span className='text-white'>Type:</span> <br/>
        {props.type}</h1>
        <h1 className='text-muted-foreground'>
       <span className='text-white'>Date:</span> <br/>
        {props.date}</h1>

        </span>
       </div>
      <div className='bg-neutral-600 aspect-video'>

      </div>
      </div>

    </div>
  )
}

export default ProjectCard
