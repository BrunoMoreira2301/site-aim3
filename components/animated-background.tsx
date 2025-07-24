"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface AnimatedBackgroundProps {
  variant?: "dots" | "grid" | "waves" | "particles"
  className?: string
}

export default function AnimatedBackground({ variant = "dots", className = "" }: AnimatedBackgroundProps) {
  const { isMobile, isTablet } = useMobile()

  // Drastically reduce animations on mobile
  if (isMobile) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {variant === "grid" && (
          <div
            className="h-full w-full opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(29, 201, 151, 0.2) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(29, 201, 151, 0.2) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        )}
        {variant === "dots" && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#1dc997]/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        )}
        {variant === "waves" && (
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 30% 50%, rgba(29, 201, 151, 0.1) 0%, transparent 60%)`,
            }}
          />
        )}
        {variant === "particles" && (
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#1dc997]/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Tablet optimizations
  const particleCount = isTablet ? 20 : 40
  const animationDuration = isTablet ? 6 : 4

  if (variant === "dots") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#1dc997] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: animationDuration + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === "grid") {
    return (
      <div className={`absolute inset-0 opacity-8 ${className}`}>
        <motion.div
          className="h-full w-full opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(29, 201, 151, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(29, 201, 151, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    )
  }

  if (variant === "waves") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 25% 50%, rgba(29, 201, 151, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 75% 50%, rgba(29, 201, 151, 0.1) 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    )
  }

  if (variant === "particles") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {[...Array(Math.floor(particleCount / 2))].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#1dc997]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: animationDuration + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }

  return null
}
