"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const FRAME_COUNT = 232;
const IMAGES_DIR = "/sony_images";

export const ScrollSequence = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const { scrollYProgress } = useScroll();

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    // Pad number with leading zeros (001, 002, ..., 232)
                    const frameNumber = i.toString().padStart(3, "0");
                    img.src = `${IMAGES_DIR}/ezgif-frame-${frameNumber}.jpg`;
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        setLoadedCount((prev) => prev + 1);
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        // Push a placeholder or handle error
                        resolve(); // Resolve anyway to continue
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    // Draw frame function
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        const image = images[index];

        if (!canvas || !context || !image) return;

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate scaling to 'contain' the image
        const hRatio = canvas.width / image.width;
        const vRatio = canvas.height / image.height;
        const ratio = Math.min(hRatio, vRatio); // Contain
        // For 'cover' usage: Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - image.width * ratio) / 2;
        const centerShift_y = (canvas.height - image.height * ratio) / 2;

        context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            centerShift_x,
            centerShift_y,
            image.width * ratio,
            image.height * ratio
        );
    };

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame after resize
                const latestScroll = scrollYProgress.get();
                const frameIndex = Math.min(
                    FRAME_COUNT - 1,
                    Math.floor(latestScroll * (FRAME_COUNT - 1))
                );
                if (images.length > 0) {
                    renderFrame(frameIndex);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, [images, scrollYProgress]);

    // Sync scroll to frame
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;

        // Map 0-1 to 0-(totalFrames-1)
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * (FRAME_COUNT - 1))
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial render when images are ready (or first frame)
    useEffect(() => {
        if (images.length > 0) {
            renderFrame(0);
        }
    }, [images]);

    return (
        <div className="fixed inset-0 z-0 bg-[#050505] flex items-center justify-center">
            {/* Optional: Loading indicator if needed, but keeping it minimal */}
            {loadedCount < FRAME_COUNT && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 text-xs font-mono">
                    Loading... {Math.round((loadedCount / FRAME_COUNT) * 100)}%
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="block w-full h-full object-contain"
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};
