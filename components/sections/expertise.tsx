"use client"

import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Cpu, Zap, Terminal, Layers, Sparkles, Box, ShieldCheck, Activity } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

export function Expertise() {
  const { t } = useLanguage()

  const expertise = [
    {
      title: t.expertise.items[0].title,
      description: t.expertise.items[0].description,
      icon: <Cpu className="h-10 w-10 text-[#dddedd]" />,
      className: "md:col-span-2 md:row-span-2",
      details: t.expertise.items[0].details,
      technical_stat: t.expertise.exp_badge,
    },
    {
      title: t.expertise.items[1].title,
      description: t.expertise.items[1].description,
      icon: <ShieldCheck className="h-8 w-8 text-[#585a5f]" />,
      className: "md:col-span-1 md:row-span-1",
      details: t.expertise.items[1].details,
    },
    {
      title: t.expertise.items[2].title,
      description: t.expertise.items[2].description,
      icon: <Box className="h-8 w-8 text-[#585a5f]" />,
      className: "md:col-span-1 md:row-span-1",
      details: t.expertise.items[2].details,
    },
    {
      title: t.expertise.items[3].title,
      description: t.expertise.items[3].description,
      icon: <Terminal className="h-8 w-8 text-[#585a5f]" />,
      className: "md:col-span-1 md:row-span-1",
      details: t.expertise.items[3].details,
    },
    {
      title: t.expertise.items[4].title,
      description: t.expertise.items[4].description,
      icon: <Activity className="h-8 w-8 text-[#585a5f]" />,
      className: "md:col-span-2 md:row-span-1",
      details: t.expertise.items[4].details,
    },
  ]

  return (
    <section id="expertise" className="w-full py-32 px-6 bg-[#161616]">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-heading text-6xl md:text-9xl font-black tracking-tighter text-[#dddedd] uppercase leading-none"
            >
              {t.expertise.title}
            </motion.h2>
            <div className="absolute -top-10 -right-10 hidden md:block">
              <span className="text-[10px] font-black text-[#34353b] uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
                {t.expertise.console_label}
              </span>
            </div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-[#585a5f] max-w-sm font-bold leading-relaxed"
          >
            {t.expertise.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 auto-rows-[280px] border border-[#34353b] bg-[#34353b]">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.className} group`}
            >
              <SpotlightCard className="h-full p-10 flex flex-col justify-between border-none bg-[#161616] hover:bg-[#161616]/80 transition-all duration-500">
                <div className="relative">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="transition-transform group-hover:scale-110 duration-500">
                      {item.icon}
                    </div>
                    {item.technical_stat && (
                      <span className="font-heading text-[10px] font-black text-[#161616] bg-[#dddedd] px-3 py-1 tracking-tighter">
                        {item.technical_stat}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-heading text-3xl font-black text-[#dddedd] uppercase tracking-tighter mb-4 group-hover:text-[#585a5f] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[10px] text-[#585a5f] uppercase font-bold tracking-[0.2em] leading-relaxed max-w-[280px]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  {item.details?.map(detail => (
                    <span key={detail} className="text-[8px] font-black text-[#dddedd] border border-[#34353b] px-2 py-1 uppercase tracking-widest">
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Decorative scanning line */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#dddedd] group-hover:w-full transition-all duration-700" />
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
