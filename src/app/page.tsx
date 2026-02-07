"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Speakers from "@/components/Speakers";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const sectionMotionProps: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-conso-red selection:text-white">
      <Navbar />
      <Hero />
      <div className="relative z-20 bg-background">
        <motion.div {...sectionMotionProps}>
          <About />
        </motion.div>
        <motion.div {...sectionMotionProps}>
          <Stats />
        </motion.div>
        <motion.div {...sectionMotionProps}>
          <Speakers />
        </motion.div>
        <motion.div {...sectionMotionProps}>
          <Events />
        </motion.div>
        <motion.div {...sectionMotionProps}>
          <Footer />
        </motion.div>
      </div>
    </main>
  );
}
