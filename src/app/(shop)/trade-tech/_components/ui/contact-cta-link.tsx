"use client";

import { toast } from "sonner";
import Link from "next/link";
import { useEffect, forwardRef } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface ContactCTALinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
  href: string;
}

export const ContactCTALink = forwardRef<
  React.ElementRef<typeof Link>,
  ContactCTALinkProps
>(({ children, className, href, onClick, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Show toast when navigating to contact form
    toast.info("Please tell us what you're interested in through the contact form below", {
      duration: 4000,
    });

    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
});

ContactCTALink.displayName = "ContactCTALink";

// Component to show toast when arriving from trade-tech with contact param
export const ContactToastHandler = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams?.get('from') === 'trade-tech') {
      toast.info("Please tell us what you're interested in through the contact form below", {
        duration: 4000,
      });
      // Clean up URL without triggering navigation
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.delete('from');
        window.history.replaceState({}, '', url.toString());
      }
    }
  }, [searchParams]);

  return null;
};