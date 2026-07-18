"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const skills = [
  { name: "HTML/CSS", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 60 },
  { name: "WordPress", level: 80 },
  { name: "Git/GitHub", level: 65 },
  { name: "Tailwind CSS", level: 50 },
]

const languages = [
  { name: "Arabic", level: 100 },
  { name: "French", level: 80 },
  { name: "English", level: 70 },
  { name: "Amazigh", level: 100 },
]


function SkillsSection() {
  const swiperRef = useRef(null)
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#ffffff] uppercase tracking-widest text-sm mb-2">
        What I Know
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold text-white mb-12">
        My Skills
      </motion.h2>

      <Swiper ref={swiperRef}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={false}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-w-2xl px-12">

        {/* Slide 1 - Tech Skills */}
        <SwiperSlide>
          <p className="text-[#888888] text-sm uppercase tracking-widest mb-6">Tech Skills</p>
          <div className="flex flex-col gap-6 pb-12">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#ffffff]">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-2 rounded-full"
                    style={{ background: "#ffffff" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>

        {/* Slide 2 - Languages */}
        <SwiperSlide>
          <p className="text-[#888888] text-sm uppercase tracking-widest mb-6">Languages</p>
          <div className="flex flex-col gap-6 pb-12">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-[#ffffff]">{lang.level}%</span>
                </div>
                <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-2 rounded-full"
                    style={{ background: "#ffffff" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Custom arrows */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="w-10 h-10 rounded-full border border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-black transition-all duration-300">
          ←
        </button>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="w-10 h-10 rounded-full border border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-black transition-all duration-300">
          →
        </button>
      </div>
    </div>
  )
}

export default SkillsSection