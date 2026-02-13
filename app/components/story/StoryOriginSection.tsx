"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

export default function StoryOriginSection() {
  return (
    <section className="bg-[#f8f8f6] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: motionEasings.standard }}
          className="font-serif mb-12 text-3xl text-[#eec02b] md:text-4xl"
        >
          How IronPulse Fitness Began
        </motion.h2>

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
          className="space-y-6 text-lg leading-relaxed font-light text-slate-600"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } }
            }}
          >
            IronPulse was not born in a boardroom, but in a small garage in the industrial heart of the city. Founded by three elite athletes who were disillusioned by the commercialization of fitness, the mission was simple: restore the raw power of training while infusing it with the sophistication of luxury hospitality.
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } }
            }}
          >
            What started as an underground collective of serious lifters soon evolved into something greater. We realized that true fitness requires more than just high-end equipment. It requires an environment that demands respect, fosters community, and utilizes data-driven science to push human boundaries.
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } }
            }}
          >
            Today, IronPulse stands as a testament to that original vision. Every piece of equipment, every specialized program, and every square inch of our facility is meticulously curated to provide an unparalleled training experience for those who refuse to settle for average.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

