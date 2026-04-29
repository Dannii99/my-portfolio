"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*"

function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text)
  
  const scramble = useCallback(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("")
          .map((char, index) => {
            if (index < iteration) return text[index]
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          })
          .join("")
      )
      
      if (iteration >= text.length) clearInterval(interval)
      iteration += 1/3
    }, 30)
  }, [text])

  useEffect(() => {
    scramble()
  }, [scramble])

  return <>{displayText}</>
}

export function Hero() {
  const { t, locale } = useLanguage()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Parallax effects
  const moveX = useTransform(springX, [0, 2000], [-20, 20])
  const moveY = useTransform(springY, [0, 1000], [-20, 20])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-20 bg-[#161616]">
      {/* Interactive Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#34353b_1px,transparent_1px),linear-gradient(to_bottom,#34353b_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div 
          className="absolute inset-0 bg-[#dddedd]"
          style={{
            maskImage: useTransform(springX, (x) => `radial-gradient(400px circle at ${x}px ${mouseY.get()}px, black, transparent)`),
            WebkitMaskImage: useTransform(springX, (x) => `radial-gradient(400px circle at ${x}px ${mouseY.get()}px, black, transparent)`),
          }}
        />
      </div>
      
      {/* Floating Industrial Tags (Parallax) */}
      <motion.div style={{ x: moveX, y: moveY }} className="absolute top-1/4 left-10 md:left-20 z-10 hidden md:block">
        <div className="border border-[#34353b] bg-[#161616]/80 px-4 py-2 backdrop-blur-md">
          <p className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#585a5f]">
            {t.hero.status}: <span className="text-[#dddedd]">Active</span>
          </p>
        </div>
      </motion.div>

      <motion.div style={{ x: useTransform(springX, [0, 2000], [20, -20]), y: useTransform(springY, [0, 1000], [20, -20]) }} className="absolute bottom-1/4 right-10 md:right-20 z-10 hidden md:block">
        <div className="border border-[#34353b] bg-[#161616]/80 px-4 py-2 backdrop-blur-md">
          <p className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#585a5f]">
            {t.hero.op}: <span className="text-[#dddedd]">Angular_Core</span>
          </p>
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto text-center flex flex-col items-center">
        {/* Calibration Corners */}
        <div className="absolute -top-20 -left-10 w-20 h-20 border-t-2 border-l-2 border-[#34353b] opacity-50" />
        <div className="absolute -top-20 -right-10 w-20 h-20 border-t-2 border-r-2 border-[#34353b] opacity-50" />
        <div className="absolute -bottom-20 -left-10 w-20 h-20 border-b-2 border-l-2 border-[#34353b] opacity-50" />
        <div className="absolute -bottom-20 -right-10 w-20 h-20 border-b-2 border-r-2 border-[#34353b] opacity-50" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-xl md:text-2xl font-light tracking-[0.4em] uppercase text-[#585a5f] mb-2"
        >
          {locale === "en" ? "I am" : "Yo soy"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-[18vw] md:text-[12rem] font-black leading-none tracking-tighter text-[#dddedd] uppercase selection:bg-[#585a5f] selection:text-white"
        >
          <ScrambleText text="Danny" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 flex flex-col items-center max-w-xl w-full"
        >
          <div className="flex items-center gap-4 w-full">
            <div className="h-px flex-1 bg-[#34353b]" />
            <p className="font-heading text-lg md:text-2xl font-black tracking-[0.2em] text-[#585a5f] uppercase whitespace-nowrap">
              Senior Web Frontend
            </p>
            <div className="h-px flex-1 bg-[#34353b]" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-12 max-w-xl text-xs md:text-sm leading-relaxed text-[#585a5f] uppercase tracking-[0.3em] font-bold"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-0 border border-[#34353b]"
        >
          <Link 
            href="#work"
            className="group relative flex h-20 items-center gap-4 bg-[#dddedd] px-12 text-[10px] font-black uppercase tracking-[0.3em] text-[#161616] transition-all hover:bg-[#161616] hover:text-[#dddedd]"
          >
            {t.hero.cta_work}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link 
            href="#about"
            className="group relative flex h-20 items-center gap-4 bg-transparent px-12 text-[10px] font-black uppercase tracking-[0.3em] text-[#dddedd] transition-all hover:bg-[#34353b]"
          >
            {t.hero.cta_about}
          </Link>
        </motion.div>
      </div>

      {/* Latency / System Info Bottom */}
      <div className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-1">
        <p className="text-[8px] font-black text-[#34353b] uppercase tracking-[0.2em]">{t.hero.deployment}: v1.0.4</p>
        <p className="text-[8px] font-black text-[#34353b] uppercase tracking-[0.2em]">{t.hero.location}: 10.0.0.1</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#34353b]"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  )
}
