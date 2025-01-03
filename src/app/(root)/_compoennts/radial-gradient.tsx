import { cn } from "@/lib/utils";

const RadialGradient =(props:{bg: string; dimension:string})=>{
  return (
    <div className="absolute pointer-events-none">
        <div
          className={cn("rounded-full",props.bg)}
          style={{
            width: `${props.dimension}`,
            height: `${props.dimension}`,
            opacity: 0.15,
            filter: 'blur(100px)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        </div>
  )
}

export default RadialGradient;
