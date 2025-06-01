"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import FloatingCard from "./aceternity/FloatingCard"
import AnimatedText from "./aceternity/AnimatedText"

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Web Developmnet Head",
      company: "Entrepreneurship Cell , IIT Patna",
      location: "IIT Patna",
      period: "May 2025",
      description:
        "Leading development of a scalable E-Cell site using React , Next.js , Node.js , Express.js. Cooridnating junior developers and architecting scalable and responsive solutions.",
      achievements: [
        "Creted an E-Cell Alumni Portal using Three.js , React , Next.js.",
        "Leading a team of 4 developers on multiple projects imapctin growth and outreach of E-Cell.",
        "Conducted Debugging Operations on frontend of different websites of E-Cell."
      ],
      technologies: ["Tailwind CSS" , "JavaScript" , "Three.js" ,"TypeScript" , "React", "Node.js" , "Express.js" , "Airtable"],
      link: "https://ecell.iitp.ac.in/",
    } ,
    {
      title: "Full-Stack Developer",
      company: "Tradylytics",
      location: "Agra , India",
      period: "May 2025",
      description:
        "Working on the frontend of a web application that allows users to analyze stock market data and make investment decisions. ",
      achievements: [
        "Worked on the frontend of a web application that allows users to analyze stock market data and make investment decisions.",
        "Worked on the backend of a web application that allows users to analyze stock market data and make investment decisions.",
        "Worked on the deployment of a web application that allows users to analyze stock market data and make investment decisions.",
      ],
      technologies: ["Sass" , "Material UI" , "Shimmer UI", "React", "TypeScript" ,"Node.js"],
      link: "https://www.tradylytics.in/",
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-15xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Professional Experience"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          />
          <AnimatedText
            text="A journey through my professional growth and key achievements in the tech industry."
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0.3}
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black z-10" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <FloatingCard delay={index * 0.1}>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                          <div className="flex items-center gap-2 text-cyan-400">
                            <span className="font-semibold">{experience.company}</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">{experience.description}</p>

                      <div>
                        <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FloatingCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Want to know more about my professional journey?</p>
          <motion.a
            href="https://drive.google.com/drive/folders/1dp2fC4dKi6a1XiPHAx9VKNROvpDjeEm2?usp=sharing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            View Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}