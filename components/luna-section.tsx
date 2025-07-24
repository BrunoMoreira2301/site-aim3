"use client"

import { motion } from "framer-motion"
import { Calendar, ShoppingCart, Headphones, Zap, Clock, Star } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function LunaSection() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Agendamentos Inteligentes",
      description: "Sistema automatizado de agendamento com confirmações e lembretes",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Vendas com IA",
      description: "Assistente de vendas que qualifica leads e fecha negócios",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Suporte 24/7",
      description: "Atendimento inteligente que nunca para de funcionar",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Integrações Completas",
      description: "Conecta com CRMs, APIs e todos os seus sistemas existentes",
    },
  ]

  const useCases = [
    "Psicologia e Terapia",
    "Clínicas de Estética",
    "Consultórios Médicos",
    "Infoprodutores",
    "Coaches e Mentores",
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="waves" />

      {/* Luna Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1dc997]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#1dc997]/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#1dc997]/20 border border-[#1dc997]/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-[#1dc997]" />
            <span className="text-[#1dc997] font-semibold">Exclusivo AIM3</span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #1dc997 0%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(29, 201, 151, 0.5)",
            }}
          >
            Luna AI System
          </h2>
          <p className="text-xl text-[#dcdbde] max-w-3xl mx-auto mb-8">
            O sistema de inteligência artificial mais avançado do mercado, criado pela AIM3 para revolucionar a forma
            como você atende e vende.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Funcionalidades que <span className="text-[#1dc997]">Transformam</span>
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#383745]/20 hover:bg-[#383745]/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="w-12 h-12 bg-[#1dc997]/20 rounded-lg flex items-center justify-center text-[#1dc997] flex-shrink-0"
                    style={{
                      boxShadow: "0 0 15px rgba(29, 201, 151, 0.3)",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-[#dcdbde]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 rounded-xl border border-[#1dc997]/30 bg-gradient-to-r from-[#1dc997]/10 to-[#1dc997]/5"
              style={{
                boxShadow: "0 0 30px rgba(29, 201, 151, 0.2)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-[#1dc997]" />
                <span className="text-[#1dc997] font-semibold text-lg">Operação 24/7</span>
              </div>
              <p className="text-[#dcdbde]">
                Luna nunca dorme. Trabalha incansavelmente para seu negócio, capturando leads e fechando vendas mesmo
                quando você está offline.
              </p>
            </motion.div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Perfeita para <span className="text-[#1dc997]">Diversos Segmentos</span>
            </h3>

            <div className="space-y-4 mb-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#383745]/20 to-[#383745]/10 hover:from-[#1dc997]/20 hover:to-[#1dc997]/10 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div
                    className="w-2 h-2 bg-[#1dc997] rounded-full"
                    style={{
                      boxShadow: "0 0 10px rgba(29, 201, 151, 0.8)",
                    }}
                  />
                  <span className="text-white font-medium">{useCase}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="p-8 rounded-2xl border border-[#1dc997]/30 bg-gradient-to-br from-[#1dc997]/10 to-[#1dc997]/5 text-center"
              style={{
                boxShadow: "0 0 40px rgba(29, 201, 151, 0.2)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-[#1dc997] mb-4">Resultados Comprovados</h4>
              <p className="text-[#dcdbde] mb-6">
                Clientes que implementaram Luna relatam aumento médio de 300% na conversão de leads e redução de 80% no
                tempo de atendimento.
              </p>
              <motion.button
                className="bg-[#1dc997] text-[#0a0a0a] px-8 py-3 rounded-lg font-bold hover:bg-[#1dc997]/90 transition-colors"
                style={{
                  boxShadow: "0 0 20px rgba(29, 201, 151, 0.4)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(29, 201, 151, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Conhecer Luna AI
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
