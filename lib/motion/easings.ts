export const motionEasings = {
  standard: [0.16, 1, 0.3, 1] as const,
  in: "easeIn",
  out: "easeOut",
  inOut: "easeInOut",
} as const;

export const motionEasingVars = {
  standard: "var(--ease-standard)",
  in: "var(--ease-in)",
  out: "var(--ease-out)",
  inOut: "var(--ease-in-out)",
} as const;
