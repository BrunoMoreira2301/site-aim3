"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import AnimatedBackground from "./animated-background"
import { useMobile } from "@/hooks/use-mobile"

export default function CTASection() {
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

  return (
    <section id="contato" className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      <AnimatedBackground variant="cta" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1dc997]/10 border border-[#1dc997]/20 text-[#1dc997] text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Transformação Digital
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1dc997] to-[#16a085]">
              revolucionar
            </span>{" "}
            seu negócio?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-12 leading-relaxed">
            Junte-se a centenas de empresas que já transformaram seus resultados com nossas soluções de IA. Comece sua
            jornada de transformação digital hoje mesmo.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <div className="flex items-center text-gray-400">
              <Sparkles className="w-5 h-5 mr-2 text-[#1dc997]" />
              <span>Consultoria gratuita</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Zap className="w-5 h-5 mr-2 text-[#1dc997]" />
              <span>Implementação rápida</span>
            </div>
            <div className="flex items-center text-gray-400">
              <ArrowRight className="w-5 h-5 mr-2 text-[#1dc997]" />
              <span>Resultados garantidos</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  )
}
