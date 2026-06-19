"use client"

import { motion } from "framer-motion"
import { Server, Database, Shield, FileCode, RefreshCw, Layers, CheckCircle, Zap, Terminal } from "lucide-react"

const bentoSkills = [
  {
    name: "Node.js",
    icon: Server,
    description: "Runtime JavaScript côté serveur performant et scalable.",
    details: ["APIs RESTful", "Middleware", "Event-driven"],
    size: "large",
    color: "#8B5CF6",
  },
  {
    name: "Express.js",
    icon: Terminal,
    description: "Framework web minimaliste et flexible pour Node.js.",
    details: ["Routing", "Middleware", "Gestion d'erreurs"],
    size: "small",
    color: "#10B981",
  },
  {
    name: "APIs REST",
    icon: RefreshCw,
    description: "Conception d'interfaces API robustes et documentées.",
    details: ["CRUD", "Authentification JWT", "Validation"],
    size: "small",
    color: "#8B5CF6",
  },
  {
    name: "MongoDB",
    icon: Database,
    description: "Base de données NoSQL orientée documents.",
    details: ["Modélisation", "Agrégations", "Indexation"],
    size: "small",
    color: "#10B981",
  },
  {
    name: "Prisma",
    icon: Layers,
    description: "ORM moderne pour Node.js et TypeScript.",
    details: ["Schémas", "Migrations", "Requêtes typées"],
    size: "small",
    color: "#8B5CF6",
  },
  {
    name: "Authentification",
    icon: Shield,
    description: "Systèmes d'authentification sécurisés.",
    details: ["JWT", "BCrypt", "Sessions"],
    size: "large",
    color: "#10B981",
  },
  {
    name: "Validation & Sécurité",
    icon: CheckCircle,
    description: "Bonnes pratiques de sécurisation des données.",
    details: ["Validation Zod", "CORS", "Helmet"],
    size: "small",
    color: "#8B5CF6",
  },
  {
    name: "Performance",
    icon: Zap,
    description: "Optimisation et scalabilité des applications.",
    details: ["Caching", "Load Balancing", "Async/Await"],
    size: "small",
    color: "#10B981",
  },
]

export default function SkillsSection() {
  return (
    <section id="compétences" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Compétences Backend</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {bentoSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-[#141129] border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 transition-all duration-300 p-5 ${
                skill.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--skill-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full flex flex-col">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">{skill.description}</p>

                {skill.size === "large" && (
                  <ul className="mt-auto space-y-1">
                    {skill.details.map((detail) => (
                      <li key={detail} className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: skill.color }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
