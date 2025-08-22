"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="accueil" className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Développeuse Backend JavaScript</h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">Naguy Juccede MINKUE MI NDONG</p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">Spécialisée APIs REST • Base de données</p>

            <p className="text-md text-gray-400 dark:text-gray-500 mb-8">
               • Passionnée de développement serveur
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(254, 212, 190, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("compétences")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-[#FED4BE] to-[#F8B8A0] text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Découvrir mes compétences
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-[#FED4BE] text-gray-800 dark:text-[#FED4BE] hover:bg-[#FED4BE] hover:text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Voir mes projets
              </motion.button>
            </div>
          </motion.div>

          {/* Photo en losange à droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Cadre losange */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-3xl transform rotate-45 overflow-hidden">
                  <div className="w-full h-full transform -rotate-45 scale-110">
                    <Image
                      src="/WhatsApp Image 2025-06-12 at 13.05.04.jpeg"
                      alt="Naguy - Développeuse Backend"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bouton de téléchargement du CV */}
              <div className="flex justify-center mt-6">
                <a
                  href="/MINKUE MI NDONG.pdf"
                  download
                  className="bg-gradient-to-r from-[#90A955] to-[#FED4BE] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-[#FED4BE] hover:to-[#90A955] hover:text-gray-800 transition-all duration-300 border-2 border-[#90A955]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger mon CV (PDF)
                </a>
              </div>

              {/* Éléments décoratifs */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#FED4BE] to-[#F8B8A0] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-gray-800 font-bold text-xl">JS</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#90A955] to-[#FED4BE] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-sm">BE</span>
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 w-8 h-8 bg-[#FED4BE] rounded-full opacity-20"
              ></motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-1/4 -right-6 w-6 h-6 bg-[#F8B8A0] rounded-full opacity-30"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
