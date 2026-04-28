"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t, locale } = useLanguage()
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
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(88, 90, 95, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Background Shapes (Brutalist Style) */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#34353b]/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#585a5f]/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-muted-foreground/80 mb-2"
        >
          {locale === "en" ? "I am" : "Yo soy"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-[18vw] md:text-[12rem] font-black leading-none tracking-tighter text-[#dddedd] uppercase selection:bg-[#585a5f] selection:text-white"
        >
          Danny
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 flex flex-col items-center"
        >
          <p className="font-heading text-lg md:text-2xl font-bold tracking-[0.1em] text-[#585a5f] uppercase">
            Senior Web Frontend
          </p>
          <div className="h-px w-20 bg-[#34353b] mt-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-10 max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground/60 uppercase tracking-widest"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6"
        >
          <button className="group relative flex h-16 items-center gap-3 rounded-none border border-[#dddedd]/20 bg-[#dddedd] px-10 text-xs font-black uppercase tracking-widest text-[#161616] transition-all hover:bg-transparent hover:text-[#dddedd]">
            {t.hero.cta_work}
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="group relative flex h-16 items-center gap-3 rounded-none border border-[#dddedd]/20 bg-transparent px-10 text-xs font-black uppercase tracking-widest text-[#dddedd] transition-all hover:bg-[#dddedd] hover:text-[#161616]">
            {t.hero.cta_about}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground/30"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  )
}
