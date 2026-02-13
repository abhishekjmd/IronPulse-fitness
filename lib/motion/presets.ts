import type { Transition } from "framer-motion";
import { motionDurations } from "./durations";
import { motionEasings } from "./easings";

export const FADE_IN: Transition = {
  duration: motionDurations.base,
  ease: motionEasings.standard,
};

export const FADE_UP: Transition = {
  duration: motionDurations.slow,
  ease: motionEasings.standard,
};

export const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: {
    duration: motionDurations.page,
    ease: motionEasings.standard,
  } satisfies Transition,
} as const;

/**
 * Standard stagger for children containers
 */
export const STAGGER_CHILDREN = (stagger = 0.06): Transition => ({
  staggerChildren: stagger,
});

export const LIST_STAGGER_SECONDS = 0.06;
