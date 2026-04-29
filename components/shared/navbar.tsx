"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/ui/language-toggle"

export function Navbar() {
  const { t, locale } = useLanguage()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  const navItems = [
    { name: t.nav.expertise, href: "/#expertise" },
    { name: locale === "en" ? "About" : "Sobre Mí", href: "/#about" },
    { name: t.nav.work, href: "/#work" },
    { name: t.nav.process, href: "/#process" },
    { name: t.nav.contact, href: "/#contact" },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 border-b border-transparent",
        scrolled
          ? "border-[#34353b] bg-[#161616]/90 backdrop-blur-xl py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center bg-[#dddedd] text-[#161616] font-black transition-all group-hover:scale-110">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-black tracking-tighter text-[#dddedd] leading-none uppercase">
              Danny Ospino
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-[#585a5f] transition-all hover:text-[#dddedd]"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6 border-l border-[#34353b] pl-10">
            <LanguageToggle />
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-[#dddedd] font-black text-[10px] uppercase tracking-widest text-[#161616] transition-all hover:bg-[#585a5f] hover:text-[#dddedd]"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="flex lg:hidden h-10 w-10 items-center justify-center bg-[#34353b] text-[#dddedd]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#161616] z-50 flex flex-col p-10 md:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="font-black text-[#dddedd] tracking-tighter text-xl uppercase">Danny Ospino</span>
              <button onClick={() => setIsOpen(false)} className="h-10 w-10 flex items-center justify-center bg-[#34353b]">
                <X className="h-5 w-5 text-[#dddedd]" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="font-heading text-6xl font-black text-[#dddedd] hover:text-[#585a5f] transition-colors uppercase tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-[#34353b] flex flex-col gap-10">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#585a5f]">Language / Idioma</span>
                <LanguageToggle />
              </div>
              <Link
                href="/#contact"
                className="h-20 flex items-center justify-center w-full bg-[#dddedd] font-black text-xs uppercase tracking-[0.4em] text-[#161616]"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
