import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sony WH-1000XM6 | Silence, Perfected",
    description: "Experience the new flagship noise cancelling headphones from Sony. Re-engineered for silence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={clsx(inter.className, "bg-[#050505] text-white min-h-screen selection:bg-primary selection:text-white")}>
                {children}
            </body>
        </html>
    );
}
