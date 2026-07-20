"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import MetallicPaint from '@/components/ui/MetallicPaint';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

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

  const navItems = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

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
          SOUFIANE AIT ALI
        </a>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-12">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setIsOpen(false)}
            className={`text-xl transition-colors duration-300 ${activeSection === item.id
              ? "text-white"
              : "text-[#888888] hover:text-white"
              }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Social links */}
      <div className="hidden md:flex gap-4">
        <a
          href="https://github.com/Souf1an"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888888] hover:text-white transition-colors duration-300"
        >
          < FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/soufiane-ait-ali"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888888] hover:text-white transition-colors duration-300"
        >
          < FaLinkedin size={20} />
        </a>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#ffffff]">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col gap-4 px-8 py-6 md:hidden backdrop-blur-md bg-[#1a1a1a]/95 border-b border-[#ffffff]/20">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition-colors duration-300 ${activeSection === item.id
                ? "text-white"
                : "text-[#888888] hover:text-white"
                }`}
            >
              {item.label}
            </a>
          ))}
          {/* Social links */}
          <div className="flex justify-center gap-6 pt-4 border-t border-white/10">
            <a
              href="https://github.com/Souf1an"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-white transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/soufiane-ait-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header