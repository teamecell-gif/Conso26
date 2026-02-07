"use client";

const stats = [
    { label: "Events", value: 20, suffix: "+" },
    { label: "Colleges", value: 300, suffix: "+" },
    { label: "Footfall", value: 15000, suffix: "+" },
    { label: "Speakers", value: 15, suffix: "+" },
];

export default function Stats() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center animate-fade-up">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-4xl md:text-6xl font-bold font-display text-white mb-2 tabular-nums">
                                {stat.value.toLocaleString()}{stat.suffix}
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
