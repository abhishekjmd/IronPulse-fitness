"use client";

import { motion } from "framer-motion";

const items = [
  { icon: "star", value: "4.8 Rating", label: "Google Reviews" },
  { icon: "groups", value: "500+ Members", label: "Active Community" },
  { icon: "workspace_premium", value: "5+ Years", label: "Excellence in Fitness" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TrustIndicatorsSection() {
  return (
    <section className="border-b border-[#d4af35]/10 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 text-center md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
              key={item.value}
            >
              <span className="material-icons mb-2 text-4xl text-[#d4af35]">{item.icon}</span>
              <h2 className="font-serif text-4xl font-bold">{item.value}</h2>
              <p className="mt-1 text-sm uppercase tracking-widest text-neutral-500">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
