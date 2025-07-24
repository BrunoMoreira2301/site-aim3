"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isMobile } = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Throttle scroll events on mobile
    if (isMobile) {
      let ticking = false
      const throttledScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll()
            ticking = false
          })
          ticking = true
        }
      }
      window.addEventListener("scroll", throttledScroll, { passive: true })
      return () => window.removeEventListener("scroll", throttledScroll)
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "IA & Sistemas", href: "#ia-sistemas" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Contato", href: "#contato" },
  ]

  // Mobile-optimized animations
  const mobileVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const desktopVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#383745]/30" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={isMobile ? mobileVariants : desktopVariants}
      transition={{ duration: isMobile ? 0.3 : 0.6 }}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-28 md:w-32 h-7 md:h-8">
              <Image
                src="/images/logo-aim3.png"
                alt="AIM3 Logo"
                fill
                className="object-contain brightness-110"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(29, 201, 151, 0.3))",
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-[#dcdbde] hover:text-[#1dc997] transition-colors duration-300 font-medium group"
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1dc997] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <motion.button
            className="hidden md:flex items-center gap-3 bg-gradient-to-r from-[#1dc997] to-[#16a085] text-[#0a0a0a] px-6 py-3 rounded-xl font-semibold hover:from-[#16a085] hover:to-[#1dc997] transition-all duration-300 group"
            style={{
              boxShadow: "0 0 20px rgba(29, 201, 151, 0.4)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(29, 201, 151, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Quero Impulsionar Meu Negócio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-[#383745]/30 border border-[#1dc997]/30 text-[#dcdbde] hover:text-[#1dc997] hover:bg-[#1dc997]/10 transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-0 bg-[#0a0a0a] z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <nav className="flex flex-col items-center space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="text-xl font-semibold text-[#dcdbde] hover:text-[#1dc997] transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.button
                    className="mt-8 bg-gradient-to-r from-[#1dc997] to-[#16a085] text-[#0a0a0a] px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3"
                    style={{
                      boxShadow: "0 0 30px rgba(29, 201, 151, 0.4)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Quero Impulsionar Meu Negócio
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
