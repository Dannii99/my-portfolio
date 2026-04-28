"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Hero } from "@/components/sections/hero"
import { Expertise } from "@/components/sections/expertise"
import { Work } from "@/components/sections/work"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#161616] text-[#dddedd] selection:bg-[#585a5f] selection:text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Expertise />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
