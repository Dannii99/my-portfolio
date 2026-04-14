"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Deep diving into requirements, user needs, and technical constraints to define a clear architectural roadmap.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description: "Crafting a scalable technical foundation and a high-fidelity visual direction with atmospheric depth.",
  },
  {
    number: "03",
    title: "Development & Polish",
    description: "Iterative building with a focus on clean code, performance, and interactive micro-details.",
  },
  {
    number: "04",
    title: "Deployment & Growth",
    description: "Launching with confidence and establishing a baseline for continuous improvement and global scale.",
  },
]

export function Process() {
  return (
    <section id="process" className="w-full py-40 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-primary/5 blur-[150px] -z-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-6xl"
          >
            Engineering <span className="text-primary italic">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A methodical approach to building modern digital products, 
            ensuring quality at every stage of the lifecycle.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-40">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-12",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Step Content */}
                <div className={cn(
                  "flex-1 text-center group",
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <div className={cn(
                    "font-heading text-7xl md:text-9xl font-black text-foreground/[0.03] leading-none mb-[-2rem] transition-colors group-hover:text-primary/[0.05] dark:text-white/[0.03] dark:group-hover:text-primary/[0.05]",
                    index % 2 === 0 ? "md:mr-[-1rem]" : "md:ml-[-1rem]"
                  )}>
                    {step.number}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 relative z-10">
                    {step.title}
                  </h3>
                  <p className={cn(
                    "text-muted-foreground leading-relaxed max-w-md mx-auto relative z-10",
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  )}>
                    {step.description}
                  </p>
                </div>

                {/* Center Node */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card border border-border shadow-xl transition-transform hover:scale-110">
                  <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(46,91,255,0.4)] dark:shadow-[0_0_20px_rgba(46,91,255,0.8)]" />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
