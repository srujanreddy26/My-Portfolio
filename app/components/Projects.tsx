"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

type Project = typeof portfolioData.projects[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
                onClick={onClose}
            >
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)" }} />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
                    style={{ background: "#0a0a0a", border: "1px solid rgba(99,102,241,0.2)" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, #6366f1, #a78bfa)` }} />
                    <div className="p-8 md:p-10">
                        <button onClick={onClose}
                            className="absolute top-5 right-5 p-2 rounded-full transition-all hover:scale-110"
                            style={{ background: "rgba(255,255,255,0.05)", color: "#6b7280" }}>
                            <X size={16} />
                        </button>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-4"
                            style={{ background: "rgba(99,102,241,0.1)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.2)" }}>
                            {project.year} · {project.subtitle}
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                        <p className="text-base leading-relaxed mb-6" style={{ color: "#6b7280" }}>{project.description}</p>
                        <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#374151" }}>Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((t) => (
                                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono"
                                        style={{ background: "rgba(99,102,241,0.07)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.15)" }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a href={project.github}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                                style={{ background: "rgba(255,255,255,0.05)", color: "#d1d5db", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <Github size={15} /> Source
                            </a>
                            <a href={project.link}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black transition-all hover:scale-105"
                                style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)" }}>
                                <ExternalLink size={15} /> Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function Projects() {
    const [selected, setSelected] = useState<Project | null>(null);

    const allProjects = [
        ...portfolioData.projects,
        {
            title: "Cloud Migration Engine",
            subtitle: "Infrastructure",
            description: "Automated GCP migration tool orchestrating compute provisioning, networking, and zero-downtime cutover for large-scale on-prem migrations.",
            techStack: ["Go", "GCP", "Terraform", "Docker"],
            link: "#", github: "#", accent: "#22d3ee", year: "2023",
        },
        {
            title: "DB Migration Toolkit",
            subtitle: "Data Engineering",
            description: "Dual-write migration framework for Oracle → PostgreSQL with parallel writes, schema translation, and consistency validation.",
            techStack: ["Python", "PostgreSQL", "Oracle", "SQLAlchemy"],
            link: "#", github: "#", accent: "#f59e0b", year: "2023",
        },
    ];

    return (
        <>
            <section id="projects" className="py-32 px-6 bg-black">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16"
                    >
                        <p className="section-label">Featured Work</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            Things I've built.
                        </h2>
                        <p className="mt-4 text-sm" style={{ color: "#4b5563" }}>
                            Click any card to explore details
                        </p>
                    </motion.div>

                    {/* Horizontal scroll */}
                    <div
                        className="flex gap-5 overflow-x-auto pb-4"
                        style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
                    >
                        {allProjects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                onClick={() => setSelected(project)}
                                className="group shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2"
                                style={{
                                    background: "#0a0a0a",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    scrollSnapAlign: "start",
                                }}
                            >
                                {/* Accent top bar */}
                                <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.accent || "#6366f1"}, #a78bfa)` }} />

                                {/* Visual */}
                                <div className="h-40 flex items-center justify-center relative overflow-hidden"
                                    style={{ background: `linear-gradient(135deg, ${project.accent || "#6366f1"}10 0%, #000 100%)` }}>
                                    <div className="absolute w-28 h-28 rounded-full blur-3xl opacity-15"
                                        style={{ backgroundColor: project.accent || "#6366f1" }} />
                                    <span className="relative text-5xl font-black opacity-15 tracking-tighter"
                                        style={{ color: project.accent || "#6366f1" }}>
                                        {project.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <span className="text-xs font-mono" style={{ color: project.accent || "#818cf8" }}>
                                        {project.subtitle}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-indigo-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#6b7280" }}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.techStack.slice(0, 3).map((t) => (
                                            <span key={t} className="px-2 py-0.5 rounded text-xs font-mono"
                                                style={{ background: "rgba(255,255,255,0.04)", color: "#6b7280", border: "1px solid rgba(255,255,255,0.07)" }}>
                                                {t}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="text-xs font-mono" style={{ color: "#374151" }}>+{project.techStack.length - 3}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5"
                                        style={{ color: project.accent || "#818cf8" }}>
                                        View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </>
    );
}
