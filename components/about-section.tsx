"use client"

import { motion } from "framer-motion"
import { Target, Users, Zap, TrendingUp, Brain } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import { useMobile } from "@/hooks/use-mobile"

export default function AboutSection() {
  const { isMobile } = useMobile()

  const differentials = [
    {
      icon: <Target className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Estratégia orientada por dados",
      description: "Decisões baseadas em métricas reais e análises profundas",
    },
    {
      icon: <Users className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Atendimento consultivo",
      description: "Parceria estratégica focada no crescimento do seu negócio",
    },
    {
      icon: <Zap className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Soluções personalizadas",
      description: "Cada projeto é único e desenvolvido sob medida",
    },
    {
      icon: <TrendingUp className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Performance como foco final",
      description: "Resultados mensuráveis e crescimento sustentável",
    },
    {
      icon: <Brain className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Tecnologia aplicada à escala",
      description: "IA e automação para potencializar seus resultados",
    },
  ]

  return (
    <section id="sobre" className="py-16 md:py-20 relative">
      {/* Animated Background */}
      <AnimatedBackground variant="waves" />

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
            Muito além de uma agência. <span className="block text-[#1dc997]">Somos AIM3.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#dcdbde] max-w-3xl mx-auto leading-relaxed px-4">
            A AIM3 une marketing, tecnologia, design e inteligência artificial para impulsionar negócios que querem ir
            além do comum. Transformamos dados em estratégias e ideias em resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              className="group p-4 md:p-6 rounded-xl border border-[#383745]/30 bg-[#383745]/10 hover:bg-[#383745]/20 transition-all duration-300"
              style={{
                boxShadow: "0 0 20px rgba(29, 201, 151, 0.1)",
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
                      boxShadow: "0 0 30px rgba(29, 201, 151, 0.2)",
                      y: -5,
                    }
                  : {}
              }
            >
              <div
                className="w-10 md:w-12 h-10 md:h-12 bg-[#1dc997]/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 text-[#1dc997] group-hover:bg-[#1dc997]/30 transition-colors"
                style={{
                  boxShadow: "0 0 15px rgba(29, 201, 151, 0.3)",
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#1dc997] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-[#dcdbde] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
