import { cn } from "@/lib/utils"
import { gradientText } from "./hero/hero-text";


interface TextProps{
  text: string;
}
const GradientTextHeader = (props: TextProps)=>{
  return(

      <div className=" flex flex-col items-center min-w-[446px] m-auto gap-[16px] py-[54px]">
          <h4 className={cn("text-center scroll-m-20 font-semibold tracking-tight text-2xl font-[family-name:var(--font-machina)]", gradientText)}>
            {props.text}
          </h4>
      </div>

  )
}

export default GradientTextHeader;
