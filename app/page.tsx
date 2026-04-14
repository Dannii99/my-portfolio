import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Hero } from "@/components/sections/hero"
import { Expertise } from "@/components/sections/expertise"
import { Work } from "@/components/sections/work"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
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
