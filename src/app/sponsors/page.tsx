"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Placeholder data - In real app, this would be images
const sponsors = {
    title: [
        { name: "Title Sponsor", color: "bg-white" }
    ],
    associate: [
        { name: "Associate 1", color: "bg-gray-200" },
        { name: "Associate 2", color: "bg-gray-200" }
    ],
    platinum: [
        { name: "Platinum 1", color: "bg-gray-300" },
        { name: "Platinum 2", color: "bg-gray-300" },
        { name: "Platinum 3", color: "bg-gray-300" }
    ],
    gold: [
        { name: "Gold 1", color: "bg-gray-400" },
        { name: "Gold 2", color: "bg-gray-400" },
        { name: "Gold 3", color: "bg-gray-400" },
        { name: "Gold 4", color: "bg-gray-400" }
    ]
};

function SponsorCard({ name, className }: { name: string, className?: string }) {
    return (
        <div className={`aspect-[3/2] rounded-xl flex items-center justify-center p-6 bg-white/5 border border-white/10 hover:border-conso-red/50 hover:bg-white/10 transition-all duration-300 group ${className}`}>
            <span className="text-white/50 font-display font-bold text-xl uppercase tracking-widest group-hover:text-white transition-colors text-center">
                {name}
            </span>
        </div>
    );
}

export default function SponsorsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-conso-red selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tight">
                        Our <span className="text-conso-red">Partners</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The visionary organizations making Consortium '26 possible.
                    </p>
                </div>

                <div className="space-y-24 max-w-6xl mx-auto">
                    {/* Title Sponsor */}
                    <section>
                        <h2 className="text-2xl font-mono text-conso-red mb-8 text-center uppercase tracking-[0.2em] relative before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-conso-red/30 before:-z-10 before:w-1/2 before:mx-auto bg-background w-fit mx-auto px-4">
                            Title Sponsor
                        </h2>
                        <div className="max-w-md mx-auto">
                            <SponsorCard name="Title Sponsor" className="aspect-[2/1] text-3xl" />
                        </div>
                    </section>

                    {/* Associate Sponsors */}
                    <section>
                        <h2 className="text-xl font-mono text-white/70 mb-8 text-center uppercase tracking-[0.2em]">
                            Associate Sponsors
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {sponsors.associate.map((s, i) => (
                                <SponsorCard key={i} name={s.name} />
                            ))}
                        </div>
                    </section>

                    {/* Platinum Sponsors */}
                    <section>
                        <h2 className="text-lg font-mono text-white/60 mb-8 text-center uppercase tracking-[0.2em]">
                            Platinum Sponsors
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {sponsors.platinum.map((s, i) => (
                                <SponsorCard key={i} name={s.name} />
                            ))}
                        </div>
                    </section>

                    {/* Gold Sponsors */}
                    <section>
                        <h2 className="text-lg font-mono text-white/50 mb-8 text-center uppercase tracking-[0.2em]">
                            Gold Sponsors
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {sponsors.gold.map((s, i) => (
                                <SponsorCard key={i} name={s.name} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
