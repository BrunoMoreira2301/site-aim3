export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AIM3 - Enterprise AI Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
    },
    description:
      "Plataforma de IA empresarial com conversas LLM, agentes personalizáveis, base de conhecimento segura e suporte a servidor MCP.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
    featureList: [
      "Conversas LLM Avançadas",
      "Agentes Personalizáveis",
      "Base de Conhecimento Empresarial",
      "Templates de Prompt",
      "Suporte a Servidor MCP",
      "Segurança Empresarial",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
