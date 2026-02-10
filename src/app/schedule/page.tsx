"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const schedule = {
    day1: [
        {
            time: "6:40 PM - 10:05 PM",
            title: "TEDx Talk",
            venue: "Auditorium",
            logo: null,
        },
    ],
    day2: [
        {
            time: "10:00 AM onwards",
            title: "Jugaad",
            venue: "Audi Foyer",
            logo: "/jugaad-Cwv8sXek.webp",
        },
        {
            time: "11:00 AM",
            title: "Hult Prize",
            venue: "MAC",
            logo: "/hultprize-CoQqOHCs.webp",
        },
        {
            time: "11:00 AM onwards",
            title: "Startup Expo",
            venue: "ECE Lawns",
            logo: "/expo-BuSr9Ws3.webp",
        },
        {
            time: "7:00 PM - 10:00 PM",
            title: "Founders Talk",
            venue: "Auditorium",
            logo: null,
        },
    ],
    day3: [
        {
            time: "10:30 AM - 4:30 PM",
            title: "Escape Room",
            venue: "CRC",
            logo: "/escaperoom-CL_1DC28.webp",
        },
        {
            time: "10:00 AM",
            title: "IPL Auction",
            venue: "Library Lawn",
            logo: "/iplauction-CM6tDsO9.webp",
        },
        {
            time: "7:00 PM - 10:00 PM",
            title: "Consonite",
            venue: "Auditorium",
            logo: null,
        },
        {
            time: "10:00 AM - 1:00 PM",
            title: "CEO (R-2)",
            venue: "Conference Hall (MME Dept)",
            logo: "/ceo-CiTAFyd_.webp",
        },
        {
            time: "11:00 AM onwards",
            title: "Startup Conclave",
            venue: "MAC",
            logo: "/suc-Bc2Eb1A0.webp",
        },
        {
            time: "4:00 PM - 6:00 PM",
            title: "Valedictory Function",
            venue: "MAC",
            logo: null,
        },
    ],
};

type DayKey = keyof typeof schedule;

// convert time → minutes for sorting
function getStartMinutes(time: string) {
    const first = time.split("-")[0].replace("onwards", "").trim();
    const match = first.match(/(\d+):?(\d+)?\s*(AM|PM)/i);
    if (!match) return 0;

    let hour = parseInt(match[1]);
    let minute = match[2] ? parseInt(match[2]) : 0;
    const period = match[3].toUpperCase();

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    return hour * 60 + minute;
}

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState<DayKey>("day1");

    const events = useMemo(() => {
        return [...schedule[activeDay]].sort(
            (a, b) => getStartMinutes(a.time) - getStartMinutes(b.time)
        );
    }, [activeDay]);

    const dayDates = {
        day1: "13 FEB 2026",
        day2: "14 FEB 2026",
        day3: "15 FEB 2026",
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-conso-red selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-conso-red/30 via-black/80 to-black" />

                    <div className="relative z-10 p-10 md:p-16">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white text-center mb-4">
                            SCHEDULE
                        </h1>

                        <p className="text-center text-white/80 tracking-widest mb-10">
                            {dayDates[activeDay]}
                        </p>

                        {/* Day selector */}
                        <div className="flex justify-center mb-12">
                            <div className="bg-white rounded-2xl p-2 flex gap-2 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                                {([
                                    { key: "day1", label: "DAY1" },
                                    { key: "day2", label: "DAY2" },
                                    { key: "day3", label: "DAY3" },
                                ] as const).map((item) => (
                                    <button
                                        key={item.key}
                                        onClick={() => setActiveDay(item.key)}
                                        className={cn(
                                            "px-6 md:px-10 py-2 rounded-xl text-sm md:text-base font-bold tracking-widest transition-colors",
                                            activeDay === item.key
                                                ? "bg-conso-red text-white"
                                                : "text-black hover:bg-black/10"
                                        )}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="relative flex flex-col gap-12">
                            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/40" />

                            {events.map((event, index) => {
                                const isLeft = index % 2 === 0;

                                const card = (
                                    <div className="relative bg-black/70 backdrop-blur-md text-white rounded-3xl px-6 md:px-10 py-6 md:py-8 border border-white/20 
                                    shadow-[0_0_25px_rgba(255,0,0,0.45)]
                                    animate-[pulseGlow_2.5s_ease-in-out_infinite]
                                    hover:animate-none hover:shadow-[0_0_60px_rgba(255,0,0,1)]
                                    transition-all duration-300">

                                        <div className="flex justify-center">
                                            <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-conso-red text-white font-bold tracking-wider text-sm md:text-base">
                                                {event.time}
                                            </span>
                                        </div>

                                        {event.logo && (
                                            <div className="mt-5 flex justify-center">
                                                <div className="relative h-14 w-40">
                                                    <Image
                                                        src={event.logo}
                                                        alt={`${event.title} logo`}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-6">
                                            {event.title}
                                        </h2>

                                        <p className="text-center font-semibold tracking-wider mt-2 text-white/80">
                                            VENUE: {event.venue}
                                        </p>
                                    </div>
                                );

                                return (
                                    <div key={index} className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6">
                                        {/* mobile */}
                                        <div className="md:hidden">{card}</div>

                                        {/* left */}
                                        <div className={cn("hidden md:block", isLeft ? "md:pr-10" : "opacity-0")}>
                                            {isLeft && card}
                                        </div>

                                        {/* center */}
                                        <div className="hidden md:flex flex-col items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-conso-red shadow-[0_0_14px_red]" />
                                            <div className="w-px h-20 bg-white/40" />
                                        </div>

                                        {/* right */}
                                        <div className={cn("hidden md:block", !isLeft ? "md:pl-10" : "opacity-0")}>
                                            {!isLeft && card}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
