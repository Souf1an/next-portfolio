import HeroSection from "@/sections/HeroSection"
import AboutSection from "@/sections/AboutSection"
import SkillsSection from "@/sections/SkillsSection"
import ProjectsSection from "@/sections/ProjectsSection"
import ContactSection from "@/sections/ContactSection"

export default function Home() {
  return (
    <main className="pt-20">
      <section id="hero" className="min-h-screen">
        <HeroSection />
      </section>

      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>

      <section id="skills" className="min-h-screen">
        <SkillsSection />
      </section>

      <section id="projects" className="min-h-screen">
        <ProjectsSection />
      </section>

      <section id="contact" className="min-h-screen">
        <ContactSection />
      </section>
    </main>
  )
}
