"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import FloatingDock, { LanguageDock } from "./aceternity/FloatingDock"
import AnimatedText from "./aceternity/AnimatedText"
import Image from "next/image"
import { LucideIcon } from "lucide-react"
import type { ReactElement } from "react"
import FloatingCard from "./aceternity/FloatingCard"

type IconType = LucideIcon | (() => ReactElement)

interface SkillItem {
  name: string
  icon: IconType | string
  color: string
  link?: string
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const frontendSkills = [
    { title: "HTML", icon: () => <Image src="Skills/Frontend/HTML.svg" alt="HTML" width={28} height={28} />, level: 98 },
    { title: "CSS", icon: () => <Image src="Skills/Frontend/CSS.svg" alt="CSS" width={28} height={28} />, level: 95 },
    { title: "Sass", icon: () => <Image src="Skills/Frontend/Sass.svg" alt="Sass" width={28} height={28} />, level: 88 },
    { title: "Material UI", icon: () => <Image src="Skills/Frontend/MaterialUI.svg" alt="MUI" width={28} height={28} />, level: 90 },
    { title: "Tailwind", icon: () => <Image src="Skills/Frontend/TailwindCSS.svg" alt="Tailwind" width={28} height={28} />, level: 92 },
    { title: "Three.js", icon: () => <Image src="Skills/Frontend/threejs.svg" alt="Three.js" width={28} height={28} />, level: 85 },
    { title: "React", icon: () => <Image src="Skills/Frontend/React.svg" alt="React" width={28} height={28} />, level: 95 },
    { title: "Next.js", icon: () => <Image src="Skills/Frontend/nextjs.svg" alt="Next.js" width={28} height={28} />, level: 88 },
  ]

  const backendSkills = [
    { title: "Node.js", icon: () => <Image src="Skills/Backend/Nodejs.svg" alt="Node.js" width={28} height={28} />, level: 88 },
    { title: "Express.js", icon: () => <Image src="Skills/Backend/Express.svg" alt="Express.js" width={28} height={28} />, level: 90 },
    { title: "PostgreSQL", icon: () => <Image src="Skills/Backend/PostGressSQL.svg" alt="PostgreSQL" width={28} height={28} />, level: 82 },
    { title: "MongoDB", icon: () => <Image src="Skills/Backend/MongoDB.svg" alt="MongoDB" width={28} height={28} />, level: 80 },
    { title: "MySQL", icon: () => <Image src="Skills/Backend/MySQL.svg" alt="MySQL" width={28} height={28} />, level: 75 },
  ]

  const toolsSkills = [
    { title: "Git", icon: () => <Image src="Skills/Tools/Git.svg" alt="Git" width={28} height={28} />, level: 95 },
    { title: "GitHub", icon: () => <Image src="Skills/Tools/Github.svg" alt="GitHub" width={28} height={28} />, level: 95 },
    { title: "Vercel", icon: () => <Image src="Skills/Tools/vercel.svg" alt="Vercel" width={28} height={28} />, level: 95 },
    { title: "Linux", icon: () => <Image src="Skills/Tools/Linux.svg" alt="Linux" width={28} height={28} />, level: 95 },
    { title: "Figma", icon: () => <Image src="Skills/Tools/Figma.svg" alt="Figma" width={28} height={28} />, level: 85 },
    { title: "Android Studio", icon: () => <Image src="Skills/Tools/Android.svg" alt="Android Studio" width={28} height={28} />, level: 78 } ,
    { title: "Firebase", icon: () => <Image src="Skills/Tools/Firebase.svg" alt="Firebase" width={28} height={28} />, level: 80 } ,
    { title: "AWS", icon: () => <Image src="Skills/Tools/AWS.svg" alt="AWS" width={28} height={28} />, level: 80 } ,
    { title: "Postman", icon: () => <Image src="Skills/Tools/Postman.svg" alt="Postman" width={28} height={28} />, level: 85 } ,
    { title: "Google Cloud", icon: () => <Image src="Skills/Tools/GoogleCloud.svg" alt="Google Cloud" width={28} height={28} />, level: 80 } ,
    { title: "Socket.io", icon: () => <Image src="Skills/Tools/Socket.svg" alt="Socket" width={28} height={28} />, level: 85 }
  ]

  const additionalSkills: SkillItem[] = [
    // { name: "Performance Optimization", icon: Zap, color: "from-yellow-400 to-orange-500" },
    // { name: "Responsive Design", icon: Smartphone, color: "from-green-400 to-blue-500" },
    { 
      name: "LeetCode", 
      icon: () => (
        <div className="flex items-center gap-2 mt-10">
          <Image src="/CP-DSA/leetcode.svg" alt="LeetCode" width={32} height={32} />
        </div>
      ), 
      color: "from-orange-400 to-orange-600",
      link: "https://leetcode.com/u/leet--code/"
    },
    { 
      name: "Codeforces", 
      icon: () => (
        <div className="flex items-center gap-2 mt-10">
          <Image src="/CP-DSA/Cf.png" alt="Codeforces" width={32} height={32} />
        </div>
      ), 
      color: "from-red-400 to-red-600",
      link: "https://codeforces.com/profile/Chad._.saagar"
    },
  ]

  const IconWrapper = ({ icon }: { icon: IconType }) => {
    if (typeof icon === 'function') {
      const IconComponent = icon
      return <IconComponent />
    }
    return <div className="w-full h-full">{icon}</div>
  }

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Skills & Expertise"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          />
          <AnimatedText
            text="Interactive skill showcase with floating dock interface"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0.3}
          />
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-emerald-400">Programming Languages</h3>
          <div className="flex justify-center">
            <LanguageDock />
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">Frontend Development</h3>
            <div className="flex justify-center">
              <FloatingDock items={frontendSkills} />
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-purple-400">Backend Development</h3>
            <div className="flex justify-center">
              <FloatingDock items={backendSkills} />
            </div>
          </motion.div>

          {/* Tools & Others */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-pink-400">Tools & Technologies</h3>
            <div className="flex justify-center">
              <FloatingDock items={toolsSkills} />
            </div>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,2fr))] gap-4 mt-8 justify-center">
          {additionalSkills.map((skill) => (
            <div key={skill.name} className="relative">
              <FloatingCard>
                <div className="text-center">
                  {typeof skill.icon === "string" ? (
                    <div className="relative w-10 h-10 mx-auto mb-4">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 mx-auto mb-4 text-cyan-400">
                      <IconWrapper icon={skill.icon} />
                    </div>
                  )}
                  <h4 className="font-semibold mb-2 text-white">{skill.name}</h4>
                  {skill.link && (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View Profile
                    </a>
                  )}
                </div>
              </FloatingCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
