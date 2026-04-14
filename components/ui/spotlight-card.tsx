"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(46, 91, 255, 0.15)",
}: {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 })

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/10 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/20",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, ${spotlightColor}, transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
