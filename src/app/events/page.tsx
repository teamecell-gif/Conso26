"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

const allEvents = [
    {
        title: "IPL Auction",
        category: "Strategy",
        description: "Bid, Build, Win. The most intense strategy game where you build your dream team with a limited budget.",
        date: "Day 3",
        location: "Main Ground",
        image: "from-indigo-500/20 to-blue-500/20",
        link: "https://ipl.ecellvnit.org/"
    },
    {
        title: "Jugaad",
        category: "Innovation",
        description: "The ultimate test of frugal innovation. Solve complex problems with simple, creative solutions.",
        date: "Day 1",
        location: "Auditorium",
        image: "from-orange-500/20 to-amber-500/20",
        link: "https://jugaad.ecellvnit.org/"
    },
    {
        title: "CEO",
        category: "Management",
        description: "Consortium Entrepreneurship Open. A challenge that tests your leadership and crisis management skills.",
        date: "Day 2",
        location: "Senate Hall",
        image: "from-blue-500/20 to-cyan-500/20",
        link: "https://ceo.ecellvnit.org/"
    },
    {
        title: "Startup Conclave",
        category: "Conclave",
        description: "Connect with industry leaders, investors, and visionaries. A platform for networking and growth.",
        date: "Day 2",
        location: "Main Auditorium",
        image: "from-purple-500/20 to-pink-500/20",
        link: "https://suc.ecellvnit.org/"
    },
    {
        title: "Neo",
        category: "Startup Expo",
        description: "Showcase your startup to investors and industry leaders. Network, pitch, and grow your venture.",
        date: "Day 2",
        location: "Exhibition Hall",
        image: "from-emerald-500/20 to-green-500/20",
        link: "https://neo.ecellvnit.org/"
    },
    {
        title: "Startup Expo",
        category: "Exhibition",
        description: "Experience the future of innovation. Explore groundbreaking products and meet the founders of tomorrow.",
        date: "Day 1-3",
        location: "Exhibition Ground",
        image: "from-rose-500/20 to-red-500/20",
        link: "https://expo.ecellvnit.org/"
    },
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-conso-red selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tight">
                        All <span className="text-conso-red">Events</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover the challenges, workshops, and simulations designed to test your mettle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allEvents.map((event, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-conso-red/50 transition-colors duration-500 min-h-[300px] flex flex-col"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${event.image} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-4 py-1.5 text-xs font-mono border border-white/20 rounded-full bg-black/50 backdrop-blur-md uppercase tracking-wider group-hover:border-conso-red/50 transition-colors">
                                        {event.category}
                                    </span>
                                    <ArrowUpRight className="text-white/40 group-hover:text-conso-red group-hover:scale-125 transition-all duration-300" />
                                </div>

                                <h3 className="text-3xl font-bold mb-4 group-hover:text-conso-red transition-colors">
                                    {event.title}
                                </h3>

                                <p className="text-gray-300 text-lg leading-relaxed mb-auto">
                                    {event.description}
                                </p>

                                <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-6">
                                    <div className="flex flex-wrap gap-6 text-sm font-mono text-white/60">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-conso-red" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-conso-red" />
                                            {event.location}
                                        </div>
                                    </div>

                                    <a
                                        href={event.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 bg-white/5 hover:bg-conso-red border border-white/10 text-white text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-105"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
