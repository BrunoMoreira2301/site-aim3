"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export default function Footer() {
  const isMobile = useMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        staggerChildren: isMobile ? 0.06 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image src="/images/logo-aim3.png" alt="AIM3 Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold text-white">AIM3</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transformamos negócios através de soluções inteligentes de IA. Especialistas em automação, otimização e
              crescimento empresarial.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/agencia.aim3/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-[#1dc997] hover:bg-[#1dc997]/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/aim3-marketing-e-tech/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-[#1dc997] hover:bg-[#1dc997]/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                "Automação com IA",
                "Chatbots Inteligentes",
                "Análise de Dados",
                "Luna AI",
                "Consultoria Digital",
                "Integração de Sistemas",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-[#1dc997] transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#1dc997]" />
                <a
                  href="http://wa.me/556136861323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1dc997] transition-colors duration-300"
                >
                  (61) 3686-1323
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#1dc997]" />
                <a
                  href="mailto:contato@aim3.com.br"
                  className="text-gray-400 hover:text-[#1dc997] transition-colors duration-300"
                >
                  contato@aim3.com.br
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1dc997] mt-1" />
                <span className="text-gray-400">
                  Brasília, DF
                  <br />
                  Brasil
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 AIM3. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-[#1dc997] text-sm transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-[#1dc997] text-sm transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
