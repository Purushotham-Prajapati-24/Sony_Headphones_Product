"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { GradientButton } from "./GradientButton";

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

export const CTASection = ({ scrollYProgress }: SectionProps) => {
    // 0.85 to 1.0 range
    const opacity = useTransform(scrollYProgress, [0.88, 0.95], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.88, 0.95], [0.95, 1]);

    return (
        <motion.div
            style={{ opacity, scale }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center pointer-events-none bg-black/20"
        >
            {/* Background gradient specifically for this section to make text pop */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent -z-10" />

            <div className="text-center space-y-8 pointer-events-auto mt-64">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                    Hear everything. <br /> Feel nothing else.
                </h2>

                <p className="text-xl md:text-2xl text-white/70 max-w-xl mx-auto">
                    WH‑1000XM6. Designed for focus, crafted for comfort.
                </p>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-center pt-8">
                    <GradientButton className="text-lg px-10 py-4">
                        Experience WH-1000XM6
                    </GradientButton>

                    <a href="#" className="text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline">
                        See full specs
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
