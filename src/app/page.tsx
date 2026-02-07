"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Speakers from "@/components/Speakers";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-conso-red selection:text-white">
      <Navbar />
      <Hero />
      <div className="relative z-20 bg-background">
        <About />
        <Stats />
        <Speakers />
        <Events />
        <Footer />
      </div>
    </main>
  );
}
