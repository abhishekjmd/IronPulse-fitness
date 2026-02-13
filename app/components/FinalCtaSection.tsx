"use client";

import { motion } from "framer-motion";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-center text-white">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRRQbwhRtU0HtYkLUA7zEtyy5yPVKT4swFtAA5nR0dPzbtHw9Dje9c6Px4dGW-dyRbbQAJX8sXBC8E6oF4KSCtTBvgSXYlIyBmZvRySyvPKxEAULH95c5a9ViDNut9hBAWc_ljtPzMv2FVJEUeaRWbtN6tQgywknyBtIO3aoHzHE49v6vXhfvzhYtSQV1eEl2I-NaaYMW2AuCMDVWBowMeWkGVa8_EOsR9nJlrxR8QH9m9o4kD0TLypKsll6dklItYIqFwgMhlDy8')",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-6"
      >
        <h2 className="font-serif mb-6 text-5xl">Your Fitness Journey Starts Today</h2>
        <p className="mb-10 text-xl font-light text-neutral-400">
          Join the most exclusive fitness community in the city and unlock your true potential.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#d4af35] px-12 py-5 font-bold uppercase tracking-widest text-white transition duration-300 hover:shadow-xl hover:shadow-[#d4af35]/20"
          >
            Book A Free Session
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-white/30 px-12 py-5 font-bold uppercase tracking-widest text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            View All Plans
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
