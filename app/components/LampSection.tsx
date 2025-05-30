"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function Sparkle({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 2
      ref.current.rotation.y = state.clock.elapsedTime * 1.5
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#8b5cf6" />
    </mesh>
  )
}

function SparkleField() {
  const sparkles = Array.from({ length: 50 }, (_, i) => (
    <Sparkle key={i} position={[(Math.random() - 0.5) * 10, Math.random() * 5, (Math.random() - 0.5) * 10]} />
  ))

  return <>{sparkles}</>
}

export default function LampSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <SparkleField />
        </Canvas>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="relative">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "400px", opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 -top-20 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"
            />

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 -top-20 w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative z-10 pt-32"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-b from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Illuminating Ideas
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Every great project starts with a spark of inspiration. I transform complex problems into elegant
                solutions, bringing clarity to the digital landscape.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex justify-center space-x-8 text-center"
              >
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "5+", label: "Years Experience" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
                    className="relative"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur" />
                    <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}