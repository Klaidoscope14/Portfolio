"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function FloatingCard({ children, className = "", delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className={`relative group ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

      {/* Card content */}
      <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 group-hover:border-purple-500/50 transition-all duration-300">
        {children}
      </div>
    </motion.div>
  )
}
