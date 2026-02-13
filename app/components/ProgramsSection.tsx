"use client";

import { motion } from "framer-motion";

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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProgramsSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#d4af35] hover:shadow-xl"
              key={program.title}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af35]/10 transition-colors duration-300 group-hover:bg-[#d4af35]">
                <span className="material-icons text-[#d4af35] transition-colors duration-300 group-hover:text-white">{program.icon}</span>
              </div>
              <h4 className="font-serif mb-3 text-xl">{program.title}</h4>
              <a
                className="flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#d4af35]"
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
