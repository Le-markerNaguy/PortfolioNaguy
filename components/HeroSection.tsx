"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden mesh-gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-10 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-sm text-[#8B5CF6] dark:text-[#A78BFA] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              Disponible pour de nouveaux projets
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif leading-tight">
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent bg-[length:200%] animate-gradient-shift">
                Développeuse
              </span>
              <br />
              Backend JavaScript
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              Naguy Juccede MINKUE MI NDONG
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              APIs REST · Node.js · React · Next.js
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("compétences")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Découvrir mes compétences
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-[#8B5CF6] text-[#8B5CF6] dark:text-[#A78BFA] hover:bg-[#8B5CF6] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Voir mes projets
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-[#10B981]/20 rounded-full blur-2xl animate-pulse-slow" />
                <div className="absolute inset-2 bg-white dark:bg-[#141129] rounded-[2rem] overflow-hidden border-2 border-[#8B5CF6]/20">
                  <Image
                    src="/WhatsApp Image 2025-06-12 at 13.05.04.jpeg"
                    alt="Naguy - Développeuse Backend"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href="/MINKUE MI NDONG.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-emerald-glow transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger mon CV (PDF)
                </a>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30"
              >
                <span className="text-white font-bold text-xl">JS</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center shadow-lg shadow-[#10B981]/30"
              >
                <span className="text-white font-bold text-sm">API</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
