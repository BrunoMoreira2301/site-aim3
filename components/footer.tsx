"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/agencia.aim3/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/aim3-marketing-e-tech/",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      href: "#",
      label: "YouTube",
    },
  ]

  return (
    <footer className="py-16 border-t border-[#383745]/30 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#1dc997] to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-40 h-10">
                <Image
                  src="/images/logo-aim3.png"
                  alt="AIM3 Logo"
                  fill
                  className="object-contain brightness-110 text-white mx-[-23px]"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(29, 201, 151, 0.4))",
                  }}
                />
              </div>
            </Link>
            <p className="text-[#dcdbde] leading-relaxed mb-6 max-w-md">
              Mais que uma agência, somos aceleradores de negócios. Transformamos ideias em resultados através de
              tecnologia, estratégia e inteligência artificial.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#383745]/30 rounded-xl flex items-center justify-center text-[#dcdbde] hover:text-[#1dc997] hover:bg-[#1dc997]/20 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 10px rgba(29, 201, 151, 0.1)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(29, 201, 151, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1dc997]/20 rounded-lg flex items-center justify-center text-[#1dc997]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#dcdbde] text-sm">E-mail</p>
                  <a href="mailto:contato@aim3.com.br" className="text-white hover:text-[#1dc997] transition-colors">
                    contato@aim3.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1dc997]/20 rounded-lg flex items-center justify-center text-[#1dc997]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#dcdbde] text-sm">WhatsApp</p>
                  <a
                    href="http://wa.me/556136861323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#1dc997] transition-colors"
                  >
                    (61) 3686-1323
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Legal</h3>
            <div className="space-y-3">
              <Link
                href="/politica-privacidade"
                className="block text-[#dcdbde] hover:text-[#1dc997] transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="block text-[#dcdbde] hover:text-[#1dc997] transition-colors">
                Termos de Uso
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-[#383745]/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#dcdbde]/60">
            © 2025 AIM3. Todos os direitos reservados. Desenvolvido com <span className="text-[#1dc997]">♥</span> e
            muita tecnologia.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
