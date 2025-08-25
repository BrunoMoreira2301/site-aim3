"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    id: 1,
    name: "Erick Borges Brito",
    text: "Trabalhar com a AIM3 foi surpreendente. Trouxeram inovação, carisma e ferramentas que mudaram nosso jogo.",
  },
  {
    id: 2,
    name: "Thiago Gomes",
    text: "Com a estratégia da AIM3, aumentamos nosso faturamento em 36% em apenas um mês. Simplesmente incrível.",
  },
  {
    id: 3,
    name: "Rômulo Vitelli",
    text: "Parceria produtiva e resultados imediatos. Aplicaram o que prometeram e fomos além das metas.",
  },
  {
    id: 4,
    name: "Guilherme Nunes",
    text: "Organização, clareza e visão estratégica. A AIM3 entrega além do esperado.",
  },
]

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { isMobile, isTablet } = useMobile()

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      if (!isHovered) {
        scrollPosition += 1.5
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(scroll)
    }

    const intervalId = setInterval(() => {
      scroll()
    }, 25)

    return () => {
      clearInterval(intervalId)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isHovered])

  const cardWidth = isMobile ? "w-72" : "w-80"
  const cardPadding = isMobile ? "p-6" : isTablet ? "p-7" : "p-8"
  const textSize = isMobile ? "text-base" : "text-lg"
  const starSize = isMobile ? "w-4 h-4" : "w-5 h-5"
  const spacing = isMobile ? "space-x-4" : "space-x-6"

  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg md:text-xl text-[#dcdbde] max-w-2xl mx-auto">
            Resultados compartilhados por quem viveu a experiência AIM3
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradiente esquerdo */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />

          {/* Gradiente direito */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex overflow-x-hidden"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            style={{ scrollBehavior: "auto" }}
          >
            {/* Primeira sequência */}
            <div className={`flex ${spacing} flex-shrink-0`}>
              {testimonials.map((testimonial) => (
                <motion.div
                  key={`first-${testimonial.id}`}
                  className={`${cardWidth} ${cardPadding} bg-[#1a1a1a] border border-white/10 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#1dc997]/10 transition-all duration-300 hover:border-[#1dc997]/30 flex-shrink-0`}
                  whileHover={{ y: -5 }}
                >
                  {/* Estrelas */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`${starSize} text-[#1dc997] fill-current`} />
                    ))}
                  </div>

                  {/* Depoimento */}
                  <p className={`${textSize} text-[#dcdbde] italic mb-6 leading-relaxed`}>"{testimonial.text}"</p>

                  {/* Nome */}
                  <div className="text-right">
                    <p className="text-white font-semibold">— {testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Segunda sequência (duplicada para loop infinito) */}
            <div className={`flex ${spacing} flex-shrink-0 ml-4 md:ml-6`}>
              {testimonials.map((testimonial) => (
                <motion.div
                  key={`second-${testimonial.id}`}
                  className={`${cardWidth} ${cardPadding} bg-[#1a1a1a] border border-white/10 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#1dc997]/10 transition-all duration-300 hover:border-[#1dc997]/30 flex-shrink-0`}
                  whileHover={{ y: -5 }}
                >
                  {/* Estrelas */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`${starSize} text-[#1dc997] fill-current`} />
                    ))}
                  </div>

                  {/* Depoimento */}
                  <p className={`${textSize} text-[#dcdbde] italic mb-6 leading-relaxed`}>"{testimonial.text}"</p>

                  {/* Nome */}
                  <div className="text-right">
                    <p className="text-white font-semibold">— {testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
