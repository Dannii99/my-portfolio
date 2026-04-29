"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Work() {
  const { t, locale } = useLanguage()

  const projects = [
    {
      title: t.work.projects[0].title,
      description: t.work.projects[0].description,
      image: "/img/pokemon-go.png", 
      tags: ["React", "CSS3", "Tailwind CSS", "API Rest", "stitch", "Vercel"],
      link: "https://pokemon-go-rosy.vercel.app/",
      github: "https://github.com/Dannii99/pokemon-go",
      live_text: t.work.projects[0].live,
      source_text: t.work.projects[0].source,
    },
    {
      title: t.work.projects[1].title,
      description: t.work.projects[1].description,
      image: "/img/yupi-tv.png",
      tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "IA", "Vercel"],
      link: "https://yupy-tv.vercel.app/",
      github: "https://github.com/Dannii99/yupy-tv",
      live_text: t.work.projects[1].live,
      source_text: t.work.projects[1].source,
    },
    {
      title: t.work.projects[2].title,
      description: t.work.projects[2].description,
      image: "/img/invitacion-boda.png",
      tags: ["Angular", "typescript", "Tailwind CSS", "iframe", "Vercel"],
      link: "https://wedding-invitation-one.vercel.app/",
      github: "https://github.com/Dannii99/Wedding-invitation",
      live_text: t.work.projects[2].live,
      source_text: t.work.projects[2].source,
    },
    {
      title: t.work.projects[3].title,
      description: t.work.projects[3].description,
      image: "/img/food.png",
      tags: ["React", "typescript", "Tailwind CSS", "Vercel"],
      link: "https://fresh-fridge-jet.vercel.app/",
      github: "https://github.com/Dannii99/fresh-fridge",
      live_text: t.work.projects[3].live,
      source_text: t.work.projects[3].source,
    },
  ]

  return (
    <section id="work" className="w-full py-32 px-6 bg-[#161616] overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-7xl lg:text-[10rem] font-black tracking-tighter text-[#dddedd] uppercase leading-[0.8]"
          >
            {t.work.title.split(" ")[0]} <br />
            <span className="text-[#585a5f]">{t.work.title.split(" ").slice(1).join(" ")}</span>
          </motion.h2>
        </div>

        <div className="relative pb-20">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-[#34353b] !opacity-100 !rounded-none !w-8 !h-1',
              bulletActiveClass: '!bg-[#dddedd] !w-16',
            }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="w-full py-10! md:py-16! lg:py-20!"
          >
            {projects.map((project, index) => (
              <SwiperSlide 
                key={project.title} 
                className="!w-[320px] md:!w-[600px] group select-none"
              >
                {({ isActive }) => (
                  <div className={`transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90 grayscale'}`}>
                    <div className="bg-[#34353b] p-1">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-[#161616]/40 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                      </div>
                      
                      <div className="p-8 md:p-12 bg-[#161616] mt-1">
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-black uppercase tracking-tighter text-[#dddedd] bg-[#34353b] px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="font-heading text-3xl md:text-5xl font-black text-[#dddedd] uppercase tracking-tighter mb-6">
                          {project.title}
                        </h3>
                        
                        <p className="text-[#585a5f] text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed line-clamp-3 mb-10">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center gap-10 pt-8 border-t border-[#34353b]">
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#dddedd] hover:text-[#585a5f] transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {project.live_text}
                          </a>
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#dddedd] hover:text-[#585a5f] transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            {project.source_text}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button className="swiper-button-prev-custom h-14 w-14 flex items-center justify-center border border-[#34353b] text-[#dddedd] hover:bg-[#dddedd] hover:text-[#161616] transition-all active:scale-90">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="swiper-button-next-custom h-14 w-14 flex items-center justify-center border border-[#34353b] text-[#dddedd] hover:bg-[#dddedd] hover:text-[#161616] transition-all active:scale-90">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullets {
          bottom: 0 !important;
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .swiper-pagination-bullet {
          transition: all 0.5s ease-in-out !important;
        }
      `}</style>
    </section>
  )
}
