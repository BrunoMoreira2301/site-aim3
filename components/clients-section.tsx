"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

const clientLogos = [
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

export default function ClientsSection() {
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
        scrollPosition += 1
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(scroll)
    }

    const intervalId = setInterval(() => {
      scroll()
    }, 30)

    return () => {
      clearInterval(intervalId)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isHovered])

  const logoSize = isMobile
    ? { width: 120, height: 60 }
    : isTablet
      ? { width: 150, height: 75 }
      : { width: 180, height: 90 }
  const containerClass = isMobile ? "w-32 h-16" : isTablet ? "w-40 h-20" : "w-48 h-24"
  const maxHeight = isMobile ? "max-h-[50px]" : isTablet ? "max-h-[70px]" : "max-h-[90px]"
  const spacing = isMobile ? "space-x-4" : "space-x-8"

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Empresas que confiam na AIM3</h2>
          <p className="text-lg md:text-xl text-[#dcdbde] max-w-2xl mx-auto">
            Resultados reais, entregues para marcas de diversos setores
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
              {clientLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className={`${containerClass} flex items-center justify-center group relative bg-white/5 border border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-[#1dc997]/50 hover:shadow-lg hover:shadow-[#1dc997]/20 hover:scale-105`}
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logoSize.width}
                    height={logoSize.height}
                    className={`object-contain ${maxHeight} w-auto transition-all duration-300`}
                    style={{ filter: "none" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=60&width=120&text=Logo"
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Segunda sequência (duplicada para loop infinito) */}
            <div className={`flex ${spacing} flex-shrink-0 ml-4 md:ml-8`}>
              {clientLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className={`${containerClass} flex items-center justify-center group relative bg-white/5 border border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-[#1dc997]/50 hover:shadow-lg hover:shadow-[#1dc997]/20 hover:scale-105`}
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logoSize.width}
                    height={logoSize.height}
                    className={`object-contain ${maxHeight} w-auto transition-all duration-300`}
                    style={{ filter: "none" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=60&width=120&text=Logo"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
