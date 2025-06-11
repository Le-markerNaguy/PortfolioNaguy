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
            créer des APIs robustes et des serveurs performants avec des ORM modernes.
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
      </div>
    </section>
  )
}
