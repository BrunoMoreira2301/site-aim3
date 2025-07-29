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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#10b981" }],
  },
  manifest: "/site.webmanifest",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
