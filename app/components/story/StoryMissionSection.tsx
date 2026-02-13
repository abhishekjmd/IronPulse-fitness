"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

const values = [
  {
    icon: "trending_up",
    title: "Results-Driven",
    text: "We do not just train; we optimize. Every session is designed for measurable progress and breakthrough performance.",
  },
  {
    icon: "groups",
    title: "Community First",
    text: "Strength is built together. We foster a tight-knit ecosystem of elite performers and mutual accountability.",
  },
  {
    icon: "verified_user",
    title: "Safe & Sustainable",
    text: "Long-term health is our priority. We prioritize longevity through biomechanically sound movements and recovery.",
  },
  {
    icon: "school",
    title: "Elite Coaching",
    text: "Our trainers are specialists with deep knowledge in physiological science and human performance.",
  },
  {
    icon: "spa",
    title: "Holistic Wellness",
    text: "We view fitness through a wider lens, incorporating mental clarity, nutrition, and restorative practices.",
  },
  {
    icon: "biotech",
    title: "Cutting-edge Tech",
    text: "Leveraging the latest in fitness technology to track data and enhance every aspect of your routine.",
  },
];

export default function StoryMissionSection() {
  return (
    <section className="bg-[#f8f8f6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: motionEasings.standard }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif mb-4 text-4xl text-slate-900">Our Mission & Values</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#eec02b]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid gap-8 md:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: motionEasings.standard } }}
              className="group rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-[#eec02b] hover:shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: motionEasings.standard }}
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#eec02b]/10 transition-colors group-hover:bg-[#eec02b]"
              >
                <span className="material-icons text-[#eec02b] group-hover:text-[#221e10]">{value.icon}</span>
              </motion.div>
              <h3 className="mb-4 text-xl font-bold">{value.title}</h3>
              <p className="leading-relaxed text-slate-500">{value.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

