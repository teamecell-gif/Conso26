"use client";

import { useState } from "react";
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
            logo: "/events/jugaad-Cwv8sXek.webp",
        },
        {
            time: "11:00 AM",
            title: "Hult Prize",
            venue: "MAC",
            logo: "/events/hultprize-CoQqOHCs.webp",
        },
        {
            time: "11:00 AM onwards",
            title: "Startup Expo",
            venue: "ECE Lawns",
            logo: "/events/expo-BuSr9Ws3.webp",
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
            logo: "/events/escaperoom-CL_1DC28.webp",
        },
        {
            time: "10:00 AM",
            title: "IPL Auction",
            venue: "Library Lawn",
            logo: "/events/iplauction-CM6tDsO9.webp",
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
            logo: "/events/ceo-CiTAFyd_.webp",
        },
        {
            time: "11:00 AM onwards",
            title: "Startup Conclave",
            venue: "MAC",
            logo: "/events/suc-Bc2Eb1A0.webp",
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

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState<DayKey>("day1");
    const events = schedule[activeDay];

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-conso-red selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-conso-red/30 via-black/80 to-black" />
                    <div className="relative z-10 p-10 md:p-16">
                        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-widest text-white text-center mb-10">
                            SCHEDULE
                        </h1>

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

                        <div className="relative flex flex-col gap-10">
                            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/40" />

                            {events.map((event, index) => {
                                const isLeft = index % 2 === 0;

                                const card = (
                                    <div className="bg-white text-black rounded-3xl px-6 md:px-10 py-6 md:py-8 shadow-[0_25px_50px_rgba(0,0,0,0.35)]">
                                        <div className="flex justify-center">
                                            <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-conso-red text-white font-bold tracking-wider text-sm md:text-base">
                                                {event.time}
                                            </span>
                                        </div>
                                        {event.logo ? (
                                            <div className="mt-5 flex justify-center">
                                                <div className="relative h-12 w-32 md:h-14 md:w-36">
                                                    <Image
                                                        src={event.logo}
                                                        alt={`${event.title} logo`}
                                                        fill
                                                        className="object-contain"
                                                        sizes="(max-width: 768px) 128px, 144px"
                                                    />
                                                </div>
                                            </div>
                                        ) : null}
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-6">
                                            {event.title}
                                        </h2>
                                        <p className="text-center font-semibold tracking-wider mt-2 text-black/80">
                                            VENUE: {event.venue}
                                        </p>
                                    </div>
                                );

                                return (
                                    <div key={index} className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6">
                                        <div className="md:hidden">{card}</div>

                                        <div className={cn("hidden md:block", isLeft ? "md:pr-10" : "md:pr-10 opacity-0")}> 
                                            {isLeft ? card : null}
                                        </div>

                                        <div className="hidden md:flex flex-col items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-white/80" />
                                            <div className="w-px h-16 bg-white/40" />
                                        </div>

                                        <div className={cn("hidden md:block", isLeft ? "md:pl-10 opacity-0" : "md:pl-10")}> 
                                            {!isLeft ? card : null}
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
