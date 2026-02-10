"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const schedule = {
  day1: [
    {
      time: "6:30 PM - 9:45 PM",
      title: "TEDx Talk",
      venue: "Auditorium",
      logo: null,
      link: "https://www.tedxvnit.com/",
    },
  ],

  day2: [
    {
      time: "8:00 AM - 6:00 PM",
      title: "Technical Workshop",
      venue: "CRC (1-1,1-2,1-3)",
      logo: null,
    },
    {
      time: "10:00 AM - 7:00 PM",
      title: "Jugaad",
      venue: "Audi Foyer",
      logo: "/jugaad-Cwv8sXek.webp",
      link: "https://jugaad.ecellvnit.org/",
    },
    {
      time: "11:00 AM - 2:00 PM",
      title: "Hult Prize",
      venue: "MAC",
      logo: "/hultprize-CoQqOHCs.webp",
    },
    {
      time: "11:00 AM - 9:00 PM",
      title: "Startup Expo",
      venue: "ECE Lawns",
      logo: "/expo-BuSr9Ws3.webp",
      link: "https://expo.ecellvnit.org/",
    },
    {
      time: "2:00 PM - 4:00 PM",
      title: "CEO (R-1)",
      venue: "CRC (2-1)",
      logo: "/ceo-CiTAFyd_.webp",
      link: "https://ceo.ecellvnit.org/",
    },
    {
      time: "3:00 PM - 6:00 PM",
      title: "Auto Expo",
      venue: "Library Square",
      logo: null,
    },
  ],

  day3: [
    {
      time: "8:00 AM - 6:00 PM",
      title: "Technical Workshop",
      venue: "CRC (1-1,1-2,1-3)",
      logo: null,
    },
    {
      time: "10:00 AM - 4:00 PM",
      title: "IPL Auction",
      venue: "Library Lawn",
      logo: "/iplauction-CM6tDsO9.webp",
      link: "https://ipl.ecellvnit.org/",
    },
    {
      time: "10:30 AM - 4:30 PM",
      title: "Escape Room",
      venue: "CRC (2-1,2-2,2-3)",
      logo: "/escaperoom-CL_1DC28.webp",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScsR58O5viGcxSRaCAL69OYS2Y9dplU2vEt0C1qRPDGIV2ukQ/viewform",
    },
    {
      time: "11:00 AM - 2:00 PM",
      title: "CEO (R-2)",
      venue: "Conference Hall (MME Dept)",
      logo: "/ceo-CiTAFyd_.webp",
      link: "https://ceo.ecellvnit.org/",
    },
    {
      time: "11:00 AM - 2:00 PM",
      title: "Startup Conclave",
      venue: "MAC",
      logo: "/suc-Bc2Eb1A0.webp",
      link: "https://startupconclave.ecellvnit.org/",
    },
    {
      time: "4:00 PM - 6:00 PM",
      title: "Valedictory Function",
      venue: "MAC",
      logo: null,
    },
    {
      time: "6:30 PM - 9:45 PM",
      title: "Consonite",
      venue: "Auditorium",
      logo: null,
    },
  ],
};

type DayKey = keyof typeof schedule;

function getStartMinutes(time: string) {
  const first = time.split("-")[0].trim();
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
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <Navbar />

      {/* cyber grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(red_1px,transparent_1px),linear-gradient(90deg,red_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/20 blur-[160px] rounded-full" />

      <section className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-center text-red-500 mb-3">
            SCHEDULE
          </h1>

          <p className="text-center text-red-300 tracking-[0.4em] mb-12">
            {dayDates[activeDay]}
          </p>

          {/* day selector */}
          <div className="flex justify-center mb-16">
            <div className="border border-red-500/40 rounded-xl p-2 flex gap-2 bg-black/60 backdrop-blur-xl">
              {(["day1", "day2", "day3"] as DayKey[]).map((d, i) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(d)}
                  className={cn(
                    "px-8 py-2 tracking-widest text-sm font-bold rounded-lg transition-all",
                    activeDay === d
                      ? "bg-red-600 text-white shadow-[0_0_25px_red]"
                      : "text-red-400 hover:text-white hover:bg-red-600/20"
                  )}
                >
                  DAY {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* timeline */}
          <div className="relative flex flex-col gap-16">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-red-500 shadow-[0_0_15px_red]" />

            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              const CardContent = (
                <div className={cn(
                  "group relative bg-black/60 backdrop-blur-xl border border-red-500/40 rounded-2xl p-7 md:p-9 shadow-[0_0_20px_rgba(255,0,0,0.25)] transition-all duration-500",
                  event.link
                    ? "cursor-pointer hover:shadow-[0_0_60px_rgba(255,0,0,0.9)]"
                    : "opacity-90"
                )}>
                  
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(transparent,rgba(255,0,0,0.3),transparent)] bg-[length:100%_6px] animate-pulse" />

                  <div className="text-center mb-4">
                    <span className="text-xs tracking-[0.4em] text-red-400">
                      {event.time}
                    </span>
                  </div>

                  {event.logo && (
                    <div className="flex justify-center mb-4">
                      <div className="relative h-16 w-48 md:h-20 md:w-60">
                        <Image src={event.logo} alt="" fill className="object-contain" />
                      </div>
                    </div>
                  )}

                  <h2 className="text-2xl font-bold text-center text-white tracking-widest group-hover:text-red-400 transition">
                    {event.title}
                  </h2>

                  <p className="text-center text-sm text-red-300 mt-2 tracking-wider">
                    {event.venue}
                  </p>
                </div>
              );

              const card = event.link ? (
                <a href={event.link} target="_blank">{CardContent}</a>
              ) : (
                CardContent
              );

              return (
                <div key={index} className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                  <div className="md:hidden">{card}</div>

                  <div className={cn("hidden md:block", isLeft ? "pr-12" : "opacity-0")}>
                    {isLeft && card}
                  </div>

                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_red]" />
                  </div>

                  <div className={cn("hidden md:block", !isLeft ? "pl-12" : "opacity-0")}>
                    {!isLeft && card}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
