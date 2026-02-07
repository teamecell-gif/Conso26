"use client";

import { useRef } from "react";
// import Image from "next/image"; // Assuming no images provided, using placeholders
import { User, Mic } from "lucide-react";

const speakers = [
    { name: "Dr. Kiran Bedi", role: "24th Lt. Governor Puducherry", color: "from-blue-500 to-cyan-500" },
    { name: "Simon Taufel", role: "Former Cricket Umpire", color: "from-green-500 to-emerald-500" },
    { name: "Jatin Sapru", role: "Star Sports Presenter", color: "from-purple-500 to-pink-500" },
    { name: "Anil Swarup", role: "Former IAS Officer", color: "from-orange-500 to-red-500" },
    { name: "Pankhuri Gidwani", role: "Model & Entrepreneur", color: "from-pink-500 to-rose-500" },
];

export default function Speakers() {
    const scrollRef = useRef(null);

    return (
        <section id="speakers" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-conso-red/20 -translate-y-1/2 blur-xl" />

            <div className="container mx-auto px-6 mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-right">
                    Keynote <span className="text-conso-red">Speakers</span>
                </h2>
            </div>

            <div className="flex overflow-x-auto pb-12 gap-8 px-6 no-scrollbar snap-x" ref={scrollRef}>
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[300px] md:w-[400px] relative group snap-center"
                    >
                        <div className="aspect-[3/4] bg-neutral-900 rounded-xl overflow-hidden relative border border-white/5 transition-all duration-500 group-hover:border-conso-red/50 group-hover:shadow-[0_0_50px_rgba(255,46,46,0.3)] group-hover:scale-[1.02]">
                            {/* Placeholder Content for Image */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${speaker.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors">
                                <User size={120} />
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-conso-red font-mono text-sm uppercase tracking-wider mb-4">
                                        {speaker.role}
                                    </p>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2 text-xs text-white/60">
                                        <Mic size={14} /> Keynote Session
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
