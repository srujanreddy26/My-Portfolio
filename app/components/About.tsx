"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { GraduationCap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 bg-black">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <p className="section-label">About Me</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        A little about myself.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="space-y-5 text-base leading-relaxed" style={{ color: "#6b7280" }}>
                            <p>
                                I'm a Full-Stack Software Engineer passionate about building systems that handle real scale.
                                At IndiaMart, I owned backend services processing over{" "}
                                <span className="text-white font-medium">3 million API requests per week</span>, migrated
                                infrastructure to GCP, and cut latency by 82%.
                            </p>
                            <p>
                                Currently pursuing my Master's in Computer Science at{" "}
                                <span className="text-white font-medium">DePaul University</span> with a perfect 4.0 GPA,
                                staying sharp on modern web technologies and distributed systems.
                            </p>
                            <p>
                                I thrive at the intersection of backend engineering and product thinking — writing clean,
                                maintainable code that solves real problems at scale.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#374151" }}>
                            Education
                        </p>
                        <div className="space-y-4">
                            {portfolioData.education.map((edu, i) => (
                                <div key={i} className="work-card p-6">
                                    <div className="flex items-start gap-3">
                                        <GraduationCap size={18} style={{ color: edu.highlight ? "#818cf8" : "#374151", marginTop: 2 }} />
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <h4 className="font-bold text-white text-sm">{edu.school}</h4>
                                                {edu.highlight && (
                                                    <span className="text-xs px-2 py-0.5 rounded-full shrink-0"
                                                        style={{ color: "#818cf8", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm mt-0.5" style={{ color: "#6b7280" }}>{edu.degree}</p>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-xs font-mono" style={{ color: "#374151" }}>{edu.period}</span>
                                                <span className="text-sm font-semibold" style={{ color: edu.highlight ? "#818cf8" : "#6b7280" }}>
                                                    GPA: {edu.gpa}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
