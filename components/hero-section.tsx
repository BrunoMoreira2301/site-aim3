"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import AnimatedBackground from "./animated-background"
import { useMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const isMobile = useMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        staggerChildren: isMobile ? 0.08 : 0.15,
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

  const buttonVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: "easeOut",
        delay: isMobile ? 0.5 : 0.7,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <AnimatedBackground variant="hero" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1dc997]/10 border border-[#1dc997]/20 text-[#1dc997] text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Inteligência Artificial para Empresas
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme seu negócio com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1dc997] to-[#16a085]">
              IA Avançada
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Soluções personalizadas de Inteligência Artificial que impulsionam resultados reais. Automatize processos,
            otimize decisões e acelere o crescimento da sua empresa.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <div className="flex items-center text-gray-400">
              <Zap className="w-5 h-5 mr-2 text-[#1dc997]" />
              <span>Implementação em 30 dias</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Target className="w-5 h-5 mr-2 text-[#1dc997]" />
              <span>ROI comprovado</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Sparkles className="w-5 h-5 mr-2 text-[#1dc997]" />
              <span>Suporte 24/7</span>
            </div>
          </motion.div>

          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#1dc997] hover:bg-[#16a085] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1dc997]/25"
              onClick={() =>
                window.open(
                  "http://wa.me/556136861323?text=Olá! Quero impulsionar meu negócio com IA. Podem me ajudar?",
                  "_blank",
                )
              }
            >
              Quero Impulsionar Meu Negócio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#1dc997] text-[#1dc997] hover:bg-[#1dc997] hover:text-black px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() =>
                window.open(
                  "http://wa.me/556136861323?text=Olá! Gostaria de falar com um especialista em IA da AIM3.",
                  "_blank",
                )
              }
            >
              Fale com um Especialista
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/50 pointer-events-none" />
    </section>
  )
}
