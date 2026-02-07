"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function MainShape() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={mesh} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function OrbitingSphere({ position, color, size = 0.3 }: { position: [number, number, number], color: string, size?: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.elapsedTime;
      mesh.current.position.x = Math.cos(time * 0.5) * 3;
      mesh.current.position.z = Math.sin(time * 0.5) * 3;
      mesh.current.position.y = Math.sin(time * 0.8) * 1.5;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

function FloatingTorus() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.elapsedTime;
      mesh.current.rotation.x = time * 0.3;
      mesh.current.rotation.y = time * 0.4;
      mesh.current.position.y = Math.sin(time * 0.6) * 0.8;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={[2.5, 0, -1]}>
        <torusGeometry args={[0.8, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#00f2ea"
          emissive="#00f2ea"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function GeometricShape() {
  return (
    <div className="absolute top-0 right-0 h-[600px] w-[600px] opacity-60 md:opacity-100 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#8b5cf6" />
        <pointLight position={[-3, -3, -3]} intensity={1.5} color="#00f2ea" />
        <pointLight position={[0, 5, 0]} intensity={1} color="#a78bfa" />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <MainShape />
        <FloatingTorus />
        <OrbitingSphere position={[0, 0, 0]} color="#00f2ea" size={0.25} />
        <OrbitingSphere position={[0, 0, 0]} color="#a78bfa" size={0.2} />
        <Particles />
        
        <EffectComposer>
          <Bloom 
            intensity={2} 
            luminanceThreshold={0.1} 
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.ADD}
          />
          <ChromaticAberration 
            offset={[0.002, 0.002] as [number, number]} 
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
