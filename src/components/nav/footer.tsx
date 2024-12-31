import GradientTextHeader from "@/app/(root)/_compoennts/gradient-text-header"
import TopSection from "@/app/(root)/_compoennts/top"
import { CrossPositinalIcon } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Icon, MapPinned, PhoneCall } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "./contact-form"
import { SOCIAL_ICONS } from "@/lib/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="relative flex flex-col border-t muted-border ">
        <CrossPositinalIcon className="hidden lg:block absolute h-8 w-8 -top-4 -left-4 stroke-black" />

       <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <section className="flex flex-col  gap-[16px]  lg:border-r muted-border ">
           <div className="flex flex-col md:grid grid-cols-2 md:place-items-center lg:place-items-start lg:flex lg:flex-col">
            <div className="flex flex-row md:flex-col lg:flex-row gap-[32px] p-[24px] md:p-[48px] ">
                <Image src="/logos/footer-logo.png" alt="logo" width={64} height={64}/>
                <span>
                    <h1 className="text-[20px] font-[family-name:var(--font-machina)]">Innovate Make and Have Ours</h1>
                    <p className="text-[20px] font-[family-name:var(--font-calligraffitti)]">Make it Real</p>
                </span>

            </div>

            <div className="px-[24px] md:px-[48px]">
                <p className="text-[16px] text-muted-foreground">Our vision is to Empower a sustainable and survivable future. By innovating transformational technologies and upskilling the next generation of innovators.
                </p>
            </div>
        </div>
            <div className="flex flex-col gap-[16px] border-t muted-border p-[24px] md:p-[48px]">
                <h1 className="text-[20px]">Reach Us</h1>
                <div className="flex flex-row gap-8 items-center text-muted-foreground">
                    <MapPinned />
                   <span>KBI KNUST Commercial Area <br/> Kumasi, Ghana</span>
                </div>

                <div className="flex flex-row gap-8 items-center text-muted-foreground">
                    <PhoneCall />
                   <span>+233 (0) 50 165 4825 <br/> +233 (0) 55 381 2626</span>
                </div>
            </div>
            <div className="h-full hidden gap-2 lg:flex flex-col justify-center items-center border-t muted-border p-[24px] md:p-[48px]">
                <div className="inline-flex gap-2">
                     {SOCIAL_ICONS.map(({ idx, icon: Icon, href }) => (
                          <Link href={href} className="" key={idx}>
                             {Icon && <Icon />} {/* We check if Icon exists before rendering */}
                         </Link>
     ))}
                </div>

                <p className="text-muted-foreground">@2025 IMHO. All Rights Reserved</p>
            </div>

        </section>

        <section className="flex flex-col justify-center p-[24px] md:p-[48px] gap-[16px] border-t muted-border ">
        <h1 className="font-[family-name:var(--font-machina)] text-[24px]">Talk to <span className="text-[#EF7D00]     ">IMHO</span></h1>
                <ContactForm/>
        </section>

       </div>
       <div className="flex justify-center items-center border-t muted-border">
        <div className="hidden lg:block w-full">
            <TopSection/>
        </div>
        <div className="h-full lg:hidden gap-2 flex-col justify-center items-center border-t muted-border p-[24px] md:p-[48px]">
                <div className="flex justify-center items-center my-2 gap-2">
                     {SOCIAL_ICONS.map(({ idx, icon: Icon, href }) => (
                          <Link href={href} className="" key={idx}>
                             {Icon && <Icon />} {/* We check if Icon exists before rendering */}
                         </Link>
     ))}
                </div>

                <p className="text-muted-foreground">@2025 IMHO. All Rights Reserved</p>
            </div>

       </div>
    </div>
  )
}

export default Footer
