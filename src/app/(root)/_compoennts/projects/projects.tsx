import { PROJECTS } from '@/lib/data'
import { cn } from '@/lib/utils'
import GradientTextHeader from '../gradient-text-header'
import ProjectCard from './project-card'

const projects = () => {
  return (
    <div className='w-full h-full bg-background border border-[#555555] border-opacity-25'>
      <GradientTextHeader text={"Some Projects"}/>

     {PROJECTS.map((item, index)=>(
      <div className={cn()}>
        <ProjectCard
           key={item.idx}
           {...item}
          idx={index}/>
      </div>
     ))}

    </div>
  )
}

export default projects
