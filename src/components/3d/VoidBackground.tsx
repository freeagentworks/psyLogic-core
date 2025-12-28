'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Sparkles, Cloud } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'

function AnimatedBackground() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the background slowly
      groupRef.current.rotation.y += 0.0005
      // Gentle floating effect
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Nebula / Cloud effects */}
      <Cloud opacity={0.3} speed={0.2} bounds={[10, 2, 2]} segments={20} position={[0, -5, -10]} color="#4c1d95" />
      <Cloud opacity={0.3} speed={0.2} bounds={[10, 2, 2]} segments={20} position={[10, 5, -15]} color="#0e7490" />

      <Sparkles
        count={300}
        scale={12}
        size={1.5}
        speed={0.2}
        opacity={0.4}
        noise={0.1}
        color="#a5b4fc" // Soft indigo tint
      />
    </group>
  )
}

export default function VoidBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]} // Optimize for pixel ratio
        gl={{ antialias: false }} // Performance optimization
      >
        <AnimatedBackground />
      </Canvas>
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />
    </div>
  )
}
