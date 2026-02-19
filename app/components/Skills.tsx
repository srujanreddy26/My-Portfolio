"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiGo, SiPython, SiNodedotjs,
    SiPostgresql, SiDocker, SiGooglecloud, SiAmazonwebservices, SiFramer,
    SiJavascript, SiDjango, SiGraphql, SiRedis, SiGit, SiLinux, SiPostman
} from "react-icons/si";

// ─── 3D ROTATING OBJECT ─────────────────────────────────
function RotatingShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const t = clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.4;
        meshRef.current.rotation.y = t * 0.3;
        meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    });

    return (
        <mesh ref={meshRef}>
            <torusKnotGeometry args={[1.5, 0.5, 128, 32]} />
            <meshPhysicalMaterial
                color="#ffffff"
                metalness={0.9}
                roughness={0.1}
                transmission={0.6}
                thickness={1}
                clearcoat={1}
                clearcoatRoughness={0.1}
                reflectivity={1}
            />
        </mesh>
    );
}

// ─── SKILLS DATA ────────────────────────────────────────
const skills1 = [
    { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} color="#ffffff" /> },
    { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
    { name: "Go", icon: <SiGo size={32} color="#00ADD8" /> },
    { name: "Python", icon: <SiPython size={32} color="#3776AB" /> },
    { name: "Node.js", icon: <SiNodedotjs size={32} color="#339933" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} color="#4169E1" /> },
    { name: "Docker", icon: <SiDocker size={32} color="#2496ED" /> },
    { name: "AWS", icon: <SiAmazonwebservices size={32} color="#FF9900" /> },
];

const skills2 = [
    { name: "GCP", icon: <SiGooglecloud size={32} color="#4285F4" /> },
    { name: "Framer", icon: <SiFramer size={32} color="#ffffff" /> },
    { name: "Linux", icon: <SiLinux size={32} color="#FCC624" /> },
    { name: "Git", icon: <SiGit size={32} color="#F05032" /> },
    { name: "Redis", icon: <SiRedis size={32} color="#DC382D" /> },
    { name: "GraphQL", icon: <SiGraphql size={32} color="#E10098" /> },
    { name: "Django", icon: <SiDjango size={32} color="#092E20" /> },
    { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: "Postman", icon: <SiPostman size={32} color="#FF6C37" /> },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-black overflow-hidden relative">
            {/* 3D Focal Point */}
            <div className="h-[400px] w-full relative z-10">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
                    <RotatingShape />
                </Canvas>

                {/* Heading */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold uppercase tracking-widest text-[#4a5568] mb-4"
                    >
                        My Skills
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="secret-sauce-heading font-serif text-white text-center"
                    >
                        The Secret <span className="font-script sauce-text">Sauce</span>
                    </motion.h2>
                </div>
            </div>

            {/* Rolling Skills Rows */}
            <div className="mt-20 space-y-12">
                {/* Row 1 - Left to Right */}
                <div className="relative">
                    <div className="flex gap-6 marquee-track">
                        {[...skills1, ...skills1].map((skill, i) => (
                            <div key={i} className="squircle-icon group">
                                <div className="transition-transform duration-300 group-hover:scale-110">
                                    {skill.icon}
                                </div>
                                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-mono text-[#818cf8]">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right to Left */}
                <div className="relative">
                    <div className="flex gap-6" style={{ animation: "marquee 35s linear infinite reverse" }}>
                        {[...skills2, ...skills2].map((skill, i) => (
                            <div key={i} className="squircle-icon group">
                                <div className="transition-transform duration-300 group-hover:scale-110">
                                    {skill.icon}
                                </div>
                                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-mono text-[#818cf8]">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>.

            {/* Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none blur-3xl" />
        </section>
    );
}
