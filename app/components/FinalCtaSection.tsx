"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-center text-white">
      {/* Background with subtle gradient shift */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,53,0.1),transparent_70%)] animate-gradient-subtle"
      />

      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: motionEasings.standard }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRRQbwhRtU0HtYkLUA7zEtyy5yPVKT4swFtAA5nR0dPzbtHw9Dje9c6Px4dGW-dyRbbQAJX8sXBC8E6oF4KSCtTBvgSXYlIyBmZvRySyvPKxEAULH95c5a9ViDNut9hBAWc_ljtPzMv2FVJEUeaRWbtN6tQgywknyBtIO3aoHzHE49v6vXhfvzhYtSQV1eEl2I-NaaYMW2AuCMDVWBowMeWkGVa8_EOsR9nJlrxR8QH9m9o4kD0TLypKsll6dklItYIqFwgMhlDy8')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="relative z-10 mx-auto max-w-4xl px-6"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: motionEasings.standard } }
          }}
          className="font-serif mb-6 text-5xl"
        >
          Your Fitness Journey Starts Today
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: motionEasings.standard } }
          }}
          className="mb-10 text-xl font-light text-neutral-400"
        >
          Join the most exclusive fitness community in the city and unlock your true potential.
        </motion.p>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: motionEasings.standard } }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="rounded-full bg-[#d4af35] px-12 py-5 font-bold uppercase tracking-widest text-white shadow-lg shadow-[#d4af35]/10 focus:outline-none focus:ring-2 focus:ring-[#d4af35] focus:ring-offset-2">
              Book A Free Session
            </button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: motionEasings.standard } }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="rounded-full border border-white/30 px-12 py-5 font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              View All Plans
            </button>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes gradient-subtle {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(1%, 1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-gradient-subtle {
          animation: gradient-subtle 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
