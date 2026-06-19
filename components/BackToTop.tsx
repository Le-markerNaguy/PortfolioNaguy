"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const { scrollYProgress } = useScroll()
  const threshold = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#8B5CF6] text-white shadow-glow flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
      style={{ opacity: useSpring(scrollYProgress, { stiffness: 50, damping: 20 }) }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: scrollYProgress.get() > 0.2 ? 1 : 0, opacity: scrollYProgress.get() > 0.2 ? 1 : 0 }}
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  )
}
