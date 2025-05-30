"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float, OrbitControls, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import * as THREE from "three"
import GlowingButton from "./aceternity/GlowingButton"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#FFFFFF"
          attach="material"
          distort={0.1}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#FFFFFF"
          emissiveIntensity={0.2}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.2}
          clearcoatNormalScale={[0.5, 0.5]}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const particlesPosition = new Float32Array(2000 * 3)
  for (let i = 0; i < 2000; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 20
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 20
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={2000} 
          array={particlesPosition} 
          itemSize={3}
          args={[particlesPosition, 3]} 
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#60a5fa" />
    </points>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-visible">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#F9A602" />
          <Environment preset="sunset" />
          <AnimatedSphere />
          <ParticleField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-7xl font-bold flex justify-center align-middle mb-9 bg-gradient-to-r from-violet-900 to-teal-600 bg-clip-text text-transparent">
              Hi, I&apos;m Chaitanya
              <span className="relative inline-block group">
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-900 to-gray-700"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </span>
            </h1>
            <p className="text-2xl bg-gradient-to-r from-teal-600 to-violet-900 bg-clip-text text-transparent font-semibold">
              Architecting seamless digital experiences, one optimized algorithm at a
            </p>
            <p className="text-2xl flex justify-center align-middle mb-8 bg-gradient-to-r from-teal-600 to-violet-900 bg-clip-text text-transparent font-semibold">
              time
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <GlowingButton
                onClick={() => {
                  const aboutSection = document.getElementById("about")
                  aboutSection?.scrollIntoView({ behavior: "smooth" })
                }}
                variant="primary"
                className="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600"
              >
                Learn More
              </GlowingButton>
              <GlowingButton
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  contactSection?.scrollIntoView({ behavior: "smooth" })
                }}
                variant="secondary"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                Contact Me
              </GlowingButton>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { icon: Github, href: "https://github.com/Klaidoscope14", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/chaitanya-saagar-476b562a2/", label: "LinkedIn" },
              { icon: Mail, href:"mailto:saagarchaitanya80@gmail.com" , label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-400 transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative">
                  <social.icon className="w-6 h-6" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
