"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const { isMobile } = useMobile()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMobile) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Expanded State */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-16 right-0 w-80 p-4 bg-[#0a0a0a] rounded-2xl border border-[#1dc997]/30 shadow-2xl"
                style={{
                  boxShadow: "0 0 30px rgba(29, 201, 151, 0.2)",
                }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold text-lg">Fale Conosco!</h3>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-[#dcdbde] hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-[#dcdbde] text-sm mb-4">
                  Pronto para transformar seu negócio? Nossa equipe está online agora!
                </p>
                <button
                  className="w-full bg-[#1dc997] text-[#0a0a0a] py-3 rounded-xl font-bold text-sm hover:bg-[#1dc997]/90 transition-colors"
                  style={{
                    boxShadow: "0 0 20px rgba(29, 201, 151, 0.4)",
                  }}
                >
                  Iniciar Conversa no WhatsApp
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <button
            className="w-16 h-16 bg-[#1dc997] rounded-full flex items-center justify-center text-[#0a0a0a] shadow-lg"
            style={{
              boxShadow: "0 0 25px rgba(29, 201, 151, 0.5)",
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
          </button>

          {/* Pulse Animation */}
          {!isExpanded && (
            <motion.div
              className="absolute inset-0 bg-[#1dc997] rounded-full -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
