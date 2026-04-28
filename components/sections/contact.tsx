"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Send, Linkedin, Github } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="w-full py-32 px-6 bg-[#161616] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-heading text-6xl md:text-9xl font-black tracking-tighter text-[#dddedd] uppercase leading-none"
            >
              {t.contact.title}
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] font-bold text-[#585a5f] max-w-xs"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-[#34353b]">
          <div className="lg:col-span-2 p-12 space-y-16 border-b lg:border-b-0 lg:border-r border-[#34353b] bg-[#34353b]/10">
            <div className="space-y-12">
              <div className="group space-y-4">
                <h4 className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#585a5f]">{t.contact.email_label}</h4>
                <p className="text-2xl font-black text-[#dddedd] group-hover:text-[#585a5f] transition-colors break-all">{t.contact.email_value}</p>
              </div>

              <div className="group space-y-4">
                <h4 className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#585a5f]">{t.contact.social_label}</h4>
                <div className="flex gap-8 mt-2">
                  <a href="https://www.linkedin.com/in/danny-ospino-82360b211/" target="_blank" rel="noopener noreferrer" className="text-[#dddedd] hover:text-[#585a5f] transition-all hover:scale-125">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/Dannii99" target="_blank" rel="noopener noreferrer" className="text-[#dddedd] hover:text-[#585a5f] transition-all hover:scale-125">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 border border-[#34353b] bg-[#161616]">
              <h5 className="font-heading text-[10px] font-black uppercase tracking-widest text-[#dddedd] mb-4">{t.contact.availability_title}</h5>
              <p className="text-xs font-bold uppercase tracking-widest text-[#585a5f] leading-relaxed">
                {t.contact.availability_desc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 p-12 bg-[#161616]">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label htmlFor="name" className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#585a5f]">{t.contact.form.name}</label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t.contact.form.name_placeholder}
                    className="w-full rounded-none border-b border-[#34353b] bg-transparent px-0 py-4 text-[#dddedd] outline-none focus:border-[#dddedd] transition-all placeholder:text-[#34353b] font-bold uppercase text-xs tracking-widest"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#585a5f]">{t.contact.form.email}</label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t.contact.form.email_placeholder}
                    className="w-full rounded-none border-b border-[#34353b] bg-transparent px-0 py-4 text-[#dddedd] outline-none focus:border-[#dddedd] transition-all placeholder:text-[#34353b] font-bold uppercase text-xs tracking-widest"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-[#585a5f]">{t.contact.form.message}</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t.contact.form.message_placeholder}
                  className="w-full rounded-none border-b border-[#34353b] bg-transparent px-0 py-4 text-[#dddedd] outline-none focus:border-[#dddedd] transition-all resize-none placeholder:text-[#34353b] font-bold uppercase text-xs tracking-widest"
                />
              </div>
              <button className="group flex h-20 w-full items-center justify-center gap-4 bg-[#dddedd] text-[#161616] font-black uppercase tracking-[0.4em] text-xs transition-all hover:bg-[#585a5f] hover:text-[#dddedd]">
                {t.contact.form.cta}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
