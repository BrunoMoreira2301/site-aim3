"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, User, Mail, Phone, Building, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #1dc997 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(29, 201, 151, 0.3)",
              }}
            >
              Fale com Nossos Especialistas
            </h2>
            <p className="text-xl text-[#dcdbde] max-w-2xl mx-auto">
              Preencha o formulário e receba uma consultoria personalizada para seu negócio
            </p>
          </div>

          <motion.div
            className="p-8 md:p-12 rounded-3xl border border-[#1dc997]/30 bg-gradient-to-br from-[#383745]/20 to-[#0a0a0a]/50"
            style={{
              boxShadow: "0 0 50px rgba(29, 201, 151, 0.1)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1dc997]">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-[#383745]/30 border border-[#383745]/50 rounded-xl text-white placeholder-[#dcdbde]/60 focus:border-[#1dc997] focus:outline-none transition-colors"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1dc997]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-[#383745]/30 border border-[#383745]/50 rounded-xl text-white placeholder-[#dcdbde]/60 focus:border-[#1dc997] focus:outline-none transition-colors"
                    required
                  />
                </motion.div>

                {/* WhatsApp Field */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1dc997]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp com DDD"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-[#383745]/30 border border-[#383745]/50 rounded-xl text-white placeholder-[#dcdbde]/60 focus:border-[#1dc997] focus:outline-none transition-colors"
                    required
                  />
                </motion.div>

                {/* Company Field */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1dc997]">
                    <Building className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-[#383745]/30 border border-[#383745]/50 rounded-xl text-white placeholder-[#dcdbde]/60 focus:border-[#1dc997] focus:outline-none transition-colors"
                  />
                </motion.div>
              </div>

              {/* Message Field */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-4 top-6 text-[#1dc997]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea
                  name="message"
                  placeholder="Conte-nos sobre seu projeto e objetivos..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 bg-[#383745]/30 border border-[#383745]/50 rounded-xl text-white placeholder-[#dcdbde]/60 focus:border-[#1dc997] focus:outline-none transition-colors resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="group bg-[#1dc997] text-[#0a0a0a] px-12 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3 hover:bg-[#1dc997]/90 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 30px rgba(29, 201, 151, 0.4)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(29, 201, 151, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Falar com um Especialista
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
