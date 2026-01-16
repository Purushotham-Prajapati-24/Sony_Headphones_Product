"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

export const HeroSection = ({ scrollYProgress }: SectionProps) => {
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center text-center pointer-events-none"
        >
            <div className="max-w-4xl px-6 space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter"
                >
                    Sony <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">WH-1000XM6</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-4xl font-normal text-white/90 tracking-tight"
                >
                    Silence, perfected.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-white/60 text-lg md:text-xl max-w-lg mx-auto leading-relaxed"
                >
                    Flagship wireless noise cancelling, re‑engineered for a world that never stops.
                </motion.p>
            </div>
        </motion.div>
    );
};
