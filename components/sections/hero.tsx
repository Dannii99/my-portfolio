"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Senior Frontend Engineer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-balance text-5xl font-black leading-tight tracking-tight text-foreground md:text-8xl"
        >
          Architecting <span className="text-primary">Ethereal</span> <br />
          Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Crafting high-end web applications with a focus on performance, 
          aesthetics, and human-centric interaction design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <button className="flex h-14 items-center gap-2 rounded-2xl bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            Explore My Work
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="flex h-14 items-center gap-2 rounded-2xl border border-border/10 bg-card/60 px-8 text-lg font-bold text-foreground backdrop-blur-md transition-all hover:bg-muted/50">
            About Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  )
}
