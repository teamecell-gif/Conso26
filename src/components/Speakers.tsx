"use client";

import { useRef } from "react";
import Image from "next/image";
import { Mic } from "lucide-react";

const speakers = [
    {
        name: "Dr. Kiran Bedi",
        role: "24th Lt. Governor Puducherry",
        image: "/kiran_bedi-CuRudpqH.webp",
    },
    {
        name: "Simon Taufel",
        role: "Former Cricket Umpire",
        image: "/simon-CnwpwyAH.webp",
    },
    {
        name: "Jatin Sapru",
        role: "Star Sports Presenter",
        image: "/jatin-Bl0GbvUs.webp",
    },
    {
        name: "Anil Swarup",
        role: "Former IAS Officer",
        image: "/anilswarup-BgCJbeYg.webp",
    },
    {
        name: "Pankhuri Gidwani",
        role: "Model & Entrepreneur",
        image: "/pankhuri-Cc_JQRug.webp",
    },
];

export default function Speakers() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <>
            {/* Hide Scrollbar CSS (inside same file) */}
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <section id="speakers" className="py-32 bg-background relative overflow-hidden">
                
                {/* red glow line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-conso-red/20 -translate-y-1/2 blur-xl" />

                {/* heading */}
                <div className="container mx-auto px-6 mb-16">
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-right animate-fade-up">
                        Keynote <span className="text-conso-red">Speakers</span>
                    </h2>
                </div>

                {/* horizontal scroll area */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x no-scrollbar"
                >
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[260px] md:w-[340px] group snap-center animate-fade-up"
                        >
                            <div className="aspect-[3/4] bg-neutral-900 rounded-xl overflow-hidden relative border border-white/5 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.55)] group-hover:border-conso-red/50 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] group-hover:scale-[1.02]">
                                
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width:768px) 260px, 340px"
                                />

                                {/* overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                            {speaker.name}
                                        </h3>

                                        <p className="text-conso-red font-mono text-sm uppercase tracking-wider mb-4">
                                            {speaker.role}
                                        </p>

                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2 text-xs text-white/60">
                                            <Mic size={14} />
                                            Keynote Session
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
