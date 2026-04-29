"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(221, 222, 221, 0.05)",
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
        "group relative overflow-hidden rounded-none border border-[#34353b] bg-[#161616] transition-all duration-300",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-none transition duration-300"
        style={{
          background: `radial-gradient(400px circle at ${springX}px ${springY}px, ${spotlightColor}, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
