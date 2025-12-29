'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

function HeroCrystal() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // 複雑な回転を加えて、光の反射を美しく見せる
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
                <mesh ref={meshRef} scale={1.8}>
                    {/* 正二十面体を使用して、提供された画像のファセットカットされた宝石のような形状を再現 */}
                    <icosahedronGeometry args={[1, 0]} />

                    {/* ガラス/クリスタルの質感を表現 */}
                    <MeshTransmissionMaterial
                        backside
                        samples={16} // 品質向上のためサンプル数を確保
                        thickness={2.5} // 厚みを持たせて屈折を強調
                        roughness={0} // 表面は完全に滑らかに
                        clearcoat={1}
                        clearcoatRoughness={0}
                        transmission={1}
                        ior={1.6} // 屈折率を高めに設定して宝石感を出す
                        chromaticAberration={0.3} // 光の分散（虹色）を強めに
                        anisotropy={0.3}
                        distortion={0.2}
                        distortionScale={0.3}
                        temporalDistortion={0.1}
                        color="#ffffff" // ベースはクリア、ライトで色付け
                        attenuationColor="#ffffff"
                        attenuationDistance={1}
                    />
                </mesh>
            </Float>
        </group>
    );
}

export default function HeroObject() {
    return (
        <div className="w-full h-[220px] sm:h-[400px] flex items-center justify-center fade-in touch-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
                {/* 画像のライティング（マゼンタとシアンのグラデーション）を再現 */}
                <ambientLight intensity={0.2} />

                {/* 右上からのマゼンタ/ピンクの光 */}
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.5}
                    penumbra={1}
                    intensity={3}
                    color="#d946ef"
                />

                {/* 左下からのシアン/青の光 */}
                <spotLight
                    position={[-10, -10, -10]}
                    angle={0.5}
                    penumbra={1}
                    intensity={3}
                    color="#06b6d4"
                />

                {/* 環境マップによる写り込み */}
                <Environment preset="city" />

                <HeroCrystal />

                {/* 背景のキラキラを追加して宇宙的な雰囲気を強調 */}
                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
}
