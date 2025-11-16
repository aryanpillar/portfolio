"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}


export function BackgroundPaths({ name, title, summary, profileImageUrl }: { name: string; title: string; summary: string; profileImageUrl: string; }) {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-center p-4 print:min-h-0 print:py-12 print:items-start print:text-left print:px-0">
            <div className="absolute inset-0 z-0 text-indigo-400 dark:text-[--glow-cyan] print:hidden">
                 <FloatingPaths position={1} />
                 <FloatingPaths position={-1} />
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 max-w-5xl mx-auto"
            >
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 print:text-black print:bg-none">
                    {name}
                </h1>
                
                <p className="mt-4 text-base md:text-lg font-medium tracking-widest text-gray-600 dark:text-[--text-secondary] uppercase print:normal-case print:tracking-normal print:text-gray-700">
                    {title}
                </p>
                
                <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 dark:text-[--text-secondary] leading-relaxed print:text-gray-700 print:text-left print:mx-0 print:max-w-none">
                    {summary}
                </p>
            </motion.div>
        </section>
    );
}