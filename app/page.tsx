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

      <main className="pt-16" role="main" aria-label="Conteúdo principal">
        {/* Hero Section */}
        <section id="hero" aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" aria-labelledby="about-heading">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills" aria-labelledby="skills-heading">
          <SkillsSection />
        </section>

        {/* Games Section */}
        <section id="games" aria-labelledby="games-heading">
          <GamesSection />
        </section>

        {/* 3D Arts Section */}
        <section id="arts-3d" aria-labelledby="arts-3d-heading">
          <Arts3DSection />
        </section>

        {/* AI Gallery Section */}
        <section id="gallery" aria-labelledby="gallery-heading">
          <AIGallerySection />
        </section>

        {/* Works Section */}
        <section id="works" aria-labelledby="works-heading">
          <WorksSection />
        </section>

        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}
