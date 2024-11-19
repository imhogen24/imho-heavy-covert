'use client'
import { NAV_ITEMS } from "@/lib/data"
import { CloseIcon } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { Button } from "./ui/button"

const baseStyles = "flex w-[800px] bg-gradient-to-r from-[#09090B] from-10% via-[#2D2D30] via-50% to-[#09090B] mx-auto px-[32px] py-[16px]"

const menuVariants = {
  closed: {
    height: 64,
    borderRadius: 32,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  open: {
    height: 386,
    borderRadius: 12,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
}

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.2 }
  },
  open: {
    opacity: 1,
    transition: { duration: 0.2 }
  }
}

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <nav className="z-50 inset-0 flex lg:hidden m-auto sticky w-full px-[10px] py-[5px] justify-center items-end">
      <motion.div
        className={cn(baseStyles)}
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-row justify-between">
            <div className="w-fit">
              <Link href="/">
                <Image src="/logos/golden-eye.png" alt="logo" width={100} height={32} />
              </Link>
            </div>
            <motion.button
              title="Toggle Menu"
              onClick={toggleMenu}
            >
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="dark:text-secondary-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CloseIcon className="dark:text-secondary-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col flex-1 justify-around mt-5 items-center"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {NAV_ITEMS.map((item, id) => (
                  <Link
                    key={id}
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-muted-foreground hover:text-secondary-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="w-full rounded-full text-secondary-foreground"
                  size="sm"
                  onClick={toggleMenu}
                >
                  Contact
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  )
}

export default MobileNav
