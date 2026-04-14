"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative flex items-center p-1 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md w-fit">
      <div className="relative flex items-center gap-1">
        {/* Animated Background Indicator */}
        <motion.div
          className="absolute inset-y-0 rounded-lg bg-primary shadow-lg shadow-primary/20"
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

        {/* Light Option */}
        <button
          onClick={() => setTheme("light")}
          className={cn(
            "relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-bold transition-colors duration-300",
            theme === "light" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </button>

        {/* Dark Option */}
        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-bold transition-colors duration-300",
            theme === "dark" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </button>
      </div>
    </div>
  )
}
