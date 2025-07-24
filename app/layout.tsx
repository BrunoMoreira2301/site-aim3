import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "AIM3 - Aceleradores de Negócios | Marketing Digital + IA",
  description:
    "Mais que marketing, somos aceleradores de negócios. Soluções criativas, tecnológicas e orientadas por dados para escalar sua marca com inteligência artificial.",
  keywords:
    "marketing digital, inteligência artificial, desenvolvimento web, automação, tráfego pago, social media, branding, Luna AI",
  openGraph: {
    title: "AIM3 - Aceleradores de Negócios",
    description: "Transformamos ideias em resultados através de tecnologia, estratégia e inteligência artificial.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
