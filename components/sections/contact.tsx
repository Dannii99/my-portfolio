"use client"

import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Start a Conversation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? I&apos;m always open 
            to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Me</h4>
                <p className="text-lg font-medium text-foreground">hello@dannyospino.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Socials</h4>
                <p className="text-lg font-medium text-foreground">@dannyospino</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-border/10 bg-card/60 px-4 py-3 text-foreground backdrop-blur-md outline-none focus:border-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-border/10 bg-card/60 px-4 py-3 text-foreground backdrop-blur-md outline-none focus:border-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-border/10 bg-card/60 px-4 py-3 text-foreground backdrop-blur-md outline-none focus:border-primary/50 transition-all resize-none"
              />
            </div>
            <button className="flex w-full h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98]">
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
