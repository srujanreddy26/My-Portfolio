"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 inset-x-0 z-50 flex justify-center py-6 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`pointer-events-auto px-6 py-3 rounded-full flex items-center gap-8 border border-white/10 transition-all duration-300 backdrop-blur-md ${scrolled ? "bg-black/80 shadow-2xl scale-95" : "bg-transparent"
                    }`}
            >
                <Link href="/" className="text-sm font-medium hover:text-purple-400 transition-colors">
                    Home
                </Link>
                <Link href="#work" className="text-sm font-medium hover:text-purple-400 transition-colors">
                    Work
                </Link>
                <Link href="#about" className="text-sm font-medium hover:text-purple-400 transition-colors">
                    About
                </Link>
                <Link
                    href="#contact"
                    className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-neutral-200 transition-colors"
                >
                    Contact
                </Link>
            </motion.div>
        </header>
    );
}
