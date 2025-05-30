"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ThreeDCard from "./aceternity/ThreeDCard"
import AnimatedText from "./aceternity/AnimatedText"
import GlowingButton from "./aceternity/GlowingButton"
import { TracingBeam } from "./aceternity/TracingBeam"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "SysHealth 🧬",
      description:
        "An interface that allows users to view over 12 real-time system metrics (including CPU usage, memory consumption, and network throughput) in real time.",
      image: "/Projects/SysHealth.png",
      technologies: ["Tailwind CSS" ,"React", "TypeScript" , "Next.js" ,"Node.js" , "Express.js" , "RESTful APIs"],
      // liveUrl: "#",
      githubUrl: "https://github.com/Klaidoscope14/SysHealth",
      featured: true,
    },
    {
      title: "Chatify 💻",
      description:
        "A real-time chat application that allows users to send and receive messages in real time. Employs Socket.io for real-time comms and MongoDB for data storage.",
      image: "/Projects/Chatify.png",
      technologies: ["Tailwind CSS" , "JavaScript", "React", "Node.js", "Express.js" , "Socket.io" , "MongoDB"],
      // liveUrl: "#",
      githubUrl: "https://github.com/Klaidoscope14/Chatify",
      featured: true,
    },
    {
      title: "E-Cell Alumni Connect 🎓",
      description:
        "An outreach platform that allows alumni of the college to connect with E-Cell, IIT Patna. From here , they can participate in guest talks , workshops and increase interaction with the students. Handled 200+ users.",
      image: "/Projects/E-Cell Alum Connect.png",
      technologies: ["Tailwind CSS" , "Three.js" , "JavaScript", "React", "Airtable" , "Vercel"],
      liveUrl: "https://e-cell-alumni-connect.vercel.app/",
      githubUrl: "https://github.com/Klaidoscope14/E-Cell-Alumni-Connect",
      featured: false,
    },
    {
      title: "More Coming Soon! ✌🏼",
      description:
        "Upcoming projects will be added here soon!",
      image: "/Plus.svg",
      // liveUrl: "#",
      // githubUrl: "#",
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
          <TracingBeam className="absolute -left-50 top-1/2 transform -translate-y-1/2" />
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
          className="text-center mt-20"
        >
          <GlowingButton variant="secondary" size="md">
            View All Projects
          </GlowingButton>
        </motion.div>
      </div>
    </section>
  )
}
