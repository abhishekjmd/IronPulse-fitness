"use client";

import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

export default function HeroSection() {
  const headline = ["Train Strong.", "Live Better."];

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: motionEasings.standard }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVzScQmxc8Gz-zwbN9L_cV2jSm8mRB0I5KBkRUpGTbS8eladzVrvLg_vshUDvLPCyTWqdbbXdScw9lw4xQd-7xpuJYxhjMQ25QZNNI8aifO1XRTSeQk-ful5wgoX3Zu_pCfP_24Ywk3wxT6uYVNiw36fX0VezoR3juATZv1ICqV78JB2eC9z0bIN7jXrHO7BTdUu5Gc5jOQFUaeONPo9goOtjbGQIqAOusmGUK_yGT3IGSX_W_hiHG16q-Lbzp3wD4kcTrnRCXYao')",
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 max-w-4xl px-4 text-center text-white">
        <h1 className="font-serif mb-6 text-6xl leading-tight md:text-8xl flex flex-col items-center">
          {headline.map((line, i) => (
            <span key={i} className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.06,
                  ease: motionEasings.standard
                }}
                className="inline-block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25, ease: motionEasings.standard }}
          className="mb-10 text-xl font-light tracking-wide text-white/90 md:text-2xl"
        >
          Experience elite personal training and world-class facilities designed for your ultimate transformation.
        </motion.p>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.35, ease: motionEasings.standard }}
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block overflow-hidden rounded-full bg-[#d4af35] px-10 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af35]/20 focus:outline-none focus:ring-2 focus:ring-[#d4af35] focus:ring-offset-2"
              href="#"
            >
              <span className="relative z-10">Book Free Trial</span>
              <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
              <style jsx>{`
                a:hover span { color: #d4af35; }
              `}</style>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.43, ease: motionEasings.standard }}
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block rounded-full border-2 border-white px-10 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              href="#"
            >
              WhatsApp Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
