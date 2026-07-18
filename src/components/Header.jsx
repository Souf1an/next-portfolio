"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import MetallicPaint from '@/components/ui/MetallicPaint';

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between backdrop-blur-md border-[#]/20">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14 shrink-0">
          <MetallicPaint imageSrc="/logo.svg" />
        </div>

        <a
          href="#hero"
          className="text-lg font-semibold tracking-wide text-white"
        >
          SOUFIANE AITALI
        </a>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8">
        <a
          href="#hero"
          className={`transition-colors duration-300 ${activeSection === "hero" ? "text-[#ffffff]" : "text-[#888888] hover:text-[#ffffff]"}`}>
          Hero
        </a>
        <a
          href="#about"
          className={`transition-colors duration-300 ${activeSection === "about" ? "text-[#ffffff]" : "text-[#888888] hover:text-[#ffffff]"}`}>
          About
        </a>
        <a
          href="#skills"
          className={`transition-colors duration-300 ${activeSection === "skills" ? "text-[#ffffff]" : "text-[#888888] hover:text-[#ffffff]"}`}>
          Skills
        </a>
        <a
          href="#projects"
          className={`transition-colors duration-300 ${activeSection === "projects" ? "text-[#ffffff]" : "text-[#888888] hover:text-[#ffffff]"}`}>
          Projects
        </a>
        <a
          href="#contact"
          className={`transition-colors duration-300 ${activeSection === "contact" ? "text-[#ffffff]" : "text-[#888888] hover:text-[#ffffff]"}`}>
          Contact
        </a>
      </nav>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#ffffff]">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col gap-4 px-8 py-6 md:hidden backdrop-blur-md bg-[#1a1a1a]/80 border-b border-[#ffffff]/20">
          <a href="#hero" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#ffffff] transition-colors duration-300">Hero</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#ffffff] transition-colors duration-300">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#ffffff] transition-colors duration-300">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#ffffff] transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#ffffff] transition-colors duration-300">Contact</a>
        </div>
      )}

    </header>
  )
}

export default Header