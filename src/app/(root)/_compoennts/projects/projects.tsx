import { PROJECTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

import ProjectCard from './project-card'
import GradientTextHeader from '../gradient-text-header'


const Projects = () => {
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

export default Projects
