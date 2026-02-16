"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-black text-center">

            {/* Background Gradient Mesh */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />

            <div className="max-w-4xl mx-auto z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-purple-400 font-medium tracking-wide mb-6 uppercase text-sm"
                >
                    {portfolioData.role}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-8"
                >
                    {portfolioData.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
                >
                    {portfolioData.hero.subtitle}
                </motion.p>
            </div>
        </section>
    );
}
