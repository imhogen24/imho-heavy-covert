
import Link from "next/link"

const ServiceHero = ()=>{
    return(
        <div className="absolute p-5 lg:p-10 space-y-2 md:space-y-5">
          <div className="flex flex-col md:flex-row lg:items-center gap-2 mb-3">
            <span className="w-fit  my-auto px-3 md:py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Beta
            </span>
            <span className="text-xs text-muted-foreground">
              We're currently in beta, kinldy
              <Link
                className="text-blue-400 underline"
                target="_blank"
                href={
                  "https://github.com/imhogen24/imho-heavy-covert/issues/new?template=Blank+issue"
                }
              >
                {" "}
                report
              </Link>
              {" "}any issues
            </span>
          </div>

          <h1 className="text-lg md:text-3xl font-bold">
            Experience Seamless Services
          </h1>
          <h1 className="text-xs md:text-base max-w-xl text-muted-foreground">
            Skip the meeting scheduling hassle. Our forms make communication
            effortless and organized.
          </h1>
        </div>
    )

}

export default ServiceHero;