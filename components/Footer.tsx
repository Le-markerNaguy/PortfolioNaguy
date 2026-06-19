"use client"

import { Github, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-[#8B5CF6]/10 dark:border-gray-700/20 bg-white dark:bg-[#0C0A1E]">
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent mb-4">
              Naguy.dev
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              Développeuse Backend JavaScript spécialisée dans la création d&apos;APIs et serveurs web.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a
                href="https://github.com/Le-markerNaguy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:naguyjuccedem@gmail.com"
                className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Compétences", href: "#compétences" },
                { label: "Projets", href: "#projets" },
                { label: "À propos", href: "#à-propos" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">naguyjuccedem@gmail.com</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-xl text-sm font-medium hover:shadow-glow transition-all duration-300"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#8B5CF6]/10 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {currentYear} Naguy. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-[#8B5CF6] fill-[#8B5CF6]" /> par Naguy
          </p>
        </div>
      </div>
    </footer>
  )
}
