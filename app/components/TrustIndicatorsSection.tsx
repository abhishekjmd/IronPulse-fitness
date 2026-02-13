"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/motion/useCountUp";
import { motionEasings } from "@/lib/motion/easings";

interface StatItemProps {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

function StatCounter({ icon, value, label, suffix = "", decimals = 0 }: StatItemProps) {
  const { ref, displayValue } = useCountUp({ end: value, decimals });

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } },
      }}
      className="flex flex-col items-center"
    >
      <span className="material-icons mb-2 text-4xl text-[#d4af35]">{icon}</span>
      <h2 className="font-serif text-4xl font-bold">
        <span ref={ref}>{displayValue}</span>
        {suffix}
      </h2>
      <p className="mt-1 text-sm uppercase tracking-widest text-neutral-500">{label}</p>
    </motion.div>
  );
}

const items = [
  { icon: "star", value: 4.8, suffix: " Rating", label: "Google Reviews", decimals: 1 },
  { icon: "groups", value: 500, suffix: "+ Members", label: "Active Community" },
  { icon: "workspace_premium", value: 5, suffix: "+ Years", label: "Excellence in Fitness" },
];

export default function TrustIndicatorsSection() {
  return (
    <section className="border-b border-[#d4af35]/10 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
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
          className="grid grid-cols-1 gap-12 text-center md:grid-cols-3"
        >
          {items.map((item) => (
            <StatCounter
              key={item.label}
              icon={item.icon}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              decimals={item.decimals}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
