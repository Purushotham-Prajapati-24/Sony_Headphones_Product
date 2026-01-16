"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

export const NoiseCancellingSection = ({ scrollYProgress }: SectionProps) => {
    // 0.4 to 0.65 range
    const opacity = useTransform(scrollYProgress, [0.4, 0.48, 0.6, 0.68], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0.4, 0.48, 0.6, 0.68], [50, 0, 0, 50]);

    return (
        <motion.div
            style={{ opacity, x }}
            className="fixed inset-0 z-30 flex items-center justify-end px-6 md:px-24 pointer-events-none"
        >
            <div className="max-w-xl text-right space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Adaptive noise cancelling, <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">redefined.</span>
                </h2>

                <ul className="space-y-3 text-lg md:text-xl text-white/70 leading-relaxed inline-block text-right">
                    <li className="flex items-center justify-end gap-3">
                        Multi-microphone array listens in every direction
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    </li>
                    <li className="flex items-center justify-end gap-3">
                        Real-time noise analysis adapts to your environment
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    </li>
                    <li className="flex items-center justify-end gap-3">
                        Your music stays pure—planes, trains, and crowds fade away
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};
