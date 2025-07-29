import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIM3 - Aceleradores de Negócios | Marketing Digital & IA",
  description:
    "Mais que uma agência, somos aceleradores de negócios. Transformamos ideias em resultados através de tecnologia, estratégia e inteligência artificial.",
  keywords: ["marketing digital", "inteligência artificial", "automação", "chatbots", "desenvolvimento web", "AIM3"],
  authors: [{ name: "AIM3" }],
  creator: "AIM3",
  publisher: "AIM3",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aim3.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AIM3 - Aceleradores de Negócios | Marketing Digital & IA",
    description:
      "Mais que uma agência, somos aceleradores de negócios. Transformamos ideias em resultados através de tecnologia, estratégia e inteligência artificial.",
    url: "https://aim3.com.br",
    siteName: "AIM3",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AIM3 - Aceleradores de Negócios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIM3 - Aceleradores de Negócios | Marketing Digital & IA",
    description:
      "Mais que uma agência, somos aceleradores de negócios. Transformamos ideias em resultados através de tecnologia, estratégia e inteligência artificial.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1dc997" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#1dc997",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="msapplication-TileColor" content="#1dc997" />
        <meta name="theme-color" content="#1dc997" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
