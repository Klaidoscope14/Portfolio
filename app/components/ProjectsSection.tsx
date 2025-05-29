"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import ThreeDCard from "./aceternity/ThreeDCard"
import AnimatedText from "./aceternity/AnimatedText"
import GlowingButton from "./aceternity/GlowingButton"
import { TracingBeam } from "./aceternity/TracingBeam"
import { PinContainer } from "./aceternity/AnimatedPin"
import FloatingCard from "./aceternity/FloatingCard"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "3D Portfolio Website",
      description:
        "An immersive portfolio website built with Three.js and React, featuring interactive 3D elements and smooth animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Three.js", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for data visualization with real-time updates, charts, and analytics for business intelligence.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Blockchain Voting System",
      description:
        "Decentralized voting platform ensuring transparency and security through blockchain technology and smart contracts.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Featured Projects"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          />
          <AnimatedText
            text="Interactive 3D project showcase with immersive card experiences"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0.3}
          />
        </motion.div>

        <div className="relative">
          <TracingBeam className="absolute -left-20 top-1/2 transform -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="w-full"
              >
                <ThreeDCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  techStack={project.technologies}
                  githubLink={project.githubUrl}
                  demoLink={project.liveUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <GlowingButton variant="secondary" size="md">
            View All Projects
          </GlowingButton>
        </motion.div>
      </div>
    </section>
  )
}
