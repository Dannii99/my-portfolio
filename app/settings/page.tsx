"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { motion } from "framer-motion"
import { Settings as SettingsIcon, Languages } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function SettingsPage() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                <SettingsIcon className="h-6 w-6" />
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {t.settings_page.title}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t.settings_page.subtitle}
            </motion.p>
          </div>

          <div className="space-y-12">
            {/* Appearance Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 rounded-3xl bg-card/50 border border-border backdrop-blur-sm shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">{t.settings_page.appearance.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {t.settings_page.appearance.description}
                  </p>
                </div>
                <ThemeToggle />
              </div>
            </motion.section>

            {/* Language Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-10 rounded-3xl bg-card/50 border border-border backdrop-blur-sm shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                    <Languages className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">{t.settings_page.language.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      {t.settings_page.language.description}
                    </p>
                  </div>
                </div>
                <LanguageToggle />
              </div>
            </motion.section>

            {/* Placeholder for future settings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-10 rounded-3xl bg-muted/30 border border-border opacity-60"
            >
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-xl font-bold text-foreground opacity-50">{t.settings_page.general.title}</h2>
                <p className="text-sm text-muted-foreground italic">
                  {t.settings_page.general.coming_soon}
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
