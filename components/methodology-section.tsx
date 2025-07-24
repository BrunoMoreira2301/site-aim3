"use client"

import { motion } from "framer-motion"
import { Search, Target, Zap, TrendingUp, BarChart3 } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function MethodologySection() {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Diagnóstico Profundo",
      description: "Análise completa do seu negócio, mercado e concorrência para identificar oportunidades únicas",
    },
    {
      number: "02",
      icon: <Target className="w-8 h-8" />,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de estratégias personalizadas baseadas em dados e objetivos específicos",
    },
    {
      number: "03",
      icon: <Zap className="w-8 h-8" />,
      title: "Execução com Performance",
      description: "Implementação ágil e precisa de todas as ações planejadas com foco em resultados",
    },
    {
      number: "04",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Otimização Contínua",
      description: "Monitoramento constante e ajustes baseados em performance para maximizar resultados",
    },
    {
      number: "05",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Entrega com Métricas",
      description: "Relatórios detalhados e transparentes que comprovam o ROI e crescimento alcançado",
    },
  ]

  return (
    <section id="metodologia" className="py-20 relative">
      {/* Animated Background */}
      <AnimatedBackground variant="grid" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #1dc997 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(29, 201, 151, 0.3)",
            }}
          >
            Como Atuamos
          </h2>
          <p className="text-xl text-[#dcdbde] max-w-3xl mx-auto">
            Nossa metodologia comprovada em 5 etapas que garantem resultados excepcionais
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1dc997] to-[#1dc997]/20"
            style={{
              boxShadow: "0 0 20px rgba(29, 201, 151, 0.5)",
            }}
          />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    className="inline-block p-8 rounded-2xl border border-[#1dc997]/30 bg-gradient-to-br from-[#383745]/20 to-[#0a0a0a]/50 hover:from-[#1dc997]/20 hover:to-[#1dc997]/10 transition-all duration-500"
                    style={{
                      boxShadow: "0 0 30px rgba(29, 201, 151, 0.1)",
                    }}
                    whileHover={{
                      boxShadow: "0 0 50px rgba(29, 201, 151, 0.3)",
                      y: -10,
                    }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-16 h-16 bg-[#1dc997]/20 rounded-xl flex items-center justify-center text-[#1dc997]"
                        style={{
                          boxShadow: "0 0 20px rgba(29, 201, 151, 0.4)",
                        }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-[#1dc997] text-sm font-semibold">ETAPA {step.number}</span>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#dcdbde] leading-relaxed text-lg">{step.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative">
                  <motion.div
                    className="w-6 h-6 bg-[#1dc997] rounded-full border-4 border-[#0a0a0a]"
                    style={{
                      boxShadow: "0 0 20px rgba(29, 201, 151, 0.8)",
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
