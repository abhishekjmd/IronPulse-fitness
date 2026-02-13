"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

export default function StoryCtaSection() {
  return (
    <section className="relative bg-black py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: motionEasings.standard } },
          }}
          className="font-serif mb-8 text-5xl text-white md:text-6xl"
        >
          Become Part of Our Story
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } },
          }}
          className="mx-auto mb-12 max-w-2xl text-lg text-slate-400"
        >
          The journey to your ultimate self begins with a single step. Join the pulse and experience the pinnacle of human performance.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } },
          }}
          className="flex flex-col justify-center gap-4 md:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: motionEasings.standard }}
            className="inline-flex items-center justify-center rounded-full bg-[#eec02b] px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#221e10] shadow-lg shadow-[#eec02b]/20"
            href="#"
          >
            Join The Pulse <span className="material-icons ml-2">arrow_forward</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: motionEasings.standard }}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
            href="#"
          >
            Book A Tour
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

