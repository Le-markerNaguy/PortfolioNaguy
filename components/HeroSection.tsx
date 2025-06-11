"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="accueil" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#B892FF]/30">
            <Image
              src="/WhatsApp Image 2025-06-05 at 16.14.07 (1).jpeg"
              alt="Portrait"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Naguy Juccede MINKUE MI NDONG</h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Développeuse Backend Spécialisée JavaScript – Passionnée & Innovante
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(184, 146, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FFC2E2] to-[#B892FF] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explorer mes projets
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
