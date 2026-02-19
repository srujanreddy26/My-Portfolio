"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";

const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    return (
        <header className="fixed top-0 inset-x-0 z-50 flex justify-center py-5 pointer-events-none">
            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-500"
                style={{
                    background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
                    border: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                }}
            >
                <Link href="/" className="text-sm font-bold text-white hover:text-indigo-400 transition-colors">
                    {portfolioData.name.split(" ")[0]}
                    <span className="text-indigo-400">.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((l) => (
                        <a key={l.name} href={l.href}
                            className="text-sm transition-colors duration-200 hover:text-white"
                            style={{ color: "#6b7280" }}>
                            {l.name}
                        </a>
                    ))}
                </nav>

                <a href="#contact"
                    className="px-4 py-2 rounded-full text-xs font-bold text-black transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)" }}>
                    Hire Me
                </a>
            </motion.div>
        </header>
    );
}
