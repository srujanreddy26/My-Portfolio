"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import { portfolioData } from "../data/portfolio";
import { Download, ArrowRight } from "lucide-react";

function Particles() {
    const ref = useRef<THREE.Points>(null);
    const { viewport } = useThree();
    const mouse = useRef({ x: 0, y: 0 });
    const N = 500;

    const { pos, vel } = useMemo(() => {
        const pos = new Float32Array(N * 3);
        const vel = new Float32Array(N * 3);
        for (let i = 0; i < N; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
            vel[i * 3] = (Math.random() - 0.5) * 0.0012;
            vel[i * 3 + 1] = (Math.random() - 0.5) * 0.0012;
        }
        return { pos, vel };
    }, []);

    useEffect(() => {
        const h = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", h);
        return () => window.removeEventListener("mousemove", h);
    }, []);

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const p = ref.current.geometry.attributes.position.array as Float32Array;
        const t = clock.elapsedTime;
        for (let i = 0; i < N; i++) {
            const ix = i * 3;
            p[ix] += vel[ix] + Math.sin(t * 0.2 + i * 0.01) * 0.0006;
            p[ix + 1] += vel[ix + 1] + Math.cos(t * 0.15 + i * 0.01) * 0.0006;
            const dx = p[ix] - mouse.current.x * viewport.width * 0.4;
            const dy = p[ix + 1] - mouse.current.y * viewport.height * 0.4;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 2) { p[ix] += (dx / d) * 0.01; p[ix + 1] += (dy / d) * 0.01; }
            if (p[ix] > 10) p[ix] = -10;
            if (p[ix] < -10) p[ix] = 10;
            if (p[ix + 1] > 6) p[ix + 1] = -6;
            if (p[ix + 1] < -6) p[ix + 1] = 6;
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
        ref.current.rotation.z = t * 0.01;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[pos, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.022} color="#6366f1" transparent opacity={0.4} sizeAttenuation />
        </points>
    );
}

function useTypewriter(text: string, speed = 20) {
    const [d, setD] = useState("");
    useEffect(() => {
        setD(""); let i = 0;
        const t = setInterval(() => { if (i < text.length) setD(text.slice(0, ++i)); else clearInterval(t); }, speed);
        return () => clearInterval(t);
    }, [text, speed]);
    return d;
}

export default function Hero() {
    const typed = useTypewriter(portfolioData.hero.subheadline, 18);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Particle canvas */}
            <div className="absolute inset-0 z-0 opacity-50">
                <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
                    <Particles />
                </Canvas>
            </div>

            {/* Subtle center glow */}
            <div className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)" }} />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to top, #000, transparent)" }} />

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center py-32">

                {/* LEFT */}
                <div>
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8"
                        style={{ borderColor: "rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)", color: "#818cf8" }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Available for new opportunities
                    </motion.div>

                    {/* Heading — serif italic style like aayushbharti.in */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.08] mb-4">
                            <span className="text-white">Hello, I'm</span>
                            <br />
                            <span className="gradient-text-indigo">{portfolioData.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium mb-2" style={{ color: "#6b7280" }}>
                            {portfolioData.role}
                        </p>
                    </motion.div>

                    {/* Typewriter summary */}
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                        className="text-base leading-relaxed mb-10 max-w-md min-h-[72px]"
                        style={{ color: "#6b7280" }}
                    >
                        {typed}<span className="animate-pulse text-indigo-400">|</span>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 }}
                        className="flex flex-wrap gap-3"
                    >
                        <a href="#work"
                            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
                            style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)" }}
                        >
                            View My Work <ArrowRight size={14} />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                            style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#d1d5db", background: "rgba(255,255,255,0.04)" }}
                        >
                            <Download size={14} /> Resume
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT — Image placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-3xl blur-3xl opacity-25 scale-110"
                            style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }} />

                        {/* Photo box */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-3xl overflow-hidden flex items-center justify-center"
                            style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.18)" }}
                        >
                            <div className="text-center p-8">
                                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
                                    style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}>
                                    👤
                                </div>
                                <p className="text-xs font-mono" style={{ color: "#374151" }}>Your photo here</p>
                                <p className="text-xs font-mono mt-1" style={{ color: "#1f2937" }}>public/photo.jpg</p>
                            </div>
                        </div>

                        {/* Floating chips */}
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
                            className="absolute -bottom-5 -left-8 px-4 py-2.5 rounded-2xl text-xs font-semibold"
                            style={{ background: "rgba(0,0,0,0.85)", border: "1px solid rgba(99,102,241,0.25)", backdropFilter: "blur(12px)", color: "#e5e7eb" }}
                        >
                            <span className="gradient-text-indigo text-xl font-bold block">3M+</span>
                            API Requests / week
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }}
                            className="absolute -top-5 -right-8 px-4 py-2.5 rounded-2xl text-xs font-semibold"
                            style={{ background: "rgba(0,0,0,0.85)", border: "1px solid rgba(167,139,250,0.25)", backdropFilter: "blur(12px)", color: "#e5e7eb" }}
                        >
                            <span className="gradient-text-indigo text-xl font-bold block">4.0</span>
                            GPA @ DePaul
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest" style={{ color: "#1f2937" }}>Scroll</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    className="w-px h-8" style={{ background: "linear-gradient(to bottom, #6366f1, transparent)" }} />
            </motion.div>
        </section>
    );
}
