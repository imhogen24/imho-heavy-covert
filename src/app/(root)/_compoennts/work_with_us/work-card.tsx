import { WorkWithUsProps } from "@/lib/types"
import { cn } from "@/lib/utils"


const WorkCard = (props: WorkWithUsProps) => {
  return (
    <div  className={cn( "flex flex-col flex-1 gap-10 border-b  border-[#555555] border-opacity-25 py-[54px] px-[54px] text-[20px]  justify-between",
      (props.idx % 2 === 0) && 'border-r'
)}>
      <div className="flex flex-row gap-10">
       <div className="border border-[#555555] border-opacity-25 w-fit h-fit p-2 rounded-xl">
        <props.icon className="w-12 h-12"/>
      </div>
      <h1 className={cn("text-[32px] font-[family-name:var(--font-machina)]")}>{props.title}</h1>
    </div>
      <div className="flex flex-col gap-5">

        <p className={cn( "text-[20px]  justify-between")}>

      {props.description}</p>
        <p>{props.footer}</p>
      </div>


    </div>
  )
}

export default WorkCard
