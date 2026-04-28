"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="w-full py-32 px-6 bg-[#161616] border-y border-[#34353b]">
      <div className="container mx-auto">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-6xl md:text-9xl font-black tracking-tighter text-[#dddedd] uppercase leading-none"
          >
            {t.process.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-sm uppercase tracking-[0.4em] font-bold text-[#585a5f] max-w-xl"
          >
            {t.process.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#34353b]">
          {t.process.steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 border-[#34353b] md:border-r last:border-r-0 border-b md:border-b-0 hover:bg-[#dddedd] transition-colors duration-500"
            >
              <span className="absolute top-6 right-8 font-heading text-6xl font-black text-[#34353b]/20 group-hover:text-[#161616]/10 transition-colors">
                0{index + 1}
              </span>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-black text-[#dddedd] group-hover:text-[#161616] uppercase tracking-tighter mb-6 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed text-[#585a5f] group-hover:text-[#161616]/80 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
