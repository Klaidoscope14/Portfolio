"use client"

import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function FloatingShape({
  position,
  color,
  shape = "sphere",
}: { position: [number, number, number]; color: string; shape?: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {shape === "sphere" && <sphereGeometry args={[0.5, 32, 32]} />}
        {shape === "box" && <boxGeometry args={[0.8, 0.8, 0.8]} />}
        {shape === "torus" && <torusGeometry args={[0.6, 0.2, 16, 100]} />}
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        <FloatingShape position={[-8, 4, -5]} color="#60a5fa" shape="sphere" />
        <FloatingShape position={[8, -3, -8]} color="#a855f7" shape="box" />
        <FloatingShape position={[-6, -6, -6]} color="#06b6d4" shape="torus" />
        <FloatingShape position={[7, 6, -7]} color="#ec4899" shape="sphere" />
        <FloatingShape position={[-4, 2, -9]} color="#8b5cf6" shape="box" />
      </Canvas>
    </div>
  )
}