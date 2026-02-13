"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

const items = [
  {
    year: "2019",
    title: "The Genesis",
    text: "IronPulse opens its doors in a repurposed industrial loft with 20 original members.",
    align: "right",
  },
  {
    year: "2021",
    title: "Growth & Evolution",
    text: "Expanding to our first flagship location, integrating biomechanical testing labs.",
    align: "left",
  },
  {
    year: "2023",
    title: "Holistic Launch",
    text: "Introduction of our recovery suite and the Pulse Plate nutrition program.",
    align: "right",
  },
  {
    year: "2025",
    title: "Global Vision",
    text: "Opening our third flagship hub and launching the IronPulse Digital Experience.",
    align: "left",
  },
];

export default function StoryTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#221e10] py-24">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-[#eec02b]/30 md:block" />

        {items.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.35,
              ease: motionEasings.standard,
              delay: index * 0.1
            }}
            className="mb-16 w-full items-center justify-between md:flex"
          >
            {item.align === "right" ? <div className="order-1 w-full md:w-5/12" /> : null}

            {item.align === "left" ? (
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2, ease: motionEasings.standard } }}
                className="order-1 w-full rounded-xl border border-[#eec02b]/20 bg-[#eec02b]/5 p-6 text-right transition-shadow duration-300 hover:shadow-lg hover:shadow-[#eec02b]/10 md:w-5/12"
              >
                <span className="mb-2 block text-xl font-bold text-[#eec02b]">{item.year}</span>
                <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.text}</p>
              </motion.div>
            ) : null}

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: motionEasings.standard,
                delay: index * 0.1 + 0.15
              }}
              className="z-20 order-1 hidden h-8 w-8 items-center justify-center rounded-full bg-[#eec02b] shadow-xl md:flex"
            >
              <span className="text-lg font-semibold text-[#221e10]">•</span>
            </motion.div>

            {item.align === "right" ? (
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2, ease: motionEasings.standard } }}
                className="order-1 w-full rounded-xl border border-[#eec02b]/20 bg-[#eec02b]/5 p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#eec02b]/10 md:w-5/12"
              >
                <span className="mb-2 block text-xl font-bold text-[#eec02b]">{item.year}</span>
                <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.text}</p>
              </motion.div>
            ) : null}

            {item.align === "left" ? <div className="order-1 w-full md:w-5/12" /> : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

