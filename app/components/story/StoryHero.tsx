"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

export default function StoryHero() {
  return (
    <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: motionEasings.standard }}
        className="absolute inset-0 grayscale contrast-125"
      >
        <Image
          alt="Luxury Gym Interior"
          className="h-full w-full object-cover"
          fill
          sizes="100vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAOqsWQ6auBXcVLHzxfO7qW2CBx7krUI5p6cwHyU_Df4QDfjH_uZY5C2-9lwtLXNQ8XF0l6noUTv5MHK1KbsIC5j9z8PXPmThPx4IM-RRYMlw-GaPst7bxYj732ZjzSAdvkGdp-SPOru0EMJI-fDYJ8O9P27bpVpF6v3khkSwhfeZcj3LPi5RHE2a-Y7_q3ujxmbZ5-UmAWwg2Jyz6y15aT4wCVK2aH_SfJoFjAcRm7QA-gN9-PRoeMPeFHaYlaWmvRkPRFgmNKZk"
        />
      </motion.div>
      <div className="hero-gradient absolute inset-0" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative z-10 px-4 text-center"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } }
          }}
          className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#eec02b] md:text-base"
        >
          Forging Excellence Since 2019
        </motion.p>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } }
          }}
          className="font-serif mb-6 text-5xl font-bold text-white md:text-7xl"
        >
          Our Story
        </motion.h1>
      </motion.div>
    </section>
  );
}

