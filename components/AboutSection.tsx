"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Globe } from "lucide-react"

const stats = [
  { icon: Server, value: "3+", label: "Projets backend" },
  { icon: Code, value: "5+", label: "Technologies maîtrisées" },
  { icon: Database, value: "3", label: "Bases de données" },
  { icon: Globe, value: "2", label: "Années d'expérience" },
]

export default function AboutSection() {
  return (
    <section id="à-propos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
            >
              À Propos
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] rounded-full mb-8" />

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Développeuse backend passionnée par JavaScript et les architectures robustes.
              Spécialisée dans la création d&apos;APIs performantes et sécurisées, j&apos;ai également
              une solide expérience en développement frontend avec React et Next.js.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mon expertise couvre l&apos;ensemble de l&apos;écosystème JavaScript moderne, de
              la conception de bases de données à la mise en production d&apos;applications full-stack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#141129] border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 transition-all duration-300 text-center group hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8B5CF6]/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div className="text-3xl font-bold text-[#8B5CF6] dark:text-[#A78BFA] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
