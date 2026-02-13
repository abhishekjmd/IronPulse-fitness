import type { Transition } from "framer-motion";
import { motionDurations } from "./durations";
import { motionEasings } from "./easings";

export const FADE_IN: Transition = {
  duration: motionDurations.base,
  ease: motionEasings.standard,
};

export const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: {
    duration: motionDurations.page,
    ease: motionEasings.standard,
  } satisfies Transition,
} as const;

export const MODAL_TRANSITION = {
  backdrop: {
    duration: motionDurations.base,
    ease: motionEasings.standard,
  } satisfies Transition,
  enter: {
    duration: motionDurations.base,
    ease: motionEasings.standard,
  } satisfies Transition,
  exit: {
    duration: motionDurations.fast,
    ease: motionEasings.inOut,
  } satisfies Transition,
} as const;

export const LIST_STAGGER_SECONDS = 0.03;
