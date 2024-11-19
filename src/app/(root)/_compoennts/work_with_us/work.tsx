import React from 'react'
import GradientTextHeader from '../gradient-text-header'
import WorkCard from './work-card'
import { WORK_WITH_US } from '@/lib/constants'
import RadialGradient from '../radial-gradient'

const WorkWithUs = () => {
  return (
    <div className='flex justify-center items-center flex-col border-x border-[#555555] border-opacity-25'>

      <GradientTextHeader text="Work With Us"/>
      <div className='border-t border-[#555555] border-opacity-25 grid grid-cols-1 md:grid-cols-2'>
      {WORK_WITH_US.map((item, index) => (
        <WorkCard key={index} {...item} />
      ))}
      </div>
      <RadialGradient bg="bg-[#EF7D00]" dimension='600px'/>
    </div>
  )
}

export default WorkWithUs
