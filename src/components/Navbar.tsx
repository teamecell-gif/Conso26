"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/events" },
    { name: "Speakers", href: "/speakers" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/50 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/ecell-white-img-DwZzYLqd.webp"
                        alt="E-Cell"
                        width={140}
                        height={36}
                        className="h-9 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav (Right) */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-sm font-medium text-white/80 hover:text-conso-red transition-colors uppercase tracking-widest relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-conso-red transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link href="/events">
                    <button className="px-6 py-2 bg-conso-red hover:bg-conso-red-dark text-white text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-105 clip-path-slant">
                        Register
                    </button>
                        </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300",
                    mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col p-6 gap-6 items-center">
                    {NAV_ITEMS.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-bold text-white hover:text-conso-red uppercase tracking-widest"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
