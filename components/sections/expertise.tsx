"use client"

import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Code2, Cpu, Globe, Layout, Zap } from "lucide-react"

const expertise = [
  {
    title: "Core Architecture",
    description: "Building scalable, type-safe foundations with Next.js and TypeScript.",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "UI & Motion",
    description: "Creating fluid interfaces with Framer Motion and GSAP.",
    icon: <Zap className="h-8 w-8 text-secondary" />,
  },
  {
    title: "Web Ecosystem",
    description: "Mastering React, Tailwind, and modern build tools.",
    icon: <Globe className="h-8 w-8 text-accent" />,
  },
  {
    title: "Performance",
    description: "Optimizing Core Web Vitals and server-side efficiency.",
    icon: <Code2 className="h-8 w-8 text-primary" />,
  },
  {
    title: "UX Strategy",
    description: "Designing intuitive user flows and accessible interfaces.",
    icon: <Layout className="h-8 w-8 text-secondary" />,
    className: "md:col-span-2",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="w-full py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A comprehensive approach to modern frontend engineering, 
            balancing technical rigor with creative vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={item.className}
            >
              <SpotlightCard className="h-full p-8 flex flex-col justify-between">
                <div>
                  {item.icon}
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
