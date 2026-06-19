"use client"

import { motion } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = ["Accueil", "Compétences", "Projets", "À propos", "Contact"]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-[#0C0A1E]/70 border-b border-[#8B5CF6]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#accueil"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent"
        >
          Naguy.dev
        </motion.a>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              whileHover={{ scale: 1.05 }}
              className="hover:text-[#8B5CF6] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#10B981] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 transition-colors"
            aria-label="Changer le thème"
          >
            {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          <button
            className="md:hidden p-2 rounded-full bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/90 dark:bg-[#0C0A1E]/90 backdrop-blur-xl border-b border-[#8B5CF6]/10"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block py-2 hover:text-[#8B5CF6] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
