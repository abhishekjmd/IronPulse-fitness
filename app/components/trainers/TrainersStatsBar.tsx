"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

const stats = [
  { value: "100%", label: "Certified Professionals" },
  { value: "4.9/5", label: "Average Member Rating" },
  { value: "500+", label: "Lives Transformed" },
];

export default function TrainersStatsBar() {
  return (
    <section className="border-y border-[#edbc1d]/20 bg-[#f1f0ea] py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3"
      >
        {stats.map((item, idx) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } },
            }}
            className={`flex flex-col items-center text-center ${idx === 1 ? "md:border-x md:border-[#edbc1d]/20" : ""}`}
          >
            <span className="mb-2 text-4xl font-bold text-[#edbc1d]">{item.value}</span>
            <p className="text-sm uppercase tracking-widest opacity-70">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

