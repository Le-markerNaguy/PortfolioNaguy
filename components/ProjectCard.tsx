"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Code, Database } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full max-w-7xl mx-auto"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 xl:gap-12 items-center min-h-[500px] ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}
      >
        {/* Section Image - Positionnement optimal */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative lg:col-span-5 h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group ${
            isEven ? "" : "lg:col-start-8"
          }`}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            priority={index < 2}
          />

          {/* Overlay sophistiqué */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 group-hover:from-black/10 group-hover:to-black/30 transition-all duration-500"></div>

          {/* Badge catégorie - Position optimisée */}
          <div className="absolute top-6 left-6 z-10">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-5 py-2.5 rounded-2xl backdrop-blur-xl border shadow-xl font-semibold text-sm ${
                project.category === "Backend"
                    ? "bg-[#90A955]/95 text-white border-[#90A955]/60 shadow-[#90A955]/25"
                    : "bg-[#B892FF]/95 text-white border-[#B892FF]/60 shadow-[#B892FF]/25"
              }`}
            >
              {project.category}
            </motion.div>
          </div>

          {/* Numéro du projet - Position élégante */}
          <div className="absolute bottom-6 right-6 z-10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 bg-white/15 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-xl"
            >
              <span className="text-white font-bold text-xl">0{project.id}</span>
            </motion.div>
          </div>

          {/* Indicateur de hover */}
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FED4BE]/30 rounded-3xl transition-all duration-500"></div>
        </motion.div>

        {/* Section Contenu - Positionnement et espacement optimaux */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className={`lg:col-span-7 px-6 lg:px-0 py-8 lg:py-12 flex flex-col justify-center ${
            isEven ? "" : "lg:col-start-1 lg:col-end-8"
          }`}
        >
          {/* En-tête du projet - Hiérarchie claire */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#FED4BE] to-[#F8B8A0]"></div>
              <span className="text-[#FED4BE] font-semibold text-sm uppercase tracking-wider">
                Projet 0{project.id}
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 font-serif text-gray-900 dark:text-white leading-tight"
            >
              {project.title}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>{project.tech.length} technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span>Backend Focus</span>
              </div>
            </motion.div>
          </div>

          {/* Description - Espacement et lisibilité optimisés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="mb-10"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg xl:text-xl font-light">
              {project.description}
            </p>
          </motion.div>

          {/* Boutons d'action - Positionnement final optimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + index * 0.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0 15px 35px rgba(254, 212, 190, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#FED4BE] to-[#F8B8A0] text-gray-800 px-8 py-4 rounded-2xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 group min-w-[160px]"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Voir la démo
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-[#FED4BE] text-gray-700 dark:text-[#FED4BE] hover:bg-[#FED4BE] hover:text-gray-800 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 group min-w-[160px]"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Code source
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Éléments décoratifs positionnés */}
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-bl from-[#FED4BE]/5 to-transparent rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-[#90A955]/5 to-transparent rounded-full blur-xl"></div>
    </motion.div>
  )
}
