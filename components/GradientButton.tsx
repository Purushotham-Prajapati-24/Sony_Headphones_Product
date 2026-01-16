"use client";

import React from "react";
import clsx from "clsx";
import { motion, HTMLMotionProps } from "framer-motion";

interface GradientButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
}

export const GradientButton = ({
    variant = "primary",
    children,
    className,
    ...props
}: GradientButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(
                "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 md:px-8 md:py-3 md:text-base group",
                {
                    "text-white bg-transparent overflow-hidden": variant === "primary",
                    "text-white/80 hover:text-white": variant === "secondary",
                },
                className
            )}
            {...props}
        >
            {variant === "primary" && (
                <>
                    {/* Gradient Border/Background Effect */}
                    <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-primary to-secondary opacity-80 group-hover:opacity-100 transition-opacity">
                        <div className="absolute inset-0 bg-black/90 rounded-full" />
                    </div>

                    {/* Subtle Glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-2">
                        {children}
                    </span>
                </>
            )}

            {variant === "secondary" && (
                <span className="relative z-10 group-hover:text-white transition-colors">
                    {children}
                </span>
            )}
        </motion.button>
    );
};
