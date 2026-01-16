"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import clsx from "clsx";
import { GradientButton } from "./GradientButton";

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-12",
                isScrolled
                    ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-3"
                    : "bg-transparent py-5"
            )}
        >
            {/* Left: Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-xl font-bold tracking-tight text-white hover:text-white/90 transition-colors border-2 border-white/5 rounded-full px-2 py-1">
                    PURUSH <span className="text-secondary">AI</span>
                </span>
                {/* Placeholder for Sony logo if needed, sticking to generic text for now as per prompt */}
                <span className="text-lg font-medium tracking-tight text-white">
                   SONY WH-1000XM6
                </span>
            </div>

            {/* Center: Links */}
            <div className="hidden md:flex items-center gap-8 translate-x-12">
                {["Overview", "Technology", "Noise Cancelling", "Specs"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-sm text-text-secondary hover:text-white transition-colors duration-200 font-medium"
                    >
                        {item}
                    </a>
                ))}
                <a
                    href="#"
                    className="text-sm text-text-secondary hover:text-white transition-colors duration-200 font-medium"
                >
                    Buy
                </a>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center gap-4">
                <GradientButton className="text-xs md:text-sm">
                    Pre-order
                </GradientButton>
            </div>
        </motion.nav>
    );
};
