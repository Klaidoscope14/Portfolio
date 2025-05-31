"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface GlowingButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
}

export default function GlowingButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: GlowingButtonProps) {
  return (
    <motion.div whileHover={{ scale: disabled ? 1 : 1.05 }} whileTap={{ scale: disabled ? 1 : 0.95 }} className="relative group">
      <Button
        onClick={onClick}
        size={size === "sm" ? "sm" : size === "lg" ? "lg" : "default"}
        className={`relative overflow-hidden ${
          variant === "primary"
            ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
            : "bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500/10"
        } ${className}`}
        disabled={disabled}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  )
}
