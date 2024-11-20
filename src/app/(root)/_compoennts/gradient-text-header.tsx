import { cn } from "@/lib/utils"
import { gradientText } from "./hero"

interface TextProps{
  text: string;
}
const GradientTextHeader = (props: TextProps)=>{
  return(

      <div className=" flex flex-col items-center min-w-[446px] m-auto gap-[16px] py-[54px]">
          <h2 className={cn("text-center text-[32px] font-[family-name:var(--font-machina)]", gradientText)}>
            {props.text}
          </h2>
      </div>

  )
}

export default GradientTextHeader;
