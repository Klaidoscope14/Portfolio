"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Code, FolderOpen, Mail } from "lucide-react"

export default function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)

      const sections = ["home", "about", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", icon: Home, id: "home" },
    { name: "About", href: "#about", icon: User, id: "about" },
    { name: "Experience", href: "#experience", icon: Briefcase, id: "experience" },
    { name: "Skills", href: "#skills", icon: Code, id: "skills" },
    { name: "Projects", href: "#projects", icon: FolderOpen, id: "projects" },
    { name: "Contact", href: "#contact", icon: Mail, id: "contact" },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 transform -translate-x-1/2 z-50 w-full max-w-fit px-4"
        >
          <div className="relative mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl" />

            <div className="relative bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-3 sm:px-6 py-2 sm:py-3">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-2 sm:p-3 rounded-full transition-all duration-300 group ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >

                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-50"
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />

                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
                      <div className="bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {item.name}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}