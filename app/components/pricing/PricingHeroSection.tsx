"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

export default function PricingHeroSection() {
  return (
    <section className="flex h-[55vh] flex-col items-center justify-center border-b border-neutral-100 bg-white px-6 pt-10">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: motionEasings.standard }}
        className="mb-6 flex items-center text-xs uppercase tracking-[0.2em] text-neutral-400"
      >
        <a className="hover:text-[#e0b629]" href="#">Home</a>
        <span className="mx-3 text-[10px]">/</span>
        <span className="text-neutral-900">Pricing</span>
      </motion.nav>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: motionEasings.standard }}
        className="font-serif mb-4 text-center text-5xl font-bold md:text-6xl"
      >
        Simple, Transparent Pricing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: motionEasings.standard }}
        className="max-w-lg text-center font-light leading-relaxed text-neutral-500"
      >
        Choose a path that aligns with your lifestyle. No hidden fees, just premium fitness experiences.
      </motion.p>
    </section>
  );
}

