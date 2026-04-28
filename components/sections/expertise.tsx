"use client"

import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Cpu, Zap, Terminal, Layers, Sparkles } from "lucide-react"

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
    },
    {
      title: t.expertise.items[1].title,
      description: t.expertise.items[1].description,
      icon: <Zap className="h-8 w-8 text-[#585a5f]" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: t.expertise.items[2].title,
      description: t.expertise.items[2].description,
      icon: <Sparkles className="h-8 w-8 text-[#585a5f]" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: t.expertise.items[3].title,
      description: t.expertise.items[3].description,
      icon: <Terminal className="h-8 w-8 text-[#585a5f]" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: t.expertise.items[4].title,
      description: t.expertise.items[4].description,
      icon: <Layers className="h-8 w-8 text-[#585a5f]" />,
      className: "md:col-span-2 md:row-span-1",
    },
  ]

  return (
    <section id="expertise" className="w-full py-32 px-6 bg-[#161616]">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-heading text-6xl md:text-8xl font-black tracking-tighter text-[#dddedd] uppercase"
            >
              {t.expertise.title}
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-2 bg-[#585a5f] mt-4"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-[#585a5f] max-w-sm font-bold"
          >
            {t.expertise.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={item.className}
            >
              <SpotlightCard className="h-full p-10 flex flex-col justify-between border-none bg-[#34353b]/40 rounded-none shadow-none transition-all hover:bg-[#34353b]/60 group">
                <div>
                  <div className="mb-8 flex items-center transition-transform group-hover:scale-110 duration-500">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-3xl font-black text-[#dddedd] uppercase tracking-tighter">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-xs text-[#585a5f] uppercase font-bold tracking-widest leading-relaxed mb-6 group-hover:text-[#dddedd] transition-colors">
                    {item.description}
                  </p>
                  {item.details && (
                    <div className="flex flex-wrap gap-2">
                      {item.details.map(detail => (
                        <span key={detail} className="text-[10px] font-black text-[#161616] bg-[#dddedd] px-3 py-1 uppercase tracking-tighter">
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
