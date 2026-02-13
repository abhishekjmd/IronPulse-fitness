"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

const programs = [
  { icon: "fitness_center", title: "Weight Training" },
  { icon: "speed", title: "Fat Loss" },
  { icon: "favorite", title: "Cardio" },
  { icon: "person", title: "Personal Training" },
  { icon: "self_improvement", title: "Yoga" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } },
};

export default function ProgramsSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: motionEasings.standard }}
        >
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d4af35]">Our Specializations</h2>
          <h3 className="font-serif mb-16 text-5xl">Transform Your Body</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-5"
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: motionEasings.standard } }}
              className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af35]/10 transition-colors duration-300 group-hover:bg-[#d4af35]"
              >
                <span className="material-icons text-[#d4af35] transition-colors duration-300 group-hover:text-white">
                  {program.icon}
                </span>
              </motion.div>
              <h4 className="font-serif mb-3 text-xl">{program.title}</h4>
              <a
                className="flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#d4af35] transition-colors duration-200"
                href="#"
              >
                Learn More <span className="material-icons ml-1 text-xs">arrow_forward</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
