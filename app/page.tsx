"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExperienceSection from "./components/ExperienceSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import FloatingNavbar from "./components/aceternity/FloatingNavbar"
import SpotlightEffect from "./components/aceternity/SpotlightEffect"
import GridBackground from "./components/aceternity/GridBackground"
import { TracingBeam } from "./components/aceternity/TracingBeam"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <GridBackground />

      <SpotlightEffect />

      <motion.div className="fixed inset-0 opacity-30" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </motion.div>

      <FloatingNavbar />

        <HeroSection />
        <TracingBeam>
        <AboutSection />

        <ExperienceSection />

        <SkillsSection />
        <ProjectsSection />
      </TracingBeam>

        <ContactSection />
    </div>
  )
}