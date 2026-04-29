"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t, locale } = useLanguage()

  return (
    <footer className="w-full border-t border-[#34353b] bg-[#161616] py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-10 items-start mb-24">
          <div className="md:col-span-2 space-y-10">
            <Link href="/" className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-[#dddedd] text-[#161616] font-black transition-all group-hover:scale-110">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black tracking-tighter text-[#dddedd] leading-none uppercase">
                  Danny Ospino
                </span>
              </div>
            </Link>
            <p className="text-[#585a5f] text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          <div className="space-y-10">
            <h4 className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#dddedd]">{t.footer.nav_title}</h4>
            <div className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#585a5f]">
              <Link href="/#expertise" className="hover:text-[#dddedd] transition-colors">{t.nav.expertise}</Link>
              <Link href="/#about" className="hover:text-[#dddedd] transition-colors">{locale === "en" ? "About" : "Sobre Mí"}</Link>
              <Link href="/#work" className="hover:text-[#dddedd] transition-colors">{t.nav.work}</Link>
              <Link href="/#process" className="hover:text-[#dddedd] transition-colors">{t.nav.process}</Link>
              <Link href="/#contact" className="hover:text-[#dddedd] transition-colors">{t.nav.contact}</Link>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#dddedd]">{t.footer.connect_title}</h4>
            <div className="flex gap-6">
              <a href="https://github.com/Dannii99" target="_blank" className="h-14 w-14 flex items-center justify-center bg-[#34353b] text-[#dddedd] hover:bg-[#dddedd] hover:text-[#161616] transition-all">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/danny-ospino-82360b211/" target="_blank" className="h-14 w-14 flex items-center justify-center bg-[#34353b] text-[#dddedd] hover:bg-[#dddedd] hover:text-[#161616] transition-all">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-[#34353b] flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[#585a5f] text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Danny Ospino. {t.footer.rights}
          </p>
          <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-[#34353b]">
            <span className="group-hover:text-[#585a5f] transition-colors">Next.js 16.2.0</span>
            <span className="group-hover:text-[#585a5f] transition-colors">Tailwind 4</span>
            <span className="group-hover:text-[#585a5f] transition-colors">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
