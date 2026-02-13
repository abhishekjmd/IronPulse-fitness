"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVzScQmxc8Gz-zwbN9L_cV2jSm8mRB0I5KBkRUpGTbS8eladzVrvLg_vshUDvLPCyTWqdbbXdScw9lw4xQd-7xpuJYxhjMQ25QZNNI8aifO1XRTSeQk-ful5wgoX3Zu_pCfP_24Ywk3wxT6uYVNiw36fX0VezoR3juATZv1ICqV78JB2eC9z0bIN7jXrHO7BTdUu5Gc5jOQFUaeONPo9goOtjbGQIqAOusmGUK_yGT3IGSX_W_hiHG16q-Lbzp3wD4kcTrnRCXYao')",
        }}
      />
      <div className="hero-gradient absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#d4af35]">
            Established 2024
          </span>
          <h1 className="font-serif mb-8 text-6xl leading-[1.1] md:text-9xl">
            Train <span className="italic text-[#d4af35]">Strong.</span>
            <br />
            Live <span className="italic text-[#d4af35]">Better.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto mb-12 max-w-2xl text-lg font-light tracking-wide text-white/80 md:text-xl leading-relaxed"
        >
          Experience elite personal training and world-class facilities designed for your ultimate transformation.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-6 md:flex-row"
        >
          <Link
            href="/join"
            className="group relative overflow-hidden rounded-full bg-[#d4af35] px-12 py-5 font-bold uppercase tracking-widest text-white transition-all hover:shadow-[0_0_30px_rgba(212,175,53,0.3)]"
          >
            <span className="relative z-10">Start Transformation</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              style={{ mixBlendMode: "overlay" }}
            />
          </Link>
          <Link
            href="/programs"
            className="rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-12 py-5 font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
          >
            View Programs
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-[#d4af35] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
