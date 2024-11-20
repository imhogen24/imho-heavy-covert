import GradientTextHeader from "../gradient-text-header"


const TheTeam = () => {
  return (
    <div className="bg-background w-full h-full border-x border-[#555555] border-opacity-25 ">
      <div className="border-b border-[#555555] border-opacity-25 ">
      <GradientTextHeader text="Partner with Our Committed Team"/>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
       <div className="w-2/5 flex flex-col border-r border-[#555555] border-opacity-25">
        <h1 className="text-[28px] font-[family-name:var(--font-machina)] py-[54px] px-[54px]">Creating exceptional products requires a high-performance team. </h1>
        <p className="text-[20px] text-muted-foreground px-[54px]">Our vision is to Empower a sustainable and survivable future. By innovating transformational techologies and upskilling the next generation for a stronger industrial value chain.</p>

       </div>
       <div className='w-3/5 h-full p-[54px] '>
             <div className="bg-neutral-600 aspect-video">

             </div>
      </div>
      </div>

    </div>
  )
}

export default TheTeam
