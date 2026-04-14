"use client"

import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Code2, Cpu, Globe, Layout, Zap, Terminal, Layers, Sparkles } from "lucide-react"

const expertise = [
  {
    title: "System Architecture",
    description: "Designing scalable, type-safe frontend systems using Next.js, TypeScript, and micro-frontend patterns.",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    className: "md:col-span-2 md:row-span-2",
    details: ["Next.js App Router", "TypeScript", "System Design"],
  },
  {
    title: "Fluid Motion",
    description: "Orchestrating complex, performant animations with Framer Motion and GSAP.",
    icon: <Zap className="h-8 w-8 text-secondary" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Performance",
    description: "Optimizing Core Web Vitals, server-side efficiency, and asset delivery.",
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Modern Stack",
    description: "Mastering the cutting edge of the React ecosystem, Tailwind 4, and advanced build tools.",
    icon: <Terminal className="h-8 w-8 text-primary" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "UI/UX Engineering",
    description: "Bridging the gap between high-fidelity design and technical implementation with precision.",
    icon: <Layers className="h-8 w-8 text-secondary" />,
    className: "md:col-span-2 md:row-span-1",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="w-full py-32 px-6">
      <div className="container mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-6xl"
          >
            Technical <span className="text-primary italic">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            A comprehensive approach to modern frontend engineering, 
            balancing technical rigor with creative vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={item.className}
            >
              <SpotlightCard className="h-full p-10 flex flex-col justify-between border-white/5 bg-white/[0.02]">
                <div>
                  <div className="mb-6 opacity-80">{item.icon}</div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  {item.details && (
                    <div className="flex flex-wrap gap-2">
                      {item.details.map(detail => (
                        <span key={detail} className="text-[10px] font-bold text-primary/60 bg-primary/5 px-2 py-1 rounded">
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
