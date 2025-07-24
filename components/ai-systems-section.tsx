"use client"

import { motion } from "framer-motion"
import { Bot, Brain, BarChart3, Rocket, ImageIcon, Mic } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import { useMobile } from "@/hooks/use-mobile"

export default function AISystemsSection() {
  const { isMobile } = useMobile()

  const aiServices = [
    {
      icon: <Bot className="w-6 md:w-8 h-6 md:h-8" />,
      title: "AI Agents",
      description: "Assistentes inteligentes personalizados para seu negócio",
    },
    {
      icon: <Brain className="w-6 md:w-8 h-6 md:h-8" />,
      title: "AI Systems",
      description: "Sistemas completos com inteligência artificial integrada",
    },
    {
      icon: <BarChart3 className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Dashboards Inteligentes",
      description: "Painéis com insights automáticos e análises preditivas",
    },
    {
      icon: <Rocket className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Lançamentos com IA",
      description: "Estratégias de lançamento potencializadas por inteligência artificial",
    },
    {
      icon: <ImageIcon className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Geração de Conteúdo",
      description: "Logos, imagens e avatares criados com IA de última geração",
    },
    {
      icon: <Mic className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Clonagem de Voz",
      description: "Sincronização labial e clonagem de voz para conteúdos únicos",
    },
  ]

  return (
    <section id="ia-sistemas" className="py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="particles" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: isMobile ? 15 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: isMobile ? 0.8 : 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #1dc997 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(29, 201, 151, 0.3)",
            }}
          >
            Inteligência Artificial <span className="block text-[#1dc997]">e Sistemas</span>
          </h2>
          <p className="text-lg md:text-xl text-[#dcdbde] max-w-3xl mx-auto px-4">
            Tecnologia com inteligência. Sistemas que entregam resultados extraordinários.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl border border-[#1dc997]/30 bg-gradient-to-br from-[#383745]/20 to-[#0a0a0a]/50 hover:from-[#1dc997]/20 hover:to-[#1dc997]/10 transition-all duration-500"
              style={{
                boxShadow: "0 0 30px rgba(29, 201, 151, 0.1)",
              }}
              initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0.6 : 0.6,
                delay: isMobile ? index * 0.08 : index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: isMobile ? "-10px" : "-100px" }}
              whileHover={
                !isMobile
                  ? {
                      boxShadow: "0 0 50px rgba(29, 201, 151, 0.3)",
                      y: -10,
                    }
                  : {}
              }
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1dc997]/0 via-[#1dc997]/10 to-[#1dc997]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div
                  className="w-16 md:w-20 h-16 md:h-20 bg-[#1dc997]/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-[#1dc997] group-hover:bg-[#1dc997]/30 group-hover:scale-110 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 25px rgba(29, 201, 151, 0.4)",
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#1dc997] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-[#dcdbde] leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
