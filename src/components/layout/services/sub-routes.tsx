// import { AnimatedBackground } from "@/components/ui/animated-background";
// import { SERVICE_ROUTES } from "@/lib/constants";
// import { Button } from "../../ui/button";
// import { ServiceRoutesSelect } from "./sub-routes-select";
// import Link from "next/link";

// export function ServiceRoutes() {
//   return (
//     <>
//       <div className="p-1 md:hidden">
//         <ServiceRoutesSelect />
//       </div>

//       <div className="hidden md:block">
//         <AnimatedBackground
//           defaultValue=""
//           className=" rounded-lg dark:bg-neutral-800 bg-gray-200"
//           transition={{
//             ease: "easeInOut",
//             duration: 0.2,
//           }}
//         >
//           {SERVICE_ROUTES.map((item) => {
//             return (
//               <Button
//                 asChild
//                 key={item.idx}
//                 data-id={item.label}
//                 type="button"
//                 variant="ghost"
//                 aria-label={`${item.label} view`}
//                 className="transition-transform active:scale-[0.98] w-fit hover:bg-transparent dark:text-white text-gray-700 p-5"
//               >
//                 <Link href={item.href}>{item.label}</Link>
//               </Button>
//             );
//           })}
//         </AnimatedBackground>
//       </div>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES_LINKS } from "@/lib/constants";
import { ScrollableTabs } from "@/components/ui/scrollable-tabs";
import { cn } from "@/lib/utils";

export const ServiceRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="w-full px-2 py-1">
      <ScrollableTabs>
        {SERVICES_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors shrink-0",
                isActive
                  ? "bg-accent text-accent-foreground border muted-border"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
              )}
            >
              {link.title}
            </Link>
          );
        })}
      </ScrollableTabs>
    </div>
  );
};
