"use client"

import { Github, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-[#FED4BE]/20 dark:border-gray-700/50 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FED4BE] to-[#F8B8A0] bg-clip-text text-transparent mb-4">
              Naguy.dev
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Développeuse Backend JavaScript spécialisée dans la création d'APIs et serveurs web avec MongoDB et
              Prisma.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/Le-markerNaguy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FED4BE]/10 flex items-center justify-center hover:bg-[#FED4BE]/30 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:naguyjuccedem@gmail.com"
                className="w-10 h-10 rounded-full bg-[#FED4BE]/10 flex items-center justify-center hover:bg-[#FED4BE]/30 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-600 dark:text-gray-300 hover:text-[#FED4BE] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#compétences"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#FED4BE] transition-colors"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projets" className="text-gray-600 dark:text-gray-300 hover:text-[#FED4BE] transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#à-propos" className="text-gray-600 dark:text-gray-300 hover:text-[#FED4BE] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[#FED4BE] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">naguyjuccedem@gmail.com</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FED4BE] text-gray-800 rounded-lg text-sm font-medium hover:bg-[#F8B8A0] transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Me contacter
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#FED4BE]/10 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} Naguy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
