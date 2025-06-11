"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/data/skills"
import { Server, Database, Shield, FileCode, RefreshCw, Settings, CheckCircle, Layers } from "lucide-react"
import type { JSX } from "react"

export default function SkillsSection() {
  // Mapping des icônes pour chaque compétence
  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      "Node.js": <Server className="w-5 h-5" />,
      "Express.js": <RefreshCw className="w-5 h-5" />,
      "APIs REST": <FileCode className="w-5 h-5" />,
      MongoDB: <Database className="w-5 h-5" />,
      Mongoose: <Database className="w-5 h-5" />,
      Prisma: <Layers className="w-5 h-5" />,
      Authentification: <Shield className="w-5 h-5" />,
      "Gestion des fichiers": <FileCode className="w-5 h-5" />,
      "Validation des données": <CheckCircle className="w-5 h-5" />,
    }

    return iconMap[skillName] || <Settings className="w-5 h-5" />
  }

  return (
    <section id="compétences" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif"
        >
          Compétences Backend
        </motion.h2>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Spécialisée dans le développement backend avec JavaScript, je maîtrise les technologies essentielles pour
            créer des APIs robustes et des serveurs performants avec des ORMs modernes.
          </p>
        </motion.div>

        {/* Compétences détaillées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillsData.backend.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#FED4BE]/30 dark:border-gray-700/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FED4BE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  {getSkillIcon(skill.name)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-[#FED4BE]">{skill.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies utilisées */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 font-serif">Stack Technique</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "Prisma",
              "PostgreSQL",
              "JWT",
              "bcrypt",
              "Multer",
              "Postman",
              "Git",
              "Heroku",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[#FED4BE]/10 border border-[#FED4BE]/30 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-[#FED4BE]/20 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Focus Backend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#FED4BE]/10 px-8 py-4 rounded-full border border-[#FED4BE]/30">
            <div className="w-12 h-12 bg-[#FED4BE] rounded-full flex items-center justify-center">
              <span className="text-gray-800 font-bold">BE</span>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-lg">Spécialisation Backend JavaScript</h4>
              <p className="text-gray-600 dark:text-gray-300">APIs REST • ORMs • Base de données • Serveurs web</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
