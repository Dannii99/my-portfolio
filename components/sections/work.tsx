"use client"

import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Quantum Dashboard",
    description: "A high-performance data visualization platform with real-time stream processing and advanced analytics.",
    image: "/window.svg", 
    tags: ["Next.js", "TypeScript", "D3.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Ethereal UI Kit",
    description: "A comprehensive design system focused on glassmorphism, depth, and atmospheric motion.",
    image: "/window.svg",
    tags: ["React", "Tailwind 4", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Nexus Commerce",
    description: "Modern e-commerce engine with headless architecture, edge-caching, and global scale.",
    image: "/window.svg",
    tags: ["Next.js", "Shopify", "GraphQL"],
    link: "#",
    github: "#",
  },
]

export function Work() {
  return (
    <section id="work" className="w-full py-32 px-6 relative">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent/5 blur-[100px] -z-10" />
      
      <div className="container mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-6xl"
          >
            Selected <span className="text-primary italic">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            A curated selection of projects that demonstrate my focus on 
            performance, aesthetics, and scalable architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="overflow-hidden border-white/5 bg-white/[0.01] hover:bg-white/[0.03]">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5 p-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain opacity-10 grayscale transition-all duration-700 group-hover:opacity-30 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-primary/70 bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-8 flex items-center gap-6">
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                      <Github className="h-4 w-4" />
                      Source
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
