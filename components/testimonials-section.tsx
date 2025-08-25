"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { isMobile } = useMobile()

  const testimonials = [
    {
      name: "Erick Borges Brito",
      text: "Trabalhar com a AIM3 foi surpreendente. Trouxeram inovação, carisma e ferramentas que mudaram nosso jogo.",
    },
    {
      name: "Thiago Gomes",
      text: "Com a estratégia da AIM3, aumentamos nosso faturamento em 36% em apenas um mês. Simplesmente incrível.",
    },
    {
      name: "Rômulo Vitelli",
      text: "Parceria produtiva e resultados imediatos. Aplicaram o que prometeram e fomos além das metas.",
    },
    {
      name: "Guilherme Nunes",
      text: "Organização, clareza e visão estratégica. A AIM3 entrega além do esperado.",
    },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isHovered) return

    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 0.3
      }
    }, 100)

    return () => clearInterval(scrollInterval)
  }, [isHovered])

  return (
    <section className="py-16 md:py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">O que nossos clientes dizem</h2>
          <p className="text-lg md:text-xl text-[#dcdbde] max-w-2xl mx-auto">
            Resultados compartilhados por quem viveu a experiência AIM3
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradientes nas bordas */}
          <div className="absolute left-0 top-0 w-12 md:w-20 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 md:w-20 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Container do scroll */}
          <div
            ref={scrollRef}
            className="flex space-x-6 md:space-x-8 overflow-x-auto scrollbar-hide py-4"
            style={{ scrollBehavior: "smooth" }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
          >
            {/* Primeira sequência */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-72 md:w-80 p-6 md:p-7 lg:p-8 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-[#1dc997]/30 hover:shadow-lg hover:shadow-[#1dc997]/10 transition-all duration-300"
              >
                {/* Estrelas */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#1dc997] text-[#1dc997]" />
                  ))}
                </div>

                {/* Depoimento */}
                <p className="text-base md:text-lg text-[#dcdbde] italic mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Nome do cliente */}
                <div className="text-right">
                  <p className="text-white font-semibold">— {testimonial.name}</p>
                </div>
              </motion.div>
            ))}

            {/* Segunda sequência para loop infinito */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 w-72 md:w-80 p-6 md:p-7 lg:p-8 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-[#1dc997]/30 hover:shadow-lg hover:shadow-[#1dc997]/10 transition-all duration-300"
              >
                {/* Estrelas */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#1dc997] text-[#1dc997]" />
                  ))}
                </div>

                {/* Depoimento */}
                <p className="text-base md:text-lg text-[#dcdbde] italic mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Nome do cliente */}
                <div className="text-right">
                  <p className="text-white font-semibold">— {testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
