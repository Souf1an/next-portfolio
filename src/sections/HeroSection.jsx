"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
  <div className="flex flex-col items-center justify-center h-screen text-center px-4 md:px-8">

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-[#888888] text-sm md:text-lg mb-4 tracking-widest uppercase font-mono">
      houdy !
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-3xl md:text-5xl font-bold text-white mb-6">
      <TypeAnimation
        sequence={[
          "I'm Soufiane!",
          2000,
          "I'm a Frontend Developer",
          2000,
          "I'm a Backend Developer",
          2000,
          "I'm a Freelancer",
          2000,
          "I build modern websites",
          2000,
          "I create responsive designs",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
      />
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="text-[#888888] max-w-md mb-10 font-sans">
      I build modern, responsive websites that make people stop scrolling.
    </motion.p>

    <motion.a
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      href="#contact"
      className="px-8 py-3 rounded-lg font-bold font-mono text-black transition-all duration-300 hover:opacity-90"
      style={{background: "#ffffff"}}>
      Hire Me
    </motion.a>

  </div>
)
}
export default HeroSection