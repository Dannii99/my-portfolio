"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="relative flex items-center p-1 bg-[#34353b] border border-[#161616] w-fit">
      <div className="relative flex items-center gap-0">
        <motion.div
          className="absolute inset-y-0 bg-[#dddedd]"
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

        <button
          onClick={() => setLocale("en")}
          className={cn(
            "relative z-10 flex items-center gap-2 px-6 py-2 text-[10px] font-black uppercase tracking-tighter transition-colors duration-300",
            locale === "en" ? "text-[#161616]" : "text-[#dddedd] hover:text-[#585a5f]"
          )}
        >
          <span>EN</span>
        </button>

        <button
          onClick={() => setLocale("es")}
          className={cn(
            "relative z-10 flex items-center gap-2 px-6 py-2 text-[10px] font-black uppercase tracking-tighter transition-colors duration-300",
            locale === "es" ? "text-[#161616]" : "text-[#dddedd] hover:text-[#585a5f]"
          )}
        >
          <span>ES</span>
        </button>
      </div>
    </div>
  )
}
