import Link from "next/link"
import { Cpu, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/5 bg-background py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cpu className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Danny Ospino
            </span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Experience</Link>
            <Link href="#" className="hover:text-primary transition-colors">Work</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex gap-4">
            <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50 text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/5 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Danny Ospino. Built with Next.js & Framer Motion.
        </div>
      </div>
    </footer>
  )
}
