import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIM3 - Transformação Digital com IA",
  description:
    "Plataforma de IA empresarial com conversas LLM, agentes personalizáveis, base de conhecimento segura e suporte a servidor MCP.",
  keywords: "IA, inteligência artificial, transformação digital, automação, chatbots, AIM3",
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
    title: "AIM3 - Transformação Digital com IA",
    description:
      "Plataforma de IA empresarial com conversas LLM, agentes personalizáveis, base de conhecimento segura e suporte a servidor MCP.",
    url: "https://aim3.com.br",
    siteName: "AIM3",
    images: [
      {
        url: "/images/logo-aim3.png",
        width: 1200,
        height: 630,
        alt: "AIM3 - Transformação Digital com IA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIM3 - Transformação Digital com IA",
    description:
      "Plataforma de IA empresarial com conversas LLM, agentes personalizáveis, base de conhecimento segura e suporte a servidor MCP.",
    images: ["/images/logo-aim3.png"],
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
    other: [
      { rel: "icon", url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#1dc997",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RHTC3585MQ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RHTC3585MQ');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
