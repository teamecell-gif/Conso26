"use client";
import { ArrowUpRight } from "lucide-react";

const events = [
    {
        title: "Vishleshan",
        category: "Case Study",
        description: "Analyze, Innovate, Solve. The ultimate analytics challenge.",
        date: "Day 1"
    },
    {
        title: "Codebizz",
        category: "Hackathon",
        description: "Where coding meets business logic. Build for the future.",
        date: "Day 1-2"
    },
    {
        title: "Biz-MUN",
        category: "Simulation",
        description: "Debate, Negotiate, Policy. Corporate simulation at its best.",
        date: "Day 2"
    },
    {
        title: "Wallstreet",
        category: "Finance",
        description: "Master the markets in this virtual trading showdown.",
        date: "Day 3"
    },
    {
        title: "IPL Auction",
        category: "Strategy",
        description: "Bid, Build, Win. The most intense strategy game.",
        date: "Day 3"
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

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-conso-red transition-colors">
                                    {event.title}
                                </h3>

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
