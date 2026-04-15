"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="relative flex items-center p-1 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md w-fit">
      <div className="relative flex items-center gap-1">
        {/* Animated Background Indicator */}
        <motion.div
          className="absolute inset-y-0 rounded-lg bg-primary shadow-lg shadow-primary/20"
          initial={false}
          animate={{
            x: locale === "en" ? 0 : "100%",
            width: "50%",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />

        {/* English Option */}
        <button
          onClick={() => setLocale("en")}
          className={cn(
            "relative z-10 flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300",
            locale === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span>EN</span>
        </button>

        {/* Spanish Option */}
        <button
          onClick={() => setLocale("es")}
          className={cn(
            "relative z-10 flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300",
            locale === "es" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span>ES</span>
        </button>
      </div>
    </div>
  )
}
