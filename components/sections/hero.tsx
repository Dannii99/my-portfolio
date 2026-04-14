"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect } from "react"

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Dynamic Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          background: `radial-gradient(1000px circle at ${springX}px ${springY}px, rgba(46, 91, 255, 0.08), transparent 70%)`,
        }}
      />
      
      {/* Background Glows (Atmospheric) */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Senior Frontend Architect
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-balance text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-8xl lg:text-[7rem]"
        >
          Architecting <span className="italic font-light opacity-80">Ethereal</span> <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6]/80 via-[#8B5CF6]/70 to-[#0EA5E9]/80 saturate-[1.1] brightness-[1.1] dark:from-[#9b7de0]/70 dark:via-[#9b7de0] dark:to-[#5891ac]">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Crafting high-end web applications with a focus on performance, 
          aesthetics, and human-centric interaction design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8"
        >
          <button className="group flex h-16 items-center gap-3 rounded-2xl bg-primary px-10 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            Explore My Work
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex h-16 items-center gap-3 rounded-2xl border border-border bg-card px-10 text-lg font-bold text-foreground backdrop-blur-xl transition-all hover:bg-muted shadow-sm">
            About Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  )
}
