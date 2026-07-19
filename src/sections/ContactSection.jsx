"use client"

import { useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
    message: ""
  })

  const [status, setStatus] = useState(null) // null, "success", or "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("validation")
      return
    }

    if (!emailRegex.test(formData.email)) {
      setStatus("invalidEmail")
      return
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus("success")
    }).catch(() => {
      setStatus("error")
    })
  }

  return (
    <div className="flex items-center justify-center h-screen px-8">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-[#888888] mb-8">{"Send me a message and I'll get back to you!"}</p>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#333] text-white placeholder-[#888] px-4 py-3 mb-4 rounded-lg focus:outline-none focus:border-[#ffffff]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#333] text-white placeholder-[#888] px-4 py-3 mb-4 rounded-lg focus:outline-none focus:border-[#ffffff]"
        />

        {/* <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#333] text-white placeholder-[#888] px-4 py-3 mb-4 rounded-lg focus:outline-none focus:border-[#ffffff]"
        /> */}

        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-transparent border border-[#333] text-white placeholder-[#888] px-4 py-3 mb-6 rounded-lg focus:outline-none focus:border-[#ffffff]"
        />

        {status === "validation" && (
          <p className="text-yellow-500 mb-4 font-mono">Please fill in all fields! ⚠️</p>
        )}

        {status === "success" && (
          <p className="text-green-500 mb-4 font-mono">Message sent successfully! ✓</p>
        )}

        {status === "error" && (
          <p className="text-red-500 mb-4 font-mono">Something went wrong, please try again.</p>
        )}

        {status === "invalidEmail" && (
          <p className="text-yellow-500 mb-4 font-mono">Please enter a valid email address! ⚠️</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg font-bold font-mono text-black transition-all duration-300 hover:opacity-90"
          style={{ background: "#ffffff"}}>
          Send Message
        </button>
      </div>
    </div>
  )
}

export default ContactSection