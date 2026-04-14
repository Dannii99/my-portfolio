"use client"

import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Quantum Dashboard",
    description: "A high-performance data visualization platform with real-time stream processing.",
    image: "/window.svg", // Placeholder
    tags: ["Next.js", "TypeScript", "D3.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Ethereal UI Kit",
    description: "A design system focused on glassmorphism and atmospheric depth.",
    image: "/window.svg", // Placeholder
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Nexus Commerce",
    description: "Modern e-commerce engine with headless architecture and edge-caching.",
    image: "/window.svg", // Placeholder
    tags: ["Next.js", "Shopify", "GraphQL"],
    link: "#",
    github: "#",
  },
]

export function Work() {
  return (
    <section id="work" className="w-full py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Selected Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A curated selection of projects that demonstrate my focus on 
            performance, aesthetics, and scalable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="overflow-hidden">
                <div className="relative aspect-video w-full bg-muted/50 p-12">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain opacity-20 grayscale transition-all group-hover:opacity-40 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary/80 bg-primary/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
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
