import { PROJECTS } from '@/lib/constants'
import GradientTextHeader from '../gradient-text-header'
import ProjectCard from './project-card'
import { cn } from '@/lib/utils'

const projects = () => {
  return (
    <div className='border border-[#555555] border-opacity-25'>
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
