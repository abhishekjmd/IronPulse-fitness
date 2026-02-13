"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Group Classes",
    price: "$49",
    period: "/mo",
    features: ["Unlimited Yoga & Cardio", "Locker Access", "Community Events"],
    cta: "Get Started",
  },
  {
    name: "Personal Training",
    price: "$199",
    period: "/mo",
    features: [
      "1-on-1 Dedicated Coach",
      "Customized Nutrition Plan",
      "Monthly Body Scan",
      "Priority Support",
    ],
    cta: "Join Premium",
    featured: true,
  },
  {
    name: "General Training",
    price: "$89",
    period: "/mo",
    features: ["Full Gym Access", "Initial Assessment", "Strength Floor Access"],
    cta: "Get Started",
  },
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

export default function PricingSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: motionEasings.standard }}
          className="font-serif mb-16 text-center text-5xl"
        >
          Membership Tiers
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-3"
        >
          {plans.map((plan) => {
            const baseClasses = plan.featured
              ? "relative rounded-2xl border-2 border-[#d4af35] bg-[#0a0a0a] p-12 text-center text-white z-10"
              : "rounded-2xl border-2 border-neutral-100 bg-white p-10 text-center";

            return (
              <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: plan.featured ? 0.98 : 1 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.35, ease: motionEasings.standard }
                  },
                }}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: motionEasings.standard } }}
                className={baseClasses}
              >
                {plan.featured && (
                  <>
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-[#d4af35] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      Most Popular
                    </span>
                    <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(212,175,53,0.15)] pointer-events-none" />
                  </>
                )}

                <h4 className="font-serif mb-2 text-2xl">{plan.name}</h4>

                <div className={`mb-6 text-4xl font-bold ${plan.featured ? "text-[#d4af35]" : "text-black"}`}>
                  {plan.price}
                  <span className="text-lg font-normal text-neutral-400">{plan.period}</span>
                </div>

                <ul className={`mb-10 space-y-4 text-left ${plan.featured ? "text-neutral-300" : "text-neutral-600"}`}>
                  {plan.features.map((feature) => (
                    <li className="flex items-center" key={feature}>
                      <span className="material-icons mr-2 text-sm text-[#d4af35]">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: motionEasings.standard }}
                >
                  <a
                    className={`block w-full rounded py-3 font-bold uppercase tracking-widest transition-colors duration-200 ${plan.featured
                        ? "bg-[#d4af35] text-white hover:bg-white hover:text-[#d4af35]"
                        : "border-2 border-black hover:bg-black hover:text-white"
                      }`}
                    href="#"
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
