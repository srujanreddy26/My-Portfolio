"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const dotX = useSpring(mouseX, { damping: 40, stiffness: 500 });
    const dotY = useSpring(mouseY, { damping: 40, stiffness: 500 });
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Dot */}
            <motion.div
                className="cursor-dot"
                style={{ x: dotX, y: dotY }}
            />
            {/* Ring */}
            <motion.div
                className="cursor-ring"
                style={{ x: ringX, y: ringY }}
            />
        </>
    );
}
