"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import { useMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const { isMobile } = useMobile()

  // Mobile-optimized animations with smoother transitions
  const mobileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const desktopVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const handleCTAClick = () => {
    window.open("http://wa.me/556136861323?text=Olá! Quero falar com um especialista da AIM3!", "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="grid" />
      <AnimatedBackground variant="dots" />

      {/* Simplified gradient overlays for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-96 h-80 md:h-96 bg-[#1dc997]/20 rounded-full blur-3xl" />
        {!isMobile && <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#1dc997]/10 rounded-full blur-2xl" />}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={isMobile ? mobileVariants : desktopVariants}
          transition={{
            duration: isMobile ? 0.8 : 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[#383745]/30 border border-[#1dc997]/30 rounded-full px-4 py-2 mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: isMobile ? 0.6 : 0.6,
              delay: isMobile ? 0.4 : 0.4,
              ease: "easeOut",
            }}
          >
            <Sparkles className="w-4 h-4 text-[#1dc997]" />
            <span className="text-[#dcdbde] text-sm font-medium">Tecnologia + Marketing + IA</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0.7 : 0.8,
              delay: isMobile ? 0.5 : 0.6,
              ease: "easeOut",
            }}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #1dc997 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(29, 201, 151, 0.3)",
            }}
          >
            Mais que Marketing,{" "}
            <span
              className="block text-[#1dc997]"
              style={{
                textShadow: "0 0 30px rgba(29, 201, 151, 0.5)",
              }}
            >
              somos Aceleradores
            </span>
            de Negócios.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-[#dcdbde] mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0.7 : 0.8,
              delay: isMobile ? 0.6 : 0.8,
              ease: "easeOut",
            }}
          >
            Soluções criativas, tecnológicas e orientadas por dados para{" "}
            <span className="text-[#1dc997] font-semibold">escalar sua marca com inteligência.</span>
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={handleCTAClick}
            className="group bg-gradient-to-r from-[#1dc997] to-[#16a085] text-[#0a0a0a] px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg inline-flex items-center gap-3 hover:from-[#16a085] hover:to-[#1dc997] transition-all duration-300 cursor-pointer"
            style={{
              boxShadow: "0 0 30px rgba(29, 201, 151, 0.4)",
            }}
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0.7 : 0.8,
              delay: isMobile ? 0.7 : 1,
              ease: "easeOut",
            }}
            whileHover={
              !isMobile
                ? {
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(29, 201, 151, 0.6)",
                  }
                : {}
            }
            whileTap={{ scale: 0.98 }}
          >
            Fale com um Especialista
            <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
