"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Zap, Shield, ArrowRight } from "lucide-react"
import AnimatedBackground from "./animated-background"
import { useMobile } from "@/hooks/use-mobile"

export default function LunaSection() {
  const isMobile = useMobile()

  const features = [
    {
      icon: MessageSquare,
      title: "Conversas Naturais",
      description: "Interface intuitiva que entende contexto e nuances da comunicação humana",
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Processamento em tempo real com latência ultra-baixa para experiência fluida",
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Criptografia de ponta a ponta e conformidade com LGPD e regulamentações internacionais",
    },
  ]

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
    <section id="luna" className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      <AnimatedBackground variant="luna" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1dc997]/10 border border-[#1dc997]/20 text-[#1dc997] text-sm font-medium">
              <Bot className="w-4 h-4 mr-2" />
              Assistente IA Avançada
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6">
            Conheça a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1dc997] to-[#16a085]">Luna AI</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nossa assistente de IA mais avançada, projetada para revolucionar a forma como sua empresa interage com
            clientes, processa informações e toma decisões estratégicas.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1dc997]/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1dc997]/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#1dc997]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Luna AI Visualization */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-3xl bg-gradient-to-br from-[#1dc997]/20 to-[#16a085]/20 border border-[#1dc997]/30 overflow-hidden">
              {/* Luna AI Interface Mockup */}
              <div className="absolute inset-4 bg-[#0a0a0a]/80 rounded-2xl border border-white/10 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#1dc997] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Luna AI</h4>
                    <p className="text-xs text-gray-400">Online agora</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#1dc997]/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">Olá! Como posso ajudar sua empresa hoje?</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 max-w-xs ml-auto">
                    <p className="text-sm text-white">Preciso de análise de dados de vendas</p>
                  </div>
                  <div className="bg-[#1dc997]/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">Perfeito! Analisando seus dados... ✨</p>
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#1dc997] rounded-full"
                    animate={{
                      x: [0, Math.random() * 400],
                      y: [0, Math.random() * 400],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      left: Math.random() * 100 + "%",
                      top: Math.random() * 100 + "%",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-[#1dc997] hover:bg-[#16a085] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1dc997]/25"
            onClick={() =>
              window.open(
                "http://wa.me/556136861323?text=Olá! Gostaria de conhecer mais sobre a Luna AI e suas funcionalidades.",
                "_blank",
              )
            }
          >
            Conhecer Luna AI
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
