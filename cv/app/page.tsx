"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Mail, ExternalLink, Phone, Globe } from "lucide-react"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import Image from "next/image"

export default function CV() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)
    const cvElement = document.getElementById("cv-content")

    if (!cvElement) {
      setIsGenerating(false)
      return
    }

    try {
      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save("CV_MINKEU_MI_NDONG_Naguy_2024.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f0ea]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <Button onClick={generatePDF} disabled={isGenerating} className="bg-[#f8b8a0] hover:bg-[#f6a78e] text-black">
            <Download className="mr-2 h-4 w-4" />
            {isGenerating ? "Génération..." : "Télécharger PDF"}
          </Button>
        </div>

        <div
          id="cv-content"
          className="bg-white p-8 max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden relative"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, #f8b8a0 0%, transparent 300px), radial-gradient(circle at bottom left, #f8b8a0 0%, transparent 300px)",
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="md:w-2/5 pr-0 md:pr-6 pb-6 md:pb-0">
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/WhatsApp Image 2025-06-12 at 13.05.04.jpeg"
                    alt="MINKEU MI NDONG Naguy Juccede"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 mr-2 text-gray-600" />
                  <span>077789320</span>
                </div>
                <div className="flex items-center mb-2">
                  <Mail className="h-4 w-4 mr-2 text-gray-600" />
                  <span>naguyjuccedem@gmail.com</span>
                </div>
                <div className="flex items-center mb-2">
                  <Globe className="h-4 w-4 mr-2 text-gray-600" />
                  <a
                    href="https://portfolio-naguy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    portfolio-naguy.vercel.app
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-4 w-4 mr-2 text-gray-600" />
                  <a
                    href="https://github.com/Le-markerNaguy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/Le-markerNaguy
                  </a>
                </div>
              </div>

              {/* Passions */}
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-[#e9dfd5] rounded-full mb-4 font-medium">PASSIONS</div>
                <div className="space-y-4">
                  <div>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>Lecture</li>
                      <li>Voyages</li>
                      <li>Technologies Web</li>
                      <li>Développement personnel</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projets */}
              <div>
                <div className="inline-block px-4 py-1 bg-[#e9dfd5] rounded-full mb-4 font-medium">PROJETS</div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Gestion de tâches</h4>
                    <p className="text-sm text-gray-700 mb-1">Next.js 14, Prisma, PostgreSQL</p>
                    <p className="text-sm text-gray-700 mb-1">Todo-list avec authentification sécurisée.</p>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/Le-markerNaguy/TodoListe.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-blue-600 hover:underline"
                      >
                        <Github className="h-3 w-3 mr-1" /> GitHub
                      </a>
                      <a
                        href="https://todo-liste-kui1.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-blue-600 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" /> Demo
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Inscription anniversaire</h4>
                    <p className="text-sm text-gray-700 mb-1">Next.js 14, Prisma, PostgreSQL</p>
                    <p className="text-sm text-gray-700 mb-1">Système d'inscription avec confirmation par email.</p>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/Le-markerNaguy/anniversaire.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-blue-600 hover:underline"
                      >
                        <Github className="h-3 w-3 mr-1" /> GitHub
                      </a>
                      <a
                        href="https://anniversaire-6xa3.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-blue-600 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" /> Demo
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Landing page politique</h4>
                    <p className="text-sm text-gray-700 mb-1">Next.js, React, TypeScript</p>
                    <p className="text-sm text-gray-700 mb-1">Site vitrine responsive avec optimisation SEO.</p>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/Le-markerNaguy/projetGABON9.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-blue-600 hover:underline"
                      >
                        <Github className="h-3 w-3 mr-1" /> GitHub
                      </a>
                      <a
                        href="https://projet-gabon-9.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-blue-600 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-3/5">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-1">MINKEU MI NDONG NAGUY JUCCEDE</h1>
                <h2 className="text-xl font-medium text-gray-700 mb-4">Développeuse Backend JavaScript</h2>

                <h3 className="font-medium mb-2">Bonjour,</h3>
                <p className="text-gray-700 mb-6">
                  Développeuse passionnée par la création de solutions numériques performantes, je combine créativité et
                  rigueur technique pour des projets web optimisés. Spécialisée dans le développement backend avec
                  JavaScript et la création d'interfaces utilisateur modernes.
                </p>
              </div>

              {/* Expérience Professionnelle */}
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-[#e9dfd5] rounded-full mb-4 font-medium">COMPÉTENCES</div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Frontend</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>Création d'interfaces avec React et Next.js</li>
                      <li>Développement responsive pour tous appareils</li>
                      <li>Intégration avec Tailwind CSS et TypeScript</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Backend</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>Développement d'APIs avec Node.js</li>
                      <li>Gestion de bases de données PostgreSQL</li>
                      <li>Authentification sécurisée (JWT, bcrypt)</li>
                      <li>Intégration avec Prisma ORM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Outils</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>Gestion de versions avec Git et GitHub</li>
                      <li>Déploiement sur Vercel</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Formation */}
              <div>
                <div className="inline-block px-4 py-1 bg-[#e9dfd5] rounded-full mb-4 font-medium">FORMATION</div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-[#f8b8a0] mr-2"></div>
                      <h3 className="font-medium">2024-2025</h3>
                    </div>
                    <h4 className="font-medium mb-1">Diplôme en Informatique</h4>
                    <p className="text-sm text-gray-600">Université</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-[#f8b8a0] mr-2"></div>
                      <h3 className="font-medium">2025</h3>
                    </div>
                    <h4 className="font-medium mb-1">Certification Développeur Web</h4>
                    <p className="text-sm text-gray-600">école 241</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>CV professionnel - MINKEU MI NDONG Naguy Juccede - 2025</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
