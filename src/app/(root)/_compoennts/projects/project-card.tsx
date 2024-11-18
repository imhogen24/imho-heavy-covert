import { cn } from '@/lib/utils'
import { gradientText } from '../hero'
import { ProjectCardProps } from '@/lib/types'


const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className='flex flex-row w-full h-[785px] border-y border-[#555555] border-opacity-25'>
      <div className='flex-2 border-r border-[#555555] border-opacity-25 h-full w-1/3'>
      <h1 className={cn( "py-[54px] px-[54px] text-[32px] font-[family-name:var(--font-machina)]")}>{props.title}</h1>
      </div>
      <div className={cn( "flex flex-col flex-1 py-[54px] px-[54px] text-[20px] jsutify-between")}>
      <div className='flex flex-col gap-8'>
        <h1 className='text-muted-foreground'> <span className='text-white'>Consumer:</span> <br/>
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
