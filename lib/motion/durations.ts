export const motionDurations = {
  fast: 0.15,
  base: 0.25,
  slow: 0.35,
  page: 0.4,
} as const;

export type MotionDurationToken = keyof typeof motionDurations;

export const motionDurationVars = {
  fast: "var(--motion-fast)",
  base: "var(--motion-base)",
  slow: "var(--motion-slow)",
  page: "var(--motion-page)",
} as const;
