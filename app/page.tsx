"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Éviter l'hydratation côté client
  useEffect(() => {
    setMounted(true)
    // Vérifier les préférences de l'utilisateur
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-300 bg-[#fff9f7] dark:bg-[#1A1A2E] text-gray-900 dark:text-gray-100">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
