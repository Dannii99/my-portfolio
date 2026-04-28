"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative flex items-center p-1 bg-[#34353b] border border-[#161616] w-fit">
      <div className="relative flex items-center gap-0">
        <motion.div
          className="absolute inset-y-0 bg-[#dddedd]"
          initial={false}
          animate={{
            x: theme === "light" ? 0 : "100%",
            width: "50%",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />

        <button
          onClick={() => setTheme("light")}
          className={cn(
            "relative z-10 flex items-center gap-2 px-6 py-2 text-[10px] font-black uppercase tracking-tighter transition-colors duration-300",
            theme === "light" ? "text-[#161616]" : "text-[#dddedd] hover:text-[#585a5f]"
          )}
        >
          <Sun className="h-3.5 w-3.5" />
          <span>Light</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "relative z-10 flex items-center gap-2 px-6 py-2 text-[10px] font-black uppercase tracking-tighter transition-colors duration-300",
            theme === "dark" ? "text-[#161616]" : "text-[#dddedd] hover:text-[#585a5f]"
          )}
        >
          <Moon className="h-3.5 w-3.5" />
          <span>Dark</span>
        </button>
      </div>
    </div>
  )
}
