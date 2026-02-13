"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

const faqs = [
  {
    q: "Can I freeze my membership?",
    a: "Yes, all memberships can be frozen for up to 30 days per year for a nominal administrative fee of INR 500. Documentation for medical reasons may waive this fee.",
  },
  {
    q: "Are guest passes included in all plans?",
    a: "Guest passes are exclusively included in our Personal Training plan. Other members can purchase single-day guest passes at the front desk.",
  },
  {
    q: "Do you offer corporate discounts?",
    a: "Absolutely. We partner with several luxury corporate entities. Reach out to our concierge for a custom enterprise quote.",
  },
];

export default function PricingFaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="border-y border-neutral-100 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: motionEasings.standard }}
          className="font-serif mb-12 text-center text-3xl font-bold"
        >
          Frequently Asked Questions
        </motion.h2>

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
          className="space-y-6"
        >
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <motion.div
                key={item.q}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: motionEasings.standard } },
                }}
                className="border-b border-neutral-100 pb-6"
              >
                <button className="group flex w-full items-center justify-between text-left" onClick={() => setOpen(isOpen ? -1 : idx)} type="button">
                  <span className="font-serif text-lg font-bold">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: motionEasings.standard }}
                    className="material-icons text-[#e0b629]"
                  >
                    expand_more
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: motionEasings.standard }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 text-sm font-light leading-relaxed text-neutral-500">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

