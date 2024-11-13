import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";


export const DesktopNav = () => {
    return (
        <nav className="z-50 w-full h-[100px] px-[10px] py-[5px] inset-0 flex justify-center items-end">
            <div className="flex justify-between items-center w-[800px] h-[64px]  bg-gradient-to-r from-white from-10% via-black via-90% to-white mx-auto rounded-full px-[32px] py-[16px]"
            ><div className="w-fit">
                <Link href="/">
                    <Image src="/logos/golden-eye.png" alt="logo" width={100} height={32} />
                </Link>

            </div>
            <div className="inline-flex gap-5">{NAV_ITEMS.map((item, id)=>(
                <Link href={item.href} key={id}>
                    <span className="text-white">{item.label}</span>
                </Link>
            ))}</div>
            <div className="">3</div>

            </div>
        </nav>
    );
    }
