"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const events = [
    {
        title: "CEO",
        category: "Leadership",
        description: "Real-world challenges, calculated risks, and competition to become influential leaders.",
        date: "Consortium '26",
        logo: "/events/ceo-CiTAFyd_.webp",
    },
    {
        title: "IPL Auction",
        category: "Strategy",
        description: "Build the strongest team with smart bidding, analytics, and prediction.",
        date: "Consortium '26",
        logo: "/events/iplauction-CM6tDsO9.webp",
    },
    {
        title: "Jugaad",
        category: "Innovation",
        description: "Teams receive Rs 100 to maximize through creative ideation, bargaining, and financial management.",
        date: "Consortium '26",
        logo: "/events/jugaad-Cwv8sXek.webp",
    },
    {
        title: "Wallstreet",
        category: "Finance",
        description: "A stock trading competition to test managerial skills and market intuition.",
        date: "Consortium '26",
        logo: "/events/wallstreet-BjgcvuFk.webp",
    },
    {
        title: "StartUp Conclave",
        category: "Conclave",
        description: "A national business plan competition that turns ideas into successful ventures.",
        date: "Consortium '26",
        logo: "/events/suc-Bc2Eb1A0.webp",
    },
    {
        title: "Startup Expo",
        category: "Exhibition",
        description: "A national exhibition for startups to showcase innovations and network with investors.",
        date: "Consortium '26",
        logo: "/events/expo-BuSr9Ws3.webp",
    },
];

export default function Events() {
    return (
        <section id="events" className="py-32 bg-background relative px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center uppercase tracking-tight">
                    Flagship <span className="text-conso-red">Events</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-conso-red/50 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-conso-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full bg-black/50 backdrop-blur-md uppercase tracking-wider group-hover:border-conso-red/50 transition-colors">
                                        {event.category}
                                    </span>
                                    <ArrowUpRight className="text-white/40 group-hover:text-conso-red group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <div className="flex items-center gap-4 mb-3">
                                    {event.logo ? (
                                        <div className="relative h-10 w-20 shrink-0">
                                            <Image
                                                src={event.logo}
                                                alt={`${event.title} logo`}
                                                fill
                                                className="object-contain"
                                                sizes="80px"
                                            />
                                        </div>
                                    ) : null}
                                    <h3 className="text-2xl font-bold group-hover:text-conso-red transition-colors">
                                        {event.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                    {event.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-mono text-white/40 group-hover:text-white/80 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-conso-red" />
                                    {event.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
