import HeroSection from "@/sections/HeroSection"
import AboutSection from "@/sections/AboutSection"
import SkillsSection from "@/sections/SkillsSection"
// import ProjectsSection from "@/sections/ProjectsSection"
import ContactSection from "@/sections/ContactSection"

export default function Home() {
  return (
    <main className="pt-20">
      <section id="hero" className="h-screen">
        <HeroSection />
      </section>

      <section id="about" className="h-screen">
        <AboutSection />
      </section>

      <section id="skills" className="h-screen">
        <SkillsSection />
      </section>

      <section id="projects" className="h-screen">
        {/* <ProjectsSection /> */}
      </section>

      <section id="contact" className="h-screen">
        <ContactSection />
      </section>
    </main>
  )
}
