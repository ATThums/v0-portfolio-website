import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { GamesSection } from "@/components/games-section"
import { Arts3DSection } from "@/components/arts-3d-section"
import { AIGallerySection } from "@/components/ai-gallery-section"
import { WorksSection } from "@/components/works-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Games Section */}
        <section id="games">
          <GamesSection />
        </section>

        {/* 3D Arts Section */}
        <section id="arts-3d">
          <Arts3DSection />
        </section>

        {/* AI Gallery Section */}
        <section id="gallery">
          <AIGallerySection />
        </section>

        {/* Works Section */}
        <section id="works">
          <WorksSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}
