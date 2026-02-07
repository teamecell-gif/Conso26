"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Events", value: 20, suffix: "+" },
    { label: "Colleges", value: 300, suffix: "+" },
    { label: "Footfall", value: 15000, suffix: "+" },
    { label: "Speakers", value: 15, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
        }

        let hasStarted = false;
        let animationFrame = 0;
        const duration = 1200; // ms

        const start = (startTime: number) => {
            const step = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1);
                setCount(Math.round(value * progress));
                if (progress < 1) {
                    animationFrame = window.requestAnimationFrame(step);
                }
            };
            animationFrame = window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (!hasStarted && entries.some((entry) => entry.isIntersecting)) {
                    hasStarted = true;
                    start(performance.now());
                    observer.disconnect();
                }
            },
            { rootMargin: "-20% 0px" }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
            }
        };
    }, [value]);

    return (
        <span ref={ref} className="tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center animate-fade-up">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-4xl md:text-6xl font-bold font-display text-white mb-2 tabular-nums">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
