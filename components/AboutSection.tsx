"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="à-propos" className="py-20 px-6 bg-gradient-to-br from-[#B892FF]/5 to-[#FFC2E2]/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-8 font-serif"
        >
          À Propos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
        >
          Développeuse backend passionnée par JavaScript et les architectures robustes. Spécialisée dans la création
          d'APIs performantes et sécurisées, j'ai également une solide expérience en développement frontend avec React
          et Next.js. Mon expertise couvre l'ensemble de l'écosystème JavaScript moderne.
        </motion.p>
      </div>
    </section>
  )
}
