"use client"

import type { ReactElement } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import Image from "next/image"

export type DockItem = {
  title: string
  icon: LucideIcon | (() => ReactElement)
  level: number
}

interface FloatingDockProps {
  items: DockItem[]
}

function DockIcon({ item, mouseX }: { item: DockItem; mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const IconComponent = item.icon

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center relative group flex-shrink-0 hover:scale-150 transition-transform duration-300 z-10"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

      <div className="relative z-10">
        {typeof IconComponent === 'function' && 'render' in IconComponent ? (
          <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-white" />
        ) : (
          <IconComponent />
        )}
      </div>

      {/* Skill level indicator */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${item.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Tooltip */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-black/90 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg border border-white/10">
          {item.title} - {item.level}%
        </div>
      </div>
    </motion.div>
  )
}

export default function FloatingDock({ items }: FloatingDockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className="mx-auto flex h-24 items-end gap-4 md:gap-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 px-6 md:px-8 pb-4 max-w-fit overflow-visible shadow-2xl"
    >
      {items.map((item, i) => (
        <DockIcon mouseX={mouseX} key={i} item={item} />
      ))}
    </motion.div>
  )
}

interface LanguageDockProps {
  className?: string
}

export function LanguageDock({ className }: LanguageDockProps) {
  const languages = [
    { title: 'C', icon: () => <Image src="Skills/Languages/C.svg" alt="C" width={28} height={28} />, level: 90 },
    { title: 'C++', icon: () => <Image src="Skills/Languages/C++.svg" alt="C++" width={28} height={28} />, level: 85 },
    { title: 'Python', icon: () => <Image src="Skills/Languages/Python.svg" alt="Python" width={28} height={28} />, level: 95 },
    { title: 'JavaScript', icon: () => <Image src="Skills/Languages/Js.svg" alt="Python" width={28} height={28} />, level: 85 },
    { title: 'Go', icon: () => <Image src="Skills/Languages/Go.svg" alt="Go" width={28} height={28} />, level: 80 },
    { title: 'TypeScript', icon: () => <Image src="Skills/Languages/Ts.svg" alt="TypeScript" width={28} height={28} />, level: 85 },
    { title: 'MIPS', icon: () => <span className="text-white font-mono">MIPS</span>, level: 75 },
    { title: 'Kotlin', icon: () => <Image src="Skills/Languages/Kotlin.svg" alt="Kotlin" width={28} height={28} />, level: 70 },
    { title: 'Arduino', icon: () => <Image src="Skills/Languages/Arduino.svg" alt="Arduino" width={28} height={28} />, level: 85 },
  ]

  return (
    <div className={cn("", className)}>
      <FloatingDock items={languages} />
    </div>
  )
}
