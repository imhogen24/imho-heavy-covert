import { cn } from "@/lib/utils";

const BlogLayout=({children}:{children: React.ReactNode})=>{


    return (
        <div className={cn("lg:max-w-[1200.5px]")}>
            {children}
        </div>
    )
}

export default BlogLayout;
