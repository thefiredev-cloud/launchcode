"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingPanels() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const panels = [
    { position: [0, 0, 0], delay: 0 },
    { position: [1, 0.5, 0.5], delay: 0.2 },
    { position: [-1, -0.5, 0.5], delay: 0.4 },
    { position: [0.5, 1, -0.5], delay: 0.6 },
    { position: [-0.5, -1, -0.5], delay: 0.8 },
    { position: [1.5, 0, 1], delay: 1.0 },
    { position: [-1.5, 0.3, 1], delay: 1.2 },
    { position: [0, -0.8, 1.5], delay: 1.4 },
  ];

  return (
    <group ref={groupRef}>
      {panels.map((panel, i) => (
        <Panel key={i} position={panel.position as [number, number, number]} delay={panel.delay} />
      ))}
    </group>
  );
}

function Panel({ position, delay }: { position: [number, number, number]; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5 + delay) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.1, 0.5]} />
      <meshStandardMaterial 
        color="#f59e0b" 
        transparent 
        opacity={0.6}
        emissive="#f59e0b"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingPanels />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
