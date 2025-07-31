"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 500
      setIsVisible(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(
      "http://wa.me/556136861323?text=Olá! Vim do site da AIM3 e gostaria de saber mais sobre como vocês podem transformar meu negócio com IA.",
      "_blank",
    )
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute bottom-16 right-0 mb-4 p-4 bg-[#1a1a1a] rounded-2xl border border-[#1dc997]/30 shadow-xl max-w-xs"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="pr-6">
                  <h4 className="text-white font-semibold mb-2">Transforme seu negócio com IA!</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Fale conosco e descubra como a AIM3 pode revolucionar seus resultados.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-[#1dc997] hover:bg-[#16a085] text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Falar no WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-14 h-14 bg-[#1dc997] hover:bg-[#16a085] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <MessageCircle className="w-6 h-6 text-black" />

            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-[#1dc997] animate-ping opacity-20" />

            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
