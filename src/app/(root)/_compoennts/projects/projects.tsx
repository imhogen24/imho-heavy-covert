import { PROJECTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

import ProjectCard from './project-card'
import GradientTextHeader from '../gradient-text-header'


const Projects = () => {
  return (
    <div className='w-full h-full'>
      <GradientTextHeader text={"Some Projects"}/>

     {PROJECTS.map((item, index)=>(
      <div  key={item.idx}>
        <ProjectCard
           {...item}
          idx={index}/>
      </div>
     ))}

    </div>
  )
}

export default Projects
