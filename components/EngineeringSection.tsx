"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

export const EngineeringSection = ({ scrollYProgress }: SectionProps) => {
    // 0.15 to 0.45 range
    const opacity = useTransform(scrollYProgress, [0.12, 0.2, 0.35, 0.45], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0.12, 0.2, 0.35, 0.45], [-50, 0, 0, -50]);

    return (
        <motion.div
            style={{ opacity, x }}
            className="fixed inset-0 z-30 flex items-center justify-start px-6 md:px-24 pointer-events-none"
        >
            <div className="max-w-xl text-left space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Precision-engineered for silence.
                </h2>

                <div className="space-y-4 text-lg md:text-xl text-white/70 leading-relaxed">
                    <p>
                        Custom drivers, sealed acoustic chambers, and optimized airflow deliver <span className="text-secondary">studio-grade clarity</span>.
                    </p>
                    <p>
                        Every component is tuned for balance, power, and comfort—hour after hour.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
