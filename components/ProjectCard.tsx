"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ExternalLink, Github, Calendar, Code } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types"
import { useRef } from "react"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseX.set(x)
      mouseY.set(y)
    }
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full max-w-7xl mx-auto group"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 xl:gap-12 items-center ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative lg:col-span-5 h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl ${
            isEven ? "" : "lg:col-start-8"
          }`}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.15), transparent 40%)",
            }}
          />
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30" />

          <div className="absolute top-5 left-5 z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-xl backdrop-blur-md border font-medium text-sm ${
                project.category === "Backend"
                  ? "bg-[#10B981]/90 text-white border-[#10B981]/50"
                  : project.category === "Fullstack"
                    ? "bg-[#8B5CF6]/90 text-white border-[#8B5CF6]/50"
                    : "bg-[#8B5CF6]/90 text-white border-[#8B5CF6]/50"
              }`}
            >
              {project.category}
            </motion.div>
          </div>

          <div className="absolute bottom-5 right-5 z-10">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <span className="text-white font-bold text-lg">0{project.id}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className={`lg:col-span-7 px-6 lg:px-0 py-8 lg:py-12 flex flex-col justify-center ${
            isEven ? "" : "lg:col-start-1 lg:col-end-8"
          }`}
        >
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#10B981]" />
              <span className="text-[#8B5CF6] dark:text-[#A78BFA] font-semibold text-sm uppercase tracking-wider">
                Projet 0{project.id}
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-3 font-serif text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code className="w-4 h-4" />
                <span>{project.tech.length} technologies</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#8B5CF6]/10 text-[#8B5CF6] dark:text-[#A78BFA] border border-[#8B5CF6]/20"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 6 && (
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500">
                  +{project.tech.length - 6}
                </span>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0 15px 35px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
            >
              <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              Voir la démo
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.codeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 border-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 group/btn ${
                project.codeUrl
                  ? "border-[#8B5CF6] text-[#8B5CF6] dark:text-[#A78BFA] hover:bg-[#8B5CF6] hover:text-white"
                  : "border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed"
              }`}
            >
              <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              Code source
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-bl from-[#8B5CF6]/5 to-transparent rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-[#10B981]/5 to-transparent rounded-full blur-xl pointer-events-none" />
    </motion.div>
  )
}
