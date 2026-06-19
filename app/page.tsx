"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import BackToTop from "@/components/BackToTop"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0C0A1E] text-gray-900 dark:text-gray-100 noise-overlay">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  )
}
