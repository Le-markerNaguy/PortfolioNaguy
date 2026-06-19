"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects, categories } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import type { Project } from "@/types"
import { Code, Server, Layout } from "lucide-react"

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
        return <Layout className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  return (
    <section
      id="projets"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl" />

      <div className="relative max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            Mes Projets
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] rounded-full mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Découvrez mes projets principaux de développement backend et frontend,
            chacun présentant des fonctionnalités spécifiques et des technologies modernes.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category
                  ? "bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/25"
                  : "bg-white dark:bg-[#141129] border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 text-gray-600 dark:text-gray-300"
              }`}
            >
              {getCategoryIcon(category)}
              <span>{category}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === category ? "bg-white/20" : "bg-[#8B5CF6]/10"
              }`}>
                {category === "Tous" ? projects.length : projects.filter((p) => p.category === category).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <div className="space-y-24">
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
