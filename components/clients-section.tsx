"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { isMobile } = useMobile()

  const logos = [
    { src: "/images/clients/logo-1.png", alt: "Cliente 1" },
    { src: "/images/clients/logo-2.png", alt: "Cliente 2" },
    { src: "/images/clients/logo-3.png", alt: "Cliente 3" },
    { src: "/images/clients/logo-4.png", alt: "Cliente 4" },
    { src: "/images/clients/logo-5.png", alt: "Cliente 5" },
    { src: "/images/clients/logo-6.png", alt: "Cliente 6" },
    { src: "/images/clients/logo-7.png", alt: "Cliente 7" },
    { src: "/images/clients/logo-8.png", alt: "Cliente 8" },
    { src: "/images/clients/logo-9.png", alt: "Cliente 9" },
    { src: "/images/clients/logo-10.png", alt: "Cliente 10" },
    { src: "/images/clients/logo-11.png", alt: "Cliente 11" },
    { src: "/images/clients/logo-12.png", alt: "Cliente 12" },
    { src: "/images/clients/logo-13.png", alt: "Cliente 13" },
    { src: "/images/clients/logo-14.png", alt: "Cliente 14" },
    { src: "/images/clients/logo-15.png", alt: "Cliente 15" },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isHovered) return

    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 0.5
      }
    }, 80)

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Empresas que confiam na AIM3</h2>
          <p className="text-lg md:text-xl text-[#dcdbde] max-w-2xl mx-auto">
            Resultados reais, entregues para marcas de diversos setores
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradientes nas bordas */}
          <div className="absolute left-0 top-0 w-12 md:w-20 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 md:w-20 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Container do scroll */}
          <div
            ref={scrollRef}
            className="flex space-x-6 md:space-x-10 overflow-x-auto scrollbar-hide py-8"
            style={{ scrollBehavior: "smooth" }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
          >
            {/* Primeira sequência */}
            {logos.map((logo, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex-shrink-0 w-32 md:w-40 lg:w-48 h-16 md:h-20 lg:h-24 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-[#1dc997]/50 hover:shadow-lg hover:shadow-[#1dc997]/20 transition-all duration-300"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={isMobile ? 120 : 180}
                  height={isMobile ? 50 : 90}
                  className="max-h-[50px] md:max-h-[70px] lg:max-h-[90px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{
                    filter: "none",
                    backgroundColor: "transparent",
                  }}
                  priority={index < 5}
                  quality={90}
                  unoptimized={false}
                  onLoad={() => console.log(`Logo ${index + 1} carregada com sucesso`)}
                  onError={() => {
                    console.error(`Erro ao carregar logo ${index + 1}: ${logo.src}`)
                  }}
                />
              </motion.div>
            ))}

            {/* Segunda sequência para loop infinito */}
            {logos.map((logo, index) => (
              <motion.div
                key={`second-${index}`}
                className="group flex-shrink-0 w-32 md:w-40 lg:w-48 h-16 md:h-20 lg:h-24 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-[#1dc997]/50 hover:shadow-lg hover:shadow-[#1dc997]/20 transition-all duration-300"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={isMobile ? 120 : 180}
                  height={isMobile ? 50 : 90}
                  className="max-h-[50px] md:max-h-[70px] lg:max-h-[90px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{
                    filter: "none",
                    backgroundColor: "transparent",
                  }}
                  quality={90}
                  unoptimized={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
