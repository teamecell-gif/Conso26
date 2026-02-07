"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

const allEvents = [
    {
        title: "Escape Room",
        category: "Challenge",
        description: "Consulting-style case puzzles with escape-room gamification where teams solve challenges to progress.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-rose-500/20 to-red-500/20",
        logo: "/escaperoom-CL_1DC28.webp",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScsR58O5viGcxSRaCAL69OYS2Y9dplU2vEt0C1qRPDGIV2ukQ/viewform?usp=send_form"
    },
    {
        title: "IPL Auction",
        category: "Strategy",
        description: "Build the strongest team with smart bidding, analytics, and prediction.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-indigo-500/20 to-blue-500/20",
        logo: "/iplauction-CM6tDsO9.webp",
        link: "https://ipl.ecellvnit.org/"
    },
    {
        title: "NEO",
        category: "Program",
        description: "A PAN India exam and skill program for classes 7-12 to nurture entrepreneurial skills.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-emerald-500/20 to-green-500/20",
        logo: "/neo-s6SKDkcM.webp",
        link: "https://neo.ecellvnit.org/"
    },
    {
        title: "Jugaad",
        category: "Innovation",
        description: "Teams receive Rs 100 to maximize through creative ideation, bargaining, and financial management.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-orange-500/20 to-amber-500/20",
        logo: "/jugaad-Cwv8sXek.webp",
        link: "https://jugaad.ecellvnit.org/"
    },
    {
        title: "StartUp Conclave",
        category: "Conclave",
        description: "A national business plan competition that turns ideas into successful ventures.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-purple-500/20 to-pink-500/20",
        logo: "/suc-Bc2Eb1A0.webp",
        link: "https://startupconclave.ecellvnit.org/"
    },
    {
        title: "Wallstreet",
        category: "Finance",
        description: "A stock trading competition to test managerial skills, trading acumen, and market intuition.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-slate-500/20 to-gray-500/20",
        logo: "/wallstreet-BjgcvuFk.webp",
        link: "https://wallstreet.ecellvnit.org/"
    },
    {
        title: "CEO",
        category: "Leadership",
        description: "Real-world challenges, calculated risks, and competition to become influential leaders.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-blue-500/20 to-cyan-500/20",
        logo: "/ceo-CiTAFyd_.webp",
        link: "https://ceo.ecellvnit.org/"
    },
    {
        title: "Startup Expo",
        category: "Exhibition",
        description: "A national exhibition for startups to showcase innovations and network with participants and investors.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-rose-500/20 to-red-500/20",
        logo: "/expo-BuSr9Ws3.webp",
        link: "https://expo.ecellvnit.org/"
    },
    {
        title: "Hult Prize",
        category: "Competition",
        description: "The world's largest student startup competition focused on SDG-aligned businesses.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-amber-500/20 to-yellow-500/20",
        logo: "/hultprize-CoQqOHCs.webp",
        link: "https://www.instagram.com/hultprize_vnit/"
    },
    {
        title: "Internship Fair",
        category: "Career",
        description: "Connect - Grow - Innovate. Meet recruiters and explore internship opportunities.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-teal-500/20 to-emerald-500/20",
        logo: "/internshipfair-ognCY5vl.webp",
        link: "mailto:team_ecell@vnit.ac.in"
    },
    {
        title: "Networking Arena",
        category: "Workshop",
        description: "Connect with experts across domains to exchange ideas, guidance, and collaboration.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-fuchsia-500/20 to-pink-500/20",
        logo: "/networkingarena-D40gd633.webp",
        link: "https://unstop.com/o/E3sMC2w?lb=XXfTQEEf&utm_medium=Share&utm_source=teamvni42274&utm_campaign=Workshops"
    },
    {
        title: "Pitch in the Car",
        category: "Pitch",
        description: "A 4-minute startup pitch judged on innovation, clarity, feasibility, and market potential.",
        date: "TBA",
        location: "VNIT Nagpur",
        image: "from-pink-500/20 to-rose-500/20",
        logo: "/pitchinthecar-DyolDNEq.webp",
        link: "https://unstop.com/o/CGW3AvD?lb=6vnimjjW&utm_medium=Share&utm_source=aryansin7258&utm_campaign=Competitions"
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

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative h-12 w-24 shrink-0">
                                        <Image
                                            src={event.logo}
                                            alt={`${event.title} logo`}
                                            fill
                                            className="object-contain"
                                            sizes="96px"
                                        />
                                    </div>
                                    <h3 className="text-3xl font-bold group-hover:text-conso-red transition-colors">
                                        {event.title}
                                    </h3>
                                </div>

                                <div className="h-px w-full bg-white/10 mb-4" />

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
