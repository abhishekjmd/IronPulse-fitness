"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVzScQmxc8Gz-zwbN9L_cV2jSm8mRB0I5KBkRUpGTbS8eladzVrvLg_vshUDvLPCyTWqdbbXdScw9lw4xQd-7xpuJYxhjMQ25QZNNI8aifO1XRTSeQk-ful5wgoX3Zu_pCfP_24Ywk3wxT6uYVNiw36fX0VezoR3juATZv1ICqV78JB2eC9z0bIN7jXrHO7BTdUu5Gc5jOQFUaeONPo9goOtjbGQIqAOusmGUK_yGT3IGSX_W_hiHG16q-Lbzp3wD4kcTrnRCXYao')",
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 max-w-4xl px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif mb-6 text-6xl leading-tight md:text-8xl"
        >
          Train Strong.
          <br />
          Live Better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-10 text-xl font-light tracking-wide text-white/90 md:text-2xl"
        >
          Experience elite personal training and world-class facilities designed for your ultimate transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <a
            className="group relative overflow-hidden rounded-full bg-[#d4af35] px-10 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af35]/20 active:scale-95"
            href="#"
          >
            <span className="relative z-10">Book Free Trial</span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
            <style jsx>{`
              a:hover span { color: #d4af35; }
            `}</style>
          </a>
          <a
            className="rounded-full border-2 border-white px-10 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
            href="#"
          >
            WhatsApp Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
