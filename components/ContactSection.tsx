"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<string | null>(null)

  const socialLinks = [
    { icon: Mail, href: "mailto:naguy.minkue@example.com", color: "#FFC2E2" },
    { icon: Linkedin, href: "#", color: "#B892FF" },
    { icon: Github, href: "#", color: "#90A955" },
    { icon: Twitter, href: "#", color: "#FFC2E2" },
  ]

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus(null)

    if (!name || !email || !message) {
      setStatus("Veuillez remplir tous les champs.")
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("Message envoyé avec succès !")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus(`Échec de l'envoi du message: ${data.message || "Erreur inconnue"}`)
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error)
      setStatus("Une erreur est survenue lors de l'envoi du message.")
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-8 font-serif"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
        >
          Une idée de projet ? Discutons-en !
        </motion.p>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: social.color }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#B892FF] focus:border-transparent outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#B892FF] focus:border-transparent outline-none transition-all"
            />
            <textarea
              placeholder="Votre message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#B892FF] focus:border-transparent outline-none transition-all resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFC2E2] to-[#B892FF] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Envoyer le message
            </motion.button>
          </form>
          {status && (
            <p className={`mt-4 text-center ${status.includes("succès") ? "text-green-500" : "text-red-500"}`}>
              {status}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
