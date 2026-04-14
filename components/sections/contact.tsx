"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Send, Linkedin, Twitter, Github } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export function Contact() {
  return (
    <section id="contact" className="w-full py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-secondary/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-6xl"
          >
            Start a <span className="text-primary italic">Conversation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? I&apos;m always open 
            to discussing new opportunities and creative architectural ideas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group flex items-center gap-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 border border-primary/10 text-primary transition-all group-hover:bg-primary/10 group-hover:scale-110">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Email Me</h4>
                  <p className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">hello@dannyospino.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group flex items-center gap-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/5 border border-secondary/10 text-secondary transition-all group-hover:bg-secondary/10 group-hover:scale-110">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Social Presence</h4>
                  <div className="flex gap-4 mt-2">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-sm shadow-sm"
            >
              <h5 className="font-heading text-sm font-bold text-foreground mb-4">Current Availability</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&apos;m currently accepting new freelance projects and consulting engagements for Q3 2026.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <SpotlightCard className="p-10 md:p-12 border-border bg-card/50 shadow-sm">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="font-heading text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-2xl border border-border bg-background px-6 py-4 text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/40 shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="font-heading text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-border bg-background px-6 py-4 text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/40 shadow-sm"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="font-heading text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or vision..."
                    className="w-full rounded-2xl border border-border bg-background px-6 py-4 text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all resize-none placeholder:text-muted-foreground/40 shadow-sm"
                  />
                </div>
                <button className="group flex w-full h-16 items-center justify-center gap-3 rounded-2xl bg-primary px-10 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Send Message
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
