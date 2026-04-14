"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Cpu, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Expertise", href: "#expertise" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

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
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-[#0F172A]/70 backdrop-blur-2xl py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-110">
            <Cpu className="h-6 w-6" />
            <Sparkles className="absolute -top-1 -right-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-extrabold tracking-tight text-foreground leading-none">
              Danny Ospino
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/60 mt-1">
              Architecture
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-all hover:text-primary hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="group relative px-6 py-2.5 rounded-xl font-heading text-sm font-bold text-primary-foreground overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary transition-transform group-hover:scale-110" />
            <span className="relative z-10">Let&apos;s Talk</span>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#0b1326]/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="font-heading text-2xl font-bold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-6 border-t border-white/5"
              >
                <Link
                  href="#contact"
                  className="inline-flex h-14 items-center justify-center w-full rounded-2xl bg-primary font-heading font-bold text-primary-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Conversation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
