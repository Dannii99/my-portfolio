"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="w-full py-32 px-6 bg-[#161616] relative overflow-hidden">
      {/* Decorative Grid background for this section */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dddedd_1px,transparent_1px),linear-gradient(to_bottom,#dddedd_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side: Floating Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Industrial Rotating Border */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-[#34353b] rounded-full opacity-50"
              />
              
              {/* Profile Image Container */}
              <div className="relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] overflow-hidden rounded-full border-4 border-[#34353b] bg-[#34353b]">
                <Image
                  src="/img/perfil.png"
                  alt="Danny Ospino"
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#161616]/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Data tags floating around */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-[#dddedd] px-4 py-2 border border-[#161616]"
              >
                <span className="text-[10px] font-black text-[#161616] uppercase tracking-widest">Engineer_01</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-[#34353b] px-4 py-2 border border-[#dddedd]/20"
              >
                <span className="text-[10px] font-black text-[#dddedd] uppercase tracking-widest">Angular_Core</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side: Story Content */}
          <div className="space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-heading text-6xl md:text-8xl font-black tracking-tighter text-[#dddedd] uppercase leading-none mb-6"
              >
                {t.about.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-[0.4em] font-bold text-[#585a5f]"
              >
                {t.about.subtitle}
              </motion.p>
            </div>

            <div className="space-y-8 border-l border-[#34353b] pl-10">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl font-bold text-[#dddedd] leading-relaxed italic"
              >
                "{t.about.p1}"
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#585a5f] leading-loose"
              >
                {t.about.p2}
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#585a5f] leading-loose"
              >
                {t.about.p3}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex gap-10 pt-10"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-[#34353b] uppercase tracking-widest">{t.about.stats.experience}</span>
                <span className="text-3xl font-black text-[#dddedd]">{t.about.stats.exp_value}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-[#34353b] uppercase tracking-widest">{t.about.stats.projects}</span>
                <span className="text-3xl font-black text-[#dddedd]">{t.about.stats.proj_value}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
