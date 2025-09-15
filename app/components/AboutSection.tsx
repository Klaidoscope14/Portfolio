"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Globe, Linkedin } from "lucide-react"
import FloatingCard from "./aceternity/FloatingCard"
import AnimatedText from "./aceternity/AnimatedText"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following SOLID principles.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Combining technical skills with creative vision to build stunning interfaces.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, accessibility, and user experience.",
    },
    {
      icon: Globe,
      title: "Modern Tech",
      description: "Staying current with the latest technologies and development trends.",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          />
          <AnimatedText
            text="I&apos;m a full-stack MERN developer also having prior experience through an internship . I regularly solve coding problems on platforms like Codeforces and LeetCode to hone my problem-solving skills. I’m also exploring the growing field of AI and Machine Learning, and enjoy studying core areas of computer science such as Operating Systems and Computer Networks to strengthen my understanding of how systems work at a deeper level."
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            delay={0.3}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Currently pursuing a B.Tech in Computer Science and Engineering at IIT Patna. What began as a curiosity about the intersection of creativity and technology has evolved into a focused interest in full-stack web development and systems programming.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
            I also have prior experience interning at a startup, where I worked across the stack—rolling out key UI upgrades to adding and implementing new backend features. My tech stack includes JavaScript, React, TypeScript, Node.js, and MongoDB, among others.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
            I&apos;m also deeply interested in core computer science concepts like Networking and Operating Systems, and I often spend time learning about financial algorithms, exploring new frameworks, contributing to open-source projects, or experimenting with 3D graphics and interactive visualizations.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Front-end Developer", "Back-end Developer", "Competitive Programmer", "Leetcoder" ,"ML Enthusiast"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group mb-8"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden group-hover:border-white/30 transition-all duration-300">
                <div className="relative aspect-square">
                  <Image
                    src="/About/Chaitanya.jpg"
                    alt="Chaitanya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/chaitanya-saagar-476b562a2/"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group/social p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-400 transition-all duration-300"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-0 group-hover/social:opacity-75 transition duration-1000 group-hover/social:duration-200" />
                    <div className="relative">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                  </motion.a>
                  {/* <motion.a
                    href="https://www.instagram.com/chad._.saagar"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group/social p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-400 transition-all duration-300"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-0 group-hover/social:opacity-75 transition duration-1000 group-hover/social:duration-200" />
                    <div className="relative">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FloatingCard key={feature.title} delay={0.6 + index * 0.1}>
              <div className="text-center p-4">
                <feature.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                <h4 className="font-semibold mb-2 text-white text-lg">{feature.title}</h4>
                <p className="text-sm text-gray-400 break-words whitespace-normal">{feature.description}</p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  )
}