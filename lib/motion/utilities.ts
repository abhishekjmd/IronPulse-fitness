import { LIST_STAGGER_SECONDS } from "./presets";

export const getStaggerDelay = (index: number, step = LIST_STAGGER_SECONDS) => {
  return index * step;
};
