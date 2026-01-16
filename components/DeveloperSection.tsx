"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import Ballpit from "./Ballpit";

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

export const DeveloperSection = ({ scrollYProgress }: SectionProps) => {
    // Reveal in the last 10-15% of scroll
    const y = useTransform(scrollYProgress, [0.85, 1], ["100%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
    // Add a slight scale effect for dynamic feel
    const scale = useTransform(scrollYProgress, [0.85, 1], [0.9, 1]);

    const socialLinks = [
        { name: "Instagram", href: "#", color: "hover:text-[#E1306C]" },
        { name: "GitHub", href: "#", color: "hover:text-white" },
        { name: "Twitter", href: "#", color: "hover:text-[#1DA1F2]" },
        { name: "LinkedIn", href: "#", color: "hover:text-[#0A66C2]" },
        { name: "Mail", href: "mailto:hello@example.com", color: "hover:text-secondary" },
    ];



    return (
        <motion.div
            style={{ y, opacity, scale }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] overflow-hidden"
        >
            {/* Background Ballpit */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Ballpit count={40} followCursor={true} />
            </div>

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

            <div className="relative z-20 text-center space-y-12 max-w-4xl px-6 bg-black/20 backdrop-blur-sm p-12 rounded-3xl border border-white/5 shadow-2xl">

                {/* Header / Brand */}
                <div className="space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-secondary tracking-widest text-sm font-medium uppercase"
                    >
                        Creative Director & Developer
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter text-white"
                    >
                        Uttam <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Purush</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"
                />

                {/* Bio / Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting ultra-premium digital experiences that blend <span className="text-white">cinematic storytelling</span> with <span className="text-white">interactive engineering</span>.
                </motion.p>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8"
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-lg font-medium text-white/40 transition-colors duration-300 ${link.color} relative group`}
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-8 left-0 right-0 text-center"
                >
                    <p className="text-white/20 text-sm">
                        © 2026 Uttam Purush. All Rights Reserved.
                    </p>
                </motion.div>

            </div>
        </motion.div>
    );
};
