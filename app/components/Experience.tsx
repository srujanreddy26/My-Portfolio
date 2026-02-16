"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
    return (
        <section id="work" className="py-32 bg-black px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-16"
                >
                    Professional Experience
                </motion.h2>

                <div className="space-y-24">
                    {portfolioData.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="group relative pl-8 md:pl-0 border-l border-white/10 md:border-none"
                        >
                            <div className="md:grid md:grid-cols-[1fr_2fr] gap-8">
                                {/* Left Column: Date & Company */}
                                <div className="mb-6 md:mb-0">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                                        {job.company}
                                    </h3>
                                    <p className="text-neutral-500 font-mono text-sm">{job.period}</p>
                                    <p className="text-neutral-400 mt-2">{job.role}</p>
                                </div>

                                {/* Right Column: Details */}
                                <div>
                                    <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                                        {job.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {job.achievements && job.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
