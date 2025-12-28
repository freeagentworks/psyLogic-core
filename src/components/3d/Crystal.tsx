'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { AnalysisResult } from '@/lib/types';

interface CrystalProps {
    result: AnalysisResult | null;
}

export default function Crystal({ result }: CrystalProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    // Determine color based on Mode and Type
    const baseColor = useMemo(() => {
        if (!result) return '#ffffff';
        return result.mode === 'LOVE' ? '#f43f5e' : '#06b6d4'; // Rose or Cyan
    }, [result]);

    // Determine shape complexity based on specific traits
    // e.g. Openness -> more detail?
    const detail = useMemo(() => {
        if (!result) return 0;
        // Map T-Score (roughly 20-80) to detail 0-2?
        // Let's just stick to 0 for a clean Icosahedron look, maybe 1 for high Openness
        return result.tScores.openness.openness > 60 ? 1 : 0;
    }, [result]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh ref={meshRef} scale={2}>
                    <icosahedronGeometry args={[1, detail]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={16}
                        thickness={2}
                        roughness={0.2}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        transmission={0.9} // Glass-like
                        ior={1.5}
                        chromaticAberration={0.1}
                        anisotropy={0.1}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0.2}
                        color={baseColor}
                        attenuationColor="#ffffff"
                        attenuationDistance={0.5}
                    />
                </mesh>
            </Float>

            {/* Floating particles or rings could be added here */}
        </group>
    );
}
