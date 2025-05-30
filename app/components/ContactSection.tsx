"use client"
import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import FloatingCard from "./aceternity/FloatingCard"
import AnimatedText from "./aceternity/AnimatedText"
import GlowingButton from "./aceternity/GlowingButton"
import { LampDemo } from "./aceternity/Lamp"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "saagarchaitanya80@gmail.com",
      href: "mailto:saagarchaitanya80@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6204 250 124",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Patna, India",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative mt-15">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Get  In Touch"
            className="!text-4xl md:!text-6xl !text-center px-10 mt-60 -mb-60"
          />
          <div className="relative w-full h-[40vh]">
            <LampDemo />
          </div>
          <AnimatedText
            text="Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."
            className="text-xl text-gray-300 max-w-3xl mx-auto mt-20 mb-10"
            delay={0.3}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">Let&apos;s Connect and Innovate</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I&apos;m always excited to work on new projects and collaborate with creative minds. Whether you have a
              specific project in mind or are impressed by my work and want to collaborate, feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                  <div className="relative flex items-center space-x-4 w-full">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FloatingCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
                    required
                  />
                </div>

                <GlowingButton variant="primary" size="lg" className="w-full">
                  <Send className="w-2 h-2 mr-2" />
                  Send Message
                </GlowingButton>
              </form>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
