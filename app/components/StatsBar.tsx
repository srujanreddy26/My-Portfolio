"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolio";

function Counter({ target }: { target: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView || !ref.current) return;
        const num = parseFloat(target.replace(/[^0-9.]/g, ""));
        const hasDollar = target.includes("$");
        const hasPlus = target.includes("+");
        const hasPct = target.includes("%");
        const steps = 60; let step = 0;
        const t = setInterval(() => {
            step++;
            const v = Math.min((num / steps) * step, num);
            if (ref.current) ref.current.textContent =
                (hasDollar ? "$" : "") + Math.round(v).toLocaleString() + (hasPlus ? "+" : "") + (hasPct ? "%" : "");
            if (step >= steps) clearInterval(t);
        }, 2000 / steps);
        return () => clearInterval(t);
    }, [inView, target]);
    return <span ref={ref}>0</span>;
}

export default function StatsBar() {
    return (
        <section className="py-20 bg-black" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    {portfolioData.stats.map((stat, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="px-8 py-10 text-center"
                        >
                            <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-2 gradient-text-indigo">
                                <Counter target={stat.value} />
                            </div>
                            <div className="text-white font-semibold mb-1">{stat.label}</div>
                            <div className="text-sm" style={{ color: "#4b5563" }}>{stat.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
