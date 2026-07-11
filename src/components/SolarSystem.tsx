"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { useRouter } from "next/navigation";
import * as THREE from "three";

interface PlanetProps {
  name: string;
  color: string;
  radius: number;
  distance: number;
  speed: number;
  path: string;
  isPaused: React.MutableRefObject<boolean>;
  onNavigate: (path: string) => void;
}

function Planet({ name, color, radius, distance, speed, path, isPaused, onNavigate }: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Random starting angle so they don't all align
  const initialAngle = useMemo(() => Math.random() * Math.PI * 2, []);
  const angleRef = useRef(initialAngle);

  useFrame((state, delta) => {
    if (groupRef.current && planetRef.current) {
      if (!isPaused.current) {
        angleRef.current += speed * delta;
      }
      groupRef.current.position.x = Math.cos(angleRef.current) * distance;
      groupRef.current.position.z = Math.sin(angleRef.current) * distance;
      planetRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      {/* Orbit Line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance - 0.05, distance + 0.05, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.15} transparent side={THREE.DoubleSide} />
      </mesh>
      
      <group ref={groupRef}>
        <mesh
          ref={planetRef}
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(path);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            isPaused.current = true;
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(false);
            isPaused.current = false;
            document.body.style.cursor = "auto";
          }}
        >
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            roughness={0.6} 
            metalness={0.3} 
            emissive={hovered ? color : "#000000"} 
            emissiveIntensity={0.3} 
          />
        </mesh>
        
        <Html distanceFactor={20} center position={[0, radius + 1.2, 0]} zIndexRange={[0, 0]}>
          <div 
            className="text-white text-3xl md:text-2xl font-bold bg-black/70 px-7 py-3 md:px-6 md:py-2.5 rounded-xl whitespace-nowrap pointer-events-none transition-all duration-300 backdrop-blur-md border border-white/20" 
            style={{ 
              transform: hovered ? 'scale(1.15)' : 'scale(1)',
              boxShadow: hovered ? `0 0 20px ${color}90` : '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
              textShadow: '0 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            {name}
          </div>
        </Html>
      </group>
    </>
  );
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2.55, 32, 32]} />
      <meshBasicMaterial color="#ffaa00" />
      <pointLight intensity={200} distance={150} color="#ffccaa" />
      {/* Glow effect hack */}
      <mesh>
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshBasicMaterial color="#ff7700" transparent opacity={0.4} />
      </mesh>
      <mesh>
        <sphereGeometry args={[3.23, 32, 32]} />
        <meshBasicMaterial color="#ff3300" transparent opacity={0.15} />
      </mesh>
    </mesh>
  );
}

function CameraSetup() {
  const { camera } = useThree();
  
  useEffect(() => {
    // If it's a mobile screen, render fully zoomed out initially to prevent cut-offs
    if (window.innerWidth < 768) {
      camera.position.set(0, 34, 60);
    }
  }, [camera]);

  return null;
}

export default function SolarSystem() {
  const isPaused = useRef(false);
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigate = (path: string) => {
    setIsNavigating(true);
    router.push(path);
  };

  const planets = [
    { name: "About me", color: "#4facf7", radius: 0.66, distance: 4.9, speed: 0.3, path: "/about" },
    { name: "Projects", color: "#e86a58", radius: 0.99, distance: 7.7, speed: 0.2, path: "/projects" },
    { name: "Experience", color: "#f9d776", radius: 0.825, distance: 10.5, speed: 0.15, path: "/experience" },
    { name: "Skills", color: "#6df0a3", radius: 0.55, distance: 13.3, speed: 0.1, path: "/skills" },
    { name: "Contact", color: "#b67df2", radius: 0.495, distance: 16.1, speed: 0.08, path: "/contact" },
  ];

  return (
    <div className="w-full h-full absolute inset-0 bg-black">
      {isNavigating && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-auto">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="text-white mt-6 text-xl font-semibold tracking-[0.3em] animate-pulse">WARPING...</p>
          </div>
        </div>
      )}

      {/* Hero Text & UX Guide */}
      <div className="absolute bottom-12 md:bottom-16 left-0 right-0 z-40 flex flex-col items-center justify-center text-center pointer-events-none px-6">
        <h1 
          className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 drop-shadow-2xl uppercase" 
          style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}
        >
          BYUNGHOON JUN
        </h1>
        <p className="text-gray-400 text-sm md:text-base font-medium tracking-[0.2em] uppercase max-w-lg mx-auto mb-8">
          Creative Developer
        </p>

        {/* User Experience Guide (Senior Planner perspective) */}
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full animate-bounce shadow-lg shadow-black/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4facf7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          <span className="text-gray-200 text-xs md:text-sm font-semibold tracking-widest uppercase">
            Click planets to explore
          </span>
        </div>
      </div>

      <Canvas camera={{ position: [0, 20, 35], fov: 45 }}>
        <CameraSetup />
        <ambientLight intensity={0.05} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Sun />
        
        {planets.map((planet) => (
          <Planet key={planet.name} {...planet} isPaused={isPaused} onNavigate={handleNavigate} />
        ))}
        
        <OrbitControls 
          enablePan={false} 
          minDistance={10} 
          maxDistance={69} 
          maxPolarAngle={Math.PI / 2 + 0.1} // Prevent going too far below the plane
        />
      </Canvas>
    </div>
  );
}
