
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/nav/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const machina = localFont({
  src: "./fonts/NeueMachina-Ultrabold.otf",
  variable: "--font-machina",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            className={cn(`${geistSans.variable} ${machina.variable}` , "antialiased font-[family-name:var(--font-geist-sans)]") }
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > <Navbar/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
