"use client"

import { motion } from "framer-motion"
import { MousePointer, Share2, Palette, Code, PenTool, Video, Sparkles, Bot } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import { useMobile } from "@/hooks/use-mobile"

export default function SolutionsSection() {
  const { isMobile } = useMobile()

  const solutions = [
    {
      icon: <MousePointer className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Tráfego Pago",
      description: "Google Ads, Meta Ads e campanhas otimizadas para máximo ROI",
    },
    {
      icon: <Share2 className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Social Media Estratégico",
      description: "Gestão completa das redes sociais com foco em engajamento",
    },
    {
      icon: <Palette className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Design de Alta Performance",
      description: "Criações que convertem e fortalecem sua identidade visual",
    },
    {
      icon: <Code className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Desenvolvimento Web & App",
      description: "Sites, sistemas e aplicativos sob medida para seu negócio",
    },
    {
      icon: <PenTool className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Copywriting",
      description: "Textos persuasivos que geram conexão e conversão",
    },
    {
      icon: <Video className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Storymaker & Vídeo",
      description: "Produção audiovisual que conta histórias marcantes",
    },
    {
      icon: <Sparkles className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Branding",
      description: "Construção de marca forte e posicionamento estratégico",
    },
    {
      icon: <Bot className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Automação com IA",
      description: "Processos inteligentes que otimizam tempo e recursos",
    },
  ]

  return (
    <section id="solucoes" className="py-16 md:py-20 relative">
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
            Nossas Soluções
          </h2>
          <p className="text-lg md:text-xl text-[#dcdbde] max-w-3xl mx-auto px-4">
            Serviços integrados que trabalham em sinergia para acelerar o crescimento do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group p-4 md:p-6 rounded-xl border border-[#1dc997]/20 bg-gradient-to-br from-[#383745]/10 to-[#383745]/5 hover:from-[#1dc997]/10 hover:to-[#1dc997]/5 transition-all duration-300"
              style={{
                boxShadow: "0 0 20px rgba(29, 201, 151, 0.1)",
              }}
              initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0.6 : 0.6,
                delay: isMobile ? index * 0.06 : index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: isMobile ? "-10px" : "-100px" }}
              whileHover={
                !isMobile
                  ? {
                      boxShadow: "0 0 30px rgba(29, 201, 151, 0.3)",
                      y: -10,
                      scale: 1.02,
                    }
                  : {}
              }
            >
              <div
                className="w-12 md:w-16 h-12 md:h-16 bg-[#1dc997]/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-[#1dc997] group-hover:bg-[#1dc997]/30 transition-all duration-300"
                style={{
                  boxShadow: "0 0 20px rgba(29, 201, 151, 0.3)",
                }}
              >
                {solution.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#1dc997] transition-colors">
                {solution.title}
              </h3>
              <p className="text-sm md:text-base text-[#dcdbde] leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
