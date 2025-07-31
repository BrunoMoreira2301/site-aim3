"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const logos = [
  "/images/clients/logo-1.png",
  "/images/clients/logo-2.png",
  "/images/clients/logo-3.png",
  "/images/clients/logo-4.png",
  "/images/clients/logo-5.png",
  "/images/clients/logo-6.png",
  "/images/clients/logo-7.png",
  "/images/clients/logo-8.png",
  "/images/clients/logo-9.png",
  "/images/clients/logo-10.png",
  "/images/clients/logo-11.png",
  "/images/clients/logo-12.png",
  "/images/clients/logo-13.png",
  "/images/clients/logo-14.png",
  "/images/clients/logo-15.png",
]

export default function ClientsSection() {
  const { isMobile, isTablet } = useMobile()
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current || isHovered) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1

        // Reset scroll when reaching end
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0
        }
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isHovered])

  const logoSize = isMobile
    ? { container: "w-32 h-16", maxHeight: "max-h-[50px]", width: 120, height: 50 }
    : isTablet
      ? { container: "w-40 h-20", maxHeight: "max-h-[70px]", width: 150, height: 70 }
      : { container: "w-48 h-24", maxHeight: "max-h-[90px]", width: 180, height: 90 }

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Empresas que confiam na AIM3</h2>
          <p className="text-lg md:text-xl text-[#dcdbde] max-w-2xl mx-auto">
            Resultados reais, entregues para marcas de diversos setores
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
            <div className={`flex ${spacing} md:space-x-12 min-w-max`}>
              {/* Duplicate logos for infinite scroll */}
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className={`${logoSize.container} flex items-center justify-center flex-shrink-0 group cursor-pointer`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#1dc997]/30 group-hover:shadow-lg group-hover:shadow-[#1dc997]/20">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`Cliente ${(index % logos.length) + 1}`}
                      width={logoSize.width}
                      height={logoSize.height}
                      className={`${logoSize.maxHeight} w-auto object-contain transition-all duration-300 group-hover:scale-105`}
                      style={{ filter: "none" }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=60&width=120&text=Logo"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
