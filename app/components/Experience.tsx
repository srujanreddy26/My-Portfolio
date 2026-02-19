"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../data/portfolio";

// Each job gets a card that stacks as you scroll
function WorkCard({
    job,
    index,
    total,
}: {
    job: (typeof portfolioData.experience)[0];
    index: number;
    total: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity }}
            className="work-card p-8 md:p-10"
        >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                    {/* Index number watermark */}
                    <span
                        className="text-xs font-mono mb-3 block"
                        style={{ color: "#374151" }}
                    >
                        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {job.role}
                    </h3>
                    <p className="text-lg font-semibold gradient-text-indigo">{job.company}</p>
                    <p className="text-sm mt-1" style={{ color: "#4b5563" }}>
                        {job.location}
                    </p>
                </div>
                <span
                    className="shrink-0 self-start px-4 py-2 rounded-full text-xs font-mono"
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#6b7280",
                    }}
                >
                    {job.period}
                </span>
            </div>

            {/* Summary */}
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
                {job.summary}
            </p>

            {/* Achievements */}
            <ul className="space-y-2.5 mb-8">
                {job.achievements.map((item, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: "#6b7280" }}
                    >
                        <span
                            className="mt-2 w-1 h-1 rounded-full shrink-0"
                            style={{ backgroundColor: job.color || "#6366f1" }}
                        />
                        {item}
                    </motion.li>
                ))}
            </ul>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                    <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                            background: "rgba(99,102,241,0.06)",
                            border: "1px solid rgba(99,102,241,0.15)",
                            color: "#818cf8",
                        }}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="work" className="py-32 px-6 bg-black">
            <div className="max-w-5xl mx-auto">
                {/* Sticky header */}
                <div className="sticky top-24 z-30 mb-16 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="section-label">Career</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            Where I've worked.
                        </h2>
                    </motion.div>
                </div>

                {/* Scrolling cards */}
                <div ref={containerRef} className="space-y-8 mt-[-60px]">
                    {portfolioData.experience.map((job, i) => (
                        <WorkCard
                            key={i}
                            job={job}
                            index={i}
                            total={portfolioData.experience.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
