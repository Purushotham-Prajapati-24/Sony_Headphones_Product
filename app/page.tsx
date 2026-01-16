"use client";

import { useScroll } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ScrollSequence } from "@/components/ScrollSequence";
import { HeroSection } from "@/components/HeroSection";
import { EngineeringSection } from "@/components/EngineeringSection";
import { NoiseCancellingSection } from "@/components/NoiseCancellingSection";
import { SoundQualitySection } from "@/components/SoundQualitySection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
    // Track window scroll progress
    const { scrollYProgress } = useScroll();

    return (
        <main className="relative min-h-[500vh] bg-[#050505]">
            <Navbar />

            {/* The Stickiness is handled inside components via fixed positioning */}

            {/* Core Background Animation */}
            <ScrollSequence />

            {/* Story Sections - Pass scroll progress to control their internal animations */}
            <HeroSection scrollYProgress={scrollYProgress} />
            <EngineeringSection scrollYProgress={scrollYProgress} />
            <NoiseCancellingSection scrollYProgress={scrollYProgress} />
            <SoundQualitySection scrollYProgress={scrollYProgress} />
            <CTASection scrollYProgress={scrollYProgress} />
        </main>
    );
}
