import { WORK_WITH_US } from '@/lib/constants'
import GradientTextHeader from '../gradient-text-header'
import WorkCard from './work-card'

const WorkWithUs = () => {
  return (
    <div className='flex justify-center items-center flex-col'>

      <GradientTextHeader text="Work With Us"/>

      <div className='flex flex-row w-full h-full justify-between border-t muted-border'>
        <div className='hidden relative lg:grid grid-cols-1 w-28 border-r muted-border min-h-full'></div>
             <div className='w-full h-full grid grid-cols-1 md:grid-cols-2'>
             {WORK_WITH_US.map((item, index) => (
               <WorkCard key={index} {...item} />
             ))}
             </div>
        <div className='hidden relative lg:grid grid-cols-1 w-28 border-l muted-border min-h-full'></div>
      </div>

    </div>
  )
}

export default WorkWithUs
