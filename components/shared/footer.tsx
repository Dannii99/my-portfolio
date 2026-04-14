import Link from "next/link"
import { Cpu, Github, Linkedin, Twitter, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card py-20 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-[100px] -z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-110">
                <Cpu className="h-6 w-6" />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-extrabold tracking-tight text-foreground leading-none">
                  Danny Ospino
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/60 mt-1">
                  Architecture
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Designing and engineering high-end digital experiences with a focus on performance, 
              atmospheric depth, and human-centric interaction.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground">Navigation</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <Link href="/#expertise" className="hover:text-primary transition-colors">Expertise</Link>
              <Link href="/#work" className="hover:text-primary transition-colors">Selected Work</Link>
              <Link href="/#process" className="hover:text-primary transition-colors">Process</Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/20 transition-all hover:scale-110">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/20 transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/20 transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Danny Ospino. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-primary/60 italic">Next.js 16.2.0</span>
            <span className="text-primary/60 italic">Tailwind 4</span>
            <span className="text-primary/60 italic">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
