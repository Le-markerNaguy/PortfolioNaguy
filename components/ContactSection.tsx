"use client"

import { motion } from "framer-motion"
import { Mail, Github, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const socialLinks = [
    { icon: Mail, href: "mailto:naguyjuccedem@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/Le-markerNaguy", label: "GitHub" },
  ]

  function validate() {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = "Le nom est requis"
    if (!email.trim()) errs.email = "L'email est requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Email invalide"
    if (!message.trim()) errs.message = "Le message est requis"
    else if (message.trim().length < 10) errs.message = "Minimum 10 caractères"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus(null)

    if (!validate()) return

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-serif"
        >
          Contact
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] rounded-full mx-auto mb-6" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
        >
          Une idée de projet ? Discutons-en !
        </motion.p>

        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#10B981]/10 flex items-center justify-center text-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#7C3AED] hover:text-white shadow-lg hover:shadow-glow transition-all duration-300"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="text-left">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nom
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: "" })) }}
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#141129] focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all ${
                  errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: "" })) }}
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#141129] focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all ${
                  errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="text-left">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => { setMessage(e.target.value); setErrors((prev) => ({ ...prev, message: "" })) }}
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#141129] focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all resize-none ${
                  errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Envoyer le message
            </motion.button>
          </form>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] flex items-center gap-2 justify-center"
            >
              <CheckCircle className="w-5 h-5" />
              Message envoyé avec succès !
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-2 justify-center"
            >
              <AlertCircle className="w-5 h-5" />
              Une erreur est survenue. Réessaie plus tard.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
