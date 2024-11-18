import GradientTextHeader from '../gradient-text-header'
import ProjectCard from './project-card'

const projects = () => {
  return (
    <div className='border border-[#555555] border-opacity-25'>
      <GradientTextHeader text={"Some Projects"}/>
      <ProjectCard/>
    </div>
  )
}

export default projects
