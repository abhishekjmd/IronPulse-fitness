"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { FADE_IN, LIST_STAGGER_SECONDS } from "@/lib/motion/presets";
import { getStaggerDelay } from "@/lib/motion/utilities";

const scheduleData = [
  { time: "06:00 AM", activity: "High-Intensity Interval Training", trainer: "Alex Rivera", category: "Cardio" },
  { time: "08:00 AM", activity: "Advanced Olympic Weightlifting", trainer: "Sarah Chen", category: "Strength" },
  { time: "10:00 AM", activity: "Restorative Vinyasa Flow", trainer: "Elena Rossi", category: "Yoga" },
  { time: "04:00 PM", activity: "Powerlifting Foundations", trainer: "Marcus Thorne", category: "Strength" },
  { time: "06:00 PM", activity: "Elite Boxing & Conditioning", trainer: "Dante Silva", category: "Combat" },
  { time: "07:30 PM", activity: "Metabolic Conditioning", trainer: "Alex Rivera", category: "Cardio" },
];

export default function SchedulePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#f8f7f6] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={shouldReduceMotion ? { duration: 0 } : FADE_IN}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#d4af35]">
            Weekly Routine
          </span>
          <h1 className="mb-6 font-serif text-5xl md:text-7xl">
            Class <span className="italic">Schedule</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm uppercase tracking-widest text-neutral-500">
            Plan your transformation with our elite session timetable.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {scheduleData.map((item, index) => (
            <motion.div
              key={item.activity}
              className="group flex flex-col items-center justify-between rounded-2xl border border-neutral-100 bg-white p-8 transition-[transform,opacity] motion-base ease-standard hover:border-[#d4af35]/30 hover:shadow-xl hover:shadow-[#d4af35]/5 md:flex-row"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      ...FADE_IN,
                      delay: getStaggerDelay(index, LIST_STAGGER_SECONDS),
                    }
              }
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                <div className="flex h-20 w-32 flex-col items-center justify-center border-r border-neutral-100 md:pr-8">
                  <span className="text-sm font-bold tracking-tighter text-[#d4af35]">{item.time}</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400">Duration: 60m</span>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold transition-colors motion-base ease-standard group-hover:text-[#d4af35]">
                    {item.activity}
                  </h3>
                  <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> Live Session
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> Main Arena
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-6 md:mt-0">
                <div className="hidden text-right md:block">
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-neutral-400">Trainer</p>
                  <p className="text-sm font-bold">{item.trainer}</p>
                </div>
                <button className="rounded-full border border-neutral-900 px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-[transform,opacity] motion-base ease-standard hover:bg-neutral-900 hover:text-white">
                  Book Slot
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
