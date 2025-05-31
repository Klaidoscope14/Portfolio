"use client"
import { motion, useInView} from "framer-motion"
import { useRef, useState, TouchEvent } from "react"
import ThreeDCard from "./aceternity/ThreeDCard"
import AnimatedText from "./aceternity/AnimatedText"
import GlowingButton from "./aceternity/GlowingButton"
import { TracingBeam } from "./aceternity/TracingBeam"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const projects = [
    {
      title: "SysHealth 🧬",
      description:
        "An interface that allows users to view over 12 real-time system metrics (including CPU usage, memory consumption, and network throughput) in real time.",
      image: "/Projects/SysHealth.png",
      technologies: ["Tailwind CSS" ,"React", "TypeScript" , "Next.js" ,"Node.js" , "Express.js" , "RESTful APIs"],
      githubUrl: "https://github.com/Klaidoscope14/SysHealth",
    },
    {
      title: "Chatify 💻",
      description:
        "A real-time chat application that allows users to send and receive messages in real time. Employs Socket.io for real-time comms and MongoDB for data storage.",
      image: "/Projects/Chatify.png",
      technologies: ["Tailwind CSS" , "JavaScript", "React", "Node.js", "Express.js" , "Socket.io" , "MongoDB"],
      githubUrl: "https://github.com/Klaidoscope14/Chatify",
    },
    {
      title: "E-Cell Alumni Connect 🎓",
      description:
        "An outreach platform that allows alumni of the college to connect with E-Cell, IIT Patna. From here , they can participate in guest talks , workshops and increase interaction with the students. Handled 200+ users.",
      image: "/Projects/E-Cell Alum Connect.png",
      technologies: ["Tailwind CSS" , "Three.js" , "JavaScript", "React", "Airtable" , "Vercel"],
      liveUrl: "https://e-cell-alumni-connect.vercel.app/",
      githubUrl: "https://github.com/Klaidoscope14/E-Cell-Alumni-Connect",
    },
    // {
    //   title: "More Coming Soon! ✌🏼",
    //   description:
    //     "Upcoming projects will be added here soon!",
    //   image: "/Plus.svg",
    //   // liveUrl: "#",
    //   // githubUrl: "#",
    //   featured: false,
    // },
  ]

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

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
          <TracingBeam className="absolute -left-50 top-1/2 transform -translate-y-1/2">
            <div></div>
          </TracingBeam>
          
          {/* Project Carousel */}
          <div 
            className="relative overflow-visible py-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.title} className="w-full flex-shrink-0 px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="w-full max-w-4xl mx-auto"
                  >
                    <div className="relative">
                      <ThreeDCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        techStack={project.technologies}
                        githubLink={project.githubUrl || ""}
                        demoLink={project.liveUrl || ""}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Glowing Dots Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {currentIndex === index && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-50"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <a href="https://github.com/Klaidoscope14" target="_blank" rel="noopener noreferrer">
            <GlowingButton variant="secondary" size="md">
              View All Projects
            </GlowingButton>
          </a>
        </motion.div>
      </div>
    </section>
  )
}