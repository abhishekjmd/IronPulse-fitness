"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PAGE_TRANSITION } from "@/lib/motion/presets";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        animate={shouldReduceMotion ? { opacity: 1, y: 0 } : PAGE_TRANSITION.animate}
        className="page-transition"
        exit={shouldReduceMotion ? { opacity: 1, y: 0 } : PAGE_TRANSITION.exit}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : PAGE_TRANSITION.initial}
        transition={shouldReduceMotion ? { duration: 0 } : PAGE_TRANSITION.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

