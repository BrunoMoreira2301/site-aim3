import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SolutionsSection from "@/components/solutions-section"
import AISystemsSection from "@/components/ai-systems-section"
import LunaSection from "@/components/luna-section"
import MethodologySection from "@/components/methodology-section"
import ClientsSection from "@/components/clients-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"
import StructuredData from "@/components/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <StructuredData />
      <Header />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <AISystemsSection />
      <LunaSection />
      <MethodologySection />
      <ClientsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
