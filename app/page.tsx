import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SolutionsSection from "@/components/solutions-section"
import AISystemsSection from "@/components/ai-systems-section"
import LunaSection from "@/components/luna-section"
import MethodologySection from "@/components/methodology-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <AISystemsSection />
      <LunaSection />
      <MethodologySection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
  )
}
