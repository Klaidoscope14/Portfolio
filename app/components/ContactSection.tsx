"use client"
import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import FloatingCard from "./aceternity/FloatingCard"
import AnimatedText from "./aceternity/AnimatedText"
import GlowingButton from "./aceternity/GlowingButton"
import { LampDemo } from "./aceternity/Lamp"
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        'service_708hb9r',  // Emailjs Service ID
        'template_wc4cq6q', //  EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Chaitanya',
        },
        'gibU6br6g-sEfNQ34' // EmailJS public key
      )

      toast.success('Message sent successfully!')
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error('Error sending email:', error)
    } finally {
      setIsLoading(false)
    }
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
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="relative w-full h-[40vh] flex items-center justify-center">
            <div className="absolute inset-0">
              <LampDemo />
            </div>
            <AnimatedText
              text="Contact Me!"
              className="!text-4xl md:!text-6xl !text-center text-white/30 dark:text-white/30 z-10 text-shadow-lg relative font-semibold"
            />
          </div>
          <div className="relative z-20 mt-32">
            <AnimatedText
              text="Want to bring your ideas to life? Let's create something amazing together."
              className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
              delay={0.3}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6 md:mb-8 text-cyan-400">Let&apos;s Connect and Innovate</h3>
            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Want to beat and get ahead of the competition? Want to complete your project in record time and within budget? Have an interesting project idea? Let&apos;s talk about how I can help you achieve your goals.
            </p>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                  <div className="relative flex items-center space-x-3 md:space-x-4 w-full">
                    <div className="p-2 md:p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white text-sm md:text-base">{info.title}</h4>
                      <p className="text-gray-400 text-sm truncate">{info.value}</p>
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
            className="flex flex-col"
          >
            <FloatingCard>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 h-10 md:h-11"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 h-10 md:h-11"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none min-h-[100px] md:min-h-[120px]"
                    required
                    disabled={isLoading}
                  />
                </div>

                <GlowingButton 
                  variant="primary" 
                  size="lg" 
                  className="w-full h-10 md:h-11"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </GlowingButton>
              </form>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}