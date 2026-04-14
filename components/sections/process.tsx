"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Deep diving into requirements, user needs, and technical constraints to define a clear roadmap.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description: "Crafting a scalable technical foundation and a high-fidelity visual direction.",
  },
  {
    number: "03",
    title: "Development & Polish",
    description: "Iterative building with a focus on clean code, performance, and interactive micro-details.",
  },
  {
    number: "04",
    title: "Deployment & Growth",
    description: "Launching with confidence and establishing a baseline for continuous improvement.",
  },
]

export function Process() {
  return (
    <section id="process" className="w-full py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl text-center">
            Engineering Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            A methodical approach to building modern digital products, 
            ensuring quality at every stage of the lifecycle.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-border/10 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Content */}
                <div className={`flex-1 text-center ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <span className="text-5xl md:text-7xl font-black text-primary/10 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className={cn(
                    "mt-4 text-muted-foreground max-w-md mx-auto md:mx-0",
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  )}>
                    {step.description}
                  </p>
                </div>

                {/* Center Node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background border border-primary/20 shadow-[0_0_15px_rgba(46,91,255,0.2)]">
                  <div className="h-4 w-4 rounded-full bg-primary" />
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
