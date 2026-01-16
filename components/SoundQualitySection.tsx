"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

export const SoundQualitySection = ({ scrollYProgress }: SectionProps) => {
    // 0.65 to 0.85 range
    const opacity = useTransform(scrollYProgress, [0.65, 0.72, 0.82, 0.88], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0.65, 0.72, 0.82, 0.88], [30, 0, 0, -30]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="fixed inset-0 z-30 flex items-end justify-start px-6 md:px-24 pb-32 pointer-events-none"
        >
            <div className="max-w-2xl text-left space-y-6 bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    Immersive, <br /> lifelike sound.
                </h2>

                <div className="space-y-4 text-lg text-white/80">
                    <p>
                        High-performance drivers unlock detail, depth, and texture in every track.
                    </p>
                    <p className="text-white/60 text-base">
                        AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
