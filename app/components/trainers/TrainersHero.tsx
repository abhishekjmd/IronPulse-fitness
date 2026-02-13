"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";
import Image from "next/image";

export default function TrainersHero() {
  return (
    <header className="flex h-[50vh] flex-col items-center justify-center bg-white pt-20 text-center">
      <span className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#edbc1d]">The Elite Standard</span>
      <h1 className="font-serif text-6xl text-[#1a170c] md:text-8xl">Meet Your Trainers</h1>
      <div className="mt-8 h-1 w-24 bg-[#edbc1d]" />
    </header>
  );
}
