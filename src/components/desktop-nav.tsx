import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";


 const DesktopNav = () => {
    return (
        <nav className="hidden fixed top-0 z-50 w-full h-[100px] px-[10px] py-[5px] inset-0 lg:flex justify-center items-end">
            <div className="flex justify-between items-center w-[800px] h-[64px]  bg-gradient-to-r from-[#09090B] from-10% via-[#2D2D30] via-50% to-[#09090B] mx-auto rounded-full px-[32px] py-[16px]"
            ><div className="w-fit">
                <Link href="/">
                    <Image src="/logos/golden-eye.png" alt="logo" width={100} height={32} />
                </Link>

            </div>
            <div className="inline-flex gap-5">{NAV_ITEMS.map((item, id)=>(
                <Link href={item.href} key={id}>
                    <span className="text-muted-foreground hover:text-secondary-foreground">{item.label}</span>
                </Link>
            ))}</div>
            <div className="">
              <Button className="rounded-full text-secondary-foreground" size={"sm"}>
                Contact
              </Button>
              </div>

            </div>
        </nav>
    );
    }
export default DesktopNav;
