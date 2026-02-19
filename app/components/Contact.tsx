"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Extra glow for contact */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center bottom, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(30px)" }} />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="section-label">Get in touch</p>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-none">
                        Let's build<br />
                        <span className="gradient-text-indigo">something great.</span>
                    </h2>
                    <p className="text-lg max-w-md mx-auto mb-12 leading-relaxed" style={{ color: "#6b7280" }}>
                        I'm open to new opportunities. Whether you have a project in mind or just want to connect, my inbox is always open.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href={`mailto:${portfolioData.contact.email}`}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-black transition-all hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)", boxShadow: "0 0 40px rgba(99,102,241,0.25)" }}>
                        <Mail size={17} />
                        Say Hello
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <div className="flex gap-3">
                        {[
                            { icon: <Linkedin size={19} />, href: portfolioData.contact.linkedin },
                            { icon: <Github size={19} />, href: portfolioData.contact.github },
                        ].map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noreferrer"
                                className="p-4 rounded-full transition-all hover:scale-110"
                                style={{ border: "1px solid rgba(255,255,255,0.07)", color: "#6b7280", background: "rgba(255,255,255,0.03)" }}>
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 text-sm font-mono" style={{ color: "#374151" }}>
                    {portfolioData.contact.email}
                </motion.p>
            </div>
        </section>
    );
}
