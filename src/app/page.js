import HeroSection from "@/sections/HeroSection"
import AboutSection from "@/sections/AboutSection"
import SkillsSection from "@/sections/SkillsSection"
// import ProjectsSection from "@/sections/ProjectsSection"
import ContactSection from "@/sections/ContactSection"

export default function Home() {
  return (
    <main className="pt-20">
      <section id="hero" className="h-screen" style={{ background: "#0f0f0f" }}>
        <HeroSection />
      </section>

      <section id="about" className="h-screen" style={{ background: "#141414" }}>
        <AboutSection />
      </section>

      <section id="skills" className="h-screen" style={{ background: "#0f0f0f" }}>
        <SkillsSection />
      </section>

      <section id="projects" className="h-screen" style={{ background: "#141414" }}>
        {/* <ProjectsSection /> */}
      </section>

      <section id="contact" className="h-screen" style={{ background: "#0f0f0f" }}>
        <ContactSection />
      </section>
    </main>
  )
}
