import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/header/navbar";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "./site-config";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const calligraffitti = localFont({
  src: "./fonts/Calligraffitti-Regular.ttf",
  variable: "--font-calligraffitti",
  weight: "100 900",
});

const machina = localFont({
  src: "./fonts/NeueMachina-Ultrabold.otf",
  variable: "--font-machina",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imhogen.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Engineering", "Research and Developement", "Engineering design"],
  authors: [
    {
      name: "Imhogen",
      url: "",
    },
  ],
  creator: "Imhogen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "Imhogen",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            `${geistSans.variable} ${machina.variable} ${calligraffitti.variable}`,
            "flex flex-col antialiased font-[family-name:var(--font-geist-sans)] max-w-screen",
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster position="bottom-center" />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
