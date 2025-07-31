"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect, useRef } from "react"
import { Star } from "lucide-react"

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

export default function TestimonialsSection() {
  const { isMobile, isTablet } = useMobile()
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current || isHovered) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1.5

        // Reset scroll when reaching end
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0
        }
      }
    }, 25)

    return () => clearInterval(interval)
  }, [isHovered])

  const cardSize = isMobile
    ? { width: "w-72", padding: "p-6", textSize: "text-base" }
    : isTablet
      ? { width: "w-80", padding: "p-7", textSize: "text-lg" }
      : { width: "w-80", padding: "p-8", textSize: "text-lg" }

  const starSize = isMobile ? "w-4 h-4" : "w-5 h-5"
  const spacing = isMobile ? "space-x-4" : "space-x-8"
  const gradientWidth = isMobile ? "w-8" : "w-16"

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          {/* Gradient overlays */}
          <div
            className={`absolute left-0 top-0 ${gradientWidth} md:w-16 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none`}
          />
          <div
            className={`absolute right-0 top-0 ${gradientWidth} md:w-16 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none`}
          />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className={`flex ${spacing} md:space-x-8 min-w-max`}>
              {/* Duplicate testimonials for infinite scroll */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`${cardSize.width} ${cardSize.padding} bg-[#1a1a1a] rounded-xl border border-gray-800/50 shadow-lg flex-shrink-0 hover:border-[#1dc997]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(29,201,151,0.1)]`}
                  whileHover={{ y: -5 }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`${starSize} fill-[#1dc997] text-[#1dc997]`} />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className={`${cardSize.textSize} text-[#dcdbde] italic mb-6 leading-relaxed`}>
                    "{testimonial.text}"
                  </p>

                  {/* Client name */}
                  <div className="text-right">
                    <p className="text-white font-semibold">— {testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
