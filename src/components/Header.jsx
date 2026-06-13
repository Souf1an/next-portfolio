"use client"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between" style={{background: "#1a1a1a"}}>
      
      {/* Logo */}
      <div className="flex flex-col">
        <a href="#hero" className="text-white font-bold text-lg">SOUFIANE AITALI</a>
        <p className="text-[#c9a84c] text-xs tracking-widest uppercase">Frontend Developer</p>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8">
        <a href="#hero" className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">Hero</a>
        <a href="#about" className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">About</a>
        <a href="#skills" className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">Skills</a>
        <a href="#projects" className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">Projects</a>
        <a href="#contact" className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">Contact</a>
      </nav>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#c9a84c]">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col gap-4 px-8 py-6 md:hidden" style={{background: "#1a1a1a"}}>
          <a href="#hero" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">Hero</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#888888] hover:text-[#c9a84c] transition-colors duration-300">Contact</a>
        </div>
      )}

    </header>
  )
}

export default Header