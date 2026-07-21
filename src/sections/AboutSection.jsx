"use client"

import Image from "next/image";
import React from 'react'
import { motion } from 'framer-motion'

function AboutSection() {
  const birthDate = new Date(2001, 11, 21)
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear() -
    (today < new Date(today.getFullYear(), 11, 21) ? 1 : 0)

  return (
    <div className="flex items-center justify-center h-screen px-8">
      <div className="flex flex-col md:flex-row gap-12 max-w-4xl w-full">

        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1">
          <p className="text-[#ffffff] uppercase tracking-widest mb-2 font-mono">Know Me More</p>
          <h2 className="text-4xl font-bold text-white mb-4">{"I'm Soufiane AITALI, a Web Developer"}</h2>
          <p className="text-[#888888] mb-8 leading-relaxed text-lg font-sans">
            {"Self-taught web developer with a passion for building modern, responsive web experiences.Without a traditional degree, I've proven that dedication and hands-on learning speak louder than credentials."}
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <span className="text-[#ffffff] text-sm font-black">Name:</span>
              <p className="text-white font-medium font-mono">Soufiane AITALI</p>
            </div>
            <div>
              <span className="text-[#ffffff] text-sm font-black">Age:</span>
              <p className="text-white font-medium font-mono">{age}</p>
            </div>
            <div>
              <span className="text-[#ffffff] text-sm font-black">Birthday:</span>
              <p className="text-white font-medium font-mono">21 December 2001</p>
            </div>
            <div>
              <span className="text-[#ffffff] text-sm font-black">From:</span>
              <p className="text-white font-medium font-mono">Agadir, Morocco</p>
            </div>
          </div>

          <a href="/cv.pdf"
            download
            className="px-8 py-3 rounded-lg font-bold font-mono text-black transition-all duration-300 hover:opacity-90"
            style={{ background: "#ffffff" }}>
            Download CV
          </a>
        </motion.div>

        {/* Right side - photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/soufian.png"
            alt="Soufiane AITALI"
            width={256}
            height={256}
            className="object-cover"
            style={{
              maskImage:
                "radial-gradient(circle, black 60%, rgba(0,0,0,.9) 70%, rgba(0,0,0,.5) 82%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 60%, rgba(0,0,0,.9) 70%, rgba(0,0,0,.5) 82%, transparent 100%)",
            }}
          />
        </motion.div>

      </div>
    </div>
  )
}

export default AboutSection