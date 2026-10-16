import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { UserIcon } from "@phosphor-icons/react/dist/ssr/User";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";

type Member = { name: string; role: string; image?: string };

// A member without an `image` falls back to the placeholder avatar, so someone
// can be listed before their photo is shot.
const MEMBERS: Member[] = [
  {
    name: "Daniel Braimah Elikem",
    role: "Corporate Lead",
    image: "/team/daniel.jpg",
  },
  {
    name: "Clifford Fiannaa",
    role: "Operations Lead",
    image: "/team/clifford.png",
  },
  {
    name: "Awe David",
    role: "Technical and Field Lead",
    image: "/team/awe.jpeg",
  },
  {
    name: "Kennedy Anyidoho",
    role: "Software Systems Lead",
    image: "/team/kennedy.JPG",
  },
  {
    name: "Abdul-Baki Sama",
    role: "Modelling and Simulation Associate",
    image: "/team/baki.jpeg",
  },
  {
    name: "Kelvin Malize",
    role: "Engineering Design Associate",
    image: "/team/kelvin.jpeg",
  },
  {
    name: "Nii Teiko",
    role: "Engineering Design Associate",
    image: "/team/nii.jpeg",
  },
];

export function Team({ className }: { className?: string }) {
  return (
    <section
      id="team"
      aria-label="The Team"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            The Team
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance">
            People are Behind the Capability We Are Building
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            A growing community of engineers, designers, educators, researchers,
            and makers.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-px bg-border dark:bg-muted sm:grid-cols-4">
        {MEMBERS.map((m, i) => (
          <li key={i} className="flex flex-col bg-background">
            <div className="relative aspect-square w-full overflow-hidden bg-accent/60">
              {m.image ? (
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex size-full items-center justify-center text-muted-foreground/30"
                >
                  <UserIcon size={56} weight="thin" />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-0.5 p-3 md:p-4">
              <p className="text-sm font-semibold leading-snug">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.role}</p>
            </div>
          </li>
        ))}

        {/* Closing cell — invitation to join. It takes a single cell so the 7
            portraits plus this tile fill both the 2- and 4-column grids with no
            dead space. Adding or removing a member breaks that: keep the
            portrait count odd, or give this cell a span that closes the row. */}
        <li className="bg-background">
          <Link
            href="/services/design-forge"
            className="group flex size-full min-h-48 flex-col justify-between gap-6 p-5 transition-colors hover:bg-accent"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              The community is growing. Build with us.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              Join the Design Forge
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:text-[#EF7D00]"
              />
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
