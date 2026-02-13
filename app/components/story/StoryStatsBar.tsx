"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/motion/useCountUp";
import { motionEasings } from "@/lib/motion/easings";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function StatCounter({ value, suffix, label }: StatItemProps) {
  const { ref, displayValue } = useCountUp({ end: value });

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } },
      }}
    >
      <div className="font-serif mb-2 text-4xl font-bold text-[#eec02b] md:text-5xl">
        <span ref={ref}>{displayValue}</span>
        {suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</div>
    </motion.div>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 5, suffix: "+", label: "Years Excellence" },
  { value: 12, suffix: "+", label: "Master Trainers" },
  { value: 10, suffix: "k+", label: "PRs Reached" },
];

export default function StoryStatsBar() {
  return (
    <section className="border-y border-[#eec02b]/10 bg-slate-200 py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4"
      >
        {stats.map((item) => (
          <StatCounter
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </motion.div>
    </section>
  );
}

