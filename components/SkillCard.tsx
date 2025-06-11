"use client"

import { motion } from "framer-motion"

interface SkillCardProps {
  title: string
  icon: string
  color: string
  textColor: string
  skills: string[]
  delay: number
}

export default function SkillCard({ title, icon, color, textColor, skills, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
    >
      <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mb-6`}>
        <span className="text-white font-bold text-xl">{icon}</span>
      </div>
      <h3 className={`text-xl font-bold mb-4 ${textColor}`}>{title}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center gap-3">
            <div className={`w-2 h-2 ${textColor.replace("text-", "bg-")} rounded-full`}></div>
            <span className="text-gray-600 dark:text-gray-300">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
