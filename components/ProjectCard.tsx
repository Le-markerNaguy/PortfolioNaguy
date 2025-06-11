"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
      className={`
        relative group rounded-2xl overflow-hidden shadow-lg
        ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
        ${project.size === "tall" ? "md:row-span-2" : ""}
        ${project.size === "small" ? "md:row-span-1" : "md:row-span-1"}
        bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50
      `}
    >
      {/* Image */}
      <div className="relative h-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay au survol */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-[#B892FF]/90 via-[#B892FF]/50 to-transparent flex flex-col justify-end p-6"
        >
          <h3 className="text-white font-bold text-xl mb-2 font-serif">{project.title}</h3>

          <p className="text-white/90 text-sm mb-4">{project.description}</p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                {tech}
              </span>
            ))}
          </div>

          {/* Boutons */}
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demoUrl}
              className="flex items-center gap-2 bg-[#FFC2E2] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FFC2E2]/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Voir
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.codeUrl}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
