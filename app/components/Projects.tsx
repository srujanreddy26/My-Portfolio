"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 bg-zinc-950">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-16"
                >
                    Featured Work
                </motion.h2>

                <div className="grid grid-cols-1 gap-16">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5"
                        >
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Visual Side (Placeholder for now) */}
                                <div className="h-64 md:h-96 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
                                    <div className="text-center">
                                        <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-mono mb-4 bg-black/50 backdrop-blur-md">
                                            Project Visualization
                                        </div>
                                        <p className="text-2xl font-bold opacity-20">{project.title}</p>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-8 md:p-12">
                                    <p className="text-purple-400 font-mono text-xs mb-4">
                                        {project.subtitle}
                                    </p>
                                    <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-400 mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-300 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-6">
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors"
                                        >
                                            <Github size={18} />
                                            Code
                                        </a>
                                        <a
                                            href={project.link}
                                            className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
