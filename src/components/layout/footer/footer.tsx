import { CrossPositinalIcon } from "@/lib/icons";
import { Mail, MapPinned, PhoneCall } from "lucide-react";
import Image from "next/image";
import { SOCIAL_ICONS } from "@/lib/constants";
import Link from "next/link";
import { FileForm } from "./contact-form";
import { ConsentDialogLink } from "@c15t/nextjs/components/consent-dialog-link";
import { Button } from "@/components/ui/button";
import { FooterThemeToggle } from "@/components/theme/footer-theme-toggle";

const Footer = () => {
  return (
    <div className="relative flex flex-col border-t muted-border" id="contact">
      <CrossPositinalIcon className="hidden lg:block absolute h-8 w-8 -top-4 -left-4 stroke-black" />

      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <section className="flex flex-col  gap-[16px]  lg:border-r muted-border ">
          <div className="flex flex-col md:grid grid-cols-2 md:place-items-center lg:place-items-start lg:flex lg:flex-col">
            <div className="flex flex-row md:flex-col lg:flex-row gap-[32px] p-[24px] md:p-[48px] ">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/logos/footer-logo.png"
                  alt="logo"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 64px, 64px"
                />
              </div>
              <span>
                <h1 className="text-[20px] font-[family-name:var(--font-machina)]">
                  IMHOGEN LTD
                </h1>
                <p className="text-[20px] font-[family-name:var(--font-calligraffitti)]">
                  Engineering Ideas Into Impact
                </p>
                <p className="text-[16px] text-muted-foreground">
                  Designing Solutions. Building Skills. Powering Industry.
                </p>
              </span>
            </div>

            <div className="px-[24px] md:px-[48px]">
              <p className="text-[16px] text-muted-foreground">
                We build engineering design-and-make capability for Africa;
                designing solutions, building skills, and supporting the
                development of technologies that respond to real industrial
                needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] border-t muted-border p-[24px] md:p-[48px]">
            <h1 className="text-[20px]">Reach Us</h1>
            <div className="flex flex-row gap-8 items-center text-muted-foreground">
              <MapPinned />
              <span>
                KBI, KNUST Commercial Area <br /> Kumasi, Ghana
              </span>
            </div>

            <div className="flex flex-row gap-8 items-center text-muted-foreground">
              <PhoneCall />
              <span>
                +233 (0) 50 165 4825 <br /> +233 (0) 55 381 2626
              </span>
            </div>

            <div className="flex flex-row gap-8 items-center text-muted-foreground">
              <Mail />
              <span>admin@imhogen.com</span>
            </div>
          </div>
          <div className="h-full hidden gap-2 lg:flex flex-col justify-center items-center border-t muted-border p-[24px] md:p-[48px]">
            <div className="inline-flex gap-2">
              {SOCIAL_ICONS.map(({ idx, icon: Icon, href }) => (
                <Link href={href} className="" key={idx}>
                  {Icon && <Icon />}{" "}
                  {/* We check if Icon exists before rendering */}
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="text-muted-foreground">
                © 2026 IMHOGEN LTD. All Rights Reserved.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  variant="link"
                  size="standard"
                  className="text-xs text-muted-foreground"
                >
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </Button>
                <span className="text-xs text-muted-foreground">|</span>
                <Button
                  asChild
                  variant="link"
                  size="standard"
                  className="text-xs text-muted-foreground"
                >
                  <Link href="/terms-of-use">Terms of Use</Link>
                </Button>
                <span className="text-xs text-muted-foreground">|</span>
                <ConsentDialogLink asChild>
                  <Button
                    variant="link"
                    size="standard"
                    className="text-xs text-muted-foreground"
                  >
                    Cookie Preferences
                  </Button>
                </ConsentDialogLink>
              </div>
            </div>
          </div>

          <div className="mt-auto hidden lg:block">
            <FooterThemeToggle />
          </div>
        </section>

        <section className="flex flex-col justify-center p-[24px] md:p-[48px] gap-[16px]">
          <h1 className="font-[family-name:var(--font-machina)] text-[24px]">
            LET&apos;S BUILD{" "}
            <span className="text-[#EF7D00]">WHAT MATTERS.</span>
          </h1>
          <p className="text-[16px] text-muted-foreground">
            Have a problem worth solving, an idea worth building, or a vision
            for what industry could become? Let&apos;s work on it together.
          </p>
          <FileForm />
        </section>
      </div>
      <div className="flex flex-col border-t muted-border">
        <div className="hidden lg:block w-full"></div>
        <div className="h-full lg:hidden flex gap-2 flex-col justify-center items-center border-t muted-border p-[24px] md:p-[48px]">
          <div className="flex justify-center items-center my-2 gap-2">
            {SOCIAL_ICONS.map(({ idx, icon: Icon, href }) => (
              <Link href={href} className="" key={idx}>
                {Icon && <Icon />}{" "}
                {/* We check if Icon exists before rendering */}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground">
              © 2026 IMHOGEN LTD. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="link"
                size="standard"
                className="text-xs text-muted-foreground"
              >
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
              <span className="text-xs text-muted-foreground">|</span>
              <Button
                asChild
                variant="link"
                size="standard"
                className="text-xs text-muted-foreground"
              >
                <Link href="/terms-of-use">Terms of Use</Link>
              </Button>
              <span className="text-xs text-muted-foreground">|</span>
              <ConsentDialogLink asChild>
                <Button
                  variant="link"
                  size="standard"
                  className="text-xs text-muted-foreground"
                >
                  Cookie Preferences
                </Button>
              </ConsentDialogLink>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <FooterThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
