"use client"

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import MetallicPaint from '@/components/ui/MetallicPaint';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

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

  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-100 px-8 py-4 flex items-center justify-between backdrop-blur-md border-[#]/20">

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 z-50 w-full flex flex-col gap-4 px-8 py-6 md:hidden backdrop-blur-md bg-[#0A0A0A]/90 border-b border-white/10"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className={`text-lg transition-colors duration-300 ${activeSection === item.id
                  ? "text-white"
                  : "text-[#888888] hover:text-white"
                  }`}
              >
                {item.label}
              </motion.a>
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
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}

export default Header