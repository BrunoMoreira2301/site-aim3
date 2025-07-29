"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function CTASection() {
  const handleCTAClick = () => {
    window.open("http://wa.me/556136861323?text=Olá! Vamos levar minha marca pro próximo nível!", "_blank")
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="particles" />

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1dc997]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1dc997]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1dc997]/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Floating Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[#1dc997]/20 border border-[#1dc997]/30 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-5 h-5 text-[#1dc997]" />
            <span className="text-[#1dc997] font-semibold">Transformação Digital</span>
          </motion.div>

          {/* Main CTA Headline */}
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #1dc997 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(29, 201, 151, 0.3)",
            }}
          >
            Vamos levar sua marca{" "}
            <span
              className="block text-[#1dc997]"
              style={{
                textShadow: "0 0 50px rgba(29, 201, 151, 0.6)",
              }}
            >
              pro próximo nível?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-[#dcdbde] mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Pare de perder oportunidades. Comece hoje mesmo a transformar seu negócio com
            <span className="text-[#1dc997] font-semibold"> tecnologia, estratégia e resultados reais.</span>
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={handleCTAClick}
            className="group bg-[#1dc997] text-[#0a0a0a] px-12 py-6 rounded-2xl font-bold text-xl inline-flex items-center gap-4 hover:bg-[#1dc997]/90 transition-all duration-300 cursor-pointer"
            style={{
              boxShadow: "0 0 40px rgba(29, 201, 151, 0.5)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(29, 201, 151, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Quero Impulsionar Meu Negócio
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-[#dcdbde]/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1dc997] rounded-full" />
              <span className="text-sm">Consultoria Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1dc997] rounded-full" />
              <span className="text-sm">Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1dc997] rounded-full" />
              <span className="text-sm">Resultados Garantidos</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
