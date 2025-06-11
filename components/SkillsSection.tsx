"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/data/skills"
import SkillCard from "./SkillCard"

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#90A955]/5 to-[#B892FF]/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif"
        >
          Expertise Technique
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title={skillsData.backend.title}
            icon={skillsData.backend.icon}
            color={skillsData.backend.color}
            textColor={skillsData.backend.textColor}
            skills={skillsData.backend.skills}
            delay={0.1}
          />
          <SkillCard
            title={skillsData.frontend.title}
            icon={skillsData.frontend.icon}
            color={skillsData.frontend.color}
            textColor={skillsData.frontend.textColor}
            skills={skillsData.frontend.skills}
            delay={0.2}
          />
          <SkillCard
            title={skillsData.devops.title}
            icon={skillsData.devops.icon}
            color={skillsData.devops.color}
            textColor={skillsData.devops.textColor}
            skills={skillsData.devops.skills}
            delay={0.3}
          />
        </div>

        {/* JavaScript Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#B892FF]/10 to-[#FFC2E2]/10 px-8 py-4 rounded-full border border-[#B892FF]/20">
            <div className="w-12 h-12 bg-gradient-to-r from-[#B892FF] to-[#FFC2E2] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">JS</span>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-lg">Spécialisation JavaScript</h4>
              <p className="text-gray-600 dark:text-gray-300">Écosystème complet : Frontend, Backend & Mobile</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
