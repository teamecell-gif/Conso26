"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div
            id="home"
            className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-16 bg-background"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-conso-red/20 via-background to-background opacity-40" />

            {/* Grid / Mesh */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Glow Shapes */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-conso-red/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20 md:pt-24 lg:pt-28 pb-16">
                
                {/* Subtitle */}
                <p
                    className="text-conso-red font-mono tracking-[0.2em] mb-4 uppercase animate-fade-up"
                    style={{ animationDelay: "0.05s" }}
                >
                    E-Cell VNIT Presents
                </p>

                {/* Logo */}
                <h1 className="font-display font-bold mb-8 flex flex-col items-center">
                    <div
                        className="relative w-60 h-60 md:w-[420px] md:h-[420px] animate-fade-up"
                        style={{ animationDelay: "0.15s" }}
                    >
                        <Image
                            src="/Untitled design-63.png"
                            alt="Consortium '26 Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(255,46,46,0.35)]"
                            priority
                        />
                    </div>
                </h1>

                {/* Divider */}
                <div
                    className="w-full h-px bg-gradient-to-r from-transparent via-conso-red to-transparent my-8 animate-fade-in"
                    style={{ animationDelay: "0.25s" }}
                />

                {/* Description */}
                <p
                    className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 animate-fade-up"
                    style={{ animationDelay: "0.3s" }}
                >
                    Ignite your entrepreneurial spark at Central India's Largest Management Festival.
                </p>

                {/* Buttons */}
                <div
                    className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    <Link
                        href="/events"
                        className="px-8 py-4 bg-conso-red text-black font-bold text-lg uppercase tracking-widest hover:bg-white transition-all duration-300 hover:scale-105"
                    >
                        Register Now
                    </Link>

                    <Link
                        href="/schedule"
                        className="px-8 py-4 border border-white/20 text-white font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                    >
                        Schedule
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:hidden">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Scroll
                </span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-conso-red to-transparent animate-pulse" />
            </div>
        </div>
    );
}
