"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects, categories } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import type { Project } from "@/types"
import { Code, Server } from "lucide-react"

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Tous")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  useEffect(() => {
    if (activeFilter === "Tous") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Backend":
        return <Server className="w-4 h-4" />
      case "Fullstack":
        return <Code className="w-4 h-4" />
      case "Frontend":
        return <Code className="w-4 h-4" />
      default:
        return <Server className="w-4 h-4" />
    }
  }

  return (
    <section
      id="projets"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF9F7] via-white to-[#FFF0EB] dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FED4BE]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#90A955]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto">
        {/* En-tête de section - Centrage parfait */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-serif leading-tight"
          >
            Mes Projets
            <br />
            <span className="bg-gradient-to-r from-[#FED4BE] to-[#F8B8A0] bg-clip-text text-transparent">Backend</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Découvrez mes 5 projets principaux de développement backend, chacun présentant des fonctionnalités
            spécifiques et des technologies modernes pour créer des solutions serveur robustes et performantes.
          </motion.p>
        </div>

        {/* Filtres - Positionnement central optimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg backdrop-blur-sm ${activeFilter === category
                  ? "bg-gradient-to-r from-[#FED4BE] to-[#F8B8A0] text-gray-800 shadow-[#FED4BE]/25"
                  : "bg-white/80 dark:bg-gray-800/80 hover:bg-[#FED4BE]/10 border border-gray-200 dark:border-gray-700"
                }`}
            >
              {getCategoryIcon(category)}
              <span className="text-base">{category}</span>
              <span className="ml-1 text-sm opacity-75 bg-black/10 dark:bg-white/10 px-3 py-1 rounded-full">
                {category === "Tous" ? projects.length : projects.filter((p) => p.category === category).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Liste des projets - Espacement optimal entre chaque projet */}
        <div className="space-y-32">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
