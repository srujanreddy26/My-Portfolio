"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 bg-black border-t border-white/5">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-purple-400 font-medium tracking-wide mb-6 uppercase text-sm"
                >
                    What's Next?
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
                >
                    Let's work together.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl text-neutral-400 max-w-lg mx-auto mb-12"
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6"
                >
                    <a
                        href={`mailto:${portfolioData.contactQueries.email}`}
                        className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all hover:scale-105"
                    >
                        <Mail size={18} />
                        Say Hello
                    </a>
                    <a
                        href={portfolioData.contactQueries.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={portfolioData.contactQueries.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                    >
                        <Github size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
